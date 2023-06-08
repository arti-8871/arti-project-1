import React , {useRef, useEffect} from 'react'

const HospitalSecondBanner = (props) => {
   
  
    
    return (<React.Fragment>
        <div className='hospital_second_Banner relative' ref={props.ref2}>
       
       <img className="hospital_second_banner w-[100vw]" src={require("../../Assests/Images/HospitalBanner-2.png")} w={100} h={500} alt="hospitalBanner"/>
       
       <div className='dozzeSecondMachine absolute z-[10]' ref={props.imgRef2}><img className="machinImg" src={require("../../Assests/Images/bannerproducttest.png")}  alt="dozzeMachine" /></div>
       </div>
       
       </React.Fragment>)
}

export default HospitalSecondBanner