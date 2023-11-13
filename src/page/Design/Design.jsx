import './Design.css'

import Dishes from '../../assets/img/dishes_plants.png'

export default function Design() {
    return(
        <section className='obj'>
            <article>
                <img src={Dishes} alt="dishes" />
                <div className='obj-card'>
                    <h1>Our Design Story</h1>
                    <div className='obj-line'></div>
                    <p>
                        We believe in thoughtful, intentional <br />
                        living. So we promise not to clutter your <br />
                        cabinets with one-off pieces you’ll rarely <br />
                        use. Our collection only includes items <br />
                        you’ll reach for every day. Because <br />
                        mindful living should be simple, not <br />
                        stressful.
                    </p>
                </div>
            </article>
        </section>
    )
}