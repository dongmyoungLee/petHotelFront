import mainLogo2 from '@/assets/main-logo.webp';
import Image from "next/image";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import Link from "next/link";

export default function Home() {


  return (
      <main className='flex flex-col  items-center w-full h-screen pt-[5vh]'>

          <section className="section-center-layout mb-4">
              <Image className="w-full transform scale-90" src={mainLogo2} alt="애견호텔 로고" priority />
          </section>

          <section className="mb-6">
              <h1 className="text-4xl md:text-5xl font-light tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600 drop-shadow-lg">
                  PETHOTEL
              </h1>
          </section>

          <section className="section-center-layout flex flex-col">
              <form>
                  <div className="w-full grid items-center gap-1.5 mb-4">
                      <Label className="text-gray-600 text-xs font-semibold" htmlFor="email">이메일</Label>
                      <Input className="w-full px-3 py-6 text-sm border-gray-500 focus-visible:ring-blue-500 focus-visible:ring-1" type="email" id="email" placeholder="이메일을 입력해주세요." />
                  </div>

                  <div className="w-full grid items-center gap-1.5 mb-6">
                      <Label className="text-gray-600 text-xs font-semibold" htmlFor="email">비밀번호</Label>
                      <Input className="w-full px-3 py-6 text-sm border-gray-500 focus-visible:ring-blue-500 focus-visible:ring-1" type="email" id="email" placeholder="이메일을 입력해주세요." />
                  </div>

                  <div className="w-full flex flex-col mb-6">
                      <Button className="w-full py-6 cursor-pointer text-gray-100">로그인</Button>
                  </div>

                  <div className="w-full flex gap-2">
                      <Button className="bg-kakao sns_btn_layout" asChild>
                          <Link href="/login"></Link>
                      </Button>
                      <Button className="bg-google sns_btn_layout" asChild>
                          <Link href="/login"></Link>
                      </Button>
                      <Button className="bg-naver sns_btn_layout" asChild>
                          <Link href="/login"></Link>
                      </Button>
                      <Button className="bg-apple sns_btn_layout" asChild>
                          <Link href="/login"></Link>
                      </Button>
                  </div>
              </form>
          </section>
      </main>
  );
}
