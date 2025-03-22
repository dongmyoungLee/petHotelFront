import Image from "next/image";
import mainLogo from "@/assets/main-logo.webp";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import SignupFormSubmit from "@/components/auth/SignupFormSubmit";

export default function HotelSignupHome() {
    return (
        <>
            <header className="section-center-layout mb-4">
                <Image className="w-full transform scale-90" src={mainLogo} alt="애견호텔 로고" priority />
            </header>

            <h1 className="mb-6 text-4xl md:text-5xl font-light tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600 drop-shadow-lg">
                ADMIN
            </h1>
            <section className="section-center-layout flex flex-col">
                <form>
                    <fieldset className="border-0 p-0">
                        <legend className="sr-only">호텔 정보 입력</legend>
                        <div className="w-full grid items-center gap-1.5 mb-4">
                            <Label className="text-gray-600 text-xs font-semibold" htmlFor="email">이메일</Label>
                            <Input className="input-primary px-3 py-6" autoComplete="username" name="email" id="email" placeholder="이메일을 입력해주세요." />
                        </div>

                        <div className="w-full grid items-center gap-1.5 mb-4">
                            <Label className="text-gray-600 text-xs font-semibold" htmlFor="password">비밀번호</Label>
                            <Input className="input-primary px-3 py-6" type="password" autoComplete="new-password" name="password" id="password" placeholder="비밀번호를 입력해주세요." />
                        </div>

                        <div className="w-full grid items-center gap-1.5 mb-4">
                            <Label className="text-gray-600 text-xs font-semibold" htmlFor="passwordCheck">비밀번호 확인</Label>
                            <Input className="input-primary px-3 py-6" type="password" autoComplete="new-password" name="passwordCheck" id="passwordCheck" placeholder="비밀번호를 입력해주세요." />
                        </div>

                        <div className="w-full grid items-center gap-1.5 mb-4">
                            <Label className="text-gray-600 text-xs font-semibold" htmlFor="name">성함</Label>
                            <Input className="input-primary px-3 py-6" type="text" autoComplete="username" name="name" id="name" placeholder="성함을 입력해주세요." />
                        </div>

                        <div className="w-full grid items-center gap-1.5 mb-4">
                            <Label className="text-gray-600 text-xs font-semibold" htmlFor="phone">연락처</Label>
                            <Input className="input-primary px-3 py-6" type="text" name="phone" id="phone" placeholder="연락처를 입력해주세요." />
                        </div>

                        <div className="w-full grid items-center gap-1.5 mb-6">
                            <Label className="text-gray-600 text-xs font-semibold" htmlFor="address">주소</Label>
                            <Input className="input-primary px-3 py-6" type="text" name="address" id="address" placeholder="주소를 입력해주세요." />
                        </div>
                    </fieldset>

                    <div className="w-full flex flex-col mb-6">
                        <SignupFormSubmit />
                    </div>
                </form>
            </section>
        </>
    );

}