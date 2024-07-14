import React from "react";
import { FaPhoneAlt ,FaRegEnvelope } from "react-icons/fa";
import SocialTeam from "../TeamWork/SocialTeam";
import {iconsTeam} from "../../Data/AboutData";
import "./Addrees.css";
const Address =()=>{
    const icons = iconsTeam.map((item)=>{
        return <SocialTeam key={item.id} icon={item.icon} link={item.link}/>
    })
    return(
        <div className="address w-1/4 ml-12">
            <h3 className="text-4xl text-blue-800 font-light mb-10">Our Address</h3>
            <p className="text-lg opacity-50 mb-8">180 Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus 10550</p>
            <p className="flex text-xl text-gray-700 mb-5 mt-10"><span className="text-blue-800 mr-5 pt-2"><FaPhoneAlt/></span> 080-090-0110</p>
            <p className="flex text-xl text-gray-700 mb-5 "><span className="text-blue-800 mr-5 pt-2"><FaRegEnvelope/></span> info@company.co</p>
            <div className="icon flex mt-12">
                 {icons}
            </div>
        </div>
    )
}
export default Address;