import {cookies} from "next/headers";

export default async function TestPage() {
    const cookieStore = await cookies();
    const token = cookieStore.get("access_token")?.value;




    return (
      <>
          <div>
              <h1>토큰</h1>
              {token}
          </div>
      </>
    );
}