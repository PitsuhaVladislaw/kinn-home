import './Collections.css'

import Img1 from '../../assets/img/desc1.png'
import Img2 from '../../assets/img/desc2.png'
import Img3 from '../../assets/img/desc3.png'

export default function Collections() {

    function Card(props) {
        return(
            <div>
                <img src={props.img} alt="product" />
                <h6>{props.name}</h6>
                <h4>{props.price}</h4>
            </div>
        )
    }

    return(
        <section className='collections'>
            <h1>Maple Board Collection</h1>
            <article>
                <Card 
                    img={Img1}
                    name="Maple Board - Short"
                    price="$98.00"
                />
                <Card
                    img={Img2}
                    name="Maple Board - Long"
                    price="$125.00"
                />
                <Card
                    img={Img3}
                    name="Maple Board - Wide"
                    price="$158.00"
                />
            </article>
        </section>
    )
}