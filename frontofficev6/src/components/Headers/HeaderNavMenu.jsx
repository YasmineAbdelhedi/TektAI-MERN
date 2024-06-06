import {useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import cn from "classnames";
import Dropdown from 'react-bootstrap/Dropdown';
import axios from 'axios';
import HeaderLanguageBar from "./HeaderLanguageBar";
import ContactAreaOne from "../Contact/ContactAreaOne";
import NotificationComponent from "../ProjectAreas/ProjectDetailsArea/NotificationComponent";





const HeaderNavMenu = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [userId, setUserId] = useState('');

  const [userData, setUserData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone_number: '',
    country: '',
    profession: '',
    picture:"",
    aboutMe:"",
    facebookLink:"",
    instagramLink:"",
    linkedInLink:"",
    githubLink:"",
    cv:"",
    userId: '', // Add userId field to store current user ID
  }); 
  const [companyData, setcompanyData] = useState({
    companyName: '',
    email: '',
    phone_number: '',
    country: '',
    website:'',
    domaine:'',
    picture:"",
    aboutMe:"",
    facebookLink:"",
    instagramLink:"",
    linkedInLink:"",
    githubLink:"",
  });  
  const isCompanyUser = companyData && companyData.userType === 'company';
  const isNormalUser = userData && userData.userType === 'user';

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdown = useRef(null);
    const logout = () => {
      localStorage.removeItem("access_Token");
      localStorage.removeItem("userData");
      navigate("/");
    };
    const isLoggedIn = localStorage.getItem("access_Token") !== null;
    const isLoginPage = pathname === "/"; 
    useEffect(() => {
      const loadGoogleTranslateScript = () => {
        const script = document.createElement('script');
        script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        script.async = true;
        document.body.appendChild(script);
      };
  
      // Check if Google Translate API script is already loaded
      if (!window.google || !window.google.translate) {
        // If not loaded, load the script dynamically
        loadGoogleTranslateScript();
      } else {
        // If loaded, initialize Google Translate Element
        initializeTranslateElement();
      }
    }, []);
  
    const initializeTranslateElement = () => {
      // Check if the TranslateElement constructor is available
      if (window.google && window.google.translate && typeof window.google.translate.TranslateElement === 'function') {
        // Initialize Google Translate Element
        new window.google.translate.TranslateElement(
          { pageLanguage: 'en' },
          'google_translate_element'
        );
      }
    };
    useEffect(() => {
      const clickHandler = ({ target }) => {
        if (!dropdown.current) return;
        if (!dropdownOpen || dropdown.current.contains(target)) return;
        setDropdownOpen(false);
      };
  
      document.addEventListener('click', clickHandler);
  
      return () => {
        document.removeEventListener('click', clickHandler);
      };
    }, [dropdownOpen]);


    useEffect(() => {
      const fetchUserData = async () => {
        try {
          const access_token = localStorage.getItem('access_Token');
          if (!access_token) {
            throw new Error('Access Token not found');
          }
  
          const response = await axios.get('http://localhost:3000/api/user/current', {
            headers: {
              "content-type": "application/json; charset=utf-8",
              Authorization: access_token,
            },
          });
          const userId = response.data.result._id;
          setUserId(userId);

          setUserData(  ({
            ...userData,
            userType: 'user',
            firstname: response.data.result?.firstname || '',
            lastname: response.data.result?.lastname || '',
            email: response.data.result?.email || '',
            phone_number: response.data.result?.phone_number || '',
            country: response.data.result?.country || '',
            profession: response.data.result?.profession || '',
            picture: response.data.result?.picture || '',
            aboutMe: response.data.result?.aboutMe || '', 
            facebookLink: response.data.result?.facebookLink || '', 
            githubLink: response.data.result?.githubLink || '',
            linkedInLink: response.data.result?.linkedInLink || '',
            instagramLink: response.data.result?.instagramLink || '',
            userId: response.data.result?._id || '', // Store user ID
          }));
          console.log(' userData:' ,userData)
        } catch (error) {
          console.error('Failed to fetch user data:', error.message);
        }
      };
  
      fetchUserData();
    }, []);


    useEffect(() => {
      const fetchCompData = async () => {
        try {
          const access_token = localStorage.getItem('access_Token');
          if (!access_token) {
            throw new Error('Access Token not found');
          }
  
          const response = await axios.get('http://localhost:3000/api/company/current', {
            headers: {
              "content-type": "application/json; charset=utf-8",
              Authorization: access_token,
            },
          });
  
          setcompanyData({
            ...companyData,
            userType: 'company',
            companyName: response.data.result.companyName || '',
            email: response.data.result.email || '',
            phone_number: response.data.result.phone_number,
            country: response.data.result.country,
            website: response.data.result.website,
            domaine: response.data.result.domaine,
            picture: response.data.result.picture || '',
            aboutMe: response.data.result.aboutMe || '', 
            facebookLink: response.data.result.facebookLink || '', 
            githubLink: response.data.result.githubLink || '',
            linkedInLink: response.data.result.linkedInLink || '',
            instagramLink: response.data.result.instagramLink || '',
          });
          console.log(companyData)
        } catch (error) {
          console.error('Failed to fetch comp data:', error.message);
        }
      };
  
      fetchCompData();
    }, []);
    

  const isActiveClassName = (path) => {
    return path === pathname ? "active" : "";
  };
 
  return (
    <div className="navbar-wrap main-menu d-none d-lg-flex">
            


      <ul className="navigation">
        <li
          className={cn("menu-item-has-children", {
            active: ["/", "/editprofile", "/home-3", "/createteam"].includes(pathname),
          })}
        >
          <a href="#">Home</a>
          
        </li>
        {/* <li className={cn(isActiveClassName("/about"))}>
          <Link to="/about">About Us</Link>
        </li> */}
        {/* <li
          className={cn("menu-item-has-children", {
            active: ["/services", "/services-2", "/services-details"].includes(
              pathname
            ),
          })}
        >
          <a href="#">Services</a>
          <ul className="sub-menu">
            <li className={cn(isActiveClassName("/services"))}>
              <Link to="/services">Services One</Link>
            </li>
            <li className={cn(isActiveClassName("/services-2"))}>
              <Link to="/services-2">Services Two</Link>
            </li>
            <li className={cn(isActiveClassName("/services-details"))}>
              <Link to="/services-details">Services Details</Link>
            </li>
          </ul>
        </li> */}
        <li
          className={cn("menu-item-has-children", {
            active: [
              "/project",
              "/project-two",
              "/project-details",
              "/team",
              "/team-details",
              "/estimate",
            ].includes(pathname),
          })}
        >
          <a href="/project">Teams</a>
          <ul className="sub-menu">
           
          
           
            <li className={cn(isActiveClassName("/estimate"))}>
              <Link to="/estimate">Create challenge</Link>
            </li>
          </ul>
        </li>
        <li
          className={cn("menu-item-has-children", {
            active: ["/shop", "/shop-details"].includes(pathname),
          })}
        >
          <a href="/shop">Challenges</a>

        </li>
        <li
          className={cn("menu-item-has-children", {
            active: ["/blog", "/blog-list", "/blog-details"].includes(pathname),
          })}
        >
          
          <a href="/chat">Chat</a>
          
        </li>
        <li className={cn("menu-item-has-children", { /* Classes de style pour la navigation */ })}>
          <a href="#">More</a> {/* Lien Others */}
          <ul className="sub-menu">
            <li className={cn(isActiveClassName("/about"))}>
              <Link to="/about">About Us</Link>
            </li>
           
            <li className={cn(isActiveClassName("/contactUs"))}>
              <Link to="/contactUs">Contact Us</Link>
            </li>
            </ul>
            </li>
       
        {/* <li className={cn(isActiveClassName("/contactUs"))}>
              <Link to="/contactUs">contact Us</Link>
            </li>
                  */}

            {isLoggedIn && !isLoginPage && (
              
 <div className="user-info">

    {isCompanyUser && (
      <li className={cn(isActiveClassName("/profileCompany"))}>
        <Link className="nav-link" to="/profileCompany">{companyData.companyName}</Link>
        {/* <img src={`data:${companyData.picture.contentType};base64,${companyData.picture.data}`} alt="company" /> */}
      </li>
    )}
    {isNormalUser && (
      <li className={cn(isActiveClassName("/profile"))}>
      <Link className="nav-link" to="/profile">{userData.firstname} {userData.lastname}</Link>
        {/* <img src={`data:${userData.picture.contentType};base64,${userData.picture.data}`} alt="user" /> */}
      </li>
    )}
    <li>   <NotificationComponent userId={userData.userId} />
</li>
    
 </div>
)}
 <HeaderLanguageBar/>

 {isLoggedIn && !isLoginPage && (
  <li className={cn(isActiveClassName("/"))}>
    <a className="nav-link" onClick={logout}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"/>
  <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
</svg></a>
  </li>
)}

      </ul>
      {/* <div id="google_translate_element"></div> */}
    </div>
    
  );
};

export default HeaderNavMenu;