import { Logo, ShieldCheckIcon, TruckIcon, CreditCardIcon, OrdersIcon, WishlistIcon, AccountIcon, ShoppingCartIcon, CrownIcon, SearchIcon } from '../../utils/icons.ts';

import './Header.scss';

function Header() {
    return (
        <header className='header'>
            <div className='header__container'>
                <div className='header__benefits'>
                    <div className='header__benefits__benefit'>
                        <img src={ShieldCheckIcon} alt="" />
                        <p>Compra <span>100% segura</span></p>
                    </div>
                    <div className='header__benefits__benefit'>
                        <img src={TruckIcon} alt="" />
                        <p><span>Frete grátis</span> acima de R$ 200</p>
                    </div>
                    <div className='header__benefits__benefit'>
                        <img src={CreditCardIcon} alt="" />
                        <p><span>Parcele</span> suas compras</p>
                    </div>
                </div>
                <div className='header__main'>
                    <a href="/" aria-label='Econverse Home'>
                        <img src={Logo} alt="" />
                    </a>
                    <form action="/search" method="GET" className='header__search'>
                        <input type="search" id='search-input' name='q' placeholder="O que você está buscando?" />
                        <button type="submit" aria-label="Buscar"><img src={SearchIcon} alt="" /></button>
                    </form>
                    <div className='header__actions'>
                        <a href="/pedidos" aria-label="Pedidos">
                            <img src={OrdersIcon} alt="" />
                        </a>
                        <a href="/wishlist" aria-label="Lista de desejos">
                            <img src={WishlistIcon} alt="" />
                        </a>
                        <a href="/conta" aria-label="Minha conta">
                            <img src={AccountIcon} alt="" />
                        </a>
                        <a href="/carrinho" aria-label="Carrinho de compras">
                            <img src={ShoppingCartIcon} alt="" />
                        </a>
                    </div>
                </div>
                <nav className='header__navigation'>
                    <a href="/produtos">Todas categorias</a>
                    <a href="/supermercado">Supermercado</a>
                    <a href="/livros">Livros</a>
                    <a href="/moda">Moda</a>
                    <a href="/lancamentos">Lançamentos</a>
                    <a href="/ofertas">Ofertas do Dia</a>
                    <a href="/assinatura"><img src={CrownIcon} alt="" />Assinatura</a>
                </nav>
            </div>
        </header>
    )
}

export default Header;