import about_01 from "../img/about-01.jpg";
import about_02 from "../img/about-02.jpg";
import about_03 from "../img/about-03.jpg";
import about_04 from "../img/about-04.jpg";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube ,FaGlassMartiniAlt ,FaPepperHot ,FaSeedling} from "react-icons/fa";
const AboutData = [{
    id: 1,
    image: about_01,
    title: "Jennifer Soft",
    jobDesc: "Founder and CEO",
    desc: "Vivamus cursus leo nec sem feugiat sagittis. Duis ut feugiat odio, sit amet accumsan odio.",
},
{
    id: 2,
    image: about_02,
    title: "Daisy Walker",
    jobDesc: "Executive Chef",
    desc: "Praesent non vulputate elit. Orci varius natoque et magnis dis parturient, nascetur ridiculus mus.",
    iconFacebook: <FaFacebook />,
    iconTwitter: <FaTwitter />,
},
{
    id: 3,
    image: about_03,
    title: "Florence Nelson",
    jobDesc: "Kitchen Manager",
    desc: "Aenean sapien sem, ultricies sed vulputate et, auctor vel mauris. Integer sit amet diam eget est facilisis lacinia vitae.",
},
{
    id: 4,
    image: about_04,
    title: "Valentina Martin",
    jobDesc: "Culinary Director",
    desc: "Praesent non vulputate elit. Orci varius natoque penatibus et magnis montes, nascetur ridiculus mus.",
}];
export default AboutData;

const iconsTeam = [
    {
        id: 1,
        icon: <FaFacebook />,
        link: "https://www.facebook.com/",
    },
    {
        id: 2,
        icon: <FaTwitter />,
        link: "https://twitter.com/",
    },
    {
        id: 3,
        icon: <FaInstagram />,
        link: "https://www.instagram.com/",
    },
    {
        id: 4,
        icon: <FaYoutube />,
        link: "https://www.youtube.com/",
    },
]
export { iconsTeam };



const CardAbout = [{
    id: 1,
    icon: <FaPepperHot /> ,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nislat nunc ultricies, et ultricies nisl ultricies.",
    btn: "Read More"
},
{
    id: 2,
    icon: <FaSeedling />,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nislat nunc ultricies, et ultricies nisl ultricies.",
    btn: "Read More"
},
{
    id: 3,
    icon: <FaGlassMartiniAlt/>,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nislat nunc ultricies, et ultricies nisl ultricies.",
    btn: "Read More"
},
];
export {CardAbout};
