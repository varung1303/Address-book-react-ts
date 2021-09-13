import React, { Component } from 'react';
import './Style.scss';

interface AlphabeticalFilteringProps{
    AlphabetsList:any
    GetAlphabets:any

}

export default class AlphabeticalFiltering extends Component<AlphabeticalFilteringProps>{

    constructor(props:AlphabeticalFilteringProps){
        super(props);
        this.state = {

        }
    }
    render(){
        return(
            <div className="alphabet-filter hide" id="alphabetFilter">
                <AlphabetFilter  AlphabetsList={this.props.AlphabetsList} GetAlphabets={this.props.GetAlphabets}/>
            </div>
        );
    }
}






interface AlphabetFilterProps{
    AlphabetsList:any
    GetAlphabets:any

}

export class AlphabetFilter extends Component<AlphabetFilterProps>{
    constructor(props:AlphabetFilterProps)
    {
        super(props);
        this.state = {

        }
    }

    render(){
        
            
        return(
            
            this.props.AlphabetsList.map((a:any, i:any) => {
                return (
                            <React.Fragment key={i}>
                                
                                <input className="letter-option" type="checkbox" id={"letter"+a} defaultChecked={false} value={a} onChange={this.props.GetAlphabets} /> 
                                <label className="letter-label" htmlFor={"letter"+a}>{a}</label>
                            </React.Fragment>
               
                        );
                    }
                )
        );
        
    }
}

export function HideAlphabetFilter(length:any){
    if(length<1)
        {
            (document.getElementById("alphabetFilter")as HTMLElement).classList.add("hide");
        }
}

export function ShowAlphabetFilter(length:any){
    if(length>0)
        {
            (document.getElementById("alphabetFilter")as HTMLElement).classList.remove("hide");
        }
}