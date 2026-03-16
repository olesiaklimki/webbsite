import Image from "next/image";
import ProductCard from "@/components/layout/ui/product-card";
import Link from "next/link";

export default function CarPark() {
  return (
    <div className="">
    <header className="mt-5 flex flex-row px-8 pb-25
        md:mx-12">
            <nav className="container mx-auto w-full items-center flex space-x-6">
                <div className="flex flex-row items-center gap-1 mr-12">
                    <Image src="/header/logo.png" alt="logo" width={40} height={40}/>
                    <p className="font-bold text-xl hidden lg:block">KeyToDrive</p>
                </div>
                <Link href="#" className="hidden
                md:block">Автопарк</Link>
                <Link href="#" className="hidden
                md:block">Контакты</Link>
            </nav>
            <nav className="container mx-auto items-center justify-end flex space-x-12 ">
                <div className="flex flex-row items-center gap-2">
                    <Image src="/header/phone.png" alt="logo" width={24} height={24}/>
                    <p className="font-medium text-blue-600 text-nowrap">7 (999) 999 99 99</p>
                </div>
                <button className="bg-[#F5F5F5] hover:bg-[#DCDCDC] px-4 py-2 rounded-lg hidden
                md:block">Войти</button>
                <button className="
          block           {/* По умолчанию скрыто (на ПК) */}
          sm:hidden         {/* Телефоны: показываем */}
          text-2xl
        ">
          ☰
        </button>
            </nav>
        </header>
    <main className="flex flex-col">
            <div className="w-full bg-[#F1F5F9] px-0 md:px-12 md:py-20 py-15 flex mb-17">
                <div className="container mx-auto flex flex-col gap-10">
                  <p className="font-bold text-5xl text-nowrap flex justify-center md:justify-start mb-5">Автопарк</p>
                  <div className="lg:grid lg:grid-cols-4 flex flex-row gap-6 mx-2 md:mx-0 overflow-x-auto md:overflow-hidden">
                    <div className="w-318">
                      <ProductCard/>
                    </div>
                    <div className="w-318">
                      <ProductCard/>
                    </div>
                    <div className="w-318">
                      <ProductCard/>
                    </div>
                    <div className="w-318">
                      <ProductCard/>
                    </div>
                    <div className="w-318">
                      <ProductCard/>
                    </div>
                    <div className="w-318">
                      <ProductCard/>
                    </div>
                    <div className="w-318">
                      <ProductCard/>
                    </div>
                    <div className="w-318">
                      <ProductCard/>
                    </div>
                    <div className="w-318">
                      <ProductCard/>
                    </div>
                    <div className="w-318">
                      <ProductCard/>
                    </div>
                    <div className="w-318">
                      <ProductCard/>
                    </div>
                    <div className="w-318">
                      <ProductCard/>
                    </div>
                  </div>
                </div>
            </div>
       </main>
  
        <footer className="text-footer-text">
            <div className="bg-[#F1F5F9] py-10 flex
            md:flex-row flex-col justify-center items-center gap-13 px-8">
                <p className="md:order-first order-last text-gray-500">© 2023-2024 ООО “KeyToDrive”</p>
                <p className="text-center text-gray-500">Мы предлагаем аренду автомобилей, идеально подходящих на любой вкус</p>
                <div className="flex flex-row gap-6
                md:order-last order-first">
                    <Link href="#" className="text-gray-500">Автопарк</Link>
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
        </div>
    )
}
