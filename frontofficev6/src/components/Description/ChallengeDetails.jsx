// ChallengeDetails.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const ChallengeDetails = ({ match }) => {
    const [challenge, setChallenge] = useState(null);
  
    useEffect(() => {
      const fetchChallengeDetails = async () => {
        try {
          if (match && match.params && match.params.id) {
            const response = await axios.get(`http://localhost:3000/api/challenge/${match.params.id}`);
            setChallenge(response.data);
          }
        } catch (error) {
          console.error('Failed to fetch challenge details:', error);
        }
      };
  
      fetchChallengeDetails();
    }, [match]);
  return (
    <div>
      {challenge ? (
        <div>
          <h2>{challenge.challengeName}</h2>
          <img src={`data:${challenge.picture.contentType};base64,${challenge.picture.data}`} alt={challenge.challengeName} />

          <p>Description: {challenge.description}</p>
          <Link to={`/solution/${challenge._id}`} className="btn btn-primary">
                  Submit Solution
                </Link>        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ChallengeDetails;