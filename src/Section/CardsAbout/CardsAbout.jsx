import React from "react";
import { CardAbout } from "../../Data/AboutData";
import Cards from "../../Componant/Cards/Cards";
import "./CardsAbout.css";

const CardsAbout = () => {
    const CardItem = CardAbout.map((item) => {
        return <Cards key={item.id} icon={item.icon} title={item.title} btn={item.btn} />
    })
    return (
        <div className="w-full flex justify-center items-center flex-wrap">
            {CardItem}
        </div>
    );
}
export default CardsAbout;