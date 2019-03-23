import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="content">
            <div className="inner">
                <h1>Painting with Lizzy</h1>
                <p>Sacramento based artist and instructor for step by step painting parties. Contact me for booking or questions.</p>
            </div>
        </div>
        <nav>
            <ul>
                {/* <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Intro</a></li>
                <li><a href="/page-2">Page 2</a></li> */}
                <li><a href="mailto:paintingwithlizzy@gmailcom">Email</a></li>
                <li><a href="https://www.instagram.com/painting_with_lizzy/" target="_blank" rel="noopener">Instagram</a></li>
                <li><a href="https://www.etsy.com/shop/BeeWhimsicalShop" target="_blank" rel="noopener">Etsy</a></li>
                {/* <li><a href="https://www.youtube.com/channel/UCVv961HlpsSCMtkEwvRio2A" target="_blank" rel="noopener">YouTube</a></li> */}
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
