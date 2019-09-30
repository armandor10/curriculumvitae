import React from 'react';
import H2Styled from '../styled/H2Styled';
import H3Styled from '../styled/H3Styled';
import PStyled from '../styled/PStyled';

const Experience = props => (
    <div className='Experience'>
        <H2Styled name="Experience"/>
        <div className='Experience-container'>
            {props.data.map((ex,index) => (
                <div className='Experience-item' key={`Exp-${index}`}>
                    <H3Styled> {ex.jobTitle} @ {ex.company} <span>{ex.startDate} - {ex.endDate}</span>
                    </H3Styled>
                    <PStyled name={ex.jobDescription}/>
                </div>
            ))}

        </div>
    </div>
);

export default Experience;