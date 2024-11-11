import style from './style.module.css'
import Image from 'next/image'
import Rectangle22 from  '../../../galleryphoto/Rectangle22.png'
import Rectangle23 from  '../../../galleryphoto/Rectangle23.png'
import Rectangle24 from  '../../../galleryphoto/Rectangle24.png'
import Rectangle25 from  '../../../galleryphoto/Rectangle25.png'
import Rectangle26 from  '../../../galleryphoto/Rectangle26.png'
import Rectangle27 from  '../../../galleryphoto/Rectangle27.png'
import Rectangle28 from  '../../../galleryphoto/Rectangle28.png'
import Rectangle29 from  '../../../galleryphoto/Rectangle29.png'
import Rectangle30 from  '../../../galleryphoto/Rectangle30.png'
import Rectangle31 from  '../../../galleryphoto/Rectangle31.png'
 
export default function GallerPhoto(){
    return (
        <div className={style.galleryphotocon}>
            <div id={style.photoheading}>
        <h1>Photo <br /> <span>Gallery</span></h1>
        </div>
        <div id={style.galleryphotosec}>
        <Image src={Rectangle22} alt='' height={210} width={210}  className={style.galleryphotosstyle}/>
        <Image src={Rectangle23} alt='' height={260} width={210} className={style.galleryphotosstyle} />
        <Image src={Rectangle24} alt='' height={260} width={210} className={style.galleryphotosstyle} />
        <Image src={Rectangle25} alt='' height={260} width={210} className={style.galleryphotosstyle}/>
        <Image src={Rectangle26} alt='' height={260} width={210} className={style.galleryphotosstyle}/>
        <Image src={Rectangle27} alt='' height={260} width={210} className={style.galleryphotosstyle}/>
        <Image src={Rectangle28} alt='' height={260} width={210} className={style.galleryphotosstyle}/>
        <Image src={Rectangle29} alt='' height={260} width={210} className={style.galleryphotosstyle}/>
        <Image src={Rectangle30} alt='' height={260} width={210} className={style.galleryphotosstyle}/>
        <Image src={Rectangle31} alt='' height={260} width={210} className={style.galleryphotosstyle}/>
        </div>
        <div className={style.gallerysec2}>  
            <div>
            <pre>0 <br /> 1 / 02</pre>
            </div>
            <div className={style.gallerybutton}>
        <button id={style.part1button} ><i className="ri-arrow-left-line"></i></button>
        <button id={style.part1button} className={style.gallaery1butt}><i className="ri-arrow-right-line"></i></button>
      </div>
        </div>
        </div>
    )
}