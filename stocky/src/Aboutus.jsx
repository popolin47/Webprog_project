import React, {useState} from 'react';
import mingtar from './asset/img/Mingtar.jpg';
import praewa from './asset/img/Praewa.jpg';
import Tee from './asset/img/Tee.jpg';
import jin from './asset/img/jin_webpro.jpg';
const Aboutus = () =>{
    return ( 
        <div>
            <div class=" items-center text-center justify-center text-5xl pt-6">About us</div>
       <div class="flex flex-row self-auto pt-6 items-center justify-center max-w-full max-h-full ">
        <div class="flex flex-col ">
            <img src={mingtar} alt="" loading="lazy" class="max-w-96 max-h-96  pr-4" />
            <div class="text-lg font-mono font-semibold">Jakkaphat Jumratboonsum</div>
        </div>
        <div class="flex flex-col ">
            <img src={praewa} alt="" loading="lazy" class="max-w-96 max-h-96 pr-4"/>
            <div class="text-lg font-mono font-semibold">Praewa Chan-on</div>
        </div>
        <div class="flex flex-col ">
            <img src={Tee} alt="" loading="lazy"class="max-w-96 max-h-96 pr-4"/>
            <div class="text-lg font-mono font-semibold">Kasidis Boonchu</div>
        </div>
        <div class="flex flex-col ">
            <img src={jin} alt="" loading="lazy"class="max-w-96 max-h-96 pr-4"/>
            <div class="text-lg font-mono font-semibold">Jinjutha Jindapunpaisan</div>
        </div>
        </div>
        </div>
    );
}
 
export default Aboutus;
