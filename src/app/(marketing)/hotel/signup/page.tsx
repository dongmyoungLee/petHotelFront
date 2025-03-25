'use client';
import Image from "next/image";
import mainLogo from "@/assets/main-logo.webp";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import SignupFormSubmit from "@/components/auth/SignupFormSubmit";
import {useToast} from "@/hooks/useToast";
import {useActionState, useEffect, useState} from "react";
import {hotelSignupAction} from "@/lib/actions/hotel/hotel-signup-action";

export default function HotelSignupHome() {
        const { addToast } = useToast();
        const [state, formAction, pending] = useActionState(hotelSignupAction, { message: null, type: null });
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [passwordCheck, setPasswordCheck] = useState('');
        const [name, setName] = useState('');
        const [phone, setPhone] = useState('');

        const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            setEmail(e.target.value);
        };

        const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            setPassword(e.target.value);
        };

        const handlePasswordCheckChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            setPasswordCheck(e.target.value);
        };

        const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            setName(e.target.value);
        };

        const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            setPhone(e.target.value);
        };

        useEffect(() => {
            if (state.message !== null) {
                addToast({message : state.message, type : state.type});
            }

        }, [state]);




        return (
            <>
                <header className="section-center-layout mb-4">
                    <Image className="w-full transform scale-90" src={mainLogo} alt="애견호텔 로고" priority />
                </header>

                <h1 className="mb-6 text-4xl md:text-5xl font-light tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600 drop-shadow-lg">
                    ADMIN
                </h1>
                <section className="section-center-layout flex flex-col">
                    <form action={formAction}>
                        <fieldset className="border-0 p-0">
                            <legend className="sr-only">호텔 정보 입력</legend>
                            <div className="w-full grid items-center gap-1.5 mb-4">
                                <Label className="text-gray-600 text-xs font-semibold" htmlFor="email">호텔 이메일</Label>
                                <Input
                                    className="input-primary px-3 py-6"
                                    autoComplete="username"
                                    name="email"
                                    id="email"
                                    placeholder="이메일을 입력해주세요."
                                    value={email}
                                    onChange={handleEmailChange}
                                />
                            </div>

                            <div className="w-full grid items-center gap-1.5 mb-4">
                                <Label className="text-gray-600 text-xs font-semibold" htmlFor="password">비밀번호</Label>
                                <Input
                                    className="input-primary px-3 py-6"
                                    type="password"
                                    autoComplete="new-password"
                                    name="password"
                                    id="password"
                                    placeholder="비밀번호를 입력해주세요."
                                    value={password}
                                    onChange={handlePasswordChange}
                                />
                            </div>

                            <div className="w-full grid items-center gap-1.5 mb-4">
                                <Label className="text-gray-600 text-xs font-semibold" htmlFor="passwordCheck">비밀번호 확인</Label>
                                <Input
                                    className="input-primary px-3 py-6"
                                    type="password"
                                    autoComplete="new-password"
                                    name="passwordCheck"
                                    id="passwordCheck"
                                    placeholder="비밀번호를 입력해주세요."
                                    value={passwordCheck}
                                    onChange={handlePasswordCheckChange}
                                />
                            </div>

                            <div className="w-full grid items-center gap-1.5 mb-4">
                                <Label className="text-gray-600 text-xs font-semibold" htmlFor="name">호텔 이름</Label>
                                <Input
                                    className="input-primary px-3 py-6"
                                    type="text"
                                    autoComplete="username"
                                    name="name"
                                    id="name"
                                    placeholder="성함을 입력해주세요."
                                    value={name}
                                    onChange={handleNameChange}
                                />
                            </div>

                            <div className="w-full grid items-center gap-1.5 mb-4">
                                <Label className="text-gray-600 text-xs font-semibold" htmlFor="phone">호텔 연락처</Label>
                                <Input
                                    className="input-primary px-3 py-6"
                                    type="text"
                                    name="phone"
                                    id="phone"
                                    placeholder="연락처를 입력해주세요."
                                    value={phone}
                                    onChange={handlePhoneChange}
                                />
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