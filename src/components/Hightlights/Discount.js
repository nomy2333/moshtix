import React, { Component } from 'react';
//import Description from './Description';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import MyButton from '../utils/MyButton';

class Discount extends Component {
    state={
        discountStart: 0,
        discountEnd: 30
    }
    porcentage=()=>{
        console.log("in procentage")
        if(this.state.discountStart<this.state.discountEnd){
            this.setState({
                discountStart: this.state.discountStart + 1
            })
        }
        else{
            console.log("timemmmmm")
        }

    }
    componentDidUpdate(){
        setTimeout(()=>{
            this.porcentage()
        },30)
    }
    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">
                    <Fade
                        OnReveal={()=> this.porcentage()}
                    >
                        <div className="discount_porcentage">
                            <span>{this.state.discountStart}%</span>
                            <span>OFF</span>

                        </div>
                    </Fade>
                    <Slide right>
                        <div className="discount_description">
                            <h3>purchse the tickets from 20th</h3>
                            <p>Description</p>
                            <div>
                                <MyButton
                                    text="Purchase tickets"
                                    bck="#ffa800"
                                    clolor="#ffffff"
                                    link="http://google.com"
                                />
                            </div>

                        </div>


                    </Slide>


                </div>
            </div>

        );

    }

};
export default Discount; 
