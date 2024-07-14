import React from "react";
import './Main.css';
import { MainTitle , MenuList} from "../../Componant/index";
const Main = () => {
    return (
        <div className="flex justify-center items-center flex-col">
            <div className="main w-3/5 py-12 m-auto flex flex-col justify-center items-center text-center">
                <MainTitle 
                title="Welcome to Simple House" 
                desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ipsam nostrum, nam id, iure consequuntur, exercitationem eos numquam voluptatum fugit rerum odio sed et. Ipsam dolorem totam exercitationem ab explicabo?" 
                />
            </div>
            <div className="h-fit mb-8 w-full flex justify-center flex-col items-center">
                <MenuList/>
            </div>
        </div>
    )
}
export default Main;