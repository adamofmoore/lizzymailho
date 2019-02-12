import React from 'react'
import PropTypes from 'prop-types'

var currentYear = (new Date()).getFullYear();

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">All rights reserved. &copy; {currentYear}</p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
