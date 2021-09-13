import React, { Component } from 'react';
import './Style.scss';

interface DisplayItemsProps{
    ContactDetailText:any,
    ParentDiv: any,
    ContactDetailDiv: any,
    ParentClass:any,
    LabelClass: any,
    ContactDetailClass: any,
    LabelText:any

}
export default class DisplayItems extends Component<DisplayItemsProps>{

    constructor(props:DisplayItemsProps)
    {
        super(props);
        this.state = {

        }
    }
    render(){
        return(
            <div id={this.props.ParentDiv} className={this.props.ParentClass}><div className={this.props.LabelClass}>{this.props.LabelText}</div>
					<div id={this.props.ContactDetailDiv} className={this.props.ContactDetailClass}>{this.props.ContactDetailText}</div></div>
        );
    }
}