// Importing React library and styles from About.css file
import React from 'react';
import '../styles/About.css';

// Creating the About component
function About() {
    // Return a div with a title and a paragraph about the creators of the app
    return(
        <div className='main_container'>
            <h1>About us</h1>
            <p>Botinhood is a stock trading web app designed and created by Alex Berryhill, Eric Poole, Erik Sanders, Haydon Uresti,
                Ravy Lim, and Tapelo Dube.
            </p>
            <p>
                Botinhood is a stock trading web app that utilizes trading algorithms to maximize your profits!
            </p>
        </div>
    )
}

// Exporting the About component as the default export of this module
export default About;
