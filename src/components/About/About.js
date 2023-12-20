import React from 'react';
import './about.css';

export default function About() {
  return (
   
      <>
      <div className='first_page'>
        <div className='top'>
           <h1>Our Team</h1>
           <a href='' id='home'>
             <h3 className='home'>home</h3>
              </a>
              
        </div>
       

        <div className='content'>

        <div className='item'>
          
            <div className='image_one'><img src="./images/Gaurav.jpeg" alt="gau" id="gaurav"></img> </div>
           
            <a href='https://www.linkedin.com/in/gaurav-tiwari-121a77258/' id='link'>
            <div className='text_one'>Gaurav Tiwary</div>
            </a>
        </div>
        <div className='item'>
       
            <div className='image_two'><img src="./images/Abhimanyu_new.jpg" alt="abhi" id="abhimanyu"></img>  </div>
            <a href='https://www.linkedin.com/in/abhimanyu-kumar-4b6716242' id='link'>
            <div className='text_two'>Abhimanyu Kumar</div>
            </a>
        </div>
        <div className='item'>
           
            <div className='image_three'><img src="./images/Rudransh.jpeg" alt="rudra" id="rudransh"></img> </div>
            <a href='http://www.linkedin.com/in/rudransh-dash-96b9b6259' id='link'>
            <div className='text_three'>Rudransh Das</div>
            </a>
        </div>
        <div className='item'>
           
            <div className='image_four'><img src="./images/Sriya.jpg" alt="sri" id="sriya"></img></div>
            <a href='https://www.linkedin.com/in/sriya-reddy-564607258' id='link'>
            <div className='text_four'>Sriya Reddy</div>
            </a>
        </div>
        <div className='item'>
          
            <div className='image_five'><img src="./images/Payal1.jpeg" alt=" pal" id="payal"></img></div>
            <a href='https://www.linkedin.com/in/payal-bhattamisra-5a1117253' id='link'>
            <div className='text_five'>Payal Bhatamishra</div>
            </a>
        </div>
        <div className='item'>
          
            <div className='image_six'><img src="./images/Sai.jpg" alt="kalyan" id="sai"></img></div>
            <a href='https://www.linkedin.com/in/k-sai-kalyan-1a7249262' id='link'>
            <div className='text_six'>Sai Kalyan</div>
            </a>
        </div>
        </div>
       
       <div className='footer'>
        <h2 className='foot'>
        Visit our Linkedin Profiles</h2>
        <button className='linkedin'>
        <i class="ri-linkedin-fill"></i>
        </button>
       </div>

      </div>
      </>
    
  )
}
