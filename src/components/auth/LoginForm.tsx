'use client';
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import LoginFormSubmit from "@/components/auth/LoginFormSubmit";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import KaKaoIcon from "@/components/icons/KaKaoIcon";
import GoogleIcon from "@/components/icons/GoogleIcon";
import Image from "next/image";
import naverLogo from "@/assets/icon/naver-logo.webp";
import AppleIcon from "@/components/icons/AppleIcon";

export default function LoginForm({ isHotel = false }) {

    return (
      <>
          <fieldset className="border-0 p-0">
              <legend className="sr-only">{isHotel ? '호텔 로그인 정보 입력' : '로그인 정보 입력'}</legend>
              <div className="w-full grid items-center gap-1.5 mb-4">
                  <Label className="text-gray-600 text-xs font-semibold" htmlFor="email">이메일</Label>
                  <Input className="input-primary px-3 py-6" name="email"  id="email" placeholder="이메일을 입력해주세요." />
              </div>

              <div className="w-full grid items-center gap-1.5 mb-6">
                  <Label className="text-gray-600 text-xs font-semibold" htmlFor="password">비밀번호</Label>
                  <Input className="input-primary px-3 py-6" type="password" name="password" id="password" placeholder="비밀번호를 입력해주세요." />
              </div>
          </fieldset>

          <div className="w-full flex flex-col mb-6">
              <LoginFormSubmit />
          </div>
          {!isHotel
              ?
              <div className="w-full mb-6">
                  <div className="w-full flex justify-center">
                      <Link href="/user" className="flex-1 flex justify-center items-center">
                          <span className="text-[#5c667b] cursor-pointer">회원가입</span>
                      </Link>
                      <div className="w-[1px] h-5 bg-[#5c667b] mx-2"></div>
                      <Link href="/test" className="flex-1 flex justify-center items-center">
                          <span className="text-[#5c667b] cursor-pointer">회원찾기</span>
                      </Link>
                      <div className="w-[1px] h-5 bg-[#5c667b] mx-2"></div>
                      <Link href="/hotel" className="flex-1 flex justify-center items-center">
                          <span className="text-[#5c667b] cursor-pointer">호텔 로그인</span>
                      </Link>
                  </div>
              </div>
              :
              <div className="w-full mb-6">
                  <div className="w-full flex justify-center">
                      <Link href="/hotel/signup" className="flex-1 flex justify-center items-center">
                          <span className="text-[#5c667b] italic cursor-pointer">호텔 입점을 원하시나요 ?</span>
                      </Link>
                  </div>
              </div>
          }

          {!isHotel && <>
              <div className="w-full flex items-center gap-6 mb-6">
                  <div className="h-px flex-3 bg-[#eaedf4]"></div>
                  <div className="">
                      <p className="text-[#5c667b] flex-3">소셜 계정으로 간편 로그인</p>
                  </div>
                  <div className="h-px flex-3 bg-[#eaedf4]"></div>
              </div>

              <div className="w-full flex justify-center gap-5 mb-6">
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
          </>}
      </>
    );
}