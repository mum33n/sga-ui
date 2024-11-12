import {bunchButtsArrays} from "@/app/admin/component/AdminArrays";

export const Bunchbutts = () => {
    return (
        <div className="flex flex-col gap-6 px-5">
            {
                bunchButtsArrays.map((item, index) => (
                    <button
                        key={index}
                        className={`w-full h-[85px] rounded-xl text-white font-medium text-[28px] whitespace-nowrap cursor-pointer shadow-md shadow-black/50`}
                        style={{ backgroundColor: item.color }}
                    >
                        {item.title}
                    </button>
                ))
            }
        </div>

    )
}