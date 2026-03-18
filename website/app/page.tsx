import Image from "next/image";
import ProductCard from "@/components/layout/ui/product-card";
import DesktopCard from "@/components/layout/ui/desktop-card";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="h-175 bg-cover bg-center bg-[url(/main/map.png)]">
      <div className="bg-gradient-to-b from-white via-white to-white-1 h-150 w-full">

        <div className=" font-secondary container mx-auto flex flex-col gap-6 items-center text-center">
          <p className="font-bold text-5xl 
          md:text-6xl">Самый большой автопарк Москвы</p>
            <p className="md:mx-0 mx-2 mx-auto max-w-6xl">Мы предлагаем аренду автомобилей, которые идеально подойдут для любых вкусов и предпочтений. У на
              с вы найдете авто для любой ситуации и настроения, от экономичных до роскошных моделей. 
              Наслаждайтесь комфортом и свободой передвижения с нашей широкой линейкой транспортных средств.</p>
            <button className="font-primary font-medium bg-blue-600 hover:bg-blue-700 text-white px-12 py-2 rounded-lg">Начать пользоваться</button>
            <Image src="/main/car.png" alt="car" className="z-50 w-430px md:w-1181px h-241px md:h-664px mt-45 md:mt-10" width={1181} height={664}/>
        </div>
      </div>
      </div>

      <div className="w-full bg-[#F1F5F9] py-15
      md:py-20">
        <p className="block
        md:hidden font-bold text-4xl text-nowrap text-center mt-4 
        md:mt-0">Новые автомобили</p>
        <div className="mt-12 flex flex-row gap-6 md:justify-center justify-start overflow-x-auto">
          <div className="ml-2 md:ml-0">
            <ProductCard/>
          </div>
          <div className="mr-2 md:mr-0">
            <ProductCard/>
          </div>
          <div className="ml-2 md:ml-0">
            <ProductCard/>
          </div>
          <div className="mr-2 md:mr-0">
            <ProductCard/>
          </div>
        </div>
      </div>

      <div className="container mx-auto flex flex-col gap-10 my-15
      md:my-20">
        <p className="text-4xl
        md:text-5xl font-bold text-center">Наши преимущества</p>
        <div className="md:grid md:grid-cols-3 flex flex-row gap-6 overflow-x-auto">
          <DesktopCard/>
          <div className="flex flex-col border-2 min-w-70 shadow-sm rounded-lg border-[#F1F5F9] p-6 gap-6">
            <Image src="/main/watch.png" alt="watch" width={40} height={40}/>
            <div className="flex flex-col gap-4">
              <p className="font-bold text-2xl">Поддержка 24-часа</p>
              <p className="text-footer-text text-gray-500">Мы доступны 24/7, чтобы помочь вам в любое время дня и ночи.</p>
            </div>
          </div>
          <div className="flex flex-col border-2 min-w-70 shadow-sm rounded-lg border-[#F1F5F9] p-6 pb-25 gap-6">
            <Image src="/main/mapTreasure.png" alt="mapTreasure" width={40} height={40}/>
            <div className="flex flex-col gap-4">
              <p className="font-bold text-2xl">Удобное расположение</p>
              <p className="text-footer-text text-gray-500">Наши точки аренды находятся в удобных локациях по всему городу, включая аэропорты и железнодорожные станции.</p>
            </div>
          </div>
          <div className="flex flex-col border-2 min-w-70 shadow-sm rounded-lg border-[#F1F5F9] p-6 gap-6">
            <Image src="/main/clipboard.png" alt="clipboard" width={40} height={40}/>
            <div className="flex flex-col gap-4">
              <p className="font-bold text-2xl">Страховка на случай ДТП</p>
              <p className="text-footer-text text-gray-500">Каждый арендуемый автомобиль защищён страховкой от ДТП, покрывающей основные риски.</p>
            </div>
          </div>
          <div className="flex flex-col border-2 min-w-70 shadow-sm rounded-lg border-[#F1F5F9] p-6 gap-6">
            <Image src="/main/refresh.png" alt="refresh" width={40} height={40}/>
            <div className="flex flex-col gap-4">
              <p className="font-bold text-2xl">Экономьте до 50% на дальних поездках</p>
              <p className="text-footer-text text-gray-500">Используйте наши специальные тарифы для длительных поездок и экономьте до 50%.</p>
            </div>
          </div>
          <div className="flex flex-col border-2 min-w-60 shadow-sm rounded-lg border-[#F1F5F9] p-6 pb-25 gap-6">
            <Image src="/main/x-circle.png" alt="x-circle" width={40} height={40}/>
            <div className="flex flex-col gap-4">
              <p className="font-bold text-2xl">Бесплатная отмена за 48 часов</p>
              <p className="text-footer-text text-gray-500">Предоставляем возможность бесплатной отмены брони за 48 часов до начала аренды.</p>
            </div>
          </div>
        </div>
      </div>

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
    
    <div className="flex justify-center mt-10">
        <Link href="/website/app/car-park/page.tsx"
        className="font-primary font-medium bg-blue-600 hover:bg-blue-700 text-white px-12 py-2 rounded-lg">
          Смотреть все</Link>
    </div>
  </div>
</div>
   
      <div className="relative mx-16 lg:bg-[#eef2f6] md:bg-[#fff] rounded-2xl py-16 px-8 mb-20 text-center overflow-hidden">
        <h2 className="text-[40px] font-bold text-[#1f2937]">
          Не нашли ответы на свои вопросы ?
        </h2>
        <p className="mt-6 text-gray-500 max-w-4xl mx-auto text-[16px] leading-relaxed">
          Наши специалисты готовы ответить на все ваши вопросы по аренде авто 🚗💬
          Свяжитесь с нами через форму ниже или позвоните, чтобы получить
          консультацию и выбрать идеальный автомобиль. Мы здесь, чтобы помочь!
        </p>
        <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-12 py-2 rounded-lg font-medium">
          Задать вопрос
        </button>
      </div>
    </main>
  )
}
//рпгпгпшр