'use strict';
//============Imports===============
import React from 'react';
import ReactDOM from 'react-dom';

import initialIssues from './initialIssues';

import IssueFilter from './IssueFilter';
import IssueTable from './IssueTable';
import IssueAdd from './IssueAdd';

import '../style.css';


//==================================

class IssueTracker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            issues : []
        };
    
    }

    componentDidMount() {
        this.setState({issues:initialIssues})
    }
    
     
    createIssue() { 
        let newIssue = {};
        newIssue.id = this.state.issues.length;
        newIssue.status = document.getElementById('ame-content').value;
        newIssue.owner = document.getElementById('wner-content').value;
        newIssue.title = document.getElementById('itel-content').value;
        const p = this.state.issues.concat(newIssue);
        this.setState({issues:p});
         
    }


    render() {
        return (
            <div className = 'issue-tracker-grid'>
                <div><h3>Issue Tracker</h3></div>
                <IssueFilter/>
                <IssueTable issues = {this.state.issues}/>
                <IssueAdd action={() => this.createIssue()}/>
            </div>
        );
    }
}

//==================================
 
 const element = <IssueTracker/>;
 ReactDOM.render(element, document.getElementById('myApp'));
