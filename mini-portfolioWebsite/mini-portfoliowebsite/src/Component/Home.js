import React from 'react';
import { NavLink } from 'react-router-dom';
import homeigm from '../Images/miles.jpg';
import '../CSS/HomeAbout.css';
import Same from './Same';

const Home=()=>{
    return(
        <>
           <Same
           title="Mini-portfolio"
           text="“Hello, I’m Simbarashe Lungu, and I’m passionate about building softwares. 
                I started my journey as a developer when I was a kid. 
                I found a tutorial on how to use C++ to display a flower on my computer screen, 
                and once that happened, I was completely hooked to the world of computers."
            imgsrc={homeigm}
            btn="Read more"
        />
        </>
    )
}
export default Home;