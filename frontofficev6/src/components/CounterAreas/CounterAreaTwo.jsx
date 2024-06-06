import { jarallax } from "jarallax";
import { bgImgFromData } from "../../lib/helpers";
import CounterAreaOneItem from "./CounterAreaOneItem";
import { CounterItemsArray } from "./CounterItemsArray";
import cn from "classnames";
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { Link } from "react-router-dom";
const CounterAreaTwo = ({ className, src }) => {
  useEffect(() => {
    bgImgFromData();
  }, []);
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
    challenges:"",
    courses:"",
    winningAwards:"",
    datasets:"",
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
  // jarallax
  useEffect(() => {
    jarallax(document.querySelectorAll(".jarallax"), {
      speed: 0.2,
    });
  }, []);

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

  return (
    <section className={cn(className, "counter-bg jarallax")} >

      <div className="container">
     
      <div className="row">
        
  {CounterItemsArray.map((x, index) => (
    <div key={index} className="col-lg-3 col-sm-6">
      <CounterAreaOneItem item={x} userData={userData} />
    </div>
  ))}
</div>

      </div>
    </section>
  );
};

export default CounterAreaTwo;
