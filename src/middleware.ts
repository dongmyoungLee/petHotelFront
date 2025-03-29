import {NextRequest, NextResponse} from "next/server";
import {RequestCookies} from "next/dist/compiled/@edge-runtime/cookies";
import {parseToken, refresh} from "@/app/api/auth/user/auth";
import {TokenResponse, UserAuthority} from "@/types/auth/user/authType";
import isValidToken from "@/lib/utils/isValidToken";
import {AxiosResponse} from "axios";

export async function middleware(req: NextRequest) {
    const { accessToken, refreshToken } = await getTokens(req);
    // 쿠키 없으면 홈으로..
    if (!accessToken?.value || !refreshToken?.value) {
        return NextResponse.redirect(new URL('/', req.url));
    }

    // 프론트에서 먼저 토큰 유효성 검증
    const { isAccessTokenValid, isRefreshTokenValid } = isValidToken({
        accesstoken: accessToken.value,
        refreshtoken: refreshToken.value,
    })

    // AccessToken 유효성 검증 성공
    if (isAccessTokenValid) {

        // adminpage 경로에 대한 추가 검사
        if (req.nextUrl.pathname.startsWith('/dashboard')) {
            return await checkRole(req, accessToken.value);
        }

        return NextResponse.next();
    }

    // AccessToken 만료 -> RefreshToken으로 갱신 시도
    const refreshData: TokenResponse|null = await tryRefreshToken(refreshToken.value);

    // RefreshToken 만료 -> 로그아웃 및 쿠키 삭제
    if (!refreshData) {
        const res = NextResponse.redirect(new URL('/', req.url));

        // 쿠키 삭제
        res.cookies.delete("access_token");
        res.cookies.delete("refresh_token");

        return res;
    }

    // 갱신 성공 -> 새로운 AccessToken 설정
    const res = NextResponse.next();

    if (refreshData.accessToken) {
        res.cookies.set("access_token", refreshData.accessToken, {
            httpOnly: true,
            sameSite: "Lax" as boolean | "lax" | "strict" | "none" | undefined,
            path: "/",
            secure: false,
        });
    }

    return res;
}

async function getTokens(req: NextRequest) {
    const cookies:RequestCookies = req.cookies;  // 바로 쿠키 객체에 접근
    return {
        accessToken: cookies.get("access_token"),
        refreshToken: cookies.get("refresh_token")
    };
}

async function tryRefreshToken(refreshToken: string): Promise<TokenResponse | null> {
    let response: TokenResponse|null = null;

    try {
        response =  await refresh(refreshToken);
    } catch (error){
        console.log(error)
    }

    return response;
}

async function checkRole(req: NextRequest, accessToken: string) {

    let tokenResponse:UserAuthority;

    try {
        tokenResponse = await parseToken(accessToken);
    } catch (error) {
        return NextResponse.redirect(new URL('/', req.url));
    }

    if (tokenResponse.role === "CUSTOMER") {
        // 토큰 파싱 후 인가 확인 후 리다이렉트
        return NextResponse.redirect(new URL('/', req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/dashboard/:path*",
    ],
};