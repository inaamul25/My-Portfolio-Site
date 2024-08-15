import React, { useEffect } from 'react';
import JavaCertificate from '../assets/JavaCertificate.jpeg';
import WebDesign from '../assets/Web designing.jpeg';
import CCNA from '../assets/CCNA.jpeg';
import Java from '../assets/download.jpeg';
import Sql from '../assets/Sql.png';
import Html from '../assets/Html.png';
import Css from '../assets/Css.png';
import Js from '../assets/Js.png';
import ReactJs from '../assets/React.png';
import { typeEffect } from '../index1.js'; // Adjust the path as needed

function About() {
    useEffect(() => {
        const textElement = document.getElementById('dynamic-text');
        const words = ["Web Developer", "Web Designer", "React Newbie"];

        if (textElement) {
            typeEffect(textElement, words);
        }

    }, []);
    return (
        <div className="text-container">
            <h1>Hi I'm Hasan</h1>
            <span id="dynamic-text">Web Developer</span>
            <div className='My-Content'>
                <p>Hello Folks!<br /><br />
                    I'm Inaamul Hasan—a passionate Web Developer dedicated to crafting exceptional web experiences.
                    With expertise in HTML, CSS, JavaScript, and React, I strive to build clean, responsive, and user-friendly websites.
                    My goal is to turn ideas into functional and visually appealing web solutions.
                    Explore my portfolio to see my work and feel free to reach out if you're interested in collaborating or learning more about my projects.
                    Hello and welcome!
                </p>
            </div>
            <h5>Known Technologies</h5>
            <div className='skill-img-main'>
                <div className='skill-img'>
                    <img src={Java} alt="Java" />
                    <h1>Java</h1>
                    <p>Java is a versatile, object-oriented programming language used for building applications across various platforms. Known for its portability and strong memory management,
                        Java is popular in web, software, and Android development.</p>
                </div>
                <div className='skill-img'>
                    <img src={Sql} alt="Sql" />
                    <h1>Sql</h1>
                    <p>SQL(Structured Query Language) <br />is the standard language for managing and manipulating databases.
                        It is used to retrieve, update, and manage data in relational database systems,making it essential for data-driven applications.</p>
                </div>
                <div className='skill-img'>
                    <img src={Html} alt="Html" />
                    <h1>Html</h1>
                    <p>HTML (HyperText Markup Language) <br />is the foundational language for creating web pages.
                        It structures content using tags, allowing developers to design the layout and elements of web pages, forming the backbone of the web.</p>
                </div>

            </div>
            <div className='skill-img-main'>
                <div className='skill-img'>
                    <img src={Css} alt="Css" />
                    <h1>Css</h1>
                    <p>CSS(Cascading Style Sheets)<br /> is used to style and layout web pages.
                        It controls the visual appearance of HTML elements, allowing developers to apply colors, fonts, spacing, and positioning, ensuring a consistent and responsive design.</p>
                </div>
                <div className='skill-img'>
                    <img src={Js} alt="JavaScript" />
                    <h1>JavaScript</h1>
                    <p>JavaScript is a versatile scripting language that adds interactivity to web pages.
                        It allows developers to create dynamic content, handle events, and perform operations on the client side, making web applications more engaging and functional.</p>
                </div>
                <div className='skill-img'>
                    <img src={ReactJs} alt="ReactJs" />
                    <h1>ReactJs</h1>
                    <p>React is a popular JavaScript library for building user interfaces.
                        It enables developers to create reusable UI components, manage the state of applications efficiently, and build complex, interactive web apps with ease.</p>
                </div>
            </div>
            <h5 style={{marginTop:'60px',marginBottom:"60px"}}>Achievements/Certifications</h5>
            <div className='Certifi-div'>
           
               
                <div className='certificate-content'>
                    <img src={JavaCertificate} alt="JavaCertificate" />
                    <h1>Java Training</h1>
                    <p>Over the course of two intensive months, I underwent comprehensive Java full-stack training, mastering both front-end and back-end development. 
                        Thanks to Besant Technologies, I gained in-depth knowledge of Java and related technologies, enabling me to confidently step into the role of a Java developer. This course not only strengthened my programming skills but also prepared me to tackle real-world challenges in software development.</p>

                </div>

                <div className='web-content'>
                    <img src={WebDesign} alt="WebDesignCertificate" />
                    <h1>Web Designing</h1>
                    <p>On November 11, 2020, I completed an extensive 19-hour Web Designing course on Udemy, progressing from beginner to advanced levels. 
                        This course equipped me with essential skills in HTML, CSS, and responsive design, laying a strong foundation in web development. 
                        Thanks to the practical projects and expert guidance, I now have the confidence to create visually appealing and user-friendly websites from scratch.</p>


                </div>

                <div className='CCNA-div'>
                    <img src={CCNA} alt="CCNACertificate" />
                    <h1>CCNA Certificate</h1>
                    <p>On May 20, 2023, I proudly earned the Cisco CCNAv7 Certificate, unlocking the gateway to networking excellence. 
                        This certification is a testament to my skill, knowledge, and dedication in the field of networking. 
                        Through rigorous training and hands-on experience, I have developed a strong foundation in network fundamentals, security, automation, and more, positioning myself as a capable networking professional ready to tackle the challenges of today's connected world.</p>

                </div>
               
                
            </div>


        </div>
    );
}
export default About;