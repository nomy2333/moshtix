import React, { Component } from 'react';
import MyButton from '../utils/MyButton';
import Zoom from 'react-reveal/Zoom';


class Pricing extends Component {
    state = {
        prices: [100, 150, 250],
        positions: ['Balcony', 'Medium', 'Star'],
        desc: ['sssss', 'llllll', 'mmmmmm'],
        linkto: ['http://www.baidu.com', 'http://google.com', '#'],
        delay: [500, 0, 500]
    }
    // 用showbox=》后如果用{}需要return,不然无法显示；如果用（）就可以
    //在loop里用zoom要用key
    showBoxes = () => (
        this.state.prices.map((box, i) => (
            <Zoom delay={this.state.delay[i ]} key={i}>
                <div className="pricing_item">
                    <div className="pricing_inner_wrapper">
                        <div className="pricing_title">
                            <span>${this.state.prices[i]}</span>
                            <span>{this.state.positions[i]}</span>
                        </div>
                        <div className="pricing_description">
                            {this.state.desc[i]}
                        </div>
                        <div className="pricing_buttons">
                            <MyButton
                                text="purchase"
                                bck="#ffa800"
                                color="#ffffff"
                                link={this.state.linkto[i]}

                            />

                        </div>

                    </div>

                </div>

            </Zoom>

        ))
    )

    render() {
        return (
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <h2>Pricing</h2>
                    <div className="pricing_wrapper">
                        {this.showBoxes()}
                    </div>


                </div>

            </div>
        );

    }

}
export default Pricing;