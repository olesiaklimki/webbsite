import Image from "next/image";
export default function DesktopCard() {
    return (
        <div className="flex flex-col border-2 shadow-lg sm:shadow-lg md:shadow-sm min-w-70 rounded-lg border-[#F1F5F9] p-6 pb-8 gap-6">
            <Image src="/main/alert-circle.png" alt="alert" width={40} height={40}/>
            <div className="flex flex-col gap-4">
                <p className="font-bold text-2xl">Новые автомобили</p>
                <p className="text-footer-text text-gray-500">Все наши новые автомобили — новейшие модели, обеспечивающие комфорт и безопасность на дорогах.</p>
            </div>
        </div>
    )
}