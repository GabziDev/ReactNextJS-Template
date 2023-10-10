"use client"
import React from 'react'
import "./Formulaire.css";

const Formulaire = () => {
  return (
    <div className='formulaire-component'>
        <form>
            <label htmlFor='prenom'>Prénom</label>
            <input type='text' name='prenom' id='prenom'/>
            <label htmlFor='nom'>Nom</label>
            <input type='text' name='nom' id='nom'/>
            <input type='submit' value='Envoyer'/>
        </form>
    </div>
  )
}

export default Formulaire