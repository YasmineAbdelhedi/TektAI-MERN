import React, { useState } from "react";
import axios from "axios";

const ChallengeSearch = () => {
    const [challengeName, setChallengeName] = useState("");
    const [searchResults, setSearchResults] = useState(null);

    const handleSearch = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.get(`http://localhost:3000/api/challenge/searchchallenge/${challengeName}`);
            setSearchResults(response.data);
        } catch (error) {
            console.error('Error searching:', error);
        }
    };

    return (
        <>
            <div className="sidebar-search" style={{width:"400px",marginTop:"70px",marginLeft:"60%"}}>
                <form onSubmit={handleSearch}>
                    <input
                        type="text"
                        value={challengeName}
                        onChange={(e) => setChallengeName(e.target.value)}
                        placeholder="Search..."
                    />
                    <button type="submit"><i className="fas fa-search"></i></button>
                </form>
            </div>

            {searchResults && (
                <div className="search-results">
                    {searchResults.challenges && searchResults.challenges.length > 0 ? (
                        <div className="challenge-results">
                            <h3>Challenges</h3>
                            <ul>
                                {searchResults.challenges.map((challenge) => (
                                    <li key={challenge._id}>{challenge.challengeName}</li>
                                ))}
                            </ul>
                        </div>
                    ) : (
                        <p>Aucun challenge trouvé.</p>
                    )}
                </div>
            )}
        </>
    );
};

export default ChallengeSearch;
