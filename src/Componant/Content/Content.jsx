import React from "react";
import "./Content.css"
const Content = (props)=>{
    return(
        <div className="w-full flex justify-center items-center flex-wrap mb-12 mt-9">
            <div className="text w-11/12 flex flex-wrap" >
                <img src={props.image} alt="imgText" />
                <div className="content ml-7">
                    <h4 className="text-2xl mb-4 text-slate-500">{props.title}</h4>
                    <p className="leading-8 w-5/6 opacity-60">
                       {props.text}
                    </p>
                    <button className=" mt-8 border-2 border-zinc-400 px-6 py-2 text-xl text-neutral-600">{props.btn}</button>
                </div>
            </div>
        </div>
    );
}
export default Content;