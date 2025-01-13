import Image from "next/image";
import homepic1 from "../../images/homepic1.png"
import mainpaggepart2pic1 from "../../images/mainpaggepart2pic1.png"
import mainpagepart2pic2 from "../../images/mainpagepart2pic2.png"
import mainpaggepart2pic3 from "../../images/mainpagepart2pic3.png"
import Reactangle from "../../images/Rectangle .png"
import image15 from "../../images/image15.png"
import image16 from "../../images/image16.png"
import image17 from "../../images/image17.png"
import image18 from "../../images/image18.png"
import image12 from "../../images/image12.png"
export default function Home() {
  return (
  <main>
   <div className="mainpart1">
   <link
    href="https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.css"
    rel="stylesheet"
/>
    <div className="mainpart1div1">
      <p>PROJECT</p> <br /><span>LORUM</span>
      <div className="buttonspart1">
        <button id="part1button"><i className="ri-arrow-left-line"></i></button>
        <button id="part1button"><i className="ri-arrow-right-line"></i></button>
      </div>
      <div className="something">
    <pre>0 <br /> 1 / 02</pre>
      </div>
    </div>
  
  
    <div className="mainpart1div2">  <Image src={homepic1} alt="pic" id="homeimage"/><button>VIEW PROJECT <i className="ri-arrow-right-line"></i></button>
        
    </div>
   </div>
   <div className="mainpart2div1">
    <div className="mainpart2sec" id="mainpart2pic1sec" >
      <Image src={mainpaggepart2pic1} alt="pic" height={265} width={270} />
      <Image src={mainpagepart2pic2} alt="pic"  height={144} width={265} id="mainpagepart2pic2" />
    </div>
    <div className="mainpart2sec" id="mainpart2pic2sec">
      <Image src={mainpaggepart2pic3} alt="pic" height={345} width={270} id="mainpaggepart2pic3" />
    </div>
    <div className="mainpart2sec" id="mainpart2textsec">
      <h1>ABOUT</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
      <button>READ MORE   <i className="ri-arrow-right-line"></i></button>
    </div>
   </div>
  

   <h2>Main Focus/Mission Statement</h2>
   < div className="mainpart3div1">
   
   
    <div id="mainpart3div1part1">
      <p>1</p>
      <div id="mainpart3div1para">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat.</div>
      
    </div>
    <div id="mainpart3div1part2">
    <p>2</p>
      <div id="mainpart3div1para">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat.</div>
    </div>
    
   </div>
   <h2>OUR PROJECT</h2>
   <div className="mainpart4div1">
    <div className="mainpart4div1imagepart1">
    <div>
    <Image src={Reactangle} alt="pic" width={570} height={255} />
    </div>
    <div>
    <Image src={image15} alt="pic" width={570} height={255} />
    </div>
    </div>
    <div className="mainpart4div1imagepart2">
      <div><Image src={image16} alt="pic" width={270} height={255} /></div>
      <div><Image src={image17} alt="pic" width={470} height={255} /></div>
      <div><Image src={image18} alt="pic" width={370} height={255} /></div>
    </div>
    <div className="mainpart4div1button">
    <button>ALL PROJECTS <i className="ri-arrow-right-line"></i> </button>
    </div>
    
   </div>
   <div className="mainpart5div1">
    <h2>Contact Us</h2>
    <div className="mainpart5formsec">
      <div className="formsectionpart" id="formsection">
        <input type="text" name="" className="contactformpart" placeholder="Name" />
        <input type="tel" name="" className="contactformpart" placeholder="Phone Number" required />
        <input type="email" name="" className="contactformpart" placeholder="Email" required/>
        <input type="text" name="" className="contactformpart" placeholder="Interested in" required />
        <textarea name="" id="message" placeholder="Message"></textarea>
      </div>
      <div className="formsectionpart" id="formsectionimage">
        <Image src={image12} height={400} width={749} alt="pic " />
      </div>
    </div>
    <button>SEND EMAIL <i className="ri-arrow-right-line"></i></button>
   </div>

  </main>
  );
}




{/* <button>VIEW PROJECT<i className="ri-arrow-right-line"></i></button>  */}