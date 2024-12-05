import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function Footer(){
    return(
        <div className="footer">
            <div className="icon">
                <a href="#"><FaInstagram /></a>
                <a href="#"><FaFacebookSquare /></a>
                <a href="#"><FaTwitter /></a>
                <a href="#"><FaYoutube /></a>
            </div>
        </div>
    )
}