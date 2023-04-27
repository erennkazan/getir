
import Slider from 'react-slick';

export default function HeroSection(){

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return(
        <div className="">
            <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
          <h3>2</h3>
          </div>
        </Slider>
        </div>
    )
}