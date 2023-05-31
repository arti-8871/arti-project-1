import React from "react";

const DoubleImgwithTxt = () => {
  return (
    <React.Fragment>
      <section className="wrapper lg:pb-[8.38vw] pt-[3.88vw] pb-[10.55vw] lg:pt-[3.54vw]">
        <div className="inner-width">
          <div className="font-poppins capitalize leading-[7.22vw] lg:leading-[3.33vw] font-[500] mb-[5.55vw] lg:mb-[4.01vw] text-left">
            <p className="lg:text-[1.82vw] text-[4.44vw] text-[#495566]">
              A Pioneer in
            </p>
            <h4 className="lg:text-[2.60vw] text-[6.11vw] text-[#0055D2]">
              Contactless Remote Patient Monitoring Systems
            </h4>
          </div>
          <div className="flex lg:flex-row flex-col justify-center gap-y-[9.16vw] lg:gap-x-[6.56vw] text-left">
            <div className="lg:w-[40vw] w-[85.27vw] lg:overflow-hidden lg:h-[26.09vw] h-[55.55vw] shadow-lg rounded-[2.33vw] lg:rounded-[1.09vw] relative ">
              <img
                className="absolute w-[41.66vw] lg:w-[19.58vw] h-[-webkit-fill-available]"
                src={require("../../Assests/Images/Dozee Pod- one.png")}
                alt="Dozee Pod"
              />
              <div className="absolute flex lg:gap-y-[2.44vw] left-[36.66vw] right-[2.11vw] lg:left-[16.66vw] -translate-y-1/2 lg:right-[2.5vw] top-[50%] flex-col w-[46.66vw] lg:w-[20.83vw] ">
                <div className="font-poppins">
                  <p className="lg:text-[1.82vw] text-[3.05vw] leading-[4.72vw] text-[#495566] lg:leading-[3.33vw] font-[500]">
                    Dozee for
                  </p>
                  <p className="lg:text-[2.96vw] lg:mb-0 mb-[3.05vw] text-[5.55vw] text-[#0055D2] leading-[4.72vw] lg:leading-[2.18vw] font-[700] ">
                    Home
                  </p>
                </div>
                <p className="text-[#495566] text-[3.05vw] lg:mb-0 mb-[3.05vw] leading-[4.44vw] lg:text-[1.04vw] lg:leading-[1.56vw] font-[500]">
                  Keep your loved ones assured of your health and well-being
                  with detailed health insights, no matter the distance
                </p>
                <a
                  className="text-[#FFFFFF] w-[13.61vw] text-[2.69vw] leading-[2.22vw] uppercase lg:text-[0.83vw] font-poppins font-[600] lg:leading-[1.04vw] lg:w-[5.26vw] h-[5.55vw] lg:h-[2.60vw] flex bg-[#0055CD] px-[3.33vw] lg:px-[1.56] py-[1.38vw] lg:py-[0.78vw] items-center justify-center border-solid border border-[#0055CD] rounded-tl-[30px] rounded-bl-[30px] rounded-tr-[30px] "
                  href="/for-home"
                >
                  View
                </a>
              </div>
            </div>
            <div className='lg:w-[40vw] w-[85.27vw] h-[55.55vw] lg:overflow-hidden lg:h-[26.09vw] shadow-lg rounded-[1.09vw] relative "'>
              <img
                className="absolute w-[41.66vw] lg:w-[19.58vw] h-[-webkit-fill-available]"
                src={require("../../Assests/Images/Dozee_for_Hospital-two.png")}
                alt="Dozee_for_Hospital"
              />
              <div className="absolute flex left-[39.16vw] lg:left-[18.38vw] lg:gap-y-[2.44vw] right-[5.55vw] -translate-y-1/2 lg:right-[2.5vw] w-[43.33vw] top-[50%] flex-col lg:w-[20.83vw] ">
                <div className="font-poppins">
                  <p className="lg:text-[1.82vw] text-[3.05vw] leading-[4.72vw] text-[#495566] lg:leading-[3.33vw] font-[500]">
                    Dozee for
                  </p>
                  <p className="lg:text-[2.96vw] lg:mb-0 mb-[2.77vw] text-[5.55vw] leading-[4.72vw] text-[#0055D2] lg:leading-[2.18vw] font-[700]">
                    Hospital
                  </p>
                </div>
                <p className="text-[#495566] lg:mb-0 mb-[2.77vw] text-[3.05vw] leading-[4.44vw] lg:text-[1.04vw] lg:leading-[1.56vw] font-[500]">
                  Enhance patient outcomes with Automated Remote Patient
                  Monitoring at scale in your hospitals{" "}
                </p>
                <a
                  className="text-[#FFFFFF] w-[13.61vw] text-[2.69vw] leading-[2.22vw] h-[5.55vw] px-[3.33vw] py-[1.38vw] uppercase lg:text-[0.83vw] font-poppins font-[600] lg:leading-[1.04vw] lg:w-[5.26vw] lg:h-[2.60vw] flex bg-[#0055CD] lg:px-[1.56] lg:py-[0.78vw] items-center justify-center border-solid border border-[#0055CD] rounded-tl-[30px] rounded-bl-[30px] rounded-tr-[30px] "
                  href="/for-hospitals"
                >
                  View
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default DoubleImgwithTxt;
