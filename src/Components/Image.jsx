import React from 'react'

const Image = (props) => {
    return (<React.Fragment>
        <img src={(props.src)} width={(props.w)} height={(props.h)} alt="banner" />
             </React.Fragment>)

}

export default Image