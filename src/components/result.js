import React, { Component } from 'react';
import '../App.css'

class Result extends Component {

    result(){
        if(this.props.calculationError){
            return <p>{this.props.calculationError}</p>
        }
        else{
            return <p>{this.props.result}</p>
        }
    }
    render() {
        
        return (
            <div className="result mt-5 " style={{ textAlign: 'center' }}>
                {this.result()}
              
            </div>
        );
    }
}

export default (Result);