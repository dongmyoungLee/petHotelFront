const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

// export const dynamic: string = 'force-dynamic';

export async function fetchData<T>(url: string, options?: RequestInit): Promise<T> {
    const response = await fetch(`${API_BASE_URL}${url}`, {
        ...options,
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
            ...(options?.headers || {}),
        },
    });

    const text: string = await response.text();

    console.log(response)

    //  응답이 JSON인 경우에만 JSON으로 파싱
    if (response.ok) {
        try {
            return JSON.parse(text);
        } catch (error) {
            throw new Error('서버 응답이 JSON 형식이 아닙니다.');
        }
    } else {
        throw new Error(text || '서버 오류 발생');
    }
}
