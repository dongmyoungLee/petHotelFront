'use client';

import {logout, testMethod} from "@/api/auth/auth";

export default function TestPage() {

    const testMehotds = () => {
        testMethod().then(res => console.log(res)).catch((err) => console.log(err))
    }

    const testMehotds2 = () => {
        logout().then((res) => {console.log(res)}).catch(err => console.error(err))
    }
    

    return (
      <>
          <button onClick={testMehotds}>쿠키</button>
          <button onClick={testMehotds2}>로그아웃</button>
      </>
    );
}