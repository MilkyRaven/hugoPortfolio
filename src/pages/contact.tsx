import Link from "next/link"
import Nav from "../../components/Nav"
import Footer from "../../components/Footer"

export default function Contact() {
    return <div>
        <Nav></Nav>
        <h1 className="text-4xl ml-10">Contact</h1>
        <div className="bg-slate-300 w-auto h-32 mt-5 mb-5"></div>
        <div className="flex flex-col items-start ml-4">
            <button className="bg-blue-300 text-white mb-2 rounded-lg shadow-lg"><p className="text-4xl p-3">E-mail</p></button>
            <button className="bg-blue-500 text-white mb-2 rounded-lg shadow-lg"><p className="text-4xl p-3">LinkedIn</p></button>
            <button className="bg-blue-700 text-white mb-2 rounded-lg shadow-lg"><p className="text-4xl p-3">Instagram</p></button>
            <button className="bg-blue-900 text-white mb-2 rounded-lg shadow-lg"><p className="text-4xl p-3">Twitter</p></button>
        </div>
        <Footer></Footer>
    </div>
}