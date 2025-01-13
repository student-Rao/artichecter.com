import style from './style.module.css'
import Image from 'next/image'
// import contactpageimage from '../../../galleryphoto/contactpageimage.png'
import Ellipse1 from '../../../galleryphoto/Ellipse1.png'

export default function Contact(){
    return (
        <div className={style.contactpagecon}>
            <div className={style.contactpageconpart1}>
             <div id={style.contactpageconpart1text1}>
                <h1>Contact <br /><span>Information</span></h1>
             </div>
             <div id={style.contactpageconpart1text2}>
                <p><b>Company Name</b></p>
                <p>1234 Sample Street Austin Texas 76401</p>
             </div>
             <div id={style.contactpageconpart1text3}>
                <p>512.333.2222</p>
             </div>
             <div id={style.contactpageconpart1text4}> 
                <p>sampleemail@gmail.com</p>
             </div>
             <div id={style.contactpageconpart1button}>
                <button>CONTACT US</button>
                 </div>
            </div>
            <div className={style.contactpageconpart2}>
                <Image src={Ellipse1} alt=''  id={style.contactpageconpart2logo}/>
                {/* <Image src={contactpageimage} alt='' id={style.contactpageconpart2image} /> */}
            </div>
            
        
        </div>
    )
}