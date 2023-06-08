

import React, { useState, useRef, useEffect } from 'react'

const DataTransfr = () => {
    const items = [
        {
            "key": 1,
            "id": "line_item1",
            "item": "line item 1",
            "checkSvg": <svg width="20" fill="blue" className="MuiSvgIcon-root inline" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckBoxIcon"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></svg>,
            "UncheckSvg": <svg width="20" className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv inline" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckBoxOutlineBlankIcon"><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path></svg>
        },
        {
            "key": 2,
            "id": "line_item2",
            "item": "line item 2",
            "checkSvg": <svg width="20" fill="blue" className="MuiSvgIcon-root inline" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckBoxIcon"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></svg>,
            "UncheckSvg": <svg width="20" className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv inline" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckBoxOutlineBlankIcon"><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path></svg>
        },
        {
            "key": 3,
            "id": "line_item3",
            "item": "line item 3",
            "checkSvg": <svg width="20" fill="blue" className="MuiSvgIcon-root inline" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckBoxIcon"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></svg>,
            "UncheckSvg": <svg width="20" className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv inline" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckBoxOutlineBlankIcon"><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path></svg>
        }
    ]
    let [changeSvg, setChangeSvg] = useState(false);
    let [clickedClass, setclickedClass] = useState(false);
    let [clickedItem, setClickedItem] = useState([])
    let [listArr, setListArr] = useState(items)
    let clicked = useRef();
    let p = []
    const selected = (e) => {
        console.log("selected")

    }


    const trnsfer = (() => {
        console.log(p)
        console.log("transfer")
    })
    const revert = (() => {
        console.log("revert")
    })
    return (
        <React.Fragment>
            <div className='p-20'>
                <div>DataTransfr</div>
                <div className='tranferData flex items-center justify-evenly'>
                    <div className="fromTransfer">
                        <div className='choices'>

                            <div><span>choices</span></div>
                            <div className='selected'>1/8 selected</div>
                        </div>
                        <div className='transferingData'>
                            <ul>
                                {
                                    items.map((i) => {
                                        return (<li key={i.key} id={`line_item${i.key}`} className={clickedClass ? "selectd" : "not"} ref={clicked} onClick={(e) => selected(e)} >
                                            <input type="checkbox" id={i.id} />
                                            <span>{i.item}</span>
                                        </li>)
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    <div>
                        <button className='butnToTranfer' onClick={() => revert()} ><span>	&#60;</span></button>
                        <button onClick={() => trnsfer()}><span>	&#62;</span></button>
                    </div>
                    <div className="toTransfer">
                        <div className='chosen'>

                            <div><svg width="20" className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv inline" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckBoxOutlineBlankIcon"><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path></svg><span>chosen</span></div>
                            <div className='selected'>1/8 selected</div>
                        </div>

                    </div>
                </div>
            </div>


        </React.Fragment>
    )
}

export default DataTransfr




