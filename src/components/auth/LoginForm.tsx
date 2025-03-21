import Image from "next/image";
import mainLogo from "@/assets/main-logo.webp";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import KaKaoIcon from "@/components/icons/KaKaoIcon";
import GoogleIcon from "@/components/icons/GoogleIcon";
import naverLogo from "@/assets/icon/naver-logo.webp";
import AppleIcon from "@/components/icons/AppleIcon";

export default function LoginForm(props) {
    return (
        <main className='flex flex-col  items-center w-full h-screen pt-[3vh]'>

            <section className="section-center-layout mb-4">
                <Image className="w-full transform scale-90" src={mainLogo} alt="애견호텔 로고" priority />
            </section>

            <section className="mb-6">
                <h1 className="text-4xl md:text-5xl font-light tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600 drop-shadow-lg">
                    PETHOTEL
                </h1>
            </section>

            <section className="section-center-layout flex flex-col">
                {/*<form action={handleSubmit}>*/}
                <form onSubmit={props.loginHandler}>
                    <div className="w-full grid items-center gap-1.5 mb-4">
                        <Label className="text-gray-600 text-xs font-semibold" htmlFor="email">이메일</Label>
                        <Input className="input-primary px-3 py-6" name="email" type="email" id="email" placeholder="이메일을 입력해주세요." />
                    </div>

                    <div className="w-full grid items-center gap-1.5 mb-6">
                        <Label className="text-gray-600 text-xs font-semibold" htmlFor="password">비밀번호</Label>
                        <Input className="input-primary px-3 py-6" type="password" name="password" id="password" placeholder="이메일을 입력해주세요." />
                    </div>

                    <div className="w-full flex flex-col mb-6">
                        <Button type="submit" className="w-full py-6 cursor-pointer text-gray-100">로그인</Button>
                    </div>

                    <div className="w-full flex items-center gap-6 mb-6">
                        <div className="h-px flex-3 bg-[#eaedf4]"></div>
                        <div className="">
                            <p className="text-[#5c667b] flex-3">소셜 계정으로 간편 로그인</p>
                        </div>
                        <div className="h-px flex-3 bg-[#eaedf4]"></div>
                    </div>

                    <div className="w-full flex justify-center gap-5">
                        <Button className="bg-kakao sns_btn_layout" asChild>
                            <Link href="/kakao">
                                <KaKaoIcon className="size-5" />
                            </Link>
                        </Button>
                        <Button className="bg-google sns_btn_layout" asChild>
                            <Link href="/google">
                                <GoogleIcon className="size-5" />
                            </Link>
                        </Button>
                        <div className="sns_btn_layout bg-primary relative">
                            <Image fill src={naverLogo} sizes="100%" alt="네이버로그인로고" priority />
                        </div>
                        <Button className="bg-apple sns_btn_layout" asChild>
                            <Link href="/apple">
                                <AppleIcon className="size-5 fill-white" />
                            </Link>
                        </Button>
                    </div>
                </form>
            </section>
        </main>
    );
}