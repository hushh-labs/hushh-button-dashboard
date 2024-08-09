import React from 'react';
import './HeaderBar.css';
import Images from '@/app/Exports/Images';
function HeaderBar() {
  return (
    <div className='HeaderBar__mainContainer'>
      <div className='HeaderBar__SearchContainer'>
        <input
          type="text"
          className='HeaderBar__SearchInput'
          placeholder='Search'
        />
        <div className='HeaderBar__Shortcut'>
          <span className='HeaderBar__Key'>⌘</span> <span className='HeaderBar__Key'>F</span>
        </div>
      </div>
      <div className='HeaderBar__AccountContainer'>
       <div className='HeaderBar__AccountContainer__HelpCenter'>
       <img src={Images.questionIcon.src}/>
       <p>Help Center</p>
       </div>

       <div className='HeaderBar__AccountContainer__Acoount'> <img src={Images.userIcon.src}/> <p>Brian F.</p></div>
      </div>
    </div>
  );
}

export default HeaderBar;
