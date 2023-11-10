import '../Design/Design.css'

import foodDishes from '../../assets/img/food_dishes.png'

export default function Advice() {
    return(
        <section>
            <article>
                <div>
                    <h1>Your Table Your Time</h1>
                    <div className='obj-line'></div>
                    <p>
                        Our modern lives keep us in constant <br />
                        motion. But what keeps us moving isn’t <br />
                        always what moves us. Our time at the <br />
                        table is our pause button. Meals can <br />
                        become moments and moments can <br />
                        become memories. So grab a plate, pull <br />
                        up a seat, and stay a while
                    </p>
                </div>
                <img src={foodDishes} alt="food_dishes" />
            </article>
        </section>
    )
}