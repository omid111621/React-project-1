'use strict';

import React from 'react';
import Submit from './Submit';

export default function IssueAdd(props) {
    
    return (
        <div className = "issue-row issue-add">
            <div className = 'name'> Name</div>
            <input type="text" placeholder="name" id= 'ame-content' className="name-content"/>
            <div className = 'owner'>Owner</div>
            <input type="text" placeholder="owner" id="wner-content" className="owner-content"/>
            <div className = 'title'>Title</div>
            <input type="text" placeholder="title" id="itel-content" className="title-content"/>
            <Submit submit={() => props.action()}/>
        </div>
    )

}