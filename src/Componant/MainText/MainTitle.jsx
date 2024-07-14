import React from "react";
import "./MainTitle.css"

const MainTitle = (props) => {
    return (
        <div className="h-fit">
            <h1 className="main-title text-3xl mb-5">{props.title}</h1>
            <p className="main-desc text-xl opacity-60 leading-9 pt-2">{props.desc}</p>
        </div>
    )
}
export default MainTitle;