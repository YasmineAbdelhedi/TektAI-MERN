import React, { useState, useEffect } from 'react';
import axios from 'axios';



export default function CompanyProfile() {
    
    const [avatar, setAvatar] = useState('');
    const [compData, setcompData] = useState({
        companyName: '',
        email: '',
        phone_number: '',
        country: '',
        website:'',
        domaine:'',
        picture:"",
        aboutMe:"",
        facebookLink:"",
        instagramLink:"",
        linkedInLink:"",
        githubLink:"",
      });
      const [followersCount, setFollowersCount] = useState(110);
      const [isEditing, setIsEditing] = useState(false);
      const [aboutMe, setAboutMe] = useState('tell us about yourself!');
      const [facebookLink, setFacebookLink] = useState('your facebook link');
      const [instagramLink, setInstagramLink] = useState('your instagram link');
      const [githubLink, setGithubLink] = useState('your gitbub link');
      const [linkedInLink, setLinkedInLink] = useState('your linkedIn link');

      useEffect(() => {
        const fetchCompData = async () => {
          try {
            const access_token = localStorage.getItem('access_Token');
            if (!access_token) {
              throw new Error('Access Token not found');
            }
    
            const response = await axios.get('http://localhost:3000/api/company/current', {
              headers: {
                "content-type": "application/json; charset=utf-8",
                Authorization: access_token,
              },
            });
    
            setcompData({
              ...compData,
              companyName: response.data.result.companyName,
              email: response.data.result.email,
              phone_number: response.data.result.phone_number,
              country: response.data.result.country,
              website: response.data.result.website,
              domaine: response.data.result.domaine,
              picture: response.data.result.picture ,
              aboutMe: response.data.result.aboutMe || '', 
              facebookLink: response.data.result.facebookLink || '', 
              githubLink: response.data.result.githubLink || '',
              linkedInLink: response.data.result.linkedInLink || '',
              instagramLink: response.data.result.instagramLink || '',
            });
          } catch (error) {
            console.error('Failed to fetch comp data:', error.message);
          }
        };
    
        fetchCompData();
      }, []);
    
      const handleFollowClick = () => {
        setFollowersCount(prevCount => prevCount + 1);
      };
    
      const handleAvatarChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
    
        reader.onload = () => {
          setAvatar(reader.result);
        };
    
        if (file) {
          reader.readAsDataURL(file);
        }
      };
    
      const handleFormSubmit = (event) => {
        event.preventDefault();
    
        console.log('Form submitted!');
      };
      const handleSave = async () => {
        try {
          const access_token = localStorage.getItem('access_Token');
          if (!access_token) {
            throw new Error('Access Token not found');
          }
      
          const response = await axios.put('http://localhost:3000/api/company/update', {
            companyName: compData.companyName,
            phone_number: compData.phone_number,
            country: compData.country,
            website: compData.website,
            picture:compData.picture,
            aboutMe,
            facebookLink,
            instagramLink,
            linkedInLink,
            githubLink,
          }, {
            headers: {
              "content-type": "application/json; charset=utf-8",
              Authorization: access_token,
            },
          });
      
          console.log('User data updated successfully:', response.data);
          setIsEditing(false);
        } catch (error) {
          console.error('Failed to update user data:', error.message);
        }
      };
      
      const handleUpdatePicture = () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.onchange = async (e) => {
          const file = e.target.files[0];
         
        
      
          try {
            const access_token = localStorage.getItem('access_Token');
            if (!access_token) {
              throw new Error('Access Token not found');            
            }
      
            const response = await axios.put('http://localhost:3000/api/user/update-image', compData, {
            
              headers: {
                "content-type": "multipart/form-data",
                Authorization: access_token,
              },
            
            });
      
            console.log("Response:", response.data.message);
            setcompData({
              ...compData,
              picture: response.data.picture, // Supposons que votre backend renvoie l'URL de l'image mise à jour
            });
          } catch (error) {
            console.error("Error:", error.message);
          }
        };
        input.click();
      };
      
  return (
    <section style={{ backgroundColor: '#eee' }}>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-4">
            <div className="card mb-4">
              <div className="card-body text-center">
              {compData.picture ? (
        <img  src={`data:${compData.picture.contentType};base64,${compData.picture.data}`}/> 
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" fill="blue" class="bi bi-person-bounding-box" viewBox="0 0 16 16">
        <path d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5M.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5m15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5"/>
        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
      </svg>
    )}
        
                <p className="text-muted mb-1">{compData.companyName}</p>
                <button className="btn btn-primary" onClick={handleUpdatePicture}>Update Picture</button>

                <div className="card mb-4">
                  <div className="card-body text-center">
                    <div className="row">
                      <div className="col flex-column justify-content-center align-items-center gap-1 border-end border-1 px-1">
                        <span className="font-weight-bold text-black">259</span>
                        <span className="text-sm">Posts</span>
                      </div>
                      <div className="col flex-column justify-content-center align-items-center gap-1 border-end border-1 px-1">
                        <span className="font-weight-bold text-black">{followersCount}</span>
                        <span className="text-sm">Followers</span>
                      </div>
                      <div className="col flex-column justify-content-center align-items-center gap-1 px-1">
                        <span className="font-weight-bold text-black">2K</span>
                        <span className="text-sm">Following</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-center mb-2">
                  <button className="btn btn-primary" onClick={handleFollowClick}>Follow</button>
                  <button className="btn ms-1" style={{ backgroundColor: 'green', color: 'white' }}>Message</button>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-body p-0">
                <ul className="list-group list-group-flush rounded-3">
                  <li className="list-group-item p-3">
                    <div className="text-center">
                      <p><span className="text-primary font-italic me-1 "><strong>About me:</strong></span></p>

                      {isEditing ? (
                <textarea
                  value={aboutMe}
                  onChange={(e) => setAboutMe(e.target.value)}
                  className="form-control mb-2"
                />
              ) : (
                <p className="card-text mb-0">{compData.aboutMe}</p>
              )}
                    </div>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
  <span><i className="fab fa-github fa-lg" style={{ color: '#333333' }}></i></span>
  {isEditing ? (
    <textarea
      value={githubLink}
      onChange={(e) => setGithubLink(e.target.value)}
      className="form-control mb-2"
    />
  ) : (
    <a href={compData.githubLink} target="_blank" rel="noopener noreferrer" className="card-text mb-0">{compData.githubLink}</a>
  )}
</li>
<li className="list-group-item d-flex justify-content-between align-items-center p-3">
  <span><i className="fab fa-twitter fa-lg" style={{ color: '#55acee' }}></i></span>
  {isEditing ? (
    <textarea
      value={linkedInLink}
      onChange={(e) => setLinkedInLink(e.target.value)}
      className="form-control mb-2"
    />
  ) : (
    <a href={compData.linkedInLink} target="_blank" rel="noopener noreferrer" className="card-text mb-0">{compData.linkedInLink}</a>
  )}
</li>
<li className="list-group-item d-flex justify-content-between align-items-center p-3">
  <span><i className="fab fa-instagram fa-lg" style={{ color: '#ac2bac' }}></i></span>
  {isEditing ? (
    <textarea
      value={instagramLink}
      onChange={(e) => setInstagramLink(e.target.value)}
      className="form-control mb-2"
    />
  ) : (
    <a href={compData.instagramLink} target="_blank" rel="noopener noreferrer" className="card-text mb-0">{compData.instagramLink}</a>
  )}
</li>
<li className="list-group-item d-flex justify-content-between align-items-center p-3">
  <span><i className="fab fa-facebook fa-lg" style={{ color: '#3b5998' }}></i></span>
  {isEditing ? (
    <textarea
      value={facebookLink}
      onChange={(e) => setFacebookLink(e.target.value)}
      className="form-control mb-2"
    />
  ) : (
    <a href={compData.facebookLink} target="_blank" rel="noopener noreferrer" className="card-text mb-0">{compData.facebookLink}</a>
  )}
</li>

                </ul>
              </div>
            </div>
            <div className="card-footer d-flex justify-content-end">
        {isEditing ? (
          <button onClick={handleSave} className="btn btn-primary me-2">Save</button>
        ) : (
          <button onClick={() => setIsEditing(true)} className="btn btn-primary me-2">Edit</button>
        )}
      </div>
          </div>

          <div className="col-lg-8">
  {/* User Info */}
  <div className="card mb-4">
  <div className="card-body">
    <p className="card-text mb-4"><span className="text-primary font-italic me-1"><strong>{compData.companyName}'s Information</strong></span></p>
    <div className="row">
      <div className="col-sm-6">
        <div className="row mb-2">
          <div className="col-sm-6">
            <p className="card-text">Name</p>
          </div>
          <div className="col-sm-6">
            <p className="card-text">{compData.companyName}</p>
          </div>
        </div>
        <hr />
        <div className="row mb-2">
          <div className="col-sm-6">
            <p className="card-text">Email</p>
          </div>
          <div className="col-sm-6">
            <p className="card-text">{compData.email}</p>
          </div>
        </div>
        <hr />
      </div>
      <div className="col-sm-6">
        <div className="row mb-2">
          <div className="col-sm-6">
            <p className="card-text">Phone</p>
          </div>
          <div className="col-sm-6">
            <p className="card-text">{compData.phone_number}</p>
          </div>
        </div>
        <hr />
        <div className="row mb-2">
          <div className="col-sm-6">
            <p className="card-text">Country</p>
          </div>
          <div className="col-sm-6">
            <p className="card-text">{compData.country}</p>
          </div>
        </div>
        <hr />
        <div className="row mb-2">
          <div className="col-sm-6">
            <p className="card-text">WebSite(optional)</p>
          </div>
          <div className="col-sm-6">
            <p className="card-text"> {compData.website}</p>
          </div>
        </div>
        <hr />
        <div className="row mb-2">
          <div className="col-sm-6">
            <p className="card-text">Domaine</p>
          </div>
          <div className="col-sm-6">
            <p className="card-text">{compData.domaine}</p>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</div>





            {/* Project Status */}
            {/* Row 1 */}
            <div className="row">
              <div className="col-md-6">
                <div className="card mb-4">
                  <div className="card-body">
                  <p className="card-text mb-4"><span className="text-primary font-italic me-1"><strong>assigment</strong></span> Project Status</p>
                    <p className="card-text mb-1" style={{ fontSize: '.77rem' }}>Web Design</p>
                    <div className="progress rounded">
                      <div className="progress-bar " role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>

                    <p className="card-text mt-4 mb-1" style={{ fontSize: '.77rem' }}>Website Markup</p>
                    <div className="progress rounded">
                      <div className="progress-bar bg-success" role="progressbar" style={{ width: '72%' }} aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p className="card-text mt-4 mb-1" style={{ fontSize: '.77rem' }}>Backend API</p>
                    <div className="progress rounded">
                      <div className="progress-bar bg-danger" role="progressbar" style={{ width: '88%' }} aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p className="card-text mt-4 mb-1" style={{ fontSize: '.77rem' }}>Mobile Template</p>
                    <div className="progress rounded">
                      <div className="progress-bar bg-warning" role="progressbar" style={{ width: '62%' }} aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p className="card-text mt-4 mb-1" style={{ fontSize: '.77rem' }}>Dashboard</p>
                    <div className="progress rounded">
                      <div className="progress-bar" role="progressbar" style={{ width: '79%' }} aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>

                    {/* Other progress bars... */}
                  </div>
                </div>
              </div>

              <div className="col-md-6">
            <div className="card mb-4">
              <div className="card-body">
              <p className="card-text mb-4"><span className="text-primary font-italic me-1"><strong>Uploading</strong></span></p>
                <div className="p-7">
                  <form onSubmit={handleFormSubmit} id="uploadForm">
                    <div className="relative mb-5.5 block w-full cursor-pointer appearance-none rounded border border-dashed border-primary bg-gray py-4 px-4 dark:bg-meta-4 sm:py-7.5">
                      <input
                        type="file"
                        accept="application/pdf,image/svg+xml,image/png,image/jpeg,image/gif"
                        className="absolute inset-0 z-50 m-0 h-full w-full cursor-pointer p-0 opacity-0 outline-none"
                        onChange={handleAvatarChange}
                      />
                      <div className="flex flex-col items-center justify-center space-y-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-stroke bg-white dark:border-strokedark dark:bg-boxdark">
                          {/* Icône SVG */}
                        </span>
                        <p>
                          <span className="text-primary">Click to upload</span> or drag and drop
                        </p>
                        <p className="mt-1.5">PDF, SVG, PNG, JPG ou GIF</p>
                      </div>
                    </div>
                    <br></br>
                    <div className="d-flex justify-content-center mb-2">
                    <button className="btn btn-primary" type="reset">Cancel</button>
                      <button className="btn ms-1" type ="submit "style={{ backgroundColor: 'green', color: 'white' }}>Save</button>
                    </div>
                  </form>
                </div>
              </div>
  </div>
</div>



            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

  