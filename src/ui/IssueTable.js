'use strict';

 import React from 'react';
 import IssueGrid from './IssueGrid';

export default function IssueTable(props) {
    
    return (
        <div className = 'issue-row issue-table'>
            <IssueGrid issues={props.issues}/>
        </div>
    )

}