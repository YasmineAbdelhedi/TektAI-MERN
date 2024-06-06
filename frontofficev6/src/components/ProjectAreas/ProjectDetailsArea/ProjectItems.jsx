// ProjectItem.jsx
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

const ProjectItem = ({ team }) => {
    const [joinRequestSent, setJoinRequestSent] = useState(false);
    const [userData, setUserData] = useState({
      firstname: '',
      lastname: '',
      email: '',
      phone_number: '',
      country: '',
      profession: '',
      picture: "",
      aboutMe: "",
      facebookLink: "",
      instagramLink: "",
      linkedInLink: "",
      githubLink: "",
      cv: "",
      userId: '', // Add userId field to store current user ID
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
            setUserData({
                ...userData,
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
            });
            console.log('userData:', userData);
        } catch (error) {
            console.error('Failed to fetch user data:', error.message);
        }
    };

    fetchUserData();
}, []);
    const [leaderEmail, setLeaderEmail] = useState("");
    const [memberEmails, setMemberEmails] = useState([]);
    const handleJoinTeam = async () => {
        try {
            // Send join request to the server
            await axios.post(`http://localhost:3000/api/notif/${team._id}/join`, {
              userData: userData, // Include the current user ID in the request payload
              teamleader: team.leader,
              teamname:team.name // Include the team object


            });            
            setJoinRequestSent(true);
        } catch (error) {
            console.error('Failed to join team:', error);
        }
    };
    useEffect(() => {
        const fetchLeaderEmail = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/user/${team.leader}`);
                setLeaderEmail(response.data.user.email);
            } catch (error) {
                console.error("Failed to fetch leader email:", error);
            }
        };

        const fetchMemberEmails = async () => {
            try {
                const emails = await Promise.all(team.members.map(async memberId => {
                    const response = await axios.get(`http://localhost:3000/api/user/${memberId}`);
                    return response.data.user.email;
                }));
                setMemberEmails(emails);
            } catch (error) {
                console.error("Failed to fetch member emails:", error);
            }
        };

        fetchLeaderEmail();
        fetchMemberEmails();
    }, [team.leader, team.members]);

    const picture = team.picture ? team.picture : { contentType: '', data: '' };

    return (
        <div className="card" style={{ backgroundColor: '#f8f9fa', borderRadius: '10px', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', padding: '15px' }}>
            <div className="card-body d-flex align-items-center">
              
                <div>
                    <h5 className="card-title" style={{ color: '#343a40', marginBottom: '10px', fontSize: '1.2rem' }}>{team.name}</h5>
                    <p className="card-text" style={{ color: '#495057', marginBottom: '5px' }}><strong>Leader:</strong> {leaderEmail}</p>
                    <p className="card-text" style={{ color: '#495057', marginBottom: '5px' }}><strong>Size:</strong> {team.teamSize}</p>
                    <p className="card-text" style={{ color: '#495057', marginBottom: '5px' }}><strong>Members:</strong></p>
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        {memberEmails.map((email, index) => (
                            <span key={index} className="badge badge-secondary" style={{ margin: '2px', fontSize: '12px', padding: '5px 8px', backgroundColor: '#5f76e8', color: '#fff', borderRadius: '5px' }}>{email}</span>
                        ))}
                    </div>
                    <button type="button" onClick={handleJoinTeam}>Join Team</button>
                </div>
            </div>
        </div>
    );
};

export default ProjectItem;
