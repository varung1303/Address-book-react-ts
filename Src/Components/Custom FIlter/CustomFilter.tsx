import React, { Component } from 'react';
import './Style.scss';



interface CustomFilterProps{
    GetFilterValue:any
    
    FilterValue:any
    SelectedAlphabetsContacts:any
    ContactList:any
}


export default class CustomFilter extends Component<CustomFilterProps>{
    constructor(props:CustomFilterProps)
    {
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div className="filter-div">
                        <label htmlFor="filterType" className="filter-label">Filter By:</label>
                        <select id="filterType" className="filter-dropdown" onChange={this.props.GetFilterValue} >
                            <option value="name" selected>Name</option>
                            <option value="mail">Mail</option>
                            <option value="mobile">Mobile</option>
                            <option value="landline">Landline</option>
                            <option value="website">Website</option>
                        </select>
                        <input id="filterContent" className="filter-content" placeholder="Filter..." onChange={()=>displayContactsByFilter(this.props.FilterValue,this.props.SelectedAlphabetsContacts,this.props.ContactList)} autoComplete="none"></input>
            </div>
        );
    }

}
export function SetDefaultFilterValue(){
    (document.getElementById("filterType")as HTMLInputElement).value = "name";
}

export function ClearFilterInput(){
    (document.getElementById("filterContent")as HTMLInputElement).value='';
}


export function displayContactsByFilter(FilterValue:any,SelectedAlphabetsContacts:any,ContactList:any){
    var filterContent = (document.getElementById("filterContent")as HTMLInputElement).value.toUpperCase(); 
    console.log(filterContent);
    var filterName = FilterValue;
    console.log(filterName);
    if(filterName==="name"){
        for(let n in SelectedAlphabetsContacts)
        {
            if(SelectedAlphabetsContacts[n].name.toUpperCase().includes(filterContent))
            {
                let newId = "contactCard"+SelectedAlphabetsContacts[n].id;
                (document.getElementById(newId)as HTMLElement).classList.remove("hide");
            }
            else
            {
                let newId = "contactCard"+SelectedAlphabetsContacts[n].id;
                (document.getElementById(newId)as HTMLElement).classList.add("hide");
            }
        }
    }else if(filterName==="mail"){
        for(let n in SelectedAlphabetsContacts)
        {
            if(SelectedAlphabetsContacts[n].mail.toUpperCase().includes(filterContent))
            {
                let newId = "contactCard"+SelectedAlphabetsContacts[n].id;
                (document.getElementById(newId)as HTMLElement).classList.remove("hide");
            }
            else
            {
                let newId = "contactCard"+SelectedAlphabetsContacts[n].id;
                (document.getElementById(newId)as HTMLElement).classList.add("hide");
            }
        }
    }else if(filterName==="mobile"){
        for(let n in SelectedAlphabetsContacts)
        {
            if(SelectedAlphabetsContacts[n].mobile.toUpperCase().includes(filterContent))
            {
                let newId = "contactCard"+SelectedAlphabetsContacts[n].id;
                (document.getElementById(newId)as HTMLElement).classList.remove("hide");
            }
            else
            {
                let newId = "contactCard"+SelectedAlphabetsContacts[n].id;
                (document.getElementById(newId)as HTMLElement).classList.add("hide");
            }
        }
    }else if(filterName==="landline"){
        for(let n in SelectedAlphabetsContacts)
        {
            if(SelectedAlphabetsContacts[n].landline.toUpperCase().includes(filterContent))
            {
                let newId = "contactCard"+SelectedAlphabetsContacts[n].id;
                (document.getElementById(newId)as HTMLElement).classList.remove("hide");
            }
            else
            {
                let newId = "contactCard"+SelectedAlphabetsContacts[n].id;
                (document.getElementById(newId)as HTMLElement).classList.add("hide");
            }
        }
    }else if(filterName==="website"){
        for(let n in SelectedAlphabetsContacts)
        {
            if(SelectedAlphabetsContacts[n].website.toUpperCase().includes(filterContent))
            {
                let newId = "contactCard"+SelectedAlphabetsContacts[n].id;
                (document.getElementById(newId)as HTMLElement).classList.remove("hide");
            }
            else
            {
                let newId = "contactCard"+SelectedAlphabetsContacts[n].id;
                (document.getElementById(newId)as HTMLElement).classList.add("hide");
            }
        }
    }

    let counter:any = 0;
    for(let n in ContactList)
    {   let id:any = "contactCard"+ContactList[n].id;
        if(document.getElementById(id)?.classList.contains("hide"))
        {
            counter++;
        }
    }
    if(counter===ContactList.length)
    {
        document.getElementById("watermark")?.classList.remove("hide");
    }else{
        document.getElementById("watermark")?.classList.add("hide");
    }


}