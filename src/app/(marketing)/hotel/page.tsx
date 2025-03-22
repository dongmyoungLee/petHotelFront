import LoginCommonTemplate from "@/components/auth/LoginCommonTemplage";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import LoginFormSubmit from "@/components/auth/LoginFormSubmit";
import Link from "next/link";
import LoginForm from "@/components/auth/LoginForm";

export default function HotelLoginHome() {
    return (
        <>
            <LoginCommonTemplate isHotel={true} />

            <section className="section-center-layout flex flex-col">
                <form >
                    <LoginForm isHotel={true} />
                </form>
            </section>
        </>
    );

}