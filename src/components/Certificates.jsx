import React from 'react';

const Centificates = props => (
    <div className='Centificates'>
        <div className='Centificates-container'>
        {props.data.map((cer, index) => (
            <div className='Centificates-item' key={`Cer-${index}`}>
                <h3> {cer.name} @ {cer.institution} <span>{cer.date} </span> </h3>
                <p>{cer.description}</p>
            </div>
        ))}

        </div>
    </div>
);

export default Centificates;