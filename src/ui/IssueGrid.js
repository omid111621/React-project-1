'use strict';

import React from 'react';
import IssueRow from './IssueRow';

export default function IssueGrid(props) {
    

    
    return (
        <div className = "issue-grid">
             {props.issues.map(x => <IssueRow issue = {x}/> )}
        </div>
    )

}