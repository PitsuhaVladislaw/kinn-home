import './Newsletter.css'

export default function Newsletter() {
    return(
        <section className='newsletter'>
            <article>
                <h1>Sign up to our newsletter</h1>
                <p>
                    Receive special offers and first look at new products.
                </p>
                <form action="letter">
                    <input type="text" name='email' />
                    <button>Subscribe</button>
                </form>
            </article>
        </section>
    )
}