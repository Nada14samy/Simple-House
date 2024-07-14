import React from "react";
import "./From.css";
const Form =()=>{
    return(
        <>
        <form action="" className="form flex flex-col w-1/4 mr-12">
            <input type="text" placeholder="Name" value={"Name"} name="Name" className="mb-5 border-b-2 py-2 text-gray-400" />
            <input type="email" placeholder="Email" value={"Email"} name="Email" className="mb-5 border-b-2 py-2 text-gray-400" />
            <textarea name="" id="" cols="30" rows="6" placeholder="Message" className="border-b-2 mt-5"></textarea>
            <button type="submit" className="bg-blue-800 text-white mt-8 py-2 text-xl">Send</button>
        </form>
        </>
    )
}
export default Form;