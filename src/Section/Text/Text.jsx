import React from "react";
import "./Text.css";
const Text = () => {
    return (
        <div className="text w-full flex justify-center items-center flex-wrap mb-12 mt-9">
            <div className="text-item w-11/12 flex flex-wrap" >
                <img src={require('../../img/about-06.jpg')} alt="imgText" className="image" />
                <div className="ml-7 content ">
                    <h4 className="text-3xl mb-4 text-slate-500 font-extralight">History of our restaurant</h4>
                    <p className="leading-8 w-5/6 opacity-60 mb-4">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae enim fugit quisquam, deleniti a, aliquam, explicabo tenetur amet porro dolore nulla quis.
                    </p>
                    <p className="leading-8 w-5/6 opacity-60">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae enim fugit quisquam, deleniti a, aliquam, explicabo tenetur amet porro dolore nulla quis. A, magnam sequi! Omnis nam perspiciatis expedita quam.
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Text;

