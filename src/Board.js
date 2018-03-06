import React from 'react'
import './App.css'
import './Xpiece'
import './Opiece'
import './Blankpiece'
// Pieces are imported to the board
export default () =>{
    return <div class="grid">
        <div class="cell top-left">1</div>
        <div class="cell top">2</div>
        <div class="cell top-right">3</div>
        <div class="cell">4</div>
        <div class="cell">5</div>
        <div class="cell right">6</div>
        <div class="cell bottom-left">7</div>
        <div class="cell bottom">8</div>
        <div class="cell bottom-right">9</div>
    </div>

}
