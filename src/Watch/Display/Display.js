import React from 'react';
import Dail from '../../Components/Dail/Dail';

const Display = (props) => {
    return (
        <div style={{border:'2px solid red',margin:"20px"}}>
            <h2>Name: {props.name}</h2>
            <p>So far step today: {props.steps}</p>
            <Dail steps={props.steps}></Dail>
        </div>
    );
};

export default Display;