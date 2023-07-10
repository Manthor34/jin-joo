import React, { useState } from 'react';
import MenuContentBibimbap from '../components/MenuContentBibimbap';
import MenuContentMandu from '../components/MenuContentMandu';
import MenuContentKimbap from '../components/MenuContentFormules';
import MenuContentEntrees from '../components/MenuContentEntrees';
import MenuContentDesserts from '../components/MenuContentDesserts';
import MenuContentDrinks from '../components/MenuContentDrinks';
import bibimbap from '../assets/images/bibimbapDessinMenu.webp';
import mandu from '../assets/images/kimbapDessinMenu.webp';
import hotteok from '../assets/images/hotteokDessinMenu.webp';
import Drinks from '../assets/images/FRESH_TEA.webp';

function Menu() {
  const [activeTab, setActiveTab] = useState(1);
  const [leftDivImage, setLeftDivImage] = useState(bibimbap);
  const handleTabClick = (tabIndex, image) => {
    setActiveTab(tabIndex);
    setLeftDivImage(image);
  };

  return (
    <>
        <div className="menuWrapper">
          <div className="left" style={{ backgroundImage: `url(${leftDivImage})` }}>
          </div>
          <div className="right">
          <h1 className='menuTitle'>MENU <span className='menuKoreanTitle'>메뉴</span></h1>
            <div className="menuNav">
              <ul>
                <li>
                  <button
                    className={activeTab === 1 ? 'active' : ''}
                    onClick={() => handleTabClick(1, bibimbap)}
                  >
                    <span className="englishTextMenuNav">PLATS</span> <br />{' '}
                    {/* <span className="koreanTextMenuNav">한국면</span> */}
                  </button>
                </li>
                <li>
                  <button
                    className={activeTab === 4 ? 'active' : ''}
                    onClick={() => handleTabClick(4, mandu)}
                  >
                    <span className="englishTextMenuNav">ENTRÉES</span> <br />{' '}
                    {/* <span className="koreanTextMenuNav">간식</span> */}
                  </button>
                </li>
                <li>
                  <button
                    className={activeTab === 5 ? 'active' : ''}
                    onClick={() => handleTabClick(5, hotteok)}
                  >
                    <span className="englishTextMenuNav">DESSERTS</span> <br />{' '}
                    {/* <span className="koreanTextMenuNav">디저트</span> */}
                  </button>
                </li>
                <li>
                  <button
                    className={activeTab === 6 ? 'active' : ''}
                    onClick={() => handleTabClick(6, Drinks)}
                  >
                    <span className="englishTextMenuNav">BOISSONS</span> <br />{' '}
                    {/* <span className="koreanTextMenuNav">음료</span> */}
                  </button>
                </li>
              </ul>
            </div>
            <div className="menuContent">
              <div className={activeTab === 1 ? 'active-tab' : 'inactive-tab'}>
                {activeTab === 1 && <MenuContentBibimbap />}
              </div>
              <div className={activeTab === 2 ? 'active-tab' : 'inactive-tab'}>
                {activeTab === 2 && <MenuContentMandu />}
              </div>
              <div className={activeTab === 3 ? 'active-tab' : 'inactive-tab'}>
                {activeTab === 3 && <MenuContentKimbap />}
              </div>
              <div className={activeTab === 4 ? 'active-tab' : 'inactive-tab'}>
                {activeTab === 4 && <MenuContentEntrees />}
              </div>
              <div className={activeTab === 5 ? 'active-tab' : 'inactive-tab'}>
                {activeTab === 5 && <MenuContentDesserts />}
              </div>
              <div className={activeTab === 6 ? 'active-tab' : 'inactive-tab'}>
                {activeTab === 6 && <MenuContentDrinks />}
              </div>
            </div>
          </div>
        </div>
    </>
);
}

export default Menu;
