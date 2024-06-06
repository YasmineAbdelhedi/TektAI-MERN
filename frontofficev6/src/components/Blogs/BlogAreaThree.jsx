import React, { useState, useEffect } from "react";
import BlogAreaOneItem from "./BlogAreaOneItem";
import { BlogItemsArray } from "./BlogItemsArray";
import ShopItem from "../ShopAreas/ShopItem";
import axios from "axios";

const BlogAreaThree = () => {
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
    <section className="blog-area-three pt-125 pb-180">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-5 col-lg-6">
            <div className="section-title-two text-center mb-60 tg-heading-subheading animation-style1">
              <span className="sub-title">Challenges</span>
              <h2 className="title tg-element-title">Recent Challenges</h2>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          {challenges.slice(0, 3).map((challenge, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <ShopItem challenge={challenge} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogAreaThree;
