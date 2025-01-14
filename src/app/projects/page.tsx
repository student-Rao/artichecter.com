import style from './style.module.css'
import Image from 'next/image'
import Link from 'next/link'
import projectsecimage1 from '../../../galleryphoto/projectsecimage1.png'
import projectsecimage2 from '../../../galleryphoto/projectsecimage2.png'
import projectsecimage3 from '../../../galleryphoto/projectsecimage3.png'
export default function Projects() {
    return (
        <div className={style.Projection}>
            <link
                href="https://cdn.jsdelivr.net/npm/remixicon@4.4.0/fonts/remixicon.css"
                rel="stylesheet"
            />
            <h2>OUR<br/><span>Projects</span></h2>
            <div className={style.projectcon}>
                <div id={style.projectsec1} className={style.projectsconsection}>
                    <div id={style.projectsec1image}>
                        <Image src={projectsecimage1} alt='pic' height={435} width={670} id={style.img} />
                    </div>
                    <div id={style.projectsec1text}>
                        <h2>Sample Project</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <Link href={"project1"}>
                            <button>view more <i className="ri-arrow-right-line"></i></button>
                        </Link>
                    </div>
                </div>
                <div id={style.projectsec1} className={style.projectsconsection}>
                    <div id={style.projectsec1image}>
                        <Image src={projectsecimage2} alt='pic' height={435} width={670} id={style.img} />
                    </div>
                    <div id={style.projectsec1text}>
                        <h2>Sample Project</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <button>view more <i className="ri-arrow-right-line"></i></button>
                    </div>
                </div>
                <div id={style.projectsec1} className={style.projectsconsection}>
                    <div id={style.projectsec1image}>
                        <Image src={projectsecimage3} alt='pic' height={435} width={670} id={style.img} />
                    </div>
                    <div id={style.projectsec1text}>
                        <h2>Sample Project</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                        <button>view more <i className="ri-arrow-right-line"></i></button>
                    </div>
                </div>
            </div><div className={style.lastpartproject}>
                <div>
                    <pre>0 <br />1 / 02</pre>
                </div>
                <div className={style.lastpartprojectbutt}>
                    <button><i className="ri-arrow-left-line"></i></button>
                    <button><i className="ri-arrow-right-line"></i></button>
                </div>
            </div>

        </div>
    )
}