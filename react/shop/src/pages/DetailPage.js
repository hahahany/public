import React, { useState , useEffect} from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components'

let StyledBtn = styled.button`
  background : ${props => props.bg};
  color : ${props => props.bg == 'blue' ? '#fff' : '#000'};
  padding : 10px;
`;

export default function DetailPage(props) {
    let {id} = useParams();
    let result = props.shoesData.find(el => el.key == id);
    let [count, setCount] = useState(0);
    let [sale, setSale] = useState(false);
    let [input, setInput] = useState('');

    useEffect(()=> {
       let a = setTimeout(() => {
            setSale(true);
        },2000)

        // useEffect 동작 전에(unmount시) 1회 실행되는 clean 함수
        return () => {
            clearTimeout(a)
        }
    },[])

    useEffect(()=> {
        if ( isNaN(input) == true ) {
            alert('그러지마세요')
        }
    },[input])
    return (
        <div className="container">
            {
                sale === false ? (<div className="sale-txt">숫자만 입력해라</div>) : null
            }
            {count}
            <StyledBtn bg="red" onClick={()=>{setCount(count+1)}}>stlyed-component 버튼</StyledBtn>
            <div className="row">
                <div className="col-md-6">
                    <img src={result.image} width="100%" />
                </div>

                <input onChange={(e) => {setInput(e.target.value)}} />
                
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{result.title}</h4>
                    <p>{result.content}</p>
                    <p>{result.price}원</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>
        </div>
    );
}

