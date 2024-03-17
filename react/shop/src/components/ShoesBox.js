import React from 'react';

export default function ShoesBox(props) {
    return (
        <div className="col-md-4">
            <img src={'https://codingapple1.github.io/shop/shoes'+ (props.i+1) +'.jpg'} width="80%" />
            <h4>{props.items.title}</h4>
            <p>{props.items.content}</p>
            <p>{props.items.price}</p>
        </div>
    );
}