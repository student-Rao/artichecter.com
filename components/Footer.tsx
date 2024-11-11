import  mainlogo from '../../first/images/mainlogo.png'
import Image from 'next/image'
import style from "./style.module.css"
import fourthlink from '../../first/images/fourthlink.png'
import mobilelogo from '../../first/images/mobilelogo.png'


export default function Footer(){
    return (
       
     <footer className={style.footer}>
         <link
    href="https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.css"
    rel="stylesheet"
/>
        <div className={style.footerbox1logo} >
            <Image src={mainlogo} alt='' height={190} width={170} id={style.footerlogo} />
            <p>DIGITAL PROJECT</p>
        </div>

        <div className={style.footerbox2links}>
            <h1><b>Information</b></h1>
            
            <li>Main</li>
            <li>Gallery</li>
            <li>Projects</li>
            <li>Certification</li>
            <li>Contacts</li>
            
        </div>
        <div className={style.footerbox3links} id="footerbox3links">
        <h2><b>Contacts</b></h2>
        <div><i className="ri-map-pin-add-line"></i><br />1234 Sample Street 
        Austin Texas 78704</div>
        <div>
        <Image src={mobilelogo} alt=''/>
        512.333.2222
        </div>
        <div>
        <i className="ri-mail-star-line"></i><br />
        email@gmail.com
        </div>
        
        </div>
       
       
        <div className={style.footerbox4links} >
            <h1><b>Social Media</b></h1>
            <div id={style.sociallinks}>
            <i className="ri-facebook-fill"></i>
            <i className="ri-twitter-line"></i>
            <i className="ri-linkedin-box-fill"></i>
            <Image src={fourthlink} alt='' />
            </div>
        </div>
        <div className={style.footerlastpart}>
        <div>
        <i className="ri-copyright-line"> 2021 All Right Reserved </i>
        </div>
        </div>
        
     </footer>
    )
}