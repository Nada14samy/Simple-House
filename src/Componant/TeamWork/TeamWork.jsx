import React from "react";
import AboutData from "../../Data/AboutData";
import TeamCards from "./TeamCards";
const TeamWork = () => {
    const cards = AboutData.map((item) => {
        return <TeamCards key={item.id} title={item.title} jobDesc={item.jobDesc} image={item.image} desc={item.desc} />
    })

    return (
        <div className="w-11/12 flex flex-wrap justify-center">
            {cards}
        </div>
    )
}
export default TeamWork;