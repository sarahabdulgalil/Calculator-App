import React, { Component } from 'react';
import Board from './board'
import Result from './result';

class HandleCalculator extends Component {

    constructor(props){
        super(props);
        this.state = {
            result: "",
            currentOperation: "",
            calculationError:""
        }
    }

    handleInput = (e) =>{
        
        
        this.setState({
            currentOperation:e.target.value
        })        
        
    }
    
    calculate = (e) =>{
        const buttonName = e.target.name;
        let currentOperation ='';

        if(buttonName !== "="){
       
            this.setState({
                result: "",
                currentOperation:this.state.currentOperation + buttonName
            })
        }
        if (buttonName === "="){
            if(this.state.currentOperation.includes('--')){
                currentOperation = this.state.currentOperation.replace('--', '+');  
            }else{
                currentOperation = this.state.currentOperation;
            }
            try{
                this.setState({
                    result: eval(currentOperation),
                    currentOperation:"",
                    calculationError:""

                })

            }catch{
                this.setState({
                    calculationError: "this operation is not correct" 
                })
            }
            
        }
        
    }
    render() {
        return (
            <div>
                <Result result={this.state.result} calculationError={this.state.calculationError}/>
                <Board onClick= {this.calculate} onChange = {this.handleInput} value = {this.state.currentOperation}/>
            </div>
        );
    }
}

export default HandleCalculator;