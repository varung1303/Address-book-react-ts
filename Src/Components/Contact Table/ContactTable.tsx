import React, { Component } from 'react';
import './Style.scss';
//import DisplayContactDetails from '../Home/Home';
//import ItemDetails from './ItemDetails';

interface ContactTableProps  {
    AddressBook: any
    GetId: any
}

export default class ContactTable extends Component<ContactTableProps>{
    constructor(props:ContactTableProps){
        super(props);
        this.state = {

        }
    }
    render(){
        return(
            <div className="contact-table hide" id="contactTable">
                <TableContent AddressBook={this.props.AddressBook} GetId={this.props.GetId} />
            </div>
        );
    }
}


interface TableContentProps  {
    AddressBook: any
    GetId: any
}

export  class TableContent extends Component<TableContentProps>{

    constructor(props:TableContentProps){
        super(props);
        this.state = {
              
        }
    }
    render(){
        
        return(
            this.props.AddressBook.map((a:any, i:any) => {
                return (
                            <React.Fragment key={i}>
                            <div id={"contactCard"+a.id} className="contact-card-item" >
                                <div className="contact-card-image-div">
                                    <img alt="dp" src={a.dp} className="display-picture" />
                                </div>
                                <div  className="contactDisplay main-name"  id={"rightDisplayBtn"+a.id}  onClick={this.props.GetId} >{a.name}</div> 
                                <div  className={"contactDisplay border-style partA"+a.id} >{a.mail}</div>
                                <div  className={"contactDisplay border-style spartB"+a.id} >{a.mobile}</div>
                                
                            </div>
                            </React.Fragment>
               
                        );
                    }
                )
        );
        
    }

}

export function HideContactTable(length:any){
    if(length<1)
        {
            (document.getElementById("contactTable")as HTMLElement).classList.add("hide");
        }
}
export function ShowContactTable(length:any){
    if(length>0){
        
            (document.getElementById("contactTable")as HTMLElement).classList.remove("hide");
    }
}






