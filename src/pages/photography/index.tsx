import Link from "next/link"

export default function Photography() {
    return <div>
        <Link href={'/'}>Return Home</Link>
        <h1>Photography</h1>
        <div className="pic">
        <Link href={'/photography/gallery1'}><p className="galleryText">Click to see the gallery</p></Link>
        </div>
        <div className="pic">
        <Link href={'/photography/gallery2'}><p>Click to see the gallery</p></Link>
        </div>
        <div className="pic">
        <Link href={'/photography/gallery3'}><p>Click to see the gallery</p></Link>
        </div>
    </div>
}