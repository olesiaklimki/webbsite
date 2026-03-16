import Link from "next/link";
import Image from "next/image";

export default function SiteFooter() {
    return (
        <footer className="text-footer-text">
            <div className="bg-[#F1F5F9] py-10 flex
            md:flex-row flex-col justify-center items-center gap-13 px-8">
                <p className="md:order-first order-last text-gray-500">© 2023-2024 ООО “KeyToDrive”</p>
                <p className="text-center text-gray-500">Мы предлагаем аренду автомобилей, идеально подходящих на любой вкус</p>
                <div className="flex flex-row gap-6
                md:order-last order-first">
                    <Link href="/website/app/car-park/page.tsx" className="text-gray-500">Автопарк</Link>
                    <Link href="#" className="text-gray-500">Контакты</Link>
                </div>
            </div>
            <div className="container mx-auto flex flex-row justify-center gap-4 mt-4
            md:hidden">
                <Link href="#" className="flex flex-col items-center text-gray-500">
                    <Image src="/footer/home.png" alt="home" width={24} height={24}/>
                    <p>Главная</p>
                </Link>
                <Link href="#" className="flex flex-col items-center text-gray-500">
                    <Image src="/footer/truck.png" alt="logo"width={24} height={24}/>
                    <p>Автопарк</p>
                    </Link>
                <Link href="#" className="flex flex-col items-center text-gray-500">
                    <Image src="/footer/navigation.png" alt="logo"width={24} height={24}/>
                    <p>Контакты</p>
                </Link>
                <Link href="#" className="flex flex-col items-center text-gray-500">
                    <Image src="/footer/user.png" alt="logo"width={24} height={24}/>
                    <p>Профиль</p>
                </Link>
            </div>
        </footer>
    )
}