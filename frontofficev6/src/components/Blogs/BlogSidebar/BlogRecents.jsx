import React, { useState, useEffect } from "react";
import axios from "axios";
import ShopItem from "../../ShopAreas/ShopItem";
import { Link } from "react-router-dom";
const BlogRecents = ({ challenge }) => {
  const [challenges, setChallenges] = useState([]);
  useEffect(() => {
    const fetchChallenges = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/challenge/get");
        setChallenges(response.data);
      } catch (error) {
        console.error("Failed to fetch challenges:", error);
      }
    };

    fetchChallenges();
  }, []);
  return (
    <>
      <h4 className="widget-title">Recent post</h4>

      <div className="rc-post-list">
        {challenges.map((challenge, index) => (
          <div className="rc-post-item">
            <div key={index} className="thumb">
              <Link to="#">
              <img src={`data:${challenge.picture.contentType};base64,${challenge.picture.data}`} alt={challenge.challengeName} />
              </Link>
            </div>

            <div className="content">
              <span className="date">
                <i className="far fa-calendar-alt" />
                {challenge.startDate}
              </span>

              <h5 className="title">
                <Link to={`/blog-details/${challenge._id}`}>{challenge.challengeName}</Link>
              </h5>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BlogRecents;
