import { useEffect } from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import AnimatedCursor from "react-animated-cursor";
import HomeOne from "./pages/Homes/UserHome";
import WOW from "wow.js";
import AOS from "aos";
import HomeTwo from "./pages/Homes/HomeTwo";
import HomeThree from "./pages/Homes/LoginPage";
import HomeFour from "./pages/Homes/HomeFour";
import AboutUsPage from "./pages/AboutUsPage";
import ServicesPageOne from "./pages/Services/ServicesPageOne";
import ServicesPageTwo from "./pages/Services/ServicesPageTwo";
import ServicesDetailsPage from "./pages/Services/ServicesDetailsPage";
import ProjectPageOne from "./pages/Projects/ProjectPageOne";
import ProjectPageTwo from "./pages/Projects/ProjectPageTwo";
import ProjectDetailsPage from "./pages/Projects/ProjectDetailsPage";
import TeamPage from "./pages/TeamPages/TeamPage";
import TeamDetailsPage from "./pages/TeamPages/TeamDetailsPage";
import EstimatePage from "./pages/SubmitChallenge";
import ShopPage from "./pages/ShopPages/ShopPage";
import ShopDetailsPage from "./pages/ShopPages/ShopDetailsPage";
import BlogPage from "./pages/BlogPages/BlogPage";
import BlogListPage from "./pages/BlogPages/BlogListPage";
import BlogDetailsPage from "./pages/BlogPages/BlogDetailsPage";
import ContactPage from "./pages/ContactPage";
import ForgetPassword from "./components/forgetPassword";
import ResetPassword from "./components/ResetPassword";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProfilePage from  "../src/pages/ProfilePage"
import UpdateChallenge from "./pages/UpdateChallenge";
import SolutionPage from "./pages/SolutionPage";
import DescriptionPage from "./pages/DescriptionPage";
import Policy from "./pages/Policy";
import CompanyPage from "./pages/Company";
import CompanyProfilePage from "../src/pages/CompanyProfilePage";
import HowToCompeteDetailsArea from "./pages/HowToCompeteDetailsArea";
import DatasetDetails from "./pages/Projects/DatasetDetails";
import CompanyHome from "./pages/Homes/CompanyHome";
import { useTranslation } from "react-i18next";
import Terms from "./pages/BlogPages/terms";
import FundForm from "./components/Team/TeamDetailsArea/FundForm";
import Payment from "./components/Stripe/Payment";
import Success from "./components/Stripe/Success";
import ChatbotButton from "./components/ChatbotButton";
import EditProfile from "./components/Profile/EditProfile";
import Codeverif from "./components/Codeverif";
import SignupAdmin from "./pages/SignupAdmin";
import LoginAdmin from "./pages/LoginAdmin";
import Editor from "./components/Editor";
import Chat from "./components/Chat/Chat";
import Solution from "./components/Solution";
import Favorites from "./pages/Favorites";

function App() {
  const {t,i18n}=useTranslation();

useEffect(()=>{
  const lng = navigator.language;
  i18n.changeLanguage(lng);
},[])
const lng = navigator.language;




  useEffect(() => {
    const wow = new WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: false,
      live: true,
    });
    wow.init();
  }, []);

  // aos scroll
  useEffect(() => {
    AOS.init({ duration: 1000, mirror: true, once: true, disable: "mobile" });
  }, []);

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return (
    <>
    
    <ToastContainer />
      <AnimatedCursor
        innerSize={10}
        outerSize={32}
        color="0, 124, 251"
        outerAlpha={0}
        innerScale={0}
        outerScale={0}
        trailingSpeed={1000}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "option",
          "textarea",
          "button",
          ".link",
          ".swiper-pagination-bullet",
        ]}
      />

      <Routes>
        <Route path="/home-3" element={<HomeOne />} />
        <Route path="/editprofile" element={<HomeTwo />} />
        {/* <Route path="/logout" element={<Profile />} /> */}
        <Route path="/forgot-password" element={<ForgetPassword />} />
        <Route path="/" element={<HomeThree />} />
        <Route path="/createteam/:challengeId" element={<HomeFour />} />

        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/services" element={<ServicesPageOne />} />
        <Route path="/services-2" element={<ServicesPageTwo />} />
        <Route path="/services-details" element={<ServicesDetailsPage />} />
        <Route path="/project" element={<ProjectPageOne />} />
        <Route path="/project-two" element={<ProjectPageTwo />} />
        <Route path="/project-details" element={<ProjectDetailsPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/contactUs" element={<TeamDetailsPage />} />
        <Route path="/fund" element={<Payment />} />
        <Route path="/estimate" element={<EstimatePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/shop-details/:id" element={<ShopDetailsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog-list" element={<BlogListPage />} />
        <Route path="/blog-details/:id" element={<BlogDetailsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/reset-password/:id/:token" element={<ResetPassword />} />
        <Route path="/updateChallenge" element={<UpdateChallenge />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/solution/:challengeId"element={<SolutionPage />} />
        <Route path="/challenge/:id" element={<DescriptionPage/>} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/company" element={<CompanyPage />} />
        <Route path="/profileCompany" element={<CompanyProfilePage />} />
        <Route path="/datasetArea" element={<DatasetDetails/>}/>
        <Route path="/learnToCompete" element={<ProjectDetailsPage />} />
        <Route path="/companyhome" element={<CompanyHome />} />
        {/* <Route path="/payment" element={<Payment/>} /> */}
        <Route path="/success" element={<Success/>} />
        <Route path="/loginadmin" element={<LoginAdmin/>} />
        <Route path="/signupadmin" element={<SignupAdmin/>} />
        {/* <Route path="/verification/:email" element={<Codeverif/>} /> */}
        <Route path="/verification" element={<Codeverif/>} />
        <Route path="/editor" element={<Editor/>} />
        <Route path="/solutions/:challengeId"element={<Solution />} />

        <Route path="/chat" element={<Chat />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
      <ChatbotButton/>

    </>
  );
}

export default App;
