import './Newsletter.scss';

function Newsletter() {
    return (
        <section className='newsletter'>
            <div className='newsletter__container'>
                <div className='newsletter__text'>
                    <h2>Inscreva-se na newsletter</h2>
                    <p>Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.</p>
                </div>
                <form action="/newsletter" method="POST" className='newsletter__form'>
                    <div className='newsletter__form-fields'>
                        <input type="text" placeholder='Digite seu nome' name='name' id='name' required/>
                        <input type="email" placeholder='Digite seu e-mail' name='email' id='email' required/>
                        <button type='submit'>Inscrever</button>
                    </div>
                    <div className='newsletter__checkbox'>
                        <input type="checkbox" name='termsAccepted' id='termsAccepted' required/>
                        <label htmlFor="termsAccepted">Aceito os termos e condições</label>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Newsletter;