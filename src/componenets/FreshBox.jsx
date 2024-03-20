import React, { useState } from 'react';
import data from './../data';
import Card from './Card';
import {  Navigation, Pagination} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const FreshBox = () => {
    let [petdata]=useState(data)
    return (
        <div className='freshboxWrap'>
            <h2>Hello Fresh Box</h2>
            <p>We save you serious time</p>
            <div className="freshslider">
            <Swiper className='freshBoxswiper'
                    modules={[Navigation,Pagination ]}
                    spaceBetween={50}
                    slidesPerView={4}
                    navigation
                    pagination={{
                        type: 'fraction',
                      }}
                      loop={true}
                      autoplay={true}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                   {
                    petdata.map((data, i) =>{
                        return(
                            <SwiperSlide> <Card data={data} i={i} key={i} /></SwiperSlide>
                        )
                    })
                   }
                </Swiper>
            </div>
        </div>
    );
};

export default FreshBox;<h2>sody</h2>