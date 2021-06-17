//import "slick-carousel/slick/slick.css";
//import "slick-carousel/slick/click-theme.css";//
import React from 'react';
import Slider from "react-slick";
import logo_image from '../../resources/images/moshtix-logo.svg';

const Carrousel=()=>{
    const settings={
        dots: false,
        infinite: true,
        autoplay: true,
        speed:500
    }


    return(
        <div className="carrousel_Wrapper"
            style={{
                background:'white',
                height:`500px`,
                overflow:'hidden'
            }}>
            
            <Slider {...settings}>
                <div>
                    <div 
                        className="carrousel_image "
                        style={{
                            background:`url(${logo_image})`,
                            height: `500px`
                        }}
                        >

                    </div>
                </div>
                


            
            </Slider>
            


        </div>

    );
};
export default Carrousel;
