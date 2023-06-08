import React,{useEffect, useRef, useState} from 'react'

const VolumeSLider = () => {
    let mousePositioned =useRef()
    let [mousePosition , setMousePosition] = useState(0)
    let [mousePositions , setMousePositions] = useState(0)
  
   function mousemove(e){
    setMousePositions(e.pageX)
   console.log(e.clientX)
   }
   useEffect(() =>{
    
    // mousePositioned.current.style.left=mousePositions + "px"
   },[mousePositions])
  return (
    <div className='slide_pipe relative' >
        {/* <div className={`circle`} ref={mousePositioned}></div> */}
        <input type="range" min="1" max="500" value={mousePositions} onChange={mousemove}/>
        
    </div>
  )
}

export default VolumeSLider


// import React,{useState,useEffect} from "react";

// export default function VolumeSLider() {
//   const [value,onChange]=useState(1);
//   useEffect(()=>{
//       const ele = document.querySelector('.buble');
//     if (ele) {
//       ele.style.left = `${Number(value / 4)}px`;
//     }
//   })
//   return (
//     <div className="slider-parent">
//       <input type="range" min="1" max="500" value={value}
//          onChange={({ target: { value: radius } }) => {
//                     onChange(radius);
//                   }}
//       />
//       <div className="buble"> 
//       {value}
//       </div>
//     </div>
//   );
// }
