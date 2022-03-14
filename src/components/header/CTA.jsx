import React from "react";

const CTA = () => {
    return (
        <div className='cta'>
           <a href={process.env.REACT_APP_HEADER_BUTTON_1_LINK} className='btn'>{process.env.REACT_APP_HEADER_BUTTON_1_TITLE}</a>
           <a href={process.env.REACT_APP_HEADER_BUTTON_2_LINK} className='btn btn-primary'>{process.env.REACT_APP_HEADER_BUTTON_2_TITLE}</a>
        </div>
    )
}

export default CTA
