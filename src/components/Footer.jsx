import '../styles/footer.scss'
import { FaPhoneAlt, FaInstagram, FaFacebook, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
    return (
        <footer>
            <div className="main">
                <div className="contact">
                    <h3>Contact Us</h3>
                    <p>Nav Nirman Samiti Dohak</p>
                    <ul>
                        <li><FaPhoneAlt /> +91 6284099593</li>
                        <li><MdEmail /> dohakeshwardham@gmail.com</li>
                    </ul>
                </div>
                <div className="social-media">
                    <h3>Follow Us</h3>
                    <ul>
                        <li><a href="https://www.facebook.com/dohakeshwardham" target="_blank" rel="noopener noreferrer"><FaFacebook /></a></li>
                        <li><a href="https://www.instagram.com/dohakeshwardham?igsh=MWppa2dlaHlmbnh1eQ==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
                    </ul>
                </div>
            </div>
            <div className="credits">
                <div className="me">
                    <p>This website is made by <b><em>Sarthak Singh</em></b> | यह वेबसाइट <b><em>सार्थक सिंह</em></b> द्वारा बनाई गई है।</p>
                    <span className="links">
                        <a href="https://www.linkedin.com/in/sarthak-singh-38261b225/" target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>
                        <a href="mailto:144singhsarthak@gmail.com"><FaEnvelope/></a>
                    </span>
                </div>
                <div className="credits-2">
                    <p>Credits: <em><b>Abhishek Sharma</b></em> | श्रेय: <em><b>अभिषेक शर्मा </b></em></p>
                </div>
                <div className="copyRight">
                    <p>©Copyright. All rights reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer