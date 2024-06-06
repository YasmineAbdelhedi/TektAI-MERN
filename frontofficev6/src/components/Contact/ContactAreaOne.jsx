import { jarallax } from "jarallax";
import React, { useState,useEffect } from "react";
import axios from "axios";
import { intersectingAnimation } from "../../lib/helpers";
import { Form, Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';


const ContactAreaOne = () => {
  const { challengeId } = useParams();
  const [userId, setUserId] = useState('');
  const [formData, setFormData] = useState({
    name: "",
    leader: "",
    members: [],
    teamSize: "",
    skillRequirement: "",
    picture: null,
    challenge: challengeId,
  });

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
        const userData = response.data.result;
        const userIdFromData = userData._id;

        setUserId(userIdFromData);
        setFormData(prevFormData => ({
          ...prevFormData,
          leader: userIdFromData,
        }));
       
        console.log(' userData:', userData)
      } catch (error) {
        console.error('Failed to fetch user data:', error.message);
      }
    };

    fetchUserData();
  }, []);

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleFileChange = (file) => {
    setFormData({ ...formData, picture: file });
  };

  const handleAddMemberField = () => {
    setFormData({
      ...formData,
      members: [...formData.members, ""],
    });
  };

  const handleMemberInputChange = (index, value) => {
    const updatedMembers = [...formData.members];
    updatedMembers[index] = value;
    setFormData({
      ...formData,
      members: updatedMembers,
    });
  };

  const handleRemoveMemberField = (index) => {
    const updatedMembers = [...formData.members];
    updatedMembers.splice(index, 1);
    setFormData({
      ...formData,
      members: updatedMembers,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const accessToken = localStorage.getItem('access_Token');
      if (!accessToken) {
        console.error('Access Token not found in sessionStorage.');
        return;
      }

      const response = await axios.post("http://localhost:3000/api/team/create", formData, {
        headers: {
          Authorization: accessToken
        },
      });
      toast.success('Team created successfully');
      console.log(response.data);
    } catch (error) {
      console.error("Failed to create team:", error);
      toast.error('Failed to create team: ' + error.response.data.message);
    }
  };

  useEffect(() => {
    intersectingAnimation();
    jarallax(document.querySelectorAll(".jarallax"), {
      speed: 0.2,
    });
  }, []);

  return (
    <section className="contact-area contact-bg has-animation jarallax" >
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="contact-inner">
              <div className="section-title mb-65">
                <span className="sub-title">
                  <svg
                    viewBox="0 0 41 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M35.2826 37.5886C36.6662 36.9737 38.8185 36.205 40.8939 36.205C38.8185 36.205 36.6662 35.4363 35.2826 34.8213C34.6676 33.4377 33.8989 31.2854 33.8989 29.21C33.8989 31.2854 33.1303 33.4377 32.5153 34.8213C31.1317 35.4363 28.9794 36.205 26.9039 36.205C28.9794 36.205 31.1317 36.9737 32.5153 37.5886C33.1303 38.9722 33.8989 41.1246 33.8989 43.2C33.8989 41.1246 34.6676 38.9722 35.2826 37.5886Z"
                      fill="currentcolor"
                    />
                    <path
                      d="M31.2085 13.5288C33.4377 12.5295 36.8968 11.2996 40.279 11.2996C36.8968 11.2996 33.4377 10.0698 31.2085 9.07046C30.2093 6.84128 28.9794 3.38221 28.9794 0C28.9794 3.38221 27.7495 6.84128 26.7502 9.07046C24.521 10.0698 21.0619 11.2996 17.6797 11.2996C21.0619 11.2996 24.521 12.5295 26.7502 13.5288C27.7495 15.758 28.9794 19.2171 28.9794 22.5993C28.9794 19.2171 30.2093 15.758 31.2085 13.5288Z"
                      fill="currentcolor"
                    />
                    <path
                      d="M16.6036 31.7467C19.2939 30.5936 23.5986 28.9794 27.6726 28.9794C23.5986 28.9794 19.2939 27.442 16.6036 26.2121C15.3737 23.5986 13.8363 19.294 13.8363 15.22C13.8363 19.294 12.2989 23.5986 11.069 26.289C8.37865 27.442 4.07402 29.0563 0 29.0563C4.07402 29.0563 8.37865 30.5936 11.069 31.8235C12.2989 34.4371 13.8363 38.7417 13.8363 42.8926C13.8363 38.7417 15.3737 34.4371 16.6036 31.7467Z"
                      fill="currentcolor"
                    />
                  </svg>
                  Create Team
                </span>

              </div>
              <Card style={{ boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)' }}>
                <Card.Body>
                  <Form onSubmit={handleSubmit}>
                    <Form.Control
                      type="text"
                      placeholder="Enter team name"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                    />
                    <Form.Control
                      type="text"
                      placeholder="Enter challenge"
                      value={formData.challenge}
                      onChange={(e) => handleChange("challenge", e.target.value)}
                      readOnly
                    />
                    <Form.Control
                      type="text"
                      placeholder="Enter Leader"
                      value={formData.leader}
                      onChange={(e) => handleChange("leader", e.target.value)}
                      readOnly
                    />
                    <Form.Control
                      type="text"
                      placeholder="Enter skill requirement"
                      value={formData.skillRequirement}
                      onChange={(e) => handleChange("skillRequirement", e.target.value)}
                    />
                    <Form.Control
                      type="number"
                      placeholder="Enter team size"
                      value={formData.teamSize}
                      onChange={(e) => handleChange("teamSize", e.target.value)}
                    />
                   {formData.members.map((member, index) => (
  <div key={index} className="input-icon-wrapper">
    <Form.Control
      type="text"
      placeholder={`Enter team member ${index + 1}`}
      value={member}
      onChange={(e) => handleMemberInputChange(index, e.target.value)}
    />
    {index > 0 && (
      <Button variant="outline-danger" onClick={() => handleRemoveMemberField(index)} >
        <FontAwesomeIcon icon={faMinus} />
      </Button>
    )}
  </div>
))}

                    <Button variant="primary" onClick={handleAddMemberField}>
                      <FontAwesomeIcon icon={faPlus} />
                    </Button>

                    <Form.Control type="file" onChange={(e) => handleFileChange(e.target.files[0])} accept="image/*" />
                    <Button type="submit" variant="success">Create Team</Button>
                  </Form>
                </Card.Body>
              </Card>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default ContactAreaOne;
