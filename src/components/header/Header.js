import React from "react";
import style from "./header.module.css";
import logoSvg from "../../assets/images/logo/logoTry.png";
import { useSelector } from "react-redux";
// import thropySvg from "../../assets/images/icons/trophy.svg";
import logOutSvg from "../../assets/images/icons/logout.svg";

function Header({ handleLogOut }) {
  const nickname = useSelector(state => state.user.nickname);
  const activeTrophy = useSelector(state => state.isNewChellange);
  console.log(activeTrophy);
  const nickNameSlice = [...nickname[0].toUpperCase()];

  return (
    <>
      <header className={style.headerContainer}>
        <div className={style.headerUserWrapper}>
          <svg
            className={style.headerLogo}
            version="1.1"
            id="logo_dark"
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            y="0"
            viewBox="0 0 2338 906">
            <g id="_x31__5_">
              <g id="Слой_3_9_">
                <path
                  fill="#15395a"
                  d="M414.5 204.6c-83.8 18.6-149.6 84.4-168.2 168.2C209.7 537.5 353.3 681 518 644.5c83.8-18.6 149.6-84.4 168.2-168.2 36.5-164.7-107-308.2-271.7-271.7zM615 534.1c-74.7 100.2-222.9 100.2-297.6 0-48.3-64.8-48.3-154.3 0-219.1 74.7-100.2 222.9-100.2 297.6 0 48.3 64.8 48.3 154.3 0 219.1z">
                  <animate
                    begin="1.2s"
                    dur="2.5s"
                    values="#15395a; #ffffff; #15395a"
                    keyTimes="0; 0.6; 1"
                    attributeName="fill"
                    repeatCount="indefinite"
                  />
                </path>
                <path
                  fill="#15395a"
                  d="M466.1 284.5c-76.2.1-139.9 63.8-140 140-.1 77.5 62.7 140.3 140.2 140.2 76.2-.1 139.9-63.8 140-140 0-77.5-62.8-140.3-140.2-140.2zm72 212c-39.7 39.7-104.1 39.7-143.8 0s-39.7-104.1 0-143.8 104.1-39.7 143.8 0 39.7 104.1 0 143.8z">
                  <animate
                    begin="0.6s"
                    dur="2.5s"
                    values="#15395a; #ffffff; #1  5395a"
                    keyTimes="0; 0.5; 1"
                    attributeName="fill"
                    repeatCount="indefinite"
                  />
                </path>
                <path
                  fill="#15395a"
                  d="M494.4 370.8c-29.7-15.6-66.4-4.1-81.9 25.6-15.6 29.7-4.1 66.4 25.6 81.9 29.7 15.6 66.4 4.1 81.9-25.6 15.5-29.6 4.1-66.3-25.6-81.9zm-24.3 86.5c-18.1 2.2-34.5-10.8-36.7-28.9-2.2-18.1 10.8-34.5 28.9-36.7 18.1-2.2 34.5 10.8 36.7 28.9s-10.8 34.6-28.9 36.7z">
                  <animate
                    begin="0s"
                    dur="2.5s"
                    values="#15395a; #ffffff; #15395a"
                    keyTimes="0; 0.5; 1"
                    attributeName="fill"
                    repeatCount="indefinite"
                  />
                </path>
                <path
                  className={style.st1}
                  d="M583.2 579.6l81.6.6 78.5 104.5-79.2-5.9-14.6 77.4-81.6-101.1z"
                />
                <path
                  className={style.st1}
                  d="M610.9 643.5l-144.5-186-.2-32.9 31.2 10.8L641 620.2c6.4 8.3 4.9 20.3-3.4 26.7-8.2 6.4-20.2 4.9-26.7-3.4z"
                />
              </g>
              <path
                className={style.st0}
                d="M892.3 620.6c-11.3 10.8-22.6 18.8-33.9 23.8s-23.4 7.5-36.4 7.5c-24.8 0-44.4-7.2-58.7-21.5-14.3-14.3-21.5-33.9-21.5-58.7V420.6h45.9v139.6c0 18.4 3.9 32 11.7 40.8 7.8 8.8 19.9 13.2 36.4 13.2 11.7 0 21.9-2.3 30.7-6.8s17.4-12 25.8-22.6V420.6h45.4v227.8h-45.4v-27.8zM1202.3 624.3c-15.1 9.7-30.7 17-46.7 21.8s-32.6 7.3-49.7 7.3c-36 0-64.7-11.1-86.2-33.4-21.5-22.3-32.2-52-32.2-89.1 0-34 10.3-61.6 30.9-82.8s47.5-31.8 80.8-31.8c32.9 0 58.9 10.8 78.2 32.3 19.2 21.5 28.8 50.6 28.8 87.3v6.7h-170.6c1.3 21.5 8.4 38.3 21.2 50.4 12.8 12.1 30 18.1 51.5 18.1 14.5 0 29.5-2.7 45.2-8s31.9-13.4 48.7-24.3l.1 45.5zm-166.7-114.1h120.6c-1.5-16.6-7.5-29.9-18-39.9s-23.7-15-39.5-15c-17.4 0-31.5 4.6-42.2 13.9-10.6 9.2-17.6 22.9-20.9 41zM1254.5 633v-48.6c13.6 9 26.8 15.9 39.5 20.7s24.2 7.2 34.8 7.2c11.7 0 20.8-2.2 27.5-6.5 6.7-4.4 10-10.3 10-17.9 0-9.5-12.4-20.5-37.2-32.8-7.2-3.6-12.8-6.5-16.8-8.6-21.2-10.8-35.8-21.3-43.6-31.4s-11.8-22.5-11.8-37.1c0-19.1 6.8-34.2 20.5-45.4 13.6-11.2 32.4-16.8 56.2-16.8 12.8 0 25.2 1.5 37 4.6 11.8 3 23.4 7.8 34.8 14.2V479c-14-7.7-26.8-13.4-38.3-17.1-11.6-3.7-22.6-5.5-32.9-5.5-9.5 0-16.9 1.6-22.1 4.9-5.2 3.3-7.8 8.1-7.8 14.3 0 11.5 15.9 25.1 47.6 40.7l4.2 2c24.8 12.5 41 23.5 48.6 32.9 7.6 9.5 11.3 21.4 11.3 35.9 0 20.1-7.5 36.1-22.6 48.1-15 12-35 18-59.8 18-14.3 0-27.9-1.6-40.8-4.9-13.1-3.6-25.8-8.6-38.3-15.3zM1610.1 641.3c-7.1 3.9-14.7 6.9-22.8 8.8-8.1 1.9-16.9 2.8-26.3 2.8-25.6 0-43.7-6.1-54.1-18.2-10.4-12.2-15.7-34.4-15.7-66.6v-108h-38.7v-4.4l79.6-88h5.2v53h71.3v39.5h-71.3v104.5c0 18.9 2.3 31.1 7 36.6s13.4 8.3 26.3 8.3c6.9 0 13.6-.9 20.2-2.7 6.6-1.8 13-4.6 19.2-8.4l.1 42.8z"
              />
              <path
                className={style.st1}
                d="M1655.9 353.6c0-7.2 2.5-13.3 7.4-18.2 4.9-4.9 11-7.4 18.2-7.4 7.2 0 13.3 2.5 18.2 7.4s7.4 11 7.4 18.2-2.5 13.3-7.4 18.2c-4.9 4.9-11 7.4-18.2 7.4-7.2 0-13.3-2.5-18.2-7.4-4.9-4.9-7.4-11-7.4-18.2z"
              />
              <path
                className={style.st0}
                d="M1658.9 420.7h45.4V653h-45.4zM1996.3 603.6l-95.9-183h50.5l70.3 133.4 65.6-133.4h49.6l-169.2 342.5h-49.6l78.7-159.5z"
              />
              <g>
                <path className={style.st0} d="M1784 420.7h46.8V653H1784z" />
                <path
                  className={style.st0}
                  d="M1830.8 648.5H1784V460.1h-29.8v-39.5h29.8v-20.7c0-19.7.8-34 2.5-42.9 1.6-8.9 4.5-16.6 8.6-23.2 6.6-10.7 15.7-19 27.2-24.9 11.6-5.9 24.5-8.9 38.8-8.9 4.4 0 9.5.4 15.2 1.2 5.7.8 12.8 2.2 21.3 4.2v39.9c-6.4-1.3-12-2.3-16.6-3-4.7-.7-8.8-1-12.2-1-13.8 0-23.6 3.8-29.3 11.5-5.8 7.6-8.6 21-8.6 40.1v27.6h30.3V460h-30.3l-.1 188.5z"
                />
              </g>
            </g>
          </svg>
          {/* <img className={style.headerLogo} src={logoSvg} alt="logo" /> */}
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
            <div
              className={
                activeTrophy ? style.headerChellengeDead : style.headerChellenge
              }>
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
