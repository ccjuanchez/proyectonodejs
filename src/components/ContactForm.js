import React from 'react';

const ContactForm =(props) =>(
<div>
    <div className="form-group row">
            <div className="col-md-3">
              <label htmlFor="lastname">Nombre:</label>
            </div>
            <div className="col-md-9">
                <input 
                    type="text" 
                    value={props.firstName}
                    onChange={props.handleFirstNameChange}
                />
            </div>
    </div>
    <div className="form-group row">
            <div className="col-md-3">
              <label htmlFor="lastname">Apellido:</label>
            </div>
            <div className="col-md-9">
                <input 
                    type="text" 
                    value={props.lastName}
                    onChange={props.handleLastNameChange}
                />
            </div>
    </div>
        <div className="form-group row">
            <div className="col-md-3">
              <label htmlFor="lastname">Telefono:</label>
            </div>
            <div className="col-md-9">
                <input 
                    type="text" 
                    value={props.phone}
                    onChange={props.handlePhoneChange}
                />
            </div>
    </div>
    <div className="text-center">
            <button 
                className="btn btn-primary"
                onClick={()=> props.saveContact({
                    firstName: props.firstName,
                    lastName:props.lastName,
                    phone:props.phone
                })}
            >Guardar</button>
    </div>
</div>
);

export default ContactForm;