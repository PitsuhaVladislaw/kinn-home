import './Moments.css'

import Obj1 from '../../assets/img/Obj_1.png'
import Obj2 from '../../assets/img/Obj_2.png'
import Obj3 from '../../assets/img/Obj_3.png'
import Obj4 from '../../assets/img/Obj_4.png'

export default function Moments() {
    return (
        <section className='moments'>
            <h1>#KinnMoments</h1>
            <article>
                <img src={Obj1} alt="ris_1" />
                <img src={Obj2} alt="ris_2" />
                <img src={Obj3} alt="ris_3" />
                <img src={Obj4} alt="ris_4" />
            </article>
        </section>
    )
}