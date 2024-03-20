import React, {useState, useEffect} from 'react';
import { useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';
import { FaDog } from "react-icons/fa";

const ProductPage = () => {
    const {id} = useParams();
    const navigate=useNavigate();
    const [product, setProduct]= useState(null);
    
    useEffect(()=>{
        axios.get(`https://d67ebdd2-1d5f-4a56-b306-cb1b0c92ba51.mock.pstmn.io/products/${id}`)
        .then((result)=>{
            setProduct(result.data)
        })
        .catch((error)=>{
            console.error(error)
        })
    },[id])
    console.log(product)
    if(product===null){
        return <h1>상품 정보를 받고 있습니다...</h1>
    }
    return (
        <div className='productpageWrap'>
            <h1>상세페이지</h1>
            <button onClick={()=>navigate(-1)} id='back-btn'>이전화면</button>
            <div id="image-box">
                <img src={`/${product.imageUrl}`} alt={product.name} />
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
            </div>
        </div>
    );
};

export default ProductPage;