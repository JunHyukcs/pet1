import React from 'react';
import {Link} from 'react-router-dom';
import './footer.scss'

const Footer = () => {
    return (
        <div className='footerWrap'>
            <div className="footerInner">
                <div>
                    <p>
                        <Link to="">소개</Link>
                  
                        <Link to="">이용약관</Link>
                        <Link to="">스토어 가이드</Link>
                        <Link to="">개인정보 처리방침</Link>
                        <Link to="">고객지원센터</Link>
                    </p>
                </div>
                <address>
                    주소: 경남 김해시 상도면 장척로 436-112 컨테이너 <br />
                    고객센터 : 01092304449 | 통신판매업신고 2023경남김해-1245
                </address>
            </div>
        </div>
    );
};

export default Footer;