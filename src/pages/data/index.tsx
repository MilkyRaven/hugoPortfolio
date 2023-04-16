import Link from "next/link"
import Nav from "../../../components/Nav"
import Footer from "../../../components/Footer"

export default function Data() {
    return <div>
        <Nav></Nav>
        <div className="m-10">
            <h1 className="text-4xl">Data Analytics</h1>
            <p className="text-xl mt-2">This is a text about what I do with my data analytics work, how I got here, why, and anything else to give readers a feel for what they might encounter in this section</p>
        </div>

        <Link href={'/data/eu-ukranian-refugees'}><div className="bg-slate-300 w-80 h-[420px] m-10 relative">
            <div className="bg-black text-white p-4 opacity-70 absolute bottom-0 w-full">
                <p className="text-4xl">THE EU & UKRANIAN REFUGEES</p>
                <p className="text-base mt-2">Exploring the relationship between GDP and refugee hosting</p>
            </div>
        </div>
        </Link>
        <Footer></Footer>
    </div>
}