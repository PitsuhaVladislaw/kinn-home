import './NavBar.css'

import { FiUser } from 'react-icons/fi'
import { GrSearch } from 'react-icons/gr'
import { HiOutlineShoppingBag } from 'react-icons/hi'

import Logo from '../../assets/img/logo.png'
import { useState } from 'react'

export default function NavBar() {

    const[good, setGood] = useState(0);

    function plus() {
        setGood(good + 1);
    }

    return(
        <nav>
            <div className='line'></div>
            <section>
                <article className='nav-map'>
                    <h4>Shop</h4>
                    <h4>Style Quiz</h4>
                    <h4>About Us</h4>
                    <h4>Stories</h4>
                </article>
                <article className='nav-logo'>
                    <a href=""><img src={Logo} alt="logo" /></a>
                </article>
                <article className='nav-link'>
                    <FiUser />
                    <GrSearch />
                    <div className='shop-link'>
                        <HiOutlineShoppingBag onClick={plus} />
                        <div>
                            <h6>{good}</h6>
                        </div>
                    </div>
                </article>
            </section>
        </nav>
    )
}