import React, { useState, useEffect } from 'react';
import axios from 'axios';

import BannerOne from "../../components/Banner/BannerOne";
import BlogAreaTwo from "../../components/Blogs/BlogAreaTwo";
import BrandArea from "../../components/BrandArea/BrandArea";
import CounterAreaTwo from "../../components/CounterAreas/CounterAreaTwo";
import FaqAreaOne from "../../components/FaqArea/FaqAreaOne";
import IntroductionAreaOne from "../../components/Introduction/IntroductionAreaOne";
import ProjectAreaTwo from "../../components/ProjectAreas/ProjectAreaTwo";
import ServicesAreaThree from "../../components/ServicesArea/ServicesAreaThree";
import ServicesAreaTwo from "../../components/ServicesArea/ServicesAreaTwo";
import TestimonialAreaTwo from "../../components/Testimonials/TestimonialAreaTwo";
import Layout from "../../layouts/Layout";
import { gsapTitleAnimation } from "../../lib/gsap-lib/gsapTitleAnimation";
import CallToActionCompany from "../../components/ProjectAreas/CallToActionCompany";
import BreadcrumbArea from "../../components/BreadcrumbArea/BreadcrumbArea";
import HeaderSearch from '../../components/Headers/HeaderSearch';



const CompanyHome = () => {
  useEffect(() => {
    gsapTitleAnimation();
  }, []);

    const [compData, setcompData] = useState({
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
    
            setcompData({
              ...compData,
              companyName: response.data.result.companyName,
              email: response.data.result.email,
              phone_number: response.data.result.phone_number,
              country: response.data.result.country,
              website: response.data.result.website,
              domaine: response.data.result.domaine,
              picture: response.data.result.picture ,
              aboutMe: response.data.result.aboutMe || '', 
              facebookLink: response.data.result.facebookLink || '', 
              githubLink: response.data.result.githubLink || '',
              linkedInLink: response.data.result.linkedInLink || '',
              instagramLink: response.data.result.instagramLink || '',
            });
          } catch (error) {
            console.error('Failed to fetch comp data:', error.message);
          }
        };
    
        fetchCompData();
      }, []);

  return (
    <>
     <Layout
      header={3} footer={1}
      >

<BreadcrumbArea title={`Welcome, ${compData.companyName} `} />
           <HeaderSearch />
        <CallToActionCompany />
      </Layout>
    </>
  );
};

export default CompanyHome;
