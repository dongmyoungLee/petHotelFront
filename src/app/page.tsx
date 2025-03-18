import mainLogo4 from '@/assets/2402232.webp';
import Image from "next/image";

export default function Home() {
  return (
      <main>
          <div>
              <Image src={mainLogo4} alt="Company Logo" priority />
          </div>
      </main>
  );
}
