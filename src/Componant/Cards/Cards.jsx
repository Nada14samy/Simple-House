import React from "react";

const Cards = (props) => {
    return (
        <>
            <div className="container text-center w-80 flex flex-col justify-center items-center mb-6 mx-5">
                <span className="text-7xl h-32 opacity-40">{props.icon }</span>
                <p className="text-xl px-5 mb-7 leading-8 opacity-40">{props.title}</p>
                <button className="text-lg bg-sky-800 text-white py-2 px-7 my-4">{props.btn}</button>
            </div>
        </>
    );
}

export default Cards;