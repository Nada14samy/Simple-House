import React from "react";
import { MainTitle } from "../../Componant/index";
import "./MainContact.css";
const MainContact = () => {
    return (
        <>
            <div className=" flex justify-center items-center flex-col">
                <div className="main w-3/5 py-12 flex flex-col justify-center items-center text-center">
                    <MainTitle title="Contact Page"
                        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ipsam nostrum, nam id, iure consequuntur, exercitationem eos numquam voluptatum fugit rerum odio sed et. Ipsam dolorem totam exercitationem ab explicabo?" />
                </div>
            </div>
        </>
    );
}
export default MainContact;