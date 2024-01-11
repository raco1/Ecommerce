import Link from "next/link";

export function Header(){
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-5">
                <Link href='/' className="text-2xl font-extrabold text-white">
                    devstore
                </Link>
            </div>

            <div className="flex items-center gap-4">

            </div>
        </div>
    )
}