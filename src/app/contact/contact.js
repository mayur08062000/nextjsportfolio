
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import Link from "next/link";
import "./contact.css"


export default function Contactar() {
  return (
    <div className="logo">
    <FaWhatsapp className="loga"/>
    <FaFacebook className="loga"/>
    <FaGithub className="loga"/>
    <FaInstagramSquare className="loga" />
    <IoLogoLinkedin className="loga"/>
    </div>
  )
}
