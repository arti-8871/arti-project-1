import React from 'react'
let logoImg = [
  {
    "key": 1,
    "alt": "logo1",
    "src": require("../../Assests/Images/Global1.73a7e395.png")
  },

  {
    "key": 2,
    "alt": "logo2",
    "src": require("../../Assests/Images/Global2.23f6372b.png")
  },
  {
    "key": 3,
    "alt": "logo3",
    "src": require("../../Assests/Images/Global3.a6b44cff (1).png")
  },

  {
    "key": 4,
    "alt": "logo4",
    "src": require("../../Assests/Images/Global4.d9d5998e.png")
  },
  {
    "key": 5,
    "alt": "logo5",
    "src": require("../../Assests/Images/Global5.ab47a0fe.png")
  }
]
const BestLogos = () => {
  return (<React.Fragment>
    <section>
      <div className='inner-width globalLogo'>
        <div className='text-center'>
          <p>BEST GLOBAL STANDARDS AND PRACTICES</p>
        </div>
        <div className='logos flex justify-between'>
          {
            logoImg.map((i) => {
              console.log(i.alt);
              return (<div className='logoImg' key={i.key}><img src={i.src} alt={i.alt} /></div>);
            })
          }

        </div>
      </div>
    </section>
  </React.Fragment>)
}

export default BestLogos;