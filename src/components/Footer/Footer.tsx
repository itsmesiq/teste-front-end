import { Logo, InstagramIcon, FacebookIcon, LinkedinIcon } from '../../utils/icons.ts';
import './Footer.scss';

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer__main'>
                <div className='footer__container'>
                    <div className='footer__info'>
                        <a href="/" aria-label='Econverse Home'><img src={Logo} alt="" width="164" height="48" /></a>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <div className='footer__socials'>
                            <a href="/instagram" aria-label='Instagram'><img src={InstagramIcon} alt="" /></a>
                            <a href="/facebook" aria-label='Facebook'><img src={FacebookIcon} alt="" /></a>
                            <a href="/linkedin" aria-label='Linkedin'><img src={LinkedinIcon} alt="" /></a>
                        </div>
                    </div>
                    <div className='footer__line'></div>
                    <div className='footer__links'>
                        <div className='footer__links-column'>
                            <h3>Institucional</h3>
                            <ul>
                                <li><a href="/sobre">Sobre Nós</a></li>
                                <li><a href="/movimento">Movimento</a></li>
                                <li><a href="/trabalhe-conosco">Trabalhe conosco</a></li>
                            </ul>
                        </div>
                        <div className='footer__links-column'>
                            <h3>Ajuda</h3>
                            <ul>
                                <li><a href="/suporte">Suporte</a></li>
                                <li><a href="/fale-conosco">Fale Conosco</a></li>
                                <li><a href="/perguntas-frequentes">Perguntas Frequentes</a></li>
                            </ul>
                        </div>
                        <div className='footer__links-column'>
                            <h3>Termos</h3>
                            <ul>
                                <li><a href="/termos-e-condicoes">Termos e Condições</a></li>
                                <li><a href="/politica-de-privacidade">Política de Privacidade</a></li>
                                <li><a href="/troca-e-devolucao">Troca e Devolução</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer__copyright'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </footer>
    )
}

export default Footer;