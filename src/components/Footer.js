import React from 'react'
import classes from './Footer.module.css'

const Footer = () =>{
    return(
        <div className={classes.footer}>
            <footer>
                <p>Code By: Michael Holt. <a href="https://github.com/MHolt193">My github</a></p>
            </footer>
        </div>
    )
}

export default Footer