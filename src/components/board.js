import React, { Component } from 'react';
import '../App.css'
import { Input } from 'reactstrap'

class Board extends Component {



    render() {
        const input = (
            <div className="row my-5">
                <div className="col-sm-4">

                </div >
                <div className = "col-sm-4 col-12">
                    <Input onChange = {this.props.onChange} value={this.props.value}/>
                </div>
                <div className= "col-sm-4">

                </div>
            </div>


        )

        const btnClass = "btn btn-outline-dark m-1 px-4";

        const board = (
            <div >

                <div>
                    <button name ="7" className={btnClass} onClick={this.props.onClick}>
                        7
                    </button>

                    <button name = "8"className={btnClass} onClick={this.props.onClick}>
                        8
                    </button>

                    <button name="9" className={btnClass} onClick={this.props.onClick}>
                        9
                    </button>

                    <button name ="/" className={btnClass} onClick={this.props.onClick}>
                        /
                    </button>
                </div>

                <div >
                    <button name ="4" className={btnClass} onClick={this.props.onClick}>
                        4
                    </button>

                    <button name="5" className={btnClass} onClick={this.props.onClick}>
                        5
                    </button>

                    <button name ="6" className={btnClass} onClick={this.props.onClick}>
                        6
                    </button>

                    <button name ="*" className={btnClass} onClick={this.props.onClick}>
                        *
                    </button>
                </div>


                <div className="col">
                    <button name="1" onClick={this.props.onClick} className={btnClass} >
                        1
                    </button>

                    <button name ="2" className={btnClass} onClick={this.props.onClick}>
                        2
                    </button>

                    <button name="3" className={btnClass} onClick={this.props.onClick}>
                        3
                    </button>

                    <button name = "-" className={btnClass} onClick={this.props.onClick}>
                        -
                    </button>
                </div>

                <div>
                    <button name = "0" className={btnClass} onClick={this.props.onClick}>
                        0
                    </button >

                    <button name = "." className="btn btn-outline-dark m-1 ml-2 px-4 " onClick={this.props.onClick}>
                        .
                    </button>

                    <button name ="=" className={btnClass} onClick={this.props.onClick}>
                        =
                    </button>

                    <button name ="+" className={btnClass} onClick={this.props.onClick}>
                        +
                    </button>

                </div>


            </div>
        )

        return (
            <div style={{ textAlign: 'center' }}>
                {input}
                {board}
            </div>
        );
    }
}

export default (Board);