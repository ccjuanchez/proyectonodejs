import React,{Component} from 'react';
const ContactForm=(props)=>(
    <div>
        <input 
        type="text" 
        value={props.name}
        onChange={props.onChange}
        />
    <input 
    type="text" 
    value={props.name}
    onChange={props.onChange}
    />
    <input 
        type="text" 
        value={props.value}
        onChange={props.onChange}
    />
    </div>
);
export default ContactForm;