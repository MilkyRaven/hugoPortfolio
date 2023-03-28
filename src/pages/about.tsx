import Link from "next/link"

export default function About() {
    return <div>
        <Link href={"/"}>Return Home</Link>
        <h1>About me</h1>
        <div className="pic"></div>
        <h1>Im Hugo super duper cool man</h1>
        <p>Im hugo super duper cool man text is coool bro 
            little more text
            and we golden.
        </p>
        <p>This is a nice bio.
            Feels like a cold shower
            on a hot summers day.
        </p>
    </div>
}