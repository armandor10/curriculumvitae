import React from 'react';

const Experience = props => (
    <div className='Experience'>
        <div className='Experience-container'>
            {props.data.map((ex,index) => (
                <div className='Experience-item' key={`Exp-${index}`}>
                    <h3> {ex.jobTitle} @ {ex.company} <span>{ex.startDate} - {ex.endDate}</span></h3>
                    <p>{ex.jobDescription} </p>
                </div>
            ))}

        </div>
    </div>
);

export default Experience;