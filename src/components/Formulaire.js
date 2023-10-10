"use client"
import React from 'react'

export const Formulaire = () => {
  return (
    <div className='formulaire-component'>
        <form>
            <label for='prenom'>Prénom</label>
            <input type='text' name='prenom' id='prenom'/>
            <label for='nom'>Nom</label>
            <input type='text' name='nom' id='nom'/>
            <input type='submit' value='Envoyer'/>
        </form>
    </div>
  )
}
