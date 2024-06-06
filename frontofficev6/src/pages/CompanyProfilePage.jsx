import React, { useEffect } from "react";
import Layout from "../layouts/Layout";
import { gsapTitleAnimation } from "../lib/gsap-lib/gsapTitleAnimation";
import CompanyProfile from "../components/Profile/CompanyProfile";

const CompanyProfilePage = () => {
    useEffect(() => {
        gsapTitleAnimation();
    }, []);

    return (
        <>
            <Layout header={1} footer={1}>
                <CompanyProfile />
       
                {/* <OurHistory /> */}
       
                {/* <BrandArea className={"inner-brand-area pb-70"} /> */}
            </Layout>
        </>
    );
};

export default CompanyProfilePage;