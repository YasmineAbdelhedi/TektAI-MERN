import React, { useEffect } from "react";
import Layout from "../layouts/Layout";
import { gsapTitleAnimation } from "../lib/gsap-lib/gsapTitleAnimation";
import Profile from "../components/Profile/Profile";

const ProfilePage = () => {
    useEffect(() => {
        gsapTitleAnimation();
    }, []);

    return (
        <>
            <Layout header={1} footer={1}>
                <Profile />
       
                {/* <OurHistory /> */}
       
                {/* <BrandArea className={"inner-brand-area pb-70"} /> */}
            </Layout>
        </>
    );
};

export default ProfilePage;