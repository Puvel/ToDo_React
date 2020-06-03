import React from 'react';
import style from './header.module.css';
import logoSvg from '../../assets/images/logo/logoTry.png';
// import thropySvg from "../../assets/images/icons/trophy.svg";
import logOutSvg from '../../assets/images/icons/logout.svg';

function Header({ nickname = 'Ghore', handleLogOut }) {
  const nickNameSlice = [...nickname[0]];

  return (
    <>
      <header className={style.headerContainer}>
        <div className={style.headerUserWrapper}>
          <img className={style.headerLogo} src={logoSvg} alt="logo" />
          <div className={style.headerUserInfo}>
            <ul className={style.headerUserInfo__list}>
              <li className={style.headerUserInfo__listItem}>
                <p className={style.headerUserInfo__listItem_SliceNickname}>
                  {nickNameSlice}
                </p>
              </li>
              <li className={style.headerUserInfo__listItem}>
                <p className={style.headerUserInfo__listItem_FullNickname}>
                  {nickname}'s Quest Log
                </p>
              </li>
            </ul>
            <div className={style.headerChellenge}>
              {/* <p className = { style.headerChellengeHover}>You've got new challenge</p> */}
              {/* <img
                className={style.headerChellengeSvg}
                src={thropySvg}
                alt="Chellenge"
            /> */}
            </div>
            <button onClick={handleLogOut} className={style.buttonLogOut}>
              <img className={style.buttonSvg} src={logOutSvg} alt="logOut" />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
