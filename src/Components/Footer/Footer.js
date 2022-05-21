import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
    <div className="footer">
        <p>
            © Copyright 2022
            <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://github.com/rehnuma-akter"
                class="author"
            >
                {" "} Rehnuma {" "}
            </a>
            | All rights reserved
        </p>
    </div>
    );
};

export default Footer;