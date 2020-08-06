import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.style.scss'

const MenuItem = ({title,image,size, linkUrl, history, match}) => (
    <div
        style={{
            backgroundImage: `url(${image})`
        }}
        className={`${size} menu-item`}
        onClick={()=> history.push(`${match.url}${linkUrl}`)}
    >
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="sub-title">SHOP NOW</span>
        </div>
    </div>
);

export default withRouter(MenuItem);