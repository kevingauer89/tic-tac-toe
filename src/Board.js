import React from 'react'
import './App.css'
import X from './Xpiece'
import O from './Opiece'
import Blank from './Blankpiece'
// Pieces are imported to the board
export default () =>{
    return <div class="grid">
        <div class="cell top-left"><X/></div>
        <div class="cell top"><O/></div>
        <div class="cell top-right">O</div>
        <div class="cell"></div>
        <div class="cell"><X/></div>
        <div class="cell right"></div>
        <div class="cell bottom-left"><X/></div>
        <div class="cell bottom"></div>
        <div class="cell bottom-right"><O/></div>
    </div>

}
