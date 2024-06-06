import React, { useState, useEffect } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { FaArrowUp } from 'react-icons/fa';


const TermsAndConditions = () => {
    const [acceptedTerms, setAcceptedTerms] = useState(false);
    const [hoveredRow, setHoveredRow] = useState(null); // To track the hovered row
const [clickedRow, setClickedRow] = useState(null); // To track the clicked row

    const handleAcceptTerms = () => {
        setAcceptedTerms(!acceptedTerms);
    }
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top when component mounts
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
    }
    return (
        <Container fluid className="px-0">
        <Row className="no-gutters">
            <Col md={4} className="fixed-space">
            <div className="scroll-buttons py-5">
            <div className="table-responsive">
            <table className="table ">
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="d-flex justify-content-between align-items-center  mb-0">
                                            <button className="scroll-button  btn-outline-primary rounded-pill btn-sm" onClick={() => scrollToSection('services-title')}>
                                                <span>&#8595;</span>
                                            </button>
                                            <h3 className="scroll-title text-muted mb-0" style={{ fontSize: '1.5em' , fontWeight: 'normal' }}>
                                                1. The Services We Provide
                                            </h3>
                                        </div>
                                    </td>
                                
                                </tr>
                                
                                <tr>
                                    <td>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <button className="scroll-button  btn-outline-danger rounded-pill btn-sm" onClick={() => scrollToSection('financed-title')}>
                                                <span>&#8595;</span>
                                            </button>
                                            <h3 className="scroll-title text-muted mb-0" style={{ fontSize: '1.5em' ,fontWeight: 'normal'}}>
                                                2. How Our Services Are Financed
                                            </h3>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <button className="scroll-button btn-outline-success rounded-pill btn-sm" onClick={() => scrollToSection('commitments-title')}>
                                                <span>&#8595;</span>
                                            </button>
                                            <h3 className="scroll-title text-muted  mb-0"  style={{ fontSize: '1.5em' ,fontWeight: 'normal' }}>
                                                3. Your Commitments to TektAI and Our Community
                                            </h3>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <button className="scroll-button btn-outline-warning rounded-pill btn-sm" onClick={() => scrollToSection('for-title')}>
                                                <span>&#8595;</span>
                                            </button>
                                            <h3 className="scroll-title text-muted  mb-0"  style={{ fontSize: '1.65em' ,fontWeight: 'normal'}}>
                                                4. Additional Provisions
                                            </h3>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <button className="scroll-button btn-outline-secondary rounded-pill btn-sm" onClick={() => scrollToSection('five-title')}>
                                                <span>&#8595;</span>
                                            </button>
                                            <h3 className="scroll-title text-muted  mb-0" style={{ fontSize: '1.5em' ,fontWeight: 'normal'}}>
                                                5. Other Terms and Policies That May Apply to You
                                            </h3>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                </Col>
            <Col md={8}>
            <Container className="py-5">
                        <h1 className="mb-4">Terms and Conditions</h1>
                        <Row>
                            <Col md={12}>
              <p>
                Welcome to TektAI, a platform for industry-driven data science challenges. TektAI is a comprehensive development initiative aiming to bridge the gap between industry and data science developers. The project entails the creation of a web platform where companies can submit real-world challenges, and developer teams can register, collaborate, and submit solutions. The platform includes features such as automated performance evaluation, team rankings, and a prize allocation process. TektAI's goal is to provide a dynamic space for industry-driven data science challenges, fostering collaboration and innovation among companies, developers, and students in the field. By accessing and using this website, you agree to comply with and be bound by the following terms and conditions:
              </p>
              </Col>
                        </Row>
                        <Row>
                            <Col md={12}>

                                <h2 id="services-title">1. The Services We Provide</h2>
                                              <ul>
<li><p>TektAI provides a comprehensive platform where companies can submit data science challenges and developer teams can participate in solving them. Our platform offers tools for challenge submission, team registration, collaboration, solution submission, and performance evaluation. Through TektAI, companies can present their real-world problems to a global network of skilled developers, fostering innovation and creativity in the field of data science.</p></li>

<li><p>Our platform is designed to streamline the challenge-solving process, allowing companies to define their problem statements clearly, set evaluation criteria, and engage with talented developers from diverse backgrounds. Developers, on the other hand, benefit from access to a wide range of challenges across various industries, providing opportunities to apply their skills in practical scenarios and gain valuable experience.</p></li>

<li><p>By offering a dynamic space for collaboration and problem-solving, TektAI aims to bridge the gap between industry needs and technological innovation. We believe that by facilitating meaningful interactions between companies and developers, we can drive progress in the field of data science and contribute to the development of impactful solutions for real-world challenges.</p></li>
</ul>
</Col>
                        </Row>
              
                        <Row>
                            <Col md={12}>
                            <button className="back-to-top"    onClick={scrollToTop}> 
                            
    <FaArrowUp className="arrow-icon" style={{ color: 'blue' }} />
    Back to Top
</button>
                                <h2 id="financed-title">2. How Our Services Are Financed</h2>
                                              <p>
                TektAI's services are financed through various means, including sponsorships, partnerships, and revenue generated from the platform's activities. Companies may sponsor challenges or partner with us to support specific initiatives. Additionally, revenue is generated through fees associated with challenge submissions, premium features, and sponsored content.
              </p>
             
<p>Instead of paying for the use of TektAI and other products and services we offer, by using TektAI covered by these Terms, you agree that we will show you personalized ads and other commercial and sponsored content paid for by companies and organizations to promote them on TektAI and beyond. We use your personal data, such as information about your activity and interests, to show you personalized ads and sponsored content that may be more relevant to you.</p>


</Col>
                        </Row>

                        {/* Add more sections as needed */}

                        <Row>
                            <Col md={12}>
                            <button className="back-to-top"    onClick={scrollToTop}> 
                            
                            <FaArrowUp className="arrow-icon" style={{ color: 'blue' }} />
                            Back to Top
                        </button>
                                <h2 id="commitments-title">3. Your Commitments to TektAI and Our Community</h2>
                                <p>We encourage you to commit to upholding the core principles of our platform and to contribute to creating a vibrant and collaborative community.</p>

<p>By using TektAI's services, you agree to adhere to the following commitments:</p>

<p><span style={{ color: 'black' }}> <strong>Commitment to Respect and Integrity:</strong></span> You commit to respecting fellow members of the TektAI community, treating each individual with dignity and respect, and fostering an inclusive environment where everyone feels valued and heard.</p>

<p><span style={{ color: 'black' }}> <strong>Commitment to Collaboration and Innovation:</strong></span> You commit to actively participating in challenges and projects offered on the TektAI platform, sharing your knowledge and skills, and contributing constructively to solving the data science challenges presented.</p>

<p><span style={{ color: 'black' }}> <strong>Commitment to Ethics and Fairness:</strong></span> You commit to acting ethically and fairly in all your interactions on the TektAI platform, adhering to professional standards and avoiding any fraudulent, deceptive, or discriminatory behavior.</p>

<p><span style={{ color: 'black' }}> <strong>Commitment to Privacy and Security:</strong></span> You commit to protecting the privacy and security of data provided by partner companies and to abiding by TektAI's privacy and security policies regarding the handling of personal information.</p>

<p><span style={{ color: 'black' }}> <strong>Commitment to Continuous Learning:</strong></span> You commit to ongoing professional and personal development by actively engaging in training and learning activities offered on the TektAI platform, in order to stay updated with the latest advancements in data science and technology.</p>

<p>By accepting these commitments, you contribute to building a thriving and collaborative community on TektAI, where innovation and creativity can flourish.</p>
</Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                            <button className="back-to-top"    onClick={scrollToTop}> 
                            
                            <FaArrowUp className="arrow-icon" style={{ color: 'blue' }} />
                            Back to Top
                        </button>
                          <h2 id="for-title">4. Additional Provisions</h2>
  <p>
    <h6>1. Updating Our Terms</h6>
    We are constantly striving to improve our services and develop new features to offer you better Products, as well as our community. Therefore, we may update these Terms from time to time to properly reflect our services and practices, to promote a safe and secure experience of our Products and services, and/or to comply with applicable law. We will only modify them if the provisions are no longer adequate or if they are incomplete, and if the changes are reasonable and consider your interests, or if they are necessary for security or compliance with applicable law.
    We will inform you (for example, by email or through our Products) at least 30 days before modifying these Terms and give you the opportunity to review them before they take effect, unless the modifications are required by law. Once the revised Terms take effect, you will be bound by them if you continue to use our Products.
    We hope you will continue to use our Products, but if you disagree with our revised Terms and no longer wish to be part of the TektAI community, you can delete your account at any time.
  </p>
  <p>
    <h6>2. Suspension or Deletion of an Account</h6>
    We want to make TektAI a warm and safe place where everyone can express themselves and share their opinions and ideas.
    If we determine, in our discretion, that you have clearly, seriously, or repeatedly violated our terms or policies, including Community Standards, we may suspend or permanently disable your access to TektAI entities' Products, and we may permanently disable or delete your account. We may also disable or delete your account if you repeatedly infringe third-party intellectual property rights or if the law requires us to do so.
    We may disable or delete your account if it is not verified after registration, if it is not used and remains inactive for an extended period, or if we determine that someone has used it without your authorization and we have failed to confirm that you are the account holder. Learn more about how we disable and delete accounts.
    If we do so, we will inform you and explain the options available to you to request a review, unless doing so could incur our legal liability or that of a third party, harm our community of users, or compromise or alter the integrity or operation of our services, systems, or Products, or in case of technical restrictions or when prohibited by law.
    Learn more about the provisions you can take if your account has been disabled and how to contact us if you believe we have disabled your account in error.
    If you delete or if we disable or delete your account, these Terms will end and will no longer constitute an agreement between you and us, but the following provisions will remain in effect: 3, 4.2-4.5.
  </p>
  <p>
    <h6>3. Limitation of Liability</h6>
    We make every effort to provide the best Products possible and give clear guidance to all users. However, our Products are provided "as is," and to the extent permitted by law, we cannot guarantee that they will always be secure, risk-free, or error-free, or that they will function without interruptions, delays, or imperfections. To the extent permitted by applicable law, we also DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OWNERSHIP, AND NON-INFRINGEMENT. We cannot control or direct what people do or say, and we are not responsible for their actions or conduct (online or offline) or the content they share (whether offensive, inappropriate, obscene, illegal, or otherwise objectionable).
    We are unable to predict when problems may arise with our Products. Therefore, our liability will be limited to the fullest extent permitted by applicable law. To the fullest extent permitted by applicable law, we will in no event be liable to you for any loss of profits, revenue, information, or data, or for any consequential, special, indirect, exemplary, punitive, or incidental damages arising out of or in connection with these Terms or the TektAI Products, or in relation to them (regardless of the cause and regardless of the theory of liability invoked, including negligence), even if we have been informed of the possibility of such damages.
  </p>
</Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                            <button className="back-to-top"    onClick={scrollToTop}> 
                            
                            <FaArrowUp className="arrow-icon" style={{ color: 'blue' }} />
                            Back to Top
                        </button>
                            <h2 id="five-title">5. Other Terms and Policies That May Apply to You</h2>
                    <p>
                        Your use of TektAI's platform is also subject to the following additional terms and policies:
                    </p>
                    <ul>
                        <li>Community Standards: These guidelines highlight our standards regarding the content you post on TektAI and your activities on TektAI .</li>
                        <li>Commercial Terms: These terms apply if you also access our Products or use them for commercial or professional purposes, including advertising, operating an application on our Platform, using our measurement services, managing a group or Page for commercial activity, or selling goods or services.</li>
                        <li>Community Payment Terms: These terms apply to payments made on or through TektAI.</li>
                        {/* Add more items as needed */}
                    </ul>
            </Col>
          </Row>
          <Row>
          <Col md={12}>
                <h2>Accept Terms</h2>
              <p>To continue, please accept the terms and conditions:</p>
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="acceptTerms" />
                <label className="form-check-label" htmlFor="acceptTerms">I agree to the terms and conditions</label>
              </div>
            </Col>
          </Row>
        </Container>
        </Col>
            </Row>
        </Container>
    );
    }

export default TermsAndConditions;
