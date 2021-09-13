import React, { Component } from 'react';
import './Style.scss';

interface BtnImageProps {
    ButtonId:any,
    ImageId:any,
    ImageAlt:any,
    ButtonText:any,
    ImageSrc:any,
    ButtonOnclick:any,
    AddressBook:any
    ContactId:any
    
    
    
}
export default class BtnImage extends Component<BtnImageProps>{
    constructor(props:BtnImageProps){
        super(props);
        this.state = {

        }
    }
    render(){
        return(
            <React.Fragment>
                <img alt={this.props.ImageAlt} id={this.props.ImageId} src={this.props.ImageSrc}/>
                <button id={this.props.ButtonId} onClick={()=>this.props.ButtonOnclick(this.props.AddressBook,this.props.ContactId)}>{this.props.ButtonText}</button>
            </React.Fragment>
        );
    }

}