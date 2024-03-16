import React, {useState} from 'react';
import mingtar from './asset/img/Mingtar.jpg';
import praewa from './asset/img/Praewa.jpg';
import Tee from './asset/img/Tee.jpg';
const Aboutus = () =>{
    return ( 
       <div class="grid grid-flow-col grid-rows-2 grid-cols-3 gap-8">
        <div>
            <img src={mingtar} alt="" loading="lazy"/>
        </div>
        <div class="col-start-3">
            <img src={praewa} alt="" loading="lazy"/>
        </div>
        <div>
            <img src={Tee} alt="" loading="lazy"/>
        </div>
        </div>
    );
}
 
export default Aboutus;
