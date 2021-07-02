'use strict';

import React from 'react';

export default function IssueRow(props){
    
    
    return (
        <div className = 'issue-grid-row'>
            <div className = 'row-number'>{props.issue.id}</div>
            <div className = 'row-content'>
                <div className='row-status'>{props.issue.status}</div>
                <div className = 'row-owner'>{props.issue.owner}</div>
                 <div className = 'row-effort'>{props.issue.effort}</div>
                 <div className = 'row-title'>{props.issue.title}</div> 
                </div>
           
        </div>
    )

}