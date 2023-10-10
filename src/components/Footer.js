"use client"
import React from 'react'
import "./Footer.css"

const Footer = () => {
    const dateActuelle = new Date();
    const anneeActuelle = dateActuelle.getFullYear();

    return (
        <div className='footer-component'>
            <footer className="footer">
                <p className="text">© {anneeActuelle} Gabzdev. Tous droits réservés.</p>
            </footer>
        </div>
    )
}

export default Footer