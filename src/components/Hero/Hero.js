import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import { DiSizzlejs } from 'react-icons/di';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Zaid Chughtai<br />
        Personal Portfolio
      </SectionTitle>
      <SectionText style = {{fontSize: "1.5rem"}}>
      Welcome to my portfolio!<br/>
      As a recent university graduate with a strong drive for AI engineering, full-stack development, and a side hobby of game development, I'm constantly seeking new challenges and opportunities to grow. My studies at university have provided me with a strong foundation in HTML, CSS, TypeScript, and user-centered design principles. After graduating, I have focused my sights more towards the AI/ML field, pursuing multiple specialisation courses concurrently.
      My hunger to learn new concepts and adapt to changes in the industry, along with my motivation to make a lasting impact for society, push me to consistently persevere outside of my comfort zone.<br/>
      Take a look around to learn more about me and my work. Let's connect and see how we can work together to achieve great things!
      </SectionText>

      <Button onClick={() => window.location = 'https://www.linkedin.com/in/zaid-chughtai-628b52222/'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;