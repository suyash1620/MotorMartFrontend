import React from 'react';
import './Footer.css'
import img1 from '../react image/one.jpg'
import img2 from "../react image/two.jpeg"
import img3 from '../react image/three.jpeg'
import img4 from '../react image/four.jpeg'
import img5 from '../react image/fb.png'
import img6 from '../react image/twitter.png'
import img7 from '../react image/insta.png'
import img8 from '../react image/web.png'
import img9 from '../react image/utb.png'
import img10 from '../react image/wifi.png'





const Footers = () => {
    return (
        <footer>
          
            <div className="footer-container">
            
                <div className="footer-column">
                    <span style={{fontSize:"15px", color:"blue"}}> MOTORS <span style={{fontSize:"15px",color:"white "}}> WORDPRESS THEME</span></span><br />
                    <p>Fusce interdum ipsum egestas urna amet fringilla, et placerat ex venenatis. Aliquet luctus pharetra. Proin sed fringilla lectus... ar sit amet tellus in mollis. Proin nec egestas nibh, eget egestas urna. Phasellus sit amet vehicula nunc. In hac habitasse platea dictumst.</p>
                </div>
                <div className="footer-column">
                    <h6>PHOTO GALLERY</h6>
                    <div className="photo-gallery">
                        <img src={img1} alt="" />
                         <img src={img2}alt="" />
                        <img src={img3} alt="" />
                        <img src={img4}alt="" /> 
                    </div>
                </div>
                <div className="footer-column">
                    <h6>LATEST BLOG POSTS</h6>
                    <p>The Tesla Model S isn't the first truly autonomous car on the road... <span>No comments</span></p>
                </div>
                <div className="footer-column">
                    <h6>SOCIAL NETWORK</h6>
                    <div className="social-icons">
                        <img src={img5}alt="Facebook" className='fb' />
                        <img src={img6}alt="Twitter" className='twi' />
                        <img src={img7}alt="insta"  className='ins'/>
                        <img src={img8}alt="web"  className='web'/>
                        <img src={img9}alt="youtube"  className='yt'/>

                 
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-column">
                    <h6>SUBSCRIBE</h6>
                
                        <input type="email" placeholder="Enter your email..." style={{width:"220px"}} />
                        <img src={img10} alt=""  height="45px" width="45px" style={{backgroundColor:"orange", marginLeft:"-10px" , marginTop:"-2px"}}/>
            
                </div>
                <div className="footer-column">
                    <h6>SALES HOURS</h6>
                    <p>Monday - Friday: 09:00AM - 09:00PM<br />Saturday: 09:00AM - 07:00PM<br />Sunday: Closed</p>
                </div>
                <div className="footer-column">
                    <h6>SERVICE HOURS</h6>
                    <p>Monday - Friday: 09:00AM - 09:00PM<br />Saturday: 09:00AM - 07:00PM<br />Sunday: Closed</p>
                </div>
                <div className="footer-column">
                    <h6>PARTS HOURS</h6>
                    <p>Monday - Friday: 09:00AM - 09:00PM<br />Saturday: 09:00AM - 07:00PM<br />Sunday: Closed</p>
                </div>
            </div>
        </footer>
    );
};

export default Footers;
