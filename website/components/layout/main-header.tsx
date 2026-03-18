import Link from "next/link";
import Image from "next/image";

export default function MainHeader() {
    return (
        <header className="mt-5 flex flex-row px-8 pb-25
        md:mx-12">
            <nav className="container mx-auto w-full items-center flex space-x-6">
                <div className="flex flex-row items-center gap-1 mr-12">
                    <Image src="/header/logo.png" alt="logo" width={40} height={40}/>
                    <p className="font-bold text-xl hidden lg:block">KeyToDrive</p>
                </div>
                <Link href="/website/app/avto-park/page.tsx" className="hidden
                md:block">Автопарк</Link>
                <Link href="#" className="hidden
                md:block">Контакты</Link>
            </nav>
            <nav className="container mx-auto items-center justify-end flex space-x-12 ">
                <div className="flex flex-row items-center gap-2">
                    <Image src="/images/phone.png" alt="logo" width={24} height={24}/>
                    <p className="font-medium text-blue-600 text-nowrap">7 (999) 999 99 99</p>
                </div>
                <button className="bg-[#F5F5F5] hover:bg-[#DCDCDC] px-4 py-2 rounded-lg hidden
                md:block">Войти</button>
            </nav>
        </header>
    )
}