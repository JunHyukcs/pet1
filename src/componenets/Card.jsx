import React from 'react';

const Card = ({data, i}) => {
    return (
        <div className='freshList'>
            <a href="">
                <div className="imgBox">
                    <img src={process.env.PUBLIC_URL + data.img} alt="" />
                </div>
                    <div className="textBox"><p>{data.title}</p></div>
                    <div className="priceBox"><p className='price'>{data.price}</p></div>
                    <div className="numberBox">{data.id+1}</div>
            </a>
        </div>
    );
};

export default Card;