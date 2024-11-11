import Image from "next/image"
import Link from "next/link"
import  mainlogo from "../images/mainlogo.png"



export default function Header(){
    return (
       <header>
        <div className="logo"><Image src={mainlogo} alt=""  id="logopic"/><p> DIGITAL PROJECT</p></div>
        <div className="headerbutt">
            <Link href={"/"}>
            <li id="firstlink">MAIN</li>
            </Link>
            <Link href={"gallerphoto"}>
            <li>GALLERY</li>
            </Link>
            <Link href={"projects"}>
            <li>PROJECTS</li>
            </Link>
            <Link href={"certification"}>
            <li>CERTIFICATION</li>
            </Link>
            <Link href={"contact"}>
            <li>CONTACTS</li>
            </Link>
        </div>
       </header>
    )
}