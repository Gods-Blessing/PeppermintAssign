import './Footer.css';
import pepper from '../../assets/peppermint.png'

export default function Footer(){

    return(
        <footer className='footer-container'>
            <img className='footer-img' src={pepper} alt="" />

            <ul className='footer-links align-strt'>
                <h2>Quick Links</h2>
                <li>Home</li>
                <li>FAQs</li>
                <li>Products</li>
                <li>Blog</li>
                <li>Privacy Policy</li>
                <li>Careers</li>
            </ul>

            <div className='align-strt'>
                <h1>Address</h1>
                <p>Survey No 116, 3/1, opp. ShubhTej Mangal</p>
                <p>Karyalay, near Balaji Chowk, Jai Bhavani Nagar,</p>
                <p>Pashan, Pune, Maharashtra 411021</p>

                <p className='mt'><span className='contact-title'>Email : </span> <span>abc@gmail.com</span></p>

                <p className='mt'><span className='contact-title'>Phone : </span> <span>+1111111111</span></p>

                <div>
                    
                </div>
            </div>
        </footer>
    )
}