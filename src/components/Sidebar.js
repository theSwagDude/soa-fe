import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <h1>Quizlab</h1>
            <ul>
                <li><a href="makequiz">Make a new quiz</a></li>
                <li><a href="report">Report</a></li>
                <li><a href="takequiz">Take a quiz</a></li>
            </ul>
        </div>
    );
};

export default Sidebar;
