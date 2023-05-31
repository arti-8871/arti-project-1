import React from 'react'
const Images = (props) => {
    const {path} = props
    console.log(path)
  return (<React.Fragment>
   
    <img  src={path} alt="bannerImg" />
    </React.Fragment>)
}

export default Images