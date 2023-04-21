import Link from "next/link"
import Nav from "../../components/Nav"
import Footer from "../../components/Footer"

export default function Contact() {
    return <div>
        <Nav></Nav>
        <h1 className="text-[40px] mt-[10px] ml-10 font-crimson">GET IN TOUCH</h1>
        <div className="static text-white">
            <div className="bg-slate-400 w-auto h-[254px] mt-2 mb-5 static flex-col justify-stretch">
                <p className="font-thin text-[32px] pl-10 pr-10 pt-5">Have a project you would like to work on together?</p>
                <p className="text-[20px] pl-10 pt-10">I wanna hear about it!</p>
            </div>
        </div>

        <div className="flex flex-col items-start ml-4">
            <Link href={'mailto:hugosalaimo@gmail.com'}><button className=" bg-super-light-blue text-white mb-2 rounded-lg shadow-lg"><p className="text-4xl p-3">E-mail</p></button></Link>
            <Link target="_blank" href={'https://www.linkedin.com/in/hugoalaimo/'}><button className=" bg-light-blue text-white mb-2 rounded-lg shadow-lg"><p className="text-4xl p-3">LinkedIn</p></button></Link>
            <Link target="_blank" href={'https://www.instagram.com/hugoherehugothere/'}><button className=" bg-medium-blue text-white mb-2 rounded-lg shadow-lg"><p className="text-4xl p-3">Instagram</p></button></Link>
            {/* <button className=" bg-dark-blue text-white mb-2 rounded-lg shadow-lg"><p className="text-4xl p-3">Twitter</p></button> */}
        </div>
        <Footer></Footer>
    </div>
}