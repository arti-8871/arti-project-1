import React,{useState, useEffect,useRef} from 'react'
import Image from '../Image'

const HospitalBanner = () => {
  let scrollImg = useRef("")
  // const [scrollTop, setScrollTop] = useState(0);
  
  useEffect(() => {
    const handleScroll = (event) => {
      console.log("llll")
      if(40 > window.pageYOffset > 700){
        scrollImg.current.style.display= "none";
        scrollImg.current.style.top= (window.pageYOffset)+20+ 'px'
        // scrollImg.current.style.transform = "translateY(-" + window.pageYOffset + "px)";
      }
      else if(40 > window.pageYOffset){
        scrollImg.current.style.top= 40+ 'px'
      }
      else{
        scrollImg.current.style.display= "block";
        scrollImg.current.style.top= (window.pageYOffset)+'px';
        // scrollImg.current.style.transform = "translateY(-" + window.pageYOffset + "px)";
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
 
  return (<React.Fragment>
    <div className='hospital__Banner'>
   <img class="hospital_banner" src={require("../../Assests/Images/Hospital.png")} w={1351} h={500} alt="hospitalBanner"/>
   <img class="dozzeMachine absolute top-[40px]" ref={scrollImg} src={require("../../Assests/Images/bannerproducttest.png")}  alt="dozzeMachine" width={200} height={300} />
   </div>
   </React.Fragment>)
}

export default HospitalBanner