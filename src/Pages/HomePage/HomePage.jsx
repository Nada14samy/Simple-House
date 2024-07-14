import React from "react";
import { Main } from '../../Section/index';
import { Content , ButtonScroll } from "../../Componant/index";
import image_01 from "../../img/img-01.jpg"
const HomePage = () => {
    return (
        <div className="app bg-white w-11/12 flex flex-col justify-center px-5 py-9">
            <Main />
            <Content image={image_01} title="Maecenas nulla neque" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae enim fugit quisquam, deleniti a, aliquam, explicabo tenetur amet porro dolore nulla quis. A, magnam sequi! Omnis nam perspiciatis expedita quam." btn="Read More" />
            <ButtonScroll />
        </div>
    )
}
export default HomePage;