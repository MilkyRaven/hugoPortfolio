import Link from "next/link"

export default function Data() {
    return <div>
        <Link href={'/'}>Return Home</Link>
        <h1>Data</h1>
        <div className="dataProject">
            <h2>Project One</h2>
            <h3>Subtitle</h3>
            <div className="pic"></div>
        </div>
        <div className="dataProject">
            <h2>Project Two</h2>
            <h3>Subtitle</h3>
            <div className="pic"></div>
        </div>
        <div className="dataProject">
            <h2>Project Three</h2>
            <h3>Subtitle</h3>
            <div className="pic"></div>
        </div>
    </div>
}