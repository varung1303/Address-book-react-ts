//import { render } from "@testing-library/react";
import React, { Component } from "react";
//import ReactDOM from "react-dom";
import './Style.scss';
import Edit from '../../Images/edit-icon.jpg';
import Delete from '../../Images/delete-icon.png';
//import {PrePopulate} from '../Add Edit Delete/AddEditDelete';
//import {DeleteContact} from '../Add Edit Delete/AddEditDelete';
//import Work from '../../Images/work.jpg';
import BtnImage from './BtnImage';
import ContactInformation from './DisplayItem';
//import NameAddress from './NameAddress';
import {PrePopulateForm} from '../AddEdit Form/AddEditForm';

interface DisplayDetailsProps  {
    
    AddressBook:any
    ContactId:any
    EditContact:any
    
    DeleteContact:any
    
}


export default class DisplayDetails extends Component<DisplayDetailsProps>{
    constructor(props:DisplayDetailsProps){
        super(props);
        this.state = {

        }
    }
    render(){
        return(
            <div className="display-details-background hide" id="displayDetails">
            <div id="displayContactDetails" className = "contact-details">
                <DisplayDetailsPopUp AddressBook={this.props.AddressBook} ContactId={this.props.ContactId} 
                EditContact={this.props.EditContact} DeleteContact={this.props.DeleteContact}/>
            </div>
        </div>
        );
    }
}



interface DisplayDetailsPopUpProps  {
    
    AddressBook:any
    ContactId:any
    EditContact:any
    DeleteContact:any
    
}


export class DisplayDetailsPopUp extends Component<DisplayDetailsPopUpProps>{

    constructor(props:DisplayDetailsPopUpProps)
    {
        super(props);
        this.state = {

        }
    }
   render(){
      return(
        <React.Fragment>
        <div className="display-image">
			<img alt="" id="displayedImage" src={this.props.AddressBook[this.props.ContactId].dp} ></img>
		</div>
        <div className="display-all-details">
            <div  id="displayName" className="display-name">{this.props.AddressBook[this.props.ContactId].name}</div>
            <ContactInformation ContactDetailText={this.props.AddressBook[this.props.ContactId].mail} ParentDiv="displayEmail" ContactDetailDiv="emailContent" 
            ParentClass="display-details display-details-margin similar-3" LabelClass="div-float" ContactDetailClass="contact-content" LabelText="Email: " />
            <ContactInformation ContactDetailText={this.props.AddressBook[this.props.ContactId].mobile} ParentDiv="displayMobile" ContactDetailDiv="mobileContent" 
            ParentClass="display-details" LabelClass="div-float" ContactDetailClass="contact-content" LabelText="Mobile: "/>
            <ContactInformation ContactDetailText={this.props.AddressBook[this.props.ContactId].landline} ParentDiv="displayLandline" ContactDetailDiv="landContent" 
            ParentClass="display-details display-details-margin similar-3" LabelClass="div-float" ContactDetailClass="contact-content" LabelText="Landline: "/>
            <ContactInformation ContactDetailText={this.props.AddressBook[this.props.ContactId].website} ParentDiv="displayWebsite" ContactDetailDiv="webContent" 
            ParentClass="display-details display-details-margin" LabelClass="div-float" ContactDetailClass="contact-content" LabelText="Website: "/>
            <ContactInformation ContactDetailText={this.props.AddressBook[this.props.ContactId].addressLine1} ParentDiv="displayAddress1" ContactDetailDiv="addContent" 
            ParentClass="display-details display-details-margin" LabelClass="div-float" ContactDetailClass="contact-content" LabelText="Address: "/>
            <div id="displayAddress2"  className="display-details" >{this.props.AddressBook[this.props.ContactId].addressLine2}</div>
            <div id="displayAddress3"  className="display-details">{this.props.AddressBook[this.props.ContactId].addressLine3}</div>
        </div>
        <div id="editDeleteDiv">
            <BtnImage ImageAlt="edit" ImageId="editBtnLogo" ImageSrc={Edit} ButtonId="editBtn" ButtonText="EDIT" ButtonOnclick={PrePopulateForm} AddressBook={this.props.AddressBook} ContactId={this.props.ContactId}   />
            <BtnImage ImageAlt="delete" ImageId="dltBtnLogo" ImageSrc={Delete} ButtonId="deleteBtn" ButtonText="DELETE" ButtonOnclick={this.props.DeleteContact} AddressBook={this.props.AddressBook}  ContactId={this.props.ContactId} />
            <button type="button" id="closeDisplayDetails" className="close-display-details" onClick={HideDisplayDetails}>CLOSE</button>
        </div>
        </React.Fragment>   
        );
        
    }
}

export function HideDisplayDetails(){
    (document.getElementById("displayDetails")as HTMLElement).classList.add("hide")
}

export function ShowDisplayDetails(){
    (document.getElementById("displayDetails")as HTMLElement).classList.remove("hide");

}









