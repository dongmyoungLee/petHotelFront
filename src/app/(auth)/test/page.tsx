import {logout, testMethod} from "@/api/auth/auth";
import { cookies } from "next/headers";

export default function TestPage() {
    const cookieStore = cookies();
    const token = cookieStore.get("access_token")?.value;

    testMethod(token).then(res => console.log(res)).catch((err) => console.log(err))


    return (
      <>
          <div>
              <h1>토큰</h1>
              {token}
          </div>
      </>
    );
}