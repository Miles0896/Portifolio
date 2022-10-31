import React from 'react';
import { NavLink } from 'react-router-dom';
import img1 from '../Images/miles2.jpg';
import Same from './Same';

const About=()=>{
    return(
        <>
           <Same
           title="About Simbarashe Lungu"
           text="“Hello, I’m Simbarashe Lungu, and I’m passionate about building softwares. 
                I started my journey as a developer when I was a kid. 
                I found a tutorial on how to use C++ to display a flower on my computer screen, 
                and once that happened, I was completely hooked to the world of computers. 
                In the years, I’ve cultivated my passion for coding by studying the IT field, but most of all, 
                by building chatting applications using Java, so that I could challenge my friends.
                Lately, I’ve discovered my passion for the world of software development and 
                the beauty behind building useful softwares. 
                I’m now looking for a Graduate programme position to finally kick start my career and 
                learn among professionals.” 
                
                Here are few technologies l have been working with recently: Java, C#, C++, React and Python"
                
            
           imgsrc={img1}
            btn="Know more"
           />

       </>
    )
}
export default About;