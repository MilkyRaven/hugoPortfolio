import Link from "next/link"
import Nav from "../../../components/Nav"
import Footer from "../../../components/Footer"

export default function Design() {
    return <div>
        <Nav></Nav>
        <div className="mt-14 ml-6 mr-6 mb-24">
            {/* <Link href={'/'}>Return Home</Link> */}
            <h1 className='text-4xl'>DESIGN</h1>
            <Link href={'/design/project1'}>
                <div className="flex mt-8 mb-8 place-content-between">
                    <div className="w-full h-44 bg-slate-300"></div>
                </div>
            </Link>
            <Link href={'/design/project2'}>
                <div className="flex mt-8 mb-8 place-content-between">
                    <div className="w-full h-44 bg-slate-300"></div>
                </div>
            </Link>
            <Link href={'/design/project3'}>
                <div className="flex mt-8 mb-8 place-content-between">  
                    <div className="w-full h-44 bg-slate-300"></div>
                </div>
            </Link>
        </div>
        <Footer></Footer>
    </div>
}