import Image from "next/image";
export default function ProductCard() {
    return (
        <div className="rounded-lg bg-[#fff] flex flex-col gap-6 w-[318px]">
            <Image src="/main/Image.png" alt="Image" className="pl-2 pt-2 rounded-lg" width={310} height={310}/>
            <div className="mx-6 flex flex-col gap-4">
                <p className="font-bold">{'{Name}'}</p>
                <div className="text-footer-text text-gray-500">
                    <p>Двигатель: {'{}'} </p>
                    <p>Год: {'{}'}</p>
                    <p>Привод: {'{}'}</p>
                    <p>Коробка: {'{}'}</p>
                </div>
            </div>
            <Image src="/main/line.png" alt="line"width={318} height={2}/>
            <div className="flex flex-row pb-4">
                <p className="mx-6 text-nowrap font-bold">от 20 000 ₽</p>
                <p className="-mx-3">/  сутки</p>
            </div>
        </div>
    )
}