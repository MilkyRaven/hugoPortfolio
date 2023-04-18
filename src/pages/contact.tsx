import Link from "next/link"
import Nav from "../../components/Nav"
import Footer from "../../components/Footer"

export default function Contact() {
    return <div>
        <Nav></Nav>
        <h1 className="text-4xl ml-10">Contact</h1>
        <div className="bg-slate-300 w-auto h-32 mt-5 mb-5"></div>
        <div className="flex flex-col items-start ml-4">
            <Link href={'mailto:hugosalaimo@gmail.com'}><button className=" bg-super-light-blue text-white mb-2 rounded-lg shadow-lg"><p className="text-4xl p-3">E-mail</p></button></Link>
            <Link target="_blank" href={'https://www.linkedin.com/in/hugoalaimo/'}><button className=" bg-light-blue text-white mb-2 rounded-lg shadow-lg"><p className="text-4xl p-3">LinkedIn</p></button></Link>
            <Link target="_blank" href={'https://www.instagram.com/hugoherehugothere/'}><button className=" bg-medium-blue text-white mb-2 rounded-lg shadow-lg"><p className="text-4xl p-3">Instagram</p></button></Link>
            {/* <button className=" bg-dark-blue text-white mb-2 rounded-lg shadow-lg"><p className="text-4xl p-3">Twitter</p></button> */}
        </div>
        <Footer></Footer>
    </div>
}