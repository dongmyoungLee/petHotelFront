import SignupForm from "@/components/auth/SignupForm";
import Image from "next/image";
import mainLogo from "@/assets/main-logo.webp";

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
                    <SignupForm isHotel={true} />
                </form>
            </section>
        </>
    );

}