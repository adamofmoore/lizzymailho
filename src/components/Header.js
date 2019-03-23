import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="content">
            <div className="inner">
                <h1>Lizzy Mailho</h1>
                <p>Sacramento based paint whisperer. Contact me to commission work or book a paint party.</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="mailto:lizzymailhoart@gmailcom">Email</a></li>
                <li><a href="https://www.instagram.com/bee_whimsical/" target="_blank" rel="noopener">Instagram</a></li>
                <li><a href="https://www.etsy.com/shop/BeeWhimsicalShop" target="_blank" rel="noopener">Etsy</a></li>
                <li><a href="https://www.youtube.com/channel/UCVv961HlpsSCMtkEwvRio2A" target="_blank" rel="noopener">YouTube</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
