import React from "react";

const HeaderLanguageBar = () => {

  return (
    <>
      <div className="lang-menu  ">
        <div className="selected-lang">
          English
        </div>
        <ul>
          <li>
            <a href="#" className="de">German</a>
          </li>
         
          <li>
            <a href="" className="fr">French</a>
          </li>
          <li>
            <a href="" className="ar">Arabic</a>
          </li>
        </ul>
      </div>
      <style>
        {`
          .lang-menu {
            width: 100px;
            text-align: right;
            font-weight: bold;
            margin-top: 25px;
            position: relative;
            backgroud-color:white;
          }
          .lang-menu .selected-lang {
            display: flex;   
            justify-content: space-between;
            line-height: 2;
            cursor: pointer;
          }
          .lang-menu .selected-lang:before {
            content: '';
            display: inline-block;
            width: 24px;
            height: 24px;
            background-image: url(img/icon/enFlag.png);
            background-size: contain;
            background-repeat: no-repeat;
          }
          .lang-menu ul {
            margin: 0;
            padding: 0;
            display: none;
            background-color: #fff;
            border: 1px solid #f8f8f8;
            position: absolute;
            top: 45px;
            right: 0px;
            width: 125px;
            border-radius: 5px;
            box-shadow: 0px 1px 10px rgba(0,0,0,0.2);
          }
          .lang-menu ul li {
            list-style: none;
            text-align: left;
            display: flex;
            justify-content: space-between;
          }
          .lang-menu ul li a {
            text-decoration: none;
            width: 125px;
            padding: 5px 10px;
            display: block;
          }
          .lang-menu ul li:hover {
            background-color: #f2f2f2;
          }
          .lang-menu ul li a:before {
            content: '';
            display: inline-block;
            width: 25px;
            height: 25px;
            vertical-align: middle;
            margin-right: 10px;
            background-size: contain;
            background-repeat: no-repeat;
          }
          .de:before {
            background-image: url(img/icon/deFlag.png);
          }
          .en:before {
            background-image: url(img/icon/enFlag.png);
          }
          .fr:before {
            background-image: url(img/icon/frFlag.png);
          }
          .ar:before {
            background-image: url(img/icon/arFlag.png);
          }
          .lang-menu:hover ul {
            display: block;
          }
        `}
      </style>
    </>
  );
};

export default HeaderLanguageBar;
