import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero.js';
import { faqData } from '../../data/dataStore';



const FAQ = () => (

  <Container>
    <Hero titleText={faqData.title} imageSource={faqData.image} />
    <p>{faqData.content}</p>
  </Container>
);
export default FAQ;