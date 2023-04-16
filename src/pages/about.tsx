import Nav from "../../components/Nav"
import Footer from "../../components/Footer"

export default function About() {
    return <div>
        <Nav></Nav>
        <h1 className=" text-4xl ml-10">About me</h1>
        <div className="flex justify-end">
            <div className=" bg-slate-300 w-44 h-64 m-5"></div>
        </div>
        <div className="p-10">
            <h1 className="text-4xl">Im Hugo super duper cool man</h1>
            <p className="text-2xl mt-5">Im hugo super duper cool man text is coool bro
                little more text
                and we golden.
            </p>
            <p className="text-2xl mt-5">This is a nice bio.
                Feels like a cold shower
                on a hot summers day.
            </p>
        </div>
        <Footer></Footer>
    </div>
}