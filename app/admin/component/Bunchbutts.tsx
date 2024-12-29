import {bunchButtsArrays} from "@/app/admin/component/AdminArrays";

export const Bunchbutts = () => {
    return (
        <div className="flex flex-col gap-6 px-5">
            {
                bunchButtsArrays.map((item, index) => (
                    <button
                        key={index}
                        className={`relative w-full h-[85px] rounded-xl text-white font-medium text-[28px] whitespace-nowrap cursor-pointer shadow-md shadow-black/50`}
                        style={{ backgroundColor: item.color }}
                    >
                        {item.title}
                        {item.count && <div className="absolute top-2 right-2 px-2.5 py-1 bg-[#F8DEBD] font-medium text-sm text-black rounded-full">{item.count}</div>}
                    </button>
                ))
            }
        </div>

    )
}