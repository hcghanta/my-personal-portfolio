import React from 'react'
import {Link} from "react-router-dom";

function EasterEggs(){
    return(
        <div>
            <p><Link to="/easter-eggs/play-spades">Play Spades!</Link></p>
            <p><Link to="/easter-eggs/play-poker">Play Poker!</Link></p>
        </div>
    )
}

export default EasterEggs