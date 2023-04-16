import Link from "next/link"
import Nav from "../../../components/Nav"
import Footer from "../../../components/Footer"

export default function Data() {
    return <div>
        <Nav></Nav>
        <div className="mt-14 ml-6 mr-6 mb-24">
            <h1 className='text-4xl'>DATA ANALYTICS</h1>
            <Link href={'/data/eu-and-ukranian-refugees'}>
                <div className="flex mt-8 mb-8 place-content-between">
                    <div>
                        <h2 className="text-4xl">The EU & Ukrainian Refugees</h2>
                        <h3 className="text-2xl">Exploring the relationship between GDP and refugee hosting</h3>
                    </div>
                    <div className="w-16 h-36 bg-slate-300"></div>
                </div>
            </Link>
            <Link href={'/data/project2'}>
                <div className="flex mt-8 mb-8 place-content-between">
                    <div>
                        <h2 className="text-4xl">Project 2</h2>
                        <h3 className="text-2xl">subtitle</h3>
                    </div>
                    <div className="w-40 h-36 bg-slate-300"></div>
                </div>
            </Link>
            <Link href={'/data/project3'}>
                <div className="flex mt-8 mb-8 place-content-between">
                    <div>
                        <h2 className="text-4xl">Project 3</h2>
                        <h3 className="text-2xl">subtitle</h3>
                    </div>
                    <div className="w-16 h-36 bg-slate-300"></div>
                </div>
            </Link>
        </div>
        <Footer></Footer>
    </div>
}