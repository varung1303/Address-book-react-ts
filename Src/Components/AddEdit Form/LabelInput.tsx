import React, { Component } from 'react';
import './Style.scss';

interface LabelInputProps{
    LabelClass: string,
    LabelId: string,
    LabelFor: string,
    LabelText: string,
    LabelDivClass:any
    InputClass: string,
    InputId: string,
    InputDivClass:any
    InputType: any,
    InputLength: any
}

export default class LabelInput extends Component<LabelInputProps>{

    constructor(props:LabelInputProps){
        super(props);
        this.state={
            
        }
    }
    render(){
        return(
            <React.Fragment>
            <div className={this.props.LabelDivClass}>
                <label id={this.props.LabelId} className={this.props.LabelClass}  htmlFor={this.props.LabelFor}>{this.props.LabelText}</label>
            </div>
            <div className={this.props.InputDivClass}>
                 <input className={this.props.InputClass} type={this.props.InputType} id={this.props.InputId} maxLength={this.props.InputLength} autoComplete={'' + Math.random()} ></input>
            </div>
            </React.Fragment>
        );
    }
}