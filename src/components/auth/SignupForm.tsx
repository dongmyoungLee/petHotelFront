import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import SignupFormSubmit from "@/components/auth/SignupFormSubmit";

export default function SignupForm({ isHotel = false }) {
    return (
        <>
            <fieldset className="border-0 p-0">
                <legend className="sr-only">{isHotel ? "호텔 정보 입력" : "회원가입 정보 입력"}</legend>
                <div className="w-full grid items-center gap-1.5 mb-4">
                    <Label className="text-gray-600 text-xs font-semibold" htmlFor="email">이메일</Label>
                    <Input className="input-primary px-3 py-6" name="email" id="email" placeholder="이메일을 입력해주세요." />
                </div>

                <div className="w-full grid items-center gap-1.5 mb-4">
                    <Label className="text-gray-600 text-xs font-semibold" htmlFor="password">비밀번호</Label>
                    <Input className="input-primary px-3 py-6" type="password" name="password" id="password" placeholder="비밀번호를 입력해주세요." />
                </div>

                <div className="w-full grid items-center gap-1.5 mb-4">
                    <Label className="text-gray-600 text-xs font-semibold" htmlFor="passwordCheck">비밀번호 확인</Label>
                    <Input className="input-primary px-3 py-6" type="password" name="passwordCheck" id="passwordCheck" placeholder="비밀번호를 입력해주세요." />
                </div>

                <div className="w-full grid items-center gap-1.5 mb-4">
                    <Label className="text-gray-600 text-xs font-semibold" htmlFor="name">성함</Label>
                    <Input className="input-primary px-3 py-6" type="text" name="name" id="name" placeholder="성함을 입력해주세요." />
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

        </>
    );
}