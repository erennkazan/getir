import { useEffect, useState } from "react";
import Slider from 'react-slick';
import Banners from 'api/banners.json';
import Title from 'components/ui/Title';

export default function Campaigns(){

    const [banners, setBanners] = useState([]);

    useEffect(() =>{
        setBanners(Banners);
    },[])

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 3500,
        cssEase: "linear"
      };
 
    return(
        <div className="container mx-auto py-8">
            <Title>Kampanyalar</Title>
            <Slider {...settings}>
              {banners.length && banners.map((banner,index) => (
                <div key={banner.id}>
                    <picture className="block px-2">
                      <img src={banner.image}/>
                    </picture>
                    
                </div>
              ))}
            </Slider>
        </div>
    )
}