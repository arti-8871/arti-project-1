import React, { useEffect, useState, useRef } from "react";
var leftOptions = [
  {
    'key': 1,
    'optionName': 'o2 Sat',
    "optionNames": "SPO2",
    "optionNums": "95%",
    "optionUnit": "rpm",
    "imgSrc_bg": require("../../Assests/Images/left4--Bg.png"),
    "imgSrc": require("../../Assests/Images/left-2spo2.png"),
    'svg': <svg viewBox="0 0 20 26" xmlns="http://www.w3.org/2000/svg" role="img" class="absolute w-[1.25vw] h-[1.25vw] top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] fill-f_primary"><path d="M2.5 21.488c1.812 2.38 4.582 3.729 7.563 3.729 2.98 0 5.751-1.35 7.562-3.729a9.533 9.533 0 0 0 0-11.538l-.003-.003L10.51.995a.578.578 0 0 0-.894 0L2.503 9.947 2.5 9.95a9.533 9.533 0 0 0 0 11.538Zm.9-.678C1.1 17.798 1.1 13.605 3.4 10.63l6.664-8.39 6.664 8.39a8.372 8.372 0 0 1-.002 10.178c-1.589 2.096-4.022 3.28-6.662 3.28-2.64 0-5.074-1.183-6.662-3.28Zm2.087-6.697-.001.001c-.308.486-.45 1.138-.45 1.933 0 .8.142 1.456.45 1.946v.001c.331.52.875.764 1.578.764.702 0 1.244-.243 1.57-.764.313-.49.457-1.147.457-1.947 0-.796-.144-1.447-.457-1.934-.327-.516-.87-.757-1.57-.757-.702 0-1.246.241-1.577.757Zm2.181 1.14.001.005c.041.205.063.467.063.79 0 .331-.02.604-.057.82a.876.876 0 0 1-.2.447c-.077.082-.202.138-.411.138-.21 0-.334-.056-.411-.138a.876.876 0 0 1-.2-.447 4.934 4.934 0 0 1-.058-.82c0-.323.02-.586.057-.792a.954.954 0 0 1 .203-.453c.078-.084.201-.142.409-.142.209 0 .328.059.4.14l.002.004a.876.876 0 0 1 .202.448Zm2.915 2.076-.002.001-.348.295-.077.065v1.015h3.746v-1.211h-1.614c.197-.175.37-.332.515-.473l.001-.001c.256-.251.482-.544.679-.876a2.15 2.15 0 0 0 .312-1.11c0-.49-.153-.904-.473-1.22-.325-.324-.779-.471-1.326-.471-.512 0-.95.154-1.3.472l-.001.001c-.354.328-.526.797-.546 1.372l-.007.224H11.491l.004-.213c.004-.228.058-.378.139-.476l.002-.003c.073-.092.177-.146.346-.146.182 0 .276.051.33.116.065.079.11.203.11.398 0 .2-.067.414-.219.646-.16.243-.36.48-.604.712-.25.233-.589.527-1.016.883Z"></path></svg>
  },
  {
    'key': 2,
    'optionName': 'NiBP',
    "optionNames": "NiBP(DIA)",
    "optionNums": "84",
    "optionUnit": "mm hg",
    "imgSrc_bg": require("../../Assests/Images/left4--Bg.png"),
    "imgSrc": require("../../Assests/Images/right-2.png"),
    'svg':<svg viewBox="0 0 22 27" xmlns="http://www.w3.org/2000/svg" role="img" class="absolute w-[1.25vw] h-[1.25vw] top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] fill-f_primary"><g clip-path="url(#nibpnew_svg__a)" fill-rule="evenodd" clip-rule="evenodd"><path d="M15.73 11.24c-2.255 0-3.996 1.726-3.996 3.75 0 2.025 1.741 3.751 3.996 3.751s3.995-1.726 3.995-3.75c0-2.025-1.74-3.751-3.995-3.751Zm-5.996 3.75c0-3.222 2.733-5.75 5.996-5.75 3.263 0 5.995 2.528 5.995 5.75 0 3.223-2.732 5.751-5.995 5.751s-5.996-2.528-5.996-5.75Z"></path><path d="M12.348 10.538a1 1 0 0 1 1.407.143l3.2 3.976a1 1 0 0 1-.161 1.404 1 1 0 0 1-1.408-.143l-3.2-3.976a1 1 0 0 1 .162-1.404Z"></path><path d="m3.28 12.831-.196.402c-.882 1.6-1.106 3.276-.703 5.045.41 1.788 1.383 3.24 2.932 4.356 1.687 1.216 3.584 1.716 5.703 1.5 2.089-.212 3.806-1.08 5.162-2.579l.003-.003a8.35 8.35 0 0 0 .693-.874 1 1 0 0 1 1.645 1.138c-.253.366-.538.73-.858 1.082-1.696 1.875-3.874 2.965-6.443 3.226-2.593.264-4.981-.358-7.074-1.868-1.93-1.39-3.191-3.253-3.713-5.532v-.001c-.51-2.24-.22-4.42.902-6.456.29-.526.641-1.034.957-1.49.078-.113.154-.223.226-.33.767-1.14 1.543-2.28 2.316-3.414l.003-.005.633-.928L6.525 4.54l.002-.003A2516.4 2516.4 0 0 1 9.235.552L9.114.8c.108-.165.226-.289.35-.384l-.23.138A1.355 1.355 0 0 1 9.32.43V.427l.016-.02A1 1 0 0 1 10.158 0l-.41.245c.115-.053.231-.092.347-.126L10.158 0a1 1 0 0 1 .237.033c.036-.01.07-.022.105-.033v.067a1 1 0 0 1 .466.367l.146.212.47.688 4.55 6.694a1 1 0 0 1-1.654 1.124l-4.336-6.378c-.653.96-1.305 1.922-1.958 2.884v.001L7.121 7.224l-.637.936-.001.001c-.774 1.136-1.546 2.269-2.31 3.405l-.003.004c-.09.134-.18.262-.266.387-.308.446-.584.847-.82 1.276l.295-.553-.1.151Z"></path></g><defs><clipPath id="nibpnew_svg__a"><path fill="#fff" d="M0 0h22v27H0z"></path></clipPath></defs></svg>
  },
  {
    'key': 3,
    'optionName': '12L ECG',
    "optionNames": "12L ECG",
    "optionNums": "108",
    "optionUnit": "bpm",
    "imgSrc_bg": require("../../Assests/Images/left4--Bg.png"),
    "imgSrc": require("../../Assests/Images/right-3.png"),
    'svg': <svg viewBox="0 0 23 21" xmlns="http://www.w3.org/2000/svg" role="img" class="absolute w-[1.25vw] h-[1.25vw] top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] fill-[#ffffff]"><path d="M18.276 10.154h-6.767L9.73 7.55a.373.373 0 0 0-.345-.163.381.381 0 0 0-.311.228l-1.554 3.667-1.253-2.577a.38.38 0 0 0-.27-.21.386.386 0 0 0-.331.11l-1.1 1.143h-.502a.376.376 0 0 0 0 .752h.67a.376.376 0 0 0 .26-.123l.835-.86 1.375 2.837c.062.13.194.214.339.213a.38.38 0 0 0 .338-.228l1.624-3.794 1.504 2.195c.07.104.186.166.31.166h6.958a.376.376 0 0 0 0-.752Z"></path><path d="M19.78.583H2.74A1.754 1.754 0 0 0 .984 2.337v15.538A1.755 1.755 0 0 0 2.74 19.63H19.78a1.755 1.755 0 0 0 1.754-1.755V2.337A1.755 1.755 0 0 0 19.781.583Zm1.003 17.292a1.002 1.002 0 0 1-1.002 1.003H2.739a1.002 1.002 0 0 1-1.003-1.002V2.337A1.002 1.002 0 0 1 2.74 1.335H19.78a1.002 1.002 0 0 1 1.002 1.002v15.538Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M9.38 7.387a.372.372 0 0 1 .346.163l1.78 2.604h6.767a.376.376 0 0 1 0 .752h-6.958a.371.371 0 0 1-.31-.166L9.5 8.545l-1.624 3.794a.38.38 0 0 1-.385.225.373.373 0 0 1-.292-.21L5.824 9.517l-.834.86a.376.376 0 0 1-.26.122h-.67a.376.376 0 0 1 0-.752h.501l1.1-1.142a.386.386 0 0 1 .331-.11.38.38 0 0 1 .271.21l1.253 2.576L9.07 7.615a.381.381 0 0 1 .31-.228ZM6.789 8.453l.692 1.421 1.055-2.49a.964.964 0 0 1 .786-.577h.003a.956.956 0 0 1 .886.417l1.603 2.347h6.46a.959.959 0 0 1 0 1.917h-6.957M6.788 8.453a.962.962 0 0 0-.685-.53l-.012-.003-.013-.002a.969.969 0 0 0-.83.277l-.935.97H4.06a.959.959 0 0 0 0 1.917H4.757a.959.959 0 0 0 .656-.305l.25-.257 1.012 2.087c.16.332.496.544.866.543H7.554a.963.963 0 0 0 .857-.578L9.619 9.75l.903 1.318M1.083.684A2.337 2.337 0 0 1 2.736 0h17.041a2.337 2.337 0 0 1 2.337 2.337v15.538a2.337 2.337 0 0 1-2.337 2.337H2.736a2.337 2.337 0 0 1-2.338-2.337V2.337c0-.62.247-1.214.685-1.653Zm18.991 17.488a.42.42 0 0 0 .123-.297V2.337a.42.42 0 0 0-.42-.42H2.736a.42.42 0 0 0-.42.42v15.538a.42.42 0 0 0 .42.42h17.041a.42.42 0 0 0 .297-.123Zm.412-16.544a1.002 1.002 0 0 0-.709-.293H2.736a1.002 1.002 0 0 0-1.003 1.002v15.538a1.002 1.002 0 0 0 1.003 1.003h17.041a1.002 1.002 0 0 0 1.003-1.003V2.337c0-.266-.106-.52-.294-.709Zm-18.99-.532a1.754 1.754 0 0 1 1.24-.513h17.041a1.754 1.754 0 0 1 1.755 1.754v15.538a1.754 1.754 0 0 1-1.755 1.754H2.736A1.754 1.754 0 0 1 .98 17.875V2.337c0-.465.185-.912.514-1.24Z"></path></svg>
  },
  {
    'key': 4,
    'optionName': 'Temperature',
    "optionNames": "temp",
    "optionNums": "96",
    "optionUnit": "deg f",
    "imgSrc_bg": require("../../Assests/Images/left4--Bg.png"),
    "imgSrc": require("../../Assests/Images/right-4.png"),
    'svg': <svg viewBox="0 0 25 50" xmlns="http://www.w3.org/2000/svg" role="img" class="absolute w-[1.25vw] h-[1.25vw] top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] fill-f_primary"><path d="M13.23 33.575v.144l.136.045c1.242.414 2.175 1.66 2.175 3.003a3.23 3.23 0 0 1-3.213 3.212 3.23 3.23 0 0 1-3.212-3.212c0-1.343.934-2.589 2.175-3.003l.137-.045v-21.83c0-.284.094-.506.244-.656.15-.15.372-.244.656-.244.285 0 .507.094.657.244.15.15.244.371.244.656v21.686Zm-2.312 3.192c0 .77.64 1.41 1.41 1.41.772 0 1.411-.64 1.411-1.41 0-.771-.64-1.411-1.41-1.411-.772 0-1.411.64-1.411 1.41Z"></path><path d="M19.504 26.859v.2h.132c3.004 2.386 4.823 5.942 4.823 9.817 0 6.715-5.415 12.129-12.13 12.129A12.11 12.11 0 0 1 .2 36.875c0-3.898 1.84-7.472 4.873-9.746l.08-.06V7.375A7.176 7.176 0 0 1 12.33.2c1.925 0 3.636.747 5.032 2.143s2.143 3.107 2.143 5.032V26.86ZM16.103 3.601C15.076 2.574 13.705 2 12.329 2a5.368 5.368 0 0 0-5.374 5.374v20.144c0 .283-.092.54-.35.713-2.92 1.91-4.603 5.165-4.603 8.533a10.3 10.3 0 0 0 10.327 10.327 10.3 10.3 0 0 0 10.327-10.327c0-3.365-1.79-6.612-4.584-8.52-.202-.206-.37-.48-.37-.726V7.375c0-1.376-.572-2.748-1.6-3.774Z"></path></svg>
  }

]

const RealTimeReport = () => {
  let { img_num, setImg_num } = useState("")
  let realImg_show = useRef(img_num);
  useEffect(() => {
    console.log(realImg_show.current)

  })
  let g = (e) => {
    console.log(e.target.id)
    // console.log("clicked")
   if(e.target.id === realImg_show.current.id ){
   console.log(realImg_show.current.id)
    realImg_show.current.style.display = "block";
    // console.log(realImg_show.current)
   } 
  }
  return (
    <React.Fragment>
      <div>RealTimeReport</div>

      <div className="report_Options ">
        <div className="options left_options" >
          {
            leftOptions.map((item, index) => {
              return (<React.Fragment>
                <div className="optionInfo flex flex-row justify-center pr-4 pl-7 mb-7 items-center" key={item.key}>
                  <div className="optionSvg relative w-[2.08vw] h-[2.08vw] bg-[#ECF6FF] border-[2px] border-f_primary  rounded-full font-bold">{item.svg}</div>
                  <div id={`name-${index}`} className="optionName" onClick={g}>{item.optionName}</div>
                </div>
              </React.Fragment>)
            })
          }


        </div>
        <div className="options right_options"></div>
      </div>

      {reportImages.map((i, index) => {
        console.log(index)
        return (<div className="report_Images">
          <div className="shadowPart flex">
            <div className="shadowDetails">
              <div className="optionName" >{i.optionName}</div>
              <div className="optionNums">{i.optionNums}</div>
              <div className="optionUnit">{i.optionUnit}</div>
            </div>
            <div className="shadowImg">
              <img src={i.imgSrc_bg} alt="shadowImg" />
            </div>
          </div>
          
          <div className="realImg hidden" id={`name-${index}`} ref={realImg_show} >
            <img src={i.imgSrc} alt="realiMG" />
          </div>
        </div>)
      })
      }

    </React.Fragment>
  );
};

export default RealTimeReport;
