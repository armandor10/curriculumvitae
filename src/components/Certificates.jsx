import React from 'react';
import H2Styled from '../styled/H2Styled';
import H3Styled from '../styled/H3Styled';
import PStyled from '../styled/PStyled';

const Centificates = props => (
    <div className='Centificates'>
        <H2Styled name="Certificates"/>
        <div className='Centificates-container'>
        {props.data.map((cer, index) => (
            <div className='Centificates-item' key={`Cer-${index}`}>
                <H3Styled> {cer.name} @ {cer.institution} <span>{cer.date} </span> </H3Styled>
                <PStyled name={cer.description}/>
            </div>
        ))}

        </div>
    </div>
);

export default Centificates;