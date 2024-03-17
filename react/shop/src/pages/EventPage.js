import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate, Outlet } from 'react-router-dom'

export default function EventPage() {
    let navigate = useNavigate();

    return (
        <div className='sub-container'>
            <h2>오늘의 이벤트</h2>
            <Outlet></Outlet>
        </div>
    );
}

