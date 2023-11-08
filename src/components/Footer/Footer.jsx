import './Footer.css'

import { AiOutlineInstagram } from 'react-icons/ai'
import { FaPinterest, FaFacebookF } from 'react-icons/fa'
import 'bootstrap/dist/css/bootstrap.min.css'
import DropElem from '../DropElem'

export default function Footer() {
    return(
        <footer>
            <section className='desc'>
                <article>
                    <h3 style={{ width: '63px' }}>© 2021</h3>
                    <h3 style={{ fontSize: '15px' }}>Kinn Home</h3>
                </article>
                <div></div>
                <p>
                    Need to get in touch? Just email us <br />
                    at hello@kinnhome.co
                </p>
            </section>
            <section className='explore'>
                <h2>Explore</h2>
                <div></div>
                <DropElem
                    name="Shop"
                    action1="Golden Bird Shop"
                    action2="Sunny Paradise Mall"
                    action3="Delicacies Store"
                />
                <h2>Style Quiz</h2>
                <h2>About Us</h2>
                <DropElem
                    name="Stories"
                    action1="Star Space Floor"
                    action2="Historical Era Floor"
                    action3="Journey to the Past Floor"
                />
            </section>
            <section className='help'>
                <h1>Help</h1>
                <div></div>
                <h2>FAQs + Shipping</h2>
                <h2>Contact</h2>
                <h2>Terms</h2>
                <h2>Trade</h2>
            </section>
            <article className='link'>
                <FaFacebookF />
                <FaPinterest />
                <AiOutlineInstagram />
            </article>
        </footer>
    )
}