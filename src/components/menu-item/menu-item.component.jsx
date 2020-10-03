import React from 'react';

//Function takes a component and spits back another one
import {withRouter} from 'react-router-dom';

import './menu-item.styles.scss'

//Takes props and creates a component 
const MenuItem = ({ title, imageUrl, size, history, linkUrl, match}) => (
    <div 
    className={`${size} menu-item`} 
    onClick={() => history.push(`${match.url}${linkUrl}`)}>
    
    <div className='background-image' style={{
        backgroundImage: `url(${imageUrl})`
    }}/>
    <div className='content'>
        <h1 className='title'>{title}</h1>
        <span className='subtitle'>SHOP NOW</span>
    </div>  
</div>
);

export default withRouter(MenuItem);