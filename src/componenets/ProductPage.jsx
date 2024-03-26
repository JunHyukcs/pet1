import React, {useState, useEffect} from 'react';
import { useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';
import { FaDog } from "react-icons/fa";
import { API_URL } from '../config/constants';
import {Button, message} from 'antd';

const ProductPage = () => {
    const {id} = useParams();
    const navigate=useNavigate();
    const [product, setProduct]= useState(null);
    
    const getProduct=()=>{
        axios.get(`${API_URL}/products/${id}`)
        .then(function(result){
            setProduct(result.data.product)
        })
        .catch(function(error){
            console.error(error)
        })
    }
    useEffect(()=>{
        getProduct();
    },[id])
    console.log(product)
    if(product===null){
        return <h1>상품 정보를 받고 있습니다...</h1>
    }
    const onClickPurchase=()=>{
        axios.post(`${API_URL}/purchase/${id}`)
        .then((result)=>{
            message.info('결제가 완료 되었습니다.')
            getProduct();
        })
        .catch((error)=>{
            message.error(`에러가 발생했습니다. ${error.message}`)
        })
    }
    
    return (
        <div className='productpageWrap'>
            <h1>상세페이지</h1>
            <button onClick={()=>navigate(-1)} id='back-btn'>이전화면</button>
            <div id="image-box">
                <img src={`${API_URL}/${product.imageUrl}`} alt={product.name} />
            </div>
            <div id="profile-box">
                <FaDog className='product-avata' />
                <span className="product-seller">{product.seller}</span>
            </div>
            <div className="contents-box">
                <div id="name">{product.name}</div>
                <div id="price">{product.price}</div>
                <div id="createAt">2024.03.19</div>
                <div id="description">{product.description}</div>
                <Button type='primary' danger={true} className='payment' onClick={onClickPurchase}disabled={product.soldout===1} >즉시결제하기</Button>
            </div>
        </div>
    );
};

export default ProductPage;