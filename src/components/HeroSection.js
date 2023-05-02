import { useState } from 'react';
import Slider from 'react-slick';
import ReactFlagsSelect from "react-flags-select";

export default function HeroSection(){

  const [selected, setSelected] = useState("TR");

  const phones = {
    US: '+1',
    DE: '+50',
    TR: '+90',
    IT: '+7',
    IN: '+15'
  }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return(
        <div className="relative h-[500px] before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10">
            <Slider {...settings}>
              <div>
                <img className="w-full h-[500px] object-cover" src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-4.jpg"/>
              </div>
              <div>
                <img className="w-full h-[500px] object-cover" src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-1.jpg"/>
              </div>
        </Slider>
          <div className="container flex justify-between items-center absolute top-0 left-1/2 -translate-x-1/2 h-full z-20">
             <div className="flex flex-col gap-y-8">
             <img src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg"/>
              <h3 className="text-4xl font-semibold text-white">
              Dakikalar içinde <br/>kapınızda
              </h3>
             </div>
             <div className="w-[400px] rounded-lg bg-gray-50 p-6">
                <h4 className="text-primary-brand-color text-center font-semibold">Giriş yap veya kayıt ol</h4>
                <div className="flex gap-x-2">
                    <ReactFlagsSelect
                      countries={Object.keys(phones)}
                      customLabels={phones}
                      onSelect={code => setSelected(code)}
                      selected={selected}
                      className="flag-select"
                    />
                  <div className="flex-1"> 
                      <input className="h-14 px-4 border-2 border-gray-200 rounded w-full transition-colors hover:border-primary-brand-color outline-none"/>
                  </div>    
                </div>
             </div>
          </div>
        </div>
    )
}