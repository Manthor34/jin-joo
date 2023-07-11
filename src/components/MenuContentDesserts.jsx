import React from 'react';
import mochi from '../assets/images/mochiMobile.png';
import tiramisu from '../assets/images/tiramisuMobile.png';
import hotteok from '../assets/images/hotteokMobile.png';

const MenuContentDesserts = () => {
    
  return (
    <>
      <img className='imgEntree mochiMenuImg' src={mochi}/>
      <h2 className='h2Entree'>MOCHI <span className='koreanMenu'>빙과 모찌</span></h2>
      <p className='paraEntree'>GLACÉ & ARTISANAL : coeur de crème glacée ou de sorbet enrobé d’une pâte de riz.</p>
      <img className='imgEntree tiramisuMenuImg' src={tiramisu}/>
      <h2 className='h2Entree'>TIRAMISU <span className='koreanMenu'>티라미수</span></h2>
      <p className='paraEntree'>PARFUMÉ AU MATCHA : mousse de mascarpone légère, biscuit trempé dans du thé vert saupoudré de matcha</p>
      <img className='imgEntree hotteokMenuImg' src={hotteok}/>
      <h2 className='h2Entree'>HOTTEOK <span className='koreanMenu'>호떡</span></h2>
      <p className='paraEntree'>PANCAKE CORÉEN : avec une pâte croustillante et une farce sucrée aux noix et à la cannelle.</p>
    </>
  );
};

export default MenuContentDesserts;
