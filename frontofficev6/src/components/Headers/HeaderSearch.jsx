import React, { useState, useEffect } from "react";
import axios from "axios";

const HeaderSearch = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState(null);

    const handleSearch = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.get(`http://localhost:3000/api/global/search?searchTerm=${searchTerm}`);
            setSearchResults(response.data);
        } catch (error) {
            console.error('Error searching:', error);
        }
    };

    return (
        <>
            <div className="sidebar-search" style={{width:"400px",marginTop:"20px",marginLeft:"60%"}}>
                <form onSubmit={handleSearch}>
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search..."
                    />
                    <button type="submit"><i className="fas fa-search"></i></button>
                </form>
            </div>

            {searchResults && (
                <div className="search-results">
                    {searchResults.users && (
                        <div className="user-results">
                            <h3>Users</h3>
                            <ul>
                                {searchResults.users.map((user) => (
                                    <li key={user._id}>{user.firstname} {user.lastname}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {searchResults.companies && (
                        <div className="company-results">
                            <h3>Companies</h3>
                            <ul>
                                {searchResults.companies.map((company) => (
                                    <li key={company._id}>{company.companyName}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                      {searchResults.courses && (
                        <div className="course-results">
                            <h3>Cours</h3>
                            <ul>
                                {searchResults.courses.map((course) => (
                                    <li key={course._id}>{course.title}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {searchResults.challenges && (
                        <div className="challenge-results">
                            <h3>Challenges</h3>
                            <ul>
                                {searchResults.challenges.map((challenge) => (
                                    <li key={challenge._id}>{challenge.challengeName}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            )}
        </>
    );
};

export default HeaderSearch;
