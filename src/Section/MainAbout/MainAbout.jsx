import React from "react";
import { MainTitle, TeamWork } from "../../Componant/index";
import { CardsAbout } from "../index";
import "./MainAbout.css";
const MainAbout = () => {
    return (
        <>
            <div className=" flex justify-center items-center flex-col">
                <div className="main w-3/5 py-12 flex flex-col justify-center items-center text-center">
                    <MainTitle
                        title="About Simple House"
                        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ipsam nostrum, nam id, iure consequuntur, exercitationem eos numquam voluptatum fugit rerum odio sed et. Ipsam dolorem totam exercitationem ab explicabo?"
                    />
                </div>
                <div className="w-full flex justify-center flex-wrap">
                    <TeamWork />
                </div>
                <div className="article w-11/12 h-56 my-12">
                    {/* back-ground */}
                </div>
                <div className="w-11/12 my-9">
                    <CardsAbout />
                </div>
            </div>
        </>
    )
}
export default MainAbout;