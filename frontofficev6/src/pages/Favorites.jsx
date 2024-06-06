import React, { useEffect, useState } from 'react';
import Layout from '../layouts/Layout';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Favorites = () => {
  const [favoriteChallenges, setFavoriteChallenges] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/challenge/user-favorites', {
          headers: {
            Authorization: localStorage.getItem('access_Token'),
          },
        });
        setFavoriteChallenges(response.data.favoriteChallenges);
      } catch (error) {
        console.error('Error fetching favorites:', error);
      }
    };

    fetchFavorites();
  }, []);

  return (
    <Layout header={1} footer={1}>
      <div className="container">
        <h2>Favorite Challenges</h2>
        <div className="favorite-challenges">
          {favoriteChallenges.map(challenge => (
            <div key={challenge._id} className="shop-item">
              <div className="shop-thumb">
                <Link to={`/challenge/${challenge._id}`}>
                  {challenge.picture && challenge.picture.contentType && challenge.picture.data ? (
                    <img src={`data:${challenge.picture.contentType};base64,${challenge.picture.data}`} alt={challenge.challengeName} style={{ maxWidth: '100%', maxHeight: '150px', borderRadius: '5px' }} />
                  ) : (
                    <div>No Image Available</div>
                  )}
                </Link>
                <div className="shop-action">
                  <Link to={`/blog-details/${challenge._id}`}>
                    <i className="fas fa-eye" />
                  </Link>
                  <button disabled={isFavorite}>
                    <FontAwesomeIcon icon={faHeart} className="text-red-500 mr-1" style={{ color: isFavorite ? 'red' : 'grey' }} />
                  </button>
                </div>
              </div>
              <div className="shop-content">
                <Link to={`/challenge/${challenge._id}`} className="tag">
                  {challenge.category}
                </Link>
                <h2 className="title">
                  <Link to={`/blog-details/${challenge._id}`}>{challenge.challengeName}</Link>
                </h2>
                <h3 className="price">{challenge.price}</h3>
                <p className="price">Start Date: {challenge.startDate}</p>
                <p className="price">Deadline: {challenge.deadline}</p>
                <p className="price">Status: {challenge.status}</p>
                <p>
                  <FontAwesomeIcon icon={faHeart} className="text-red-500 mr-1" style={{ color: 'red' }} />
                  {challenge.likes} Likes
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Favorites;