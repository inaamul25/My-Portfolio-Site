import{useNavigate} from 'react-router-dom';
import React,{useState} from 'react';
import About from './About';


const Home = () => {
  const[currentView ,setCurrentView] = useState('home');
  const navigate = useNavigate();

  const handleViewChange =(view)=>{
     setCurrentView(view);
     if(view === 'about'){
      navigate('/about');
     }
     else if(view === 'home'){
      navigate('/home');
     }
  }


 

  return (
    <div className='Home-Main-Container'>
      {currentView === 'home' &&(
    <div class="intro-container">
    <h1>Hi, I'm Inaamul Hasan T.Z.</h1>
    <h2>Crafting Digital Experiences</h2>
    <p>
      Welcome to my digital playground! I'm a creator, problem solver, and storyteller in the world&#127757; of code. Here, you’ll find a blend of creativity and logic, where imagination meets innovation. Let's embark on a journey to build something extraordinary together!
    </p>
    
    <button onClick={() => handleViewChange('about')}>
    Discover More
    </button>
   
  </div>
   )} 
   {currentView === 'about' && <About/>}
  </div>
  );
}

export default Home;
