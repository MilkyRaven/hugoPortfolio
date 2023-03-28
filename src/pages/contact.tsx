import Link from "next/link"

export default function Contact() {
    return <div>
        <Link href={'/'}>Return Home</Link>
        <h1>Contact</h1>
        <div className="pic"></div>
        <div>
            <p>E-mail</p>
            <p>LinkedIn</p>
            <p>Instagram</p>
            <p>Twitter</p>
        </div>
    </div>
}