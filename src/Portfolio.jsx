import ProfilePic from './assets/My-Img2.jpg';
import H from './assets/H.png';
import InstaPic from './assets/Insta.jpeg';
import GitPic from './assets/Git.png';
import Home from './Components/Home';
import About from "./Components/About";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import { useState } from 'react';
function Portfolio(){
    const[currentView,setCurrentView] = useState('portfolio');
    const[expandLeftDiv ,setExpandLeftDiv] = useState(false);

    const expandedStyle = {
     
        margin: "10px 0",
        fontSize: "10px",
        textAlign: "left",
        marginLeft: "30px",
    }

    const handleViewChange =(view)=>{
        setCurrentView(view);
        if(view === 'about' || view === 'resume' || view === 'home'){
          setExpandLeftDiv(true);
        }
        else{
          setExpandLeftDiv(false);
        }
    }

   return(
      <div className='Container'>
        <div className='Container-main'>
            <div className='left-div'>
                <img src={ProfilePic} alt="Profile-Pic" />
                  <h2>Inaamul Hasan T.Z.</h2>
               <div className='Content-container'>
                <p>Web developer | Java Programmer | Software Engineer</p>
                 <p>Phone: +91 8072741565</p>
                 <p>Email: inaamulh66@gmail.com</p>
                 <p>LinkedIn: http://www.linkedin.com/in/inaamul-hasan-20341526b</p>
               </div>
              {expandLeftDiv && (
                 <div className='expanded-container' style={expandedStyle}>
                  <p>Location: Tirupattur -635601</p>
                  <p>Skills</p>
                  <ul>
                    <li>Html</li>
                    <li>Css</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Java</li>
                    <li>Sql</li>
                  </ul>
                  <p>Hobbies</p>
                  <ul>
                    <li>Badminton</li>
                    <li>Travelling</li>
                  </ul>
                  <p>Follow me@</p>
                  <div className='expanded-img-div'>
                  <a href="https://www.instagram.com/___mr_hatzz___/"><img src={InstaPic} alt="Insta-Pic"/></a>
                  <p style={{margin:'0px',fontSize:'7px',marginLeft:'2px',transform:'translateX(-142%)',marginTop:'25px'}}>Insta</p>
                  <a href="https://github.com/inaamul25"><img src={GitPic} alt="Insta-Pic"/></a>
                  <p style={{margin:'0',fontSize:'7px',marginLeft:'2px',transform:'translateX(-119%)',marginTop:'25px'}}>GitHuB</p>
                  <a href="https://www.hackerrank.com/profile/inaamulh66"><img src={H} alt="Insta-Pic"/></a>
                  <p style={{margin:'0',fontSize:'7px',marginLeft:'2px',transform:'translateX(-90%)',marginTop:'25px'}}>Hackerrank</p>
                  </div>
                  <footer>
                      <p>CreativeHub&copy;{new Date().getFullYear()}</p>
                  </footer>
                 
                 </div>
              )
              }
             
            </div>
            <div className='right-div'>
              <ul>
                <li><a href="#Home" onClick={()=> handleViewChange('home')}>Home</a></li>
                <li><a href="#About" onClick={()=> handleViewChange('about')}>About</a></li>
                <li><a href="#Resume" onClick={()=> handleViewChange('resume')}>Resume</a></li>
                <li><a href="#Contact" onClick={()=> handleViewChange('contact')}>Contact</a></li>
              </ul>
              {currentView === 'home' && <Home/>}
              {currentView === 'about' && <About/>}
              {currentView === 'resume' && <Resume/>}
              {currentView === 'contact' && <Contact/>}
            </div>
             
        </div>
      </div>
   );
}
export default Portfolio;