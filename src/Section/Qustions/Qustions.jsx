import React from "react";
import { MainTitle } from "../../Componant/index";
import "./Qustions.css";
const Qustions = () => {
    return (
        <div className="w-full flex justify-center items-center flex-col">
            <div className="title w-3/5 py-8 flex flex-col justify-center items-center text-center">
                <MainTitle
                    title="FAQs"
                    desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ipsam nostrum, nam id, iure consequuntur"
                />
            </div>
            <div className="qustion w-1/2 justify-center">
                <details className="w-full my-8">
                    <summary className="border-2 text-xl text-gray-500 py-4 px-4">1. Fusce eu lorem et dui #09C maximus varius?</summary>
                    <p className="py-6 text-lg pl-9 text-gray-500 pr-3">#666 Duis blandit purus vel nenenatis rutrum. Pellentesque pellentesque tindicunt lorem, ac egestas massa sollicitudin vel. Nam scelerisque vulputate quam mollis pretium. Morbi condimentum volutpat.</p>
                </details>
                <details className="w-full my-8">
                    <summary className="border-2 text-xl text-gray-500 py-4 px-4">2. Vestibulum #999 ante ipsum primis in faucibus orci?</summary>
                    <p className="py-6 text-lg pl-9 text-gray-500 pr-3">Mauris euismod odio at commodo rhoncus. Maecenas nec interdum purus, sed auctor est. Sed eleifend urna nec diam consectetur, a aliquet turpis facilisis. Integer est sapien, sagittis vel massa vel, interdum euismod erat. Aenean sollicitudin nisi neque, efficitur posuere urna rutrum porta.</p>
                </details>
                <details className="w-full my-8">
                    <summary className="border-2 text-xl text-gray-500 py-4 px-4">3. Can I redistribute this template as a ZIP file?</summary>
                    <p className="py-6 text-lg pl-9 text-gray-500 pr-3">Redistributing this template as a downloadable ZIP file on any template collection site is strictly prohibited. You will need to contact TemplateMo for additional permissions about our templates. Thank you.</p>
                </details>
                <details className="w-full my-8">
                    <summary className="border-2 text-xl text-gray-500 py-4 px-4"> 4. Ut ac erat sit amet neque efficitur faucibus et in lectus?</summary>
                    <p className="py-6 text-lg pl-9 text-gray-500 pr-3">Vivamus viverra pretium ultricies. Praesent feugiat, sapien vitae blandit efficitur, sem nulla venenatis nunc, vel maximus ligula sem a sem. Pellentesque ligula ex, facilisis ac libero a, blandit ullamcorper enim.</p>
                </details>
            </div>

        </div>
    )
}
export default Qustions;