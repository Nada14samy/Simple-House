import React from "react";
import { Form, Address } from "../../Componant/index";
import "./ContactFrom.css";
const ContactFrom = () => {
    return (
        <div className="w-full flex flex-col items-center">
            <div className="contactFrom w-full flex justify-center my-10 flex-wrap">
                <Form />
                <Address />
            </div>
            <div className="w-4/5 m-auto my-10">
                <iframe title="Address Map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14689.352403423942!2d-43.374972!3d-23.011355!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bdb695cd967b7%3A0x171cdd035a6a9d84!2sAv.%20L%C3%BAcio%20Costa%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%20Brazil!5e0!3m2!1sen!2sth!4v1720733465925!5m2!1sen!2sth" width={"100%"} height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>

    );
}
export default ContactFrom;