import React, { useEffect, useState } from 'react';
import axios from "axios";
import {Link} from 'react-router-dom';
import dayjs from 'dayjs';
import isLeapYear from 'dayjs/plugin/isLeapYear'; // 윤년 판단 플러그인
import 'dayjs/locale/ko'; // 한국어 가져오기
import { API_URL } from '../config/constants';

dayjs.extend(isLeapYear); // 플러그인 등록
dayjs.locale('ko'); // 언어 등록

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() =>{
        let url=`${API_URL}/products`;
        axios.get(url).then((result)=>{
            const products=result.data.product;
            setProducts(products)
        }).catch(error =>{
            console.log(error)
        })
    }, []);
    console.log(products)

    return (
        <div className='productWrap'>
           <h2>NEW ARRIVALS</h2>
           <p>Pickup with free gift</p>
           <div className="product-flex">

           {
            products.map((product, idx)=>{
                return(
                    <div className="product-card" key={idx}>
                        {product.soldout === 1 ? (<div className="product-blur"></div>) : null}
                        
                            <Link className='product-link' to={`/productpage/${product.id}`}> 
                                <div>
                                    <img src={`${API_URL}/${product.imageUrl}`} alt={product.name} />
                                </div>
                                <div className="product-content">
                                    <div className="product-name"><span className='product-seller'>({product.seller})</span> {product.name}</div>
                                    <div className="product-price">{product.price}</div>
                                    <div className="product-date">{dayjs(product.createdAt).format('YYYY-MM-DD')}</div>
                                    
                                </div>
                            </Link>
                        </div>
                )
            })
           }
           </div>


        </div>
    );
};

export default Products;