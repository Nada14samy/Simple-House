import React from "react";
import {MainContact, ContactFrom,Qustions } from "../../Section/index";
const ContactPage = ()=>{
    return(
        <div className="app bg-white flex flex-col">
        
        <MainContact />
        <ContactFrom />
        <Qustions />
    
        </div>
    );
}
export default ContactPage;