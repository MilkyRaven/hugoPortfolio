import Link from "next/link"
import Nav from "../../../components/Nav"
import Footer from "../../../components/Footer"

export default function Photography() {
    return <div>
        <Nav></Nav>
        <div className="m-10">
            <h1 className="text-4xl">Photography</h1>
            <p className="text-xl mt-2">This is a text about what I do with my photography work, how I got here, why, and anything else to give readers a feel for what they might encounter in this section</p>
        </div>

        <Link href={'/photography/gallery1'}><div className="bg-slate-300 w-80 h-[420px] m-10 relative">
            <div className="bg-black text-white p-4 opacity-70 absolute bottom-0 w-full">
                <p className="text-4xl">Title of the Project</p>
                <p className="text-base mt-2">Description of the project</p>
            </div>
        </div>
        </Link>
        <Footer></Footer>
    </div>
}