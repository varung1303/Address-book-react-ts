import React, { Component } from 'react';

import Blog from '../../Images/blog-icon.png';
import './Style.scss';
import Work from '../../Images/blank-icon.jpg';
import DisplayDetails from '../Display Details/DisplayDetails';
import AddEditForm from '../AddEdit Form/AddEditForm';
import ContactTable from '../Contact Table/ContactTable';
import AlphabeticalFiltering from '../Alphabet Filter/AlphabeticalFiltering';
import CustomFilter from '../Custom FIlter/CustomFilter';
import {displayContactsByFilter} from '../Custom FIlter/CustomFilter';
import {ShowHideForm} from '../AddEdit Form/AddEditForm';
import {ShowDisplayDetails} from '../Display Details/DisplayDetails';
import {HideContactTable} from '../Contact Table/ContactTable';
import {HideAlphabetFilter} from '../Alphabet Filter/AlphabeticalFiltering';
import {HideDisplayDetails} from '../Display Details/DisplayDetails';
import {ShowAlphabetFilter} from '../Alphabet Filter/AlphabeticalFiltering';
import {ShowContactTable} from '../Contact Table/ContactTable';
import {ClearFilterInput} from '../Custom FIlter/CustomFilter';
import {CheckButtonText} from '../AddEdit Form/AddEditForm';
import {SetDefaultFilterValue} from '../Custom FIlter/CustomFilter';

var imageAdd:any=Work;
var dataUrl = imageAdd;

interface contactItemProps{
    contact: any
    noOfContacts:any
    contactId:any
    alphabets:any
    selectedAlphabets:any
    selectedAlphabetsContacts:any
    filterValue:any
   
}

class Header extends Component<{},contactItemProps>{
    constructor(props:any){
        super(props);
        this.state = {
            contact:[{
                name:"name",
                mail:"mail",
                mobile:"1111111111",
                landline:"1111111111",
                website:"hello.com",
                addressLine1:"1",
                addressLine2:"2",
                addressLine3:"3",
                id:1,
                dp:"a"

            }],
            noOfContacts:1,
            contactId:0,
            alphabets:[],
            selectedAlphabets:[],
            selectedAlphabetsContacts:[],
            filterValue:"name"
        }

    }

    AddContact = (Name:any,Mail:any,Mobile:any,Landline:any,Website:any,Add1:any, Add2:any,Add3:any)=>{
        
        ShowContactTable(this.state.contact.length);
        if(CheckButtonText())
        {
            this.editContact(Name,Mail,Mobile,Landline,Website,Add1, Add2,Add3);
        }else{
        
            if(Validation(Name,Mail,Mobile,Landline,Website)){
                interface Value{
                    name: any;
                    mail:any,
                    mobile:any,
                    landline:any,
                    website:any,
                    addressLine1:any,
                    addressLine2:any,
                    addressLine3:any,
                    id:any,
                    dp:any
                };
                var details:Value = {
                    name: Name,
                    mail: Mail,
                    mobile: Mobile,
                    landline: Landline,
                    website: Website,
                    addressLine1: Add1,
                    addressLine2: Add2,
                    addressLine3: Add3,
                    id: this.state.noOfContacts,
                    dp: imageAdd
                }
                imageAdd=Work;
                var updated = this.state.contact;
                if(this.state.noOfContacts===1){
                    updated = [];
                    updated.push(details);
                    updated.sort(Compare);
                    this.setState({contact:updated},()=>this.callBack(Name));
                    this.setState({noOfContacts:this.state.noOfContacts+1},()=>this.callBack(Name));
                    console.log(this.state.contact);
                    document.getElementById("watermark")?.classList.add("hide");
                     

                }else{
                    updated.push(details);
                    updated.sort(Compare);
                    this.setState({contact:updated},()=>this.callBack(Name));
                    this.setState({noOfContacts:this.state.noOfContacts+1},()=>this.callBack(Name));
                    console.log(this.state.contact);
                    document.getElementById("watermark")?.classList.add("hide");
                     
                }   
                    
            }
               
        
        }
        
    }
    callBack=(nameAdd:any)=>{
        var letter = nameAdd.charAt(0).toUpperCase();
                if(!this.state.alphabets.includes(letter))
                {
                    let newLetters:any;
                    
                    newLetters = this.state.alphabets;
                    newLetters.push(letter);
                    newLetters.sort(CompareLetters);
                    this.setState({alphabets:newLetters},()=>console.log(this.state.alphabets))
                }
            console.log(this.state.contact);
            this.setState({selectedAlphabetsContacts:this.state.contact},()=>console.log(this.state.selectedAlphabetsContacts));
            
            
            HideAddForm();
            ShowAlphabetFilter(this.state.alphabets.length);
            
    }

    editContact=(editName:any,editMail:any,editMobile:any,editLandline:any,editWebsite:any,editAdd1:any, editAdd2:any,editAdd3:any)=>{
        
        var newContactList:any = this.state.contact;
        let startingLetterOld:any = newContactList[this.state.contactId].name.charAt(0).toUpperCase();
        if(Validation(editName,editMail,editMobile,editLandline,editWebsite)){
        newContactList[this.state.contactId].name = editName;
        newContactList[this.state.contactId].mail = editMail;
        newContactList[this.state.contactId].mobile = editMobile;
        newContactList[this.state.contactId].landline = editLandline;
        newContactList[this.state.contactId].website = editWebsite;
        newContactList[this.state.contactId].addressLine1 = editAdd1;
        newContactList[this.state.contactId].addressLine2 = editAdd2;
        newContactList[this.state.contactId].addressLine3 = editAdd3;
        if(imageAdd!==dataUrl)
                { newContactList[this.state.contactId].dp = imageAdd;}
        

        let startingLetterNew:any = editName.charAt(0).toUpperCase();
        let truth:boolean = false;
        for(let n in this.state.alphabets)
        {
            if(this.state.alphabets[n]===startingLetterNew)
            {
                truth = true;
                break;

            }
        }
        let newLettersNew:any =  this.state.alphabets;
        if(!truth)
        {
            newLettersNew.push(startingLetterNew);
        }
        truth = false;
        
        //let newLettersOld:any = this.state.letters;
        for(let n in newContactList)
        {
            if(newContactList[n].name.toUpperCase().startsWith(startingLetterOld))
            {
                truth = true;
                break;

            }
        }
        if(!truth)
        {
            for(let n in newLettersNew)
            {
                if(newLettersNew[n]===startingLetterOld)
                {
                    newLettersNew.splice(n,1);
                    break;
                }
            } 
        }
        newLettersNew.sort(CompareLetters);
        this.setState({alphabets:newLettersNew},()=>console.log(this.state.alphabets));

        
        
        newContactList.sort(Compare);
        this.setState({contact:newContactList},()=>console.log(this.state.contact));
        ShowHideForm(false,"Edit");
    }
    }

    DeleteContact=()=>{
        var updatedContactList:any = this.state.contact;
        var nameToBeDeleted:any = updatedContactList[this.state.contactId].name;
        let startingLetter:any = nameToBeDeleted.charAt(0).toUpperCase();
        updatedContactList.splice(this.state.contactId,1);
        let truth:boolean = false;
        for(let n in updatedContactList)
        {
            if(updatedContactList[n].name.toUpperCase().startsWith(startingLetter))
            {   truth = true;
                break;
            }
            
        }
        var newLetters:any =this.state.alphabets;
        if(!truth)
        {
            for(var j in this.state.alphabets)
            {
                if(startingLetter===this.state.alphabets[j])
                {
                    newLetters.splice(j,1);
                    console.log(newLetters);
                }
            }
        }
        this.setState({contact:updatedContactList},()=>console.log(this.state.contactId));
        this.setState({alphabets:newLetters},()=>console.log(this.state.alphabets));
        this.setState({contactId:0},()=>console.log(this.state.contactId));
        HideDisplayDetails();

        alert("The contact " + nameToBeDeleted + " has been deleted.");

        HideContactTable(this.state.contact.length);

        HideAlphabetFilter(this.state.alphabets.length);

        HideDisplayDetails();
        

        if(this.state.contact.length<1)
        {
            var newContact:any = [{
                name:"name",
                mail:"mail",
                mobile:"1111111111",
                landline:"1111111111",
                website:"hello.com",
                addressLine1:"1",
                addressLine2:"2",
                addressLine3:"3",
                id:1,
                dp:"a"

            }]

            this.setState({contact:newContact},()=>console.log(this.state.contact));
            this.setState({noOfContacts:1});
            this.setState({contactId:0});
        }
        if(this.state.noOfContacts<2)
        {
            document.getElementById("watermark")?.classList.remove("hide");
        }
        
    }

    getContactId=(event:any)=>{
        //console.log(this.state.contact);
        var elementId = ((event.target)as HTMLElement).id; 
        var extractedId:number = parseInt(elementId.charAt((elementId.length-1)));
        console.log(extractedId);
        
        for(var n in this.state.contact)
        {
            console.log(this.state.contact[n]);
            if(this.state.contact[n].id===extractedId)
            {
                this.setState({contactId:n},()=>console.log(this.state.contactId))
            }
        }

        ShowDisplayDetails();
    }

    loadImageFile=(event:any)=>{
        var preview = event.target.previousSibling.firstElementChild;
        imageAdd = URL.createObjectURL(event.target.files[0]);
        preview.src = imageAdd;
    }


    /*PrePopulateForm=()=>{
        ShowHideForm(true,"Edit");
        (document.getElementById("name")as HTMLInputElement).value = this.state.contact[this.state.contactId].name;
        (document.getElementById("email")as HTMLInputElement).value = this.state.contact[this.state.contactId].mail;
        (document.getElementById("mobile")as HTMLInputElement).value = this.state.contact[this.state.contactId].mobile;
        (document.getElementById("landline")as HTMLInputElement).value = this.state.contact[this.state.contactId].landline;
        (document.getElementById("website")as HTMLInputElement).value = this.state.contact[this.state.contactId].website;
        (document.getElementById("addressLine1")as HTMLInputElement).value = this.state.contact[this.state.contactId].addressLine1;
        (document.getElementById("addressLine2")as HTMLInputElement).value = this.state.contact[this.state.contactId].addressLine2;
        (document.getElementById("addressLine3")as HTMLInputElement).value = this.state.contact[this.state.contactId].addressLine3;
        (document.getElementById("imagePrev")as HTMLImageElement).src = this.state.contact[this.state.contactId].dp;

    }*/

    

    getAlphabetsToBeDisplayed=(event:any)=>{
        var newSelectedLetters:any=[];
        var parent = event.target.parentElement;
        var checkBoxes = parent.getElementsByTagName("input");
        for(var i=0;i<checkBoxes.length;i++)
        {
            if(checkBoxes[i].checked)
            {   if(!newSelectedLetters.includes(checkBoxes[i].value))
                newSelectedLetters.push(checkBoxes[i].value);
            }
        }
        newSelectedLetters.sort(CompareLetters);
        this.setState({selectedAlphabets:newSelectedLetters},this.getContactsByAlphabet);
        
        
    }

    getContactsByAlphabet=()=>{

        if(this.state.selectedAlphabets.length>0)
        {
        let newSelectedLetterContacts:any=[];
        
        var tempLetters:any = this.state.selectedAlphabets;
        var tempContacts:any = this.state.contact;
        for(var p=0;p<tempLetters.length;p++)
        {
            
            var letterCompare = tempLetters[p].toUpperCase();
            console.log("hello");
            for(var x=0;x<tempContacts.length;x++)
            {
                var name = tempContacts[x].name.toUpperCase();
                if(name.startsWith(letterCompare))
                {
                    console.log("hello");
                    newSelectedLetterContacts.push(tempContacts[x]);
                }
            }
        }
        
        newSelectedLetterContacts.sort(Compare);
        this.setState({selectedAlphabetsContacts:newSelectedLetterContacts},()=>console.log(this.state.selectedAlphabetsContacts));
    }
    else{
        let newSelectedLetterContacts:any=this.state.contact;
        this.setState({selectedAlphabetsContacts:newSelectedLetterContacts},()=>console.log(this.state.selectedAlphabetsContacts));
    }
    }

    getFilterValue=(event:any)=>{
        
        var newFilterValue = event?.target.value;
        this.setState({filterValue:newFilterValue},()=>displayContactsByFilter(this.state.filterValue,this.state.selectedAlphabetsContacts,this.state.contact));

    }

    

    setAllDefault=()=>{
        this.setState({selectedAlphabetsContacts:this.state.contact},()=>console.log(this.state.selectedAlphabetsContacts));
        ClearFilterInput();
        var parent = document.getElementById("alphabetFilter")as HTMLElement;
        var checkBoxes = parent.getElementsByTagName("input");
        for(var i=0;i<checkBoxes.length;i++){
            checkBoxes[i].checked=false;
        }
        this.setState({filterValue:"name"},()=>console.log(this.state.filterValue));

       
       for(var n in this.state.contact)
        {   var newId = "contactCard"+this.state.contact[n].id;
            if(document.getElementById(newId)?.classList.contains("hide")){
            
                document.getElementById(newId)?.classList.remove("hide");
            }
        }
        SetDefaultFilterValue();
        
            
    
        
    }

    

    
    render(){

        
       return (
        <React.Fragment>
            <div id="header">
                <div id="headerTitle">
                    <h1 id="title"> Address Book </h1>
                </div>

                <div id="navigationBar" className="navigation-bar">
                    <ul id="navigationList">
                        <li className="list-item" id="home" onClick={this.setAllDefault}>HOME</li>
                        <li className="list-item" id="add" onClick={ShowAddForm} >+ADD</li> 
                        <li id="blogIcon"><img alt="blog" src={Blog} ></img></li>
                    </ul>
                </div>

                
            </div>
            <div id="body">
                <div id="contactHeader">
                    <h4 id="contactBar">CONTACTS</h4>
                </div>
                <div>
                    
                    <CustomFilter GetFilterValue= {this.getFilterValue} 

                    FilterValue={this.state.filterValue} SelectedAlphabetsContacts={this.state.selectedAlphabetsContacts} ContactList={this.state.contact} />
                    <AlphabeticalFiltering AlphabetsList={this.state.alphabets} GetAlphabets={this.getAlphabetsToBeDisplayed} />
                    <ContactTable AddressBook={this.state.selectedAlphabetsContacts} GetId={this.getContactId} />
                    <DisplayDetails AddressBook={this.state.contact} ContactId={this.state.contactId} 
                    EditContact={this.editContact}  DeleteContact={this.DeleteContact}/>
                    <div className="watermark" id="watermark">NO CONTACTS TO DISPLAY</div>   
                </div>
                <AddEditForm AddContact={this.AddContact} LoadImageFile={this.loadImageFile} ContactList={this.state.contact} ContactId={this.state.contactId} />
                
            </div>
        </React.Fragment>
        );
    }
}

function ShowAddForm()
{
    ShowHideForm(true,"Add");
}
export function HideAddForm()
{
    ShowHideForm(false,"Add");
}



export function Compare(a:any,b:any){
	const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();

  let comparison = 0;
  if (nameA > nameB) {
    comparison = 1;
  } else if (nameA < nameB) {
    comparison = -1;
  }
  return comparison;
}

export function CompareLetters(a:any,b:any){
	const nameA = a.toUpperCase();
  const nameB = b.toUpperCase();

  let comparison = 0;
  if (nameA > nameB) {
    comparison = 1;
  } else if (nameA < nameB) {
    comparison = -1;
  }
  return comparison;
}

export function Validation(name:any,mail:any,mobile:any,landline:any,website:any)
{
    var websiteP = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
		var mobileP = /^\d{10}$/;
		var mailP = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;
		if(name!=='' && mail.match(mailP) && mobile.match(mobileP) && landline.match(mobileP) && website.match(websiteP))
			return true;
		else if(name===''){
			
			alert("Name cannot be Empty");
		}
		else if(!mail.match(mailP) && mail!==''){
			
			alert("Please check the Email-Id entered");
		}
		else if(mail===''){
			
			alert("Email-Id field cannot be Empty");
		}
		else if(!mobile.match(mobileP)){
			
			alert("Please enter a 10 digit mobile number");
		}
		else if(!landline.match(mobileP)){
			
			alert("Please enter a 10 digit landline number");
		}
		else if(!website.match(websiteP) && website!=='')
		{
			
			alert("Please enter a valid website");
		}
		else if(website==='')
		{
			
			alert("Website cannot be empty");
		}

}

export {Header,ShowHideForm};