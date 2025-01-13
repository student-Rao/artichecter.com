import style from './style.module.css'
import Image from 'next/image'
import projectsecproject1pic1 from '../../../galleryphoto/projectsecproject1pic1.png'
import projectsecproject1pic2 from '../../../galleryphoto/projectsecproject1pic2.png'
import projectsecproject1pic3 from '../../../galleryphoto/projectsecproject1pic3.png'

export default function Project1(){
    return (
        <div className={style.project1con}>
             <h2>Sample <br /><span>Project 1</span></h2>
             <div className={style.projectmaincon}>
                <div id={style.projectmaincon1}>
                    <Image src={projectsecproject1pic1} alt='pic' height={435} width={1000} />
                </div>
                <div id={style.projectmaincon2}>
                     <div id={style.projectmaincon2image}>
                        <Image src={projectsecproject1pic2} alt='pic' height={435} width={419} />
                     </div>
                     <div id={style.projectmaincon2text}>
                        <p>Lorem Ipsum  when an unknowno typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with.</p>
                     </div>
                     

                </div>
                <div id={style.projectmaincon2image2}>
                        <Image src={projectsecproject1pic3} alt='pic' height={435} width={1050} />
                     </div>
             </div>
        </div>
    )
}
