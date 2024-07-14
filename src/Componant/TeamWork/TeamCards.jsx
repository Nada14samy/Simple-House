import React from "react";
import {iconsTeam} from "../../Data/AboutData";
import SocialTeam from "./SocialTeam";
import "./TeamCards.css";
const TeamCards = (props) => {
    const icons = iconsTeam.map((item)=>{
        return <SocialTeam key={item.id} icon={item.icon} link={item.link}/>
    })
    return (
        <>
            <div className="teamwork flex w-1/2 my-10 ">
                <img src={props.image} alt="imgAbout" />
                <div className="text w-2/4 pl-5">
                    <h3 className="text-3xl text-cyan-600 mb-2">{props.title}</h3>
                    <p className="text-xl text-rose-600 mb-5">{props.jobDesc}</p>
                    <p className="text-lg leading-7 text-gray-600">{props.desc}</p>
                    <div className="icon flex mt-8">
                        {icons}
                    </div>
                </div>
            </div>
        </>
    )
}
export default TeamCards;