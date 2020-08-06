import React from 'react';

import './menu-item.style.scss'

const MenuItem = ({title,image,size}) => (
    <div
        style={{
            backgroundImage: `url(${image})`
        }}
        className={`${size} menu-item`}
    >
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="sub-title">SHOP NOW</span>
        </div>
    </div>
);

export default MenuItem;