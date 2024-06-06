import React, { useState, useEffect } from "react";
import axios from "axios";
import ShopItem from "./ShopItem";

const DatasetArea = () => {
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
  }, []); // Empty dependency array ensures the effect runs only once after initial render

  return (
    <section className="shop-area pt-130 pb-130">
      <div className="container">
        <div className="shop-item-wrap">
          <div className="row row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1">
            {challenges.map((challenge, index) => (
              <div key={index} className="col">
                <ShopItem challenge={challenge} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DatasetArea;
