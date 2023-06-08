import React ,{useRef,useEffect,useLayoutEffect} from 'react'
import { HospitalBanner, RealTimeReport ,HospitalSecondBanner,IndianMap ,VolumeSLider} from '../Components/HospitalPage/Index'
// import Banner from "../Components/HomePage/Banner"
import DataTransfr from '../Components/HospitalPage/DataTransfr';
const ForHospital = () => {

const banner1 = useRef();
const banner2 = useRef();
const scrollImg = useRef();
const  scrollSecondImg = useRef();

// useLayoutEffect(() => {

//   const handleScroll = (event) => {
//     let first  = (banner1.current.offsetHeight)/2;
//     let second = (banner2.current.offsetHeight)/2;
      
//         if(first > window.pageYOffset){
//           scrollImg.current.style.display= "block";
//           scrollSecondImg.current.style.display= "none";
//          console.log("less")
          
//         }
//         else if(first < window.pageYOffset &&  window.pageYOffset <  second *2  ){
//           console.log(first , second   ,"between")
//           scrollImg.current.style.display= "block";
//           scrollSecondImg.current.style.display= "none";
//         }
//         else{
//           console.log(first)
//           scrollSecondImg.current.style.display= "block";
//           scrollImg.current.style.display= "none";
//         }
//       };
  
//       window.addEventListener('scroll', handleScroll);
  
//       return () => {
//         window.removeEventListener('scroll', handleScroll);
//       };

// })
  return (<React.Fragment>
    {/* <div>ForHospital</div>
    <HospitalBanner ref1= { banner1} imgRef = { scrollImg}/>
    <HospitalSecondBanner ref2= { banner2}  imgRef2={scrollSecondImg}/>
    <RealTimeReport /> */}
    {/* <IndianMap /> */}
    {/* <DataTransfr /> */}
    <VolumeSLider />
    </React.Fragment>)
}

export default ForHospital