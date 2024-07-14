import React from "react";
const SocialTeam =(props)=>{
    return(
        <>
            <a href={props.link} className="text-2xl mr-4 text-gray-500">{props.icon}</a>
        </>
    )
}
export default SocialTeam;