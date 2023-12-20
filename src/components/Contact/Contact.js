import React from 'react'
import './contact.css'

export default function Contact() {
  return (
    <>
    <div className='contact_page'>
        {/* <div className='circle'></div> */}
        <div  className='main'>
            <div className='left_portion'>
                <div className='left_top'>
                    <h2 className='contact_info'>contact information</h2>
                    <p className='say'>Say something to start a live chart !</p>
                </div>
                <div className='phone'>
                    <div className='call'>
                        <div className='call_icon'>
                        
                        <p></p>
                        </div>
                    </div>
                    <div className='mail'>
                        <div className='mail_icon'>
                    <i class="ri-mail-fill"></i>
                    <p>gaurav06@gmail.com</p>
                    </div>
                    </div>
                    <div className='location'>
                        <div className='location_icon'>
                        <i class="ri-map-pin-fill"></i>
                        NIST, Berhapur
                        </div>
                    </div>
                </div>
              
              <div className='buttons'>
                <div id='face'>
                <button className='facebook'>
                    <a href='###' id='link'>
                <i class="ri-facebook-circle-fill"></i>
                </a>
                </button>
                </div>
                <div id='insta'>
                <button className='instagram'><a href='https://instagram.com/__gaurav__tiwari__?igshid=OGQ5ZDc2ODk2ZA==' id='link'><i class="ri-instagram-line"></i></a></button></div>
                <div id='link'>
                <button className='linkedin_2'><a href='https://www.linkedin.com/in/gaurav-tiwari-121a77258/' id='link'><i class="ri-linkedin-box-fill"></i></a></button></div>
              </div>

            </div>

           <div className='right_portion'>
                <div className='info'>
                    
                        <input type='text' id='fname' placeholder='First name'></input>
                             <br/>
                    
                        <input type='text' id='lname' placeholder='Last Name'></input><br/>
                        <input type='text' id='phone_number' placeholder='Phone Number'></input><br/>
                        <input type='text' id='email_id' placeholder='Email'></input><br/>

                </div>
                <div className='bottom_right'>
                    <p id='send_message'>send message</p>
                </div>
           </div>

        </div>
      
    </div>
    </>
  )
}
