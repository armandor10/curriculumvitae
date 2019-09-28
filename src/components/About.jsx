import React from 'react'; //8.5k (gzipped: 3.4k)
import Social from './Social';
import styled from 'styled-components';

const AboutStyle = styled.div`
    text-align: center;
`;

const AboutAvatar = styled.div`
    padding: 2em 0 0 0;
`;

const AboutImg = styled.img`
    border-radius: 100%;
    width: 160px;
    height: 160px;
    border: 2px solid #E91E43;
    margin: 0 auto;
    display: block;
    box-shadow: 0 0 10px rgba(0,0,0,0.6);
`;

const AboutName = styled.div`
    text-align: center;
`;

const AboutH2 = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-weight: 400px;
    letter-spacing: 1.2px;
    margin: .5m 0 0 0;
    color: #C21858;
`;

const AboutProfession = styled.p`
    margin: .2em 0 1em 0;
    letter-spacing: 1.6px;
    font-weight: 300;
    color: #C21858;
`;

const AboutBio = styled.p`
  color: #757575;
  font-size: 1em;
  font-weight: 300;
`;

const AboutLocation = styled.p`
  color: #757575;
  font-size: 1em;
  font-weight: 400;
`;

const About = ({avatar, name, profession, bio, address, social}) => (
    <AboutStyle className='About'>
        <div className='About-container'>
            <AboutAvatar  className="About-avatar">
                <figure>
                    <AboutImg src={avatar} alt={name}/>
                </figure>
            </AboutAvatar>
            <AboutName className='About-name'>
                <AboutH2>{name}</AboutH2>
            </AboutName>
            <div className='About-profession'>
                <AboutProfession>{profession}</AboutProfession>
            </div>
            <div className='About-desc'>
                <AboutBio>{bio}</AboutBio>
            </div>
            <div className='About-location'>
                <AboutLocation>{address}</AboutLocation>
            </div>
            <div className='About-social'>
                <Social social={social} />
            </div>
        </div>
    </AboutStyle>
);

export default About;