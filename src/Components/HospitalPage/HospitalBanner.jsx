import React,{useState, useEffect,useRef} from 'react'
import Image from '../Image'

const HospitalBanner = (props) => {
  let scrollImg = useRef("")
  // console.log(props)
  // const [scrollTop, setScrollTop] = useState(0);
 
  // useEffect(() => {
  //   const handleScroll = (event) => {
      
  //     if(110 > window.pageYOffset){
  //       scrollImg.current.style.position="fixed"
  //       scrollImg.current.style.display= "block";
  //       scrollImg.current.style.top= Number(window.pageYOffset) + 'px'
  //      console.log("less")
        
  //     }
  //     else if(111 < window.pageYOffset &&  window.pageYOffset <  400 ){
  //       console.log("between")
  //       scrollImg.current.style.display= "block";
  //       scrollImg.current.style.position= "fixed";
  //       scrollImg.current.style.top= (window.pageYOffset)+ 'px'
  //     }
  //     else{
  //       console.log("more")
  //       scrollImg.current.style.position= "unset";
  //       scrollImg.current.style.display= "none";
  //       scrollImg.current.style.top= (window.pageYOffset)+'px';
  //     }
  //   };

    // window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // });
  // console.log(props.ref)
  
  
  
  // ????? differnce in {props, ref} and {ref}


  return (<React.Fragment>
    <div className='hospital__Banner relative' ref={props.ref1}>
   <img className="hospital_banner w-[100vw]"  src={require("../../Assests/Images/Hospital.png")} w={100} h={500} alt="hospitalBanner"/>
   <div className='dozzeMachine fixed z-[10]'><img className="machinImg" ref={props.imgRef} src={require("../../Assests/Images/bannerproducttest.png")}  alt="dozzeMachine" /></div>
   
   </div>
   
   </React.Fragment>)
}

export default HospitalBanner