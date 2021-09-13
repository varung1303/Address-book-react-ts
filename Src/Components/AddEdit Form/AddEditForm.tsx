import React, { Component } from 'react';
import Work from '../../Images/blank-icon.jpg';
//import {ShowHideForm} from '../Home/Home';
//import AddContactDetails from '../Add Edit Delete/AddContact';
import './Style.scss';
//import {editAdd} from '../Add Edit Delete Contact/AddContact';
//import {LoadFile} from '../Add Edit Delete/AddEditDelete';
import LabelInput from './LabelInput';
//import Input from './Input';
//import Label from './Label';
//import ButtonComponent from './ButtonComponent';
import {HideAddForm} from '../Home/Home';




interface AddEditFormProps{
    AddContact:any,
    LoadImageFile:any
    ContactList:any
    ContactId:any
    
}

export default class AddEditForm extends Component<AddEditFormProps>{
    constructor(props:AddEditFormProps){
        super(props);
        this.state={

        }
    }

    AddContact=()=>{
        var editName = (document.getElementById("name")as HTMLInputElement).value; 
        var editMail = (document.getElementById("email")as HTMLInputElement).value; 
        var editMobile =  (document.getElementById("mobile")as HTMLInputElement).value;
        var editLandline =  (document.getElementById("landline")as HTMLInputElement).value;
        var editWebsite =  (document.getElementById("website")as HTMLInputElement).value;
        var editAdd1 =  (document.getElementById("addressLine1")as HTMLInputElement).value;
        var editAdd2 =  (document.getElementById("addressLine2")as HTMLInputElement).value ;
        var editAdd3 =  (document.getElementById("addressLine3")as HTMLInputElement).value;
        this.props.AddContact(editName,editMail,editMobile,editLandline,editWebsite,editAdd1, editAdd2,editAdd3);
    }

    
    render()
    {
    
    return (
        <div id="displayForm">
        <div id="addEditForm" className="add-form hide">
            <div id="formContent" className="form-content">
                <h1 id="headerAddEdit">Add New Contact</h1>
                <form  id="form" autoComplete={'' + Math.random()}>
                    <LabelInput LabelClass="required form-label input-label margin-style" LabelId="addName" LabelDivClass="nameDetail" InputDivClass=""
                    LabelFor="name"  LabelText="Name: " InputClass="form-fields similar-1 input-label margin-style" InputId="name" InputType="text" InputLength="32" />
                    
                    <LabelInput LabelClass="required form-label input-label margin-style" LabelId="" LabelDivClass="margin-top" InputDivClass=""
                    LabelFor="email"  LabelText="Email: " InputClass="form-fields similar-1 input-label margin-style" InputId="email" InputType="email" InputLength="" />
                    
                    
                    <div>
                        <div className="mobile-div">
                            <LabelInput LabelClass="required form-label" LabelId="" LabelDivClass="margin-top"
                            LabelFor="mobile"  LabelText="Mobile: " InputClass="form-fields " InputId="mobile" InputType="tel" InputLength="10" InputDivClass="mobile-input" />
                        </div>
                        <div className="landline-div">
                            <LabelInput LabelClass="required form-label" LabelId="" LabelDivClass="margin-top"
                            LabelFor="landline"  LabelText="Landline: " InputClass="form-fields" InputId="landline" InputType="tel" InputLength="10" InputDivClass="landline-input" />
                        </div>
                    </div>
                    
                    <LabelInput LabelClass="required form-label input-label margin-style" LabelId="" LabelDivClass="margin-top" InputDivClass=""
                    LabelFor="website"  LabelText="Website: " InputClass="form-fields similar-1 input-label margin-style" InputId="website" InputType="text" InputLength="" />
                    

                    <LabelInput LabelClass="form-label input-label margin-style" LabelId="" LabelDivClass="margin-top" InputDivClass=""
                    LabelFor="addressLine1"  LabelText="Address Line 1" InputClass="address-label form-fields input-label margin-style" InputId="addressLine1" InputType="text" InputLength="" />
                    
                    <LabelInput LabelClass="form-label input-label margin-style" LabelId="" LabelDivClass="margin-top" InputDivClass=""
                    LabelFor="addressLine2"  LabelText="Address Line 2" InputClass="address-label form-fields input-label margin-style" InputId="addressLine2" InputType="text" InputLength="" />
                    
                   
                        
                    
                    <LabelInput LabelClass="form-label input-label margin-style" LabelId="" LabelDivClass="margin-top" InputDivClass=""
                    LabelFor="addressLine3"  LabelText="Address Line 3" InputClass="address-label form-fields input-label margin-style" InputId="addressLine3" InputType="text" InputLength="" />
                    
                    
                   
                  
                    
                    <div className="margin-top">
                        <label className="form-label input-label margin-style" htmlFor="file"  >Choose Display Picture</label>
                    </div>
                   
                    <div>
                        <div><img alt="blankImage" className=" image-preview " src={Work} id="imagePrev"></img></div>
                        <input className="input-label image-upload " type="file"  accept="image/*"  id="file" onChange={this.props.LoadImageFile} ></input>
                        <label className="upload-image-button input-label" id="uploadImageAdd" htmlFor="file" >Upload Image</label>
                    </div>
                    <div>
                        <input className = "form-buttons add-update " type="button" value="Add" id="addDetails" onClick={this.AddContact} ></input>
                        <input className = "form-buttons cancel-btn " type="button" value="Cancel" id="canDetails" onClick={HideAddForm} ></input>
                    </div>
                </form> 
            </div>
        </div>
        </div>
        );
    }
}

export function CheckButtonText(){
    if((document.getElementById("addDetails")as HTMLButtonElement).value === "Update")
    {
        return true;
    }
    else{
       return false;
    }
}

export function ShowHideForm(bool:any,type:any){
    
    if(bool)
    {
        if(type==="Edit")
        {
            (document.getElementById("addEditForm")as HTMLElement).classList.remove("hide");
            (document.getElementById("headerAddEdit")as HTMLElement).innerHTML = "Edit Contact";
            (document.getElementById("addDetails")as HTMLButtonElement).value = "Update";

        }else{
            (document.getElementById("addEditForm")as HTMLElement).classList.remove("hide");
            (document.getElementById("headerAddEdit")as HTMLElement).innerHTML = "Add New Contact";
            (document.getElementById("addDetails")as HTMLButtonElement).value = "Add";
        }
    }
    else{
        (document.getElementById("addEditForm")as HTMLElement).classList.add("hide");
    }
    (document.getElementById("formContent")as HTMLElement).scrollTo(0, 0);
    ClearForm();
}
    




export function ClearForm(){
    var frm = document.querySelectorAll(".form-fields");
	//console.log(frm);
    for(var i=0;i<8;i++)
    {
       (frm[i]as HTMLInputElement).value = '';
    }
    var preview = document.getElementById("imagePrev")as HTMLImageElement;
    preview.src = Work;
}

export function PrePopulateForm(AddressBook:any, ContactId:any){
    ShowHideForm(true,"Edit");
    (document.getElementById("name")as HTMLInputElement).value = AddressBook[ContactId].name;
    (document.getElementById("email")as HTMLInputElement).value = AddressBook[ContactId].mail;
    (document.getElementById("mobile")as HTMLInputElement).value = AddressBook[ContactId].mobile;
    (document.getElementById("landline")as HTMLInputElement).value = AddressBook[ContactId].landline;
    (document.getElementById("website")as HTMLInputElement).value = AddressBook[ContactId].website;
    (document.getElementById("addressLine1")as HTMLInputElement).value = AddressBook[ContactId].addressLine1;
    (document.getElementById("addressLine2")as HTMLInputElement).value = AddressBook[ContactId].addressLine2;
    (document.getElementById("addressLine3")as HTMLInputElement).value = AddressBook[ContactId].addressLine3;
    (document.getElementById("imagePrev")as HTMLImageElement).src = AddressBook[ContactId].dp;

}





