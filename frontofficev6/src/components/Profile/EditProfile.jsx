import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, Navigate, useNavigate } from 'react-router-dom';



const EditProfile = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState('');

  const [userData, setUserData] = useState({
    firstname: '',
    lastname: '',
    profession: '',
    phone_number: '',
    recoveryEmail: '',
    country: '',
    picture: null,
    aboutMe:"",
    facebookLink:"",
    instagramLink:"",
    linkedInLink:"",
    githubLink:"",
    cv:"",
  });
  const [isModified, setIsModified] = useState({});

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
        const currentPicture = response.data.result?.picture || '';
        setUserId(userIdFromData);
        setUserData({
         ...userData,
          firstname: response.data.result?.firstname || '',
          lastname: response.data.result?.lastname || '',
          email: response.data.result?.email || '',
          phone_number: response.data.result?.phone_number || '',
          country: response.data.result?.country || '',
          profession: response.data.result?.profession || '',
          picture: currentPicture, // Utilisez currentPicture ici
          aboutMe: response.data.result?.aboutMe || '', 
          facebookLink: response.data.result?.facebookLink || '', 
          githubLink: response.data.result?.githubLink || '',
          linkedInLink: response.data.result?.linkedInLink || '',
          instagramLink: response.data.result?.instagramLink || '',
        });
        console.log(' userData:',userData)
      } catch (error) {
        console.error('Failed to fetch user data:', error.message);
      }
    };
  
    fetchUserData();
  }, []);
  


  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setUserData({
       ...userData,
        [name]: files[0],
      });
      setIsModified({
       ...isModified,
        [name]: true,
      });
    } else {
      setUserData({
       ...userData,
        [name]: value,
      });
      setIsModified({
       ...isModified,
        [name]: true,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const access_token = localStorage.getItem('access_Token');
      if (!access_token) {
        throw new Error('Access Token not found');            
      }
      const formDataToSend = new FormData();
      Object.entries(userData).forEach(([key, value]) => {
        if (isModified[key]) {
          formDataToSend.append(key, value);
        }
      });
      const response = await axios.put('http://localhost:3000/api/user/update', formDataToSend,{
        headers: {
          "content-type": "multipart/form-data",
          Authorization: access_token,
        },
      });
      console.log('User updated:', response.data);
      navigate('/profile');
    } catch (error) {
      console.error('Failed to update user:', error);
    }
  };
   
  

  const handlePasswordChangeSubmit = async (e) => {
    e.preventDefault();
    try {
      const access_token = localStorage.getItem('access_Token');
      if (!access_token) {
        throw new Error('Access Token not found');            
      }
      const formData = new FormData();
      formData.append('currentPassword', e.target.currentPassword.value);
      formData.append('newPassword', e.target.newPassword.value);
      formData.append('confirmPassword', e.target.confirmPassword.value);
  
      const response = await axios.post('http://localhost:3000/api/user/change-password', formData, {
        headers: {
          "content-type": "multipart/form-data",
          Authorization: access_token,
        },
      });
      console.log('Password changed:', response.data);
      navigate('/profile');
    } catch (error) {
      console.error('Failed to change password:', error);
    }
  };
  

  const handleDeleteAccount = async () => {
    try {
      const access_token = localStorage.getItem('access_Token');
      if (!access_token) {
        throw new Error('Access Token not found');
      }

      const response = await axios.delete(`http://localhost:3000/api/user/delete/${userData._id}`, {
        headers: {
          Authorization: access_token,
        },
      });
      console.log('Account deleted:', response.data);
      navigate('/');
    } catch (error) {
      console.error('Failed to delete account:', error);
    }
  };



  return (
    <>
      <div class="container-xl px-4 mt-4">
        
        <style>
        {`
        .img-account-profile {
          height: 10rem;
      }
      .rounded-circle {
          border-radius: 50% !important;
      }
      .card {
          box-shadow: 0 0.15rem 1.75rem 0 rgb(33 40 50 / 15%);
      }
      .card .card-header {
          font-weight: 500;
      }
      .card-header:first-child {
          border-radius: 0.35rem 0.35rem 0 0;
      }
      .card-header {
          padding: 1rem 1.35rem;
          margin-bottom: 0;
          background-color: rgba(33, 40, 50, 0.03);
          border-bottom: 1px solid rgba(33, 40, 50, 0.125);
      }
      .form-control, .dataTable-input {
          display: block;
          width: 100%;
          padding: 0.875rem 1.125rem;
          font-size: 0.875rem;
          font-weight: 400;
          line-height: 1;
          color: #69707a;
          background-color: #fff;
          background-clip: padding-box;
          border: 1px solid #c5ccd6;
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          border-radius: 0.35rem;
          transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
      }
      
      .nav-borders .nav-link.active {
          color: #0061f2;
          border-bottom-color: #0061f2;
      }
      .nav-borders .nav-link {
          color: #69707a;
          border-bottom-width: 0.125rem;
          border-bottom-style: solid;
          border-bottom-color: transparent;
          padding-top: 0.5rem;
          padding-bottom: 0.5rem;
          padding-left: 0;
          padding-right: 0;
          margin-left: 1rem;
          margin-right: 1rem;
      }
      
      .btn-danger-soft {
          color: #000;
          background-color: #f1e0e3;
          border-color: #f1e0e3;
      }
      .img-account-profile {
        height: 10rem;
    }
    .rounded-circle {
        border-radius: 50% !important;
    }
    .card {
        box-shadow: 0 0.15rem 1.75rem 0 rgb(33 40 50 / 15%);
    }
    .card .card-header {
        font-weight: 500;
    }
    .card-header:first-child {
        border-radius: 0.35rem 0.35rem 0 0;
    }
    .card-header {
        padding: 1rem 1.35rem;
        margin-bottom: 0;
        background-color: rgba(33, 40, 50, 0.03);
        border-bottom: 1px solid rgba(33, 40, 50, 0.125);
    }
    .form-control, .dataTable-input {
        display: block;
        width: 100%;
        padding: 0.875rem 1.125rem;
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1;
        color: #69707a;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #c5ccd6;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        border-radius: 0.35rem;
        transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    }
    
    .nav-borders .nav-link.active {
        color: #0061f2;
        border-bottom-color: #0061f2;
    }
    .nav-borders .nav-link {
        color: #69707a;
        border-bottom-width: 0.125rem;
        border-bottom-style: solid;
        border-bottom-color: transparent;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        padding-left: 0;
        padding-right: 0;
        margin-left: 1rem;
        margin-right: 1rem;
    }
    
    .btn-danger-soft {
        color: #000;
        background-color: #f1e0e3;
        border-color: #f1e0e3;
    }
          body{
            background-color:#f2f6fc;
            color:#69707a;
            }
            .img-account-profile {
                height: 10rem;
            }
            .rounded-circle {
                border-radius: 50% !important;
            }
            .card {
                box-shadow: 0 0.15rem 1.75rem 0 rgb(33 40 50 / 15%);
            }
            .card .card-header {
                font-weight: 500;
            }
            .card-header:first-child {
                border-radius: 0.35rem 0.35rem 0 0;
            }
            .card-header {
                padding: 1rem 1.35rem;
                margin-bottom: 0;
                background-color: rgba(33, 40, 50, 0.03);
                border-bottom: 1px solid rgba(33, 40, 50, 0.125);
            }
            .form-control, .dataTable-input {
                display: block;
                width: 100%;
                padding: 0.875rem 1.125rem;
                font-size: 0.875rem;
                font-weight: 400;
                line-height: 1;
                color: #69707a;
                background-color: #fff;
                background-clip: padding-box;
                border: 1px solid #c5ccd6;
                -webkit-appearance: none;
                -moz-appearance: none;
                appearance: none;
                border-radius: 0.35rem;
                transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
            }
            
            .nav-borders .nav-link.active {
                color: #0061f2;
                border-bottom-color: #0061f2;
            }
            .nav-borders .nav-link {
                color: #69707a;
                border-bottom-width: 0.125rem;
                border-bottom-style: solid;
                border-bottom-color: transparent;
                padding-top: 0.5rem;
                padding-bottom: 0.5rem;
                padding-left: 0;
                padding-right: 0;
                margin-left: 1rem;
                margin-right: 1rem;
            }
        `}
      </style>
    
    <div class="row">
        <div class="col-xl-4">
            <div class="card mb-4 mb-xl-0">
                <div class="card-header">Profile Picture</div>
                <div class="card-body text-center">
                {userData.picture ? (
         <img  src={`data:${userData.picture.contentType};base64,${userData.picture.data}`}   class="img-account-profile rounded-circle mb-2" 
         alt="profile cover" style={{height:'110px'}}/> 
       ) : (
        <img src="https://bootdey.com/img/Content/avatar/avatar6.png" class="img-fluid" alt="profile cover" style={{height:'150px', borderRadius:"80%"}}/>

     )}
                <input
            type="file"
            name="picture"
            onChange={handleInputChange}
            accept="image/*"
            style={{marginTop:"40px"}}
          />                
          <hr />
          <button class="btn btn-primary" type="button" onClick={handleSubmit}>Upload</button>
                </div>
            </div>
        </div>
        <div class="col-xl-8">
            <div class="card mb-4">
                <div class="card-header">Account Details</div>
                <div class="card-body">
                <form onSubmit={handleSubmit}>
                       
                <div class="row gx-3 mb-3">
    <div class="col-md-6">
        <label class="small mb-1" for="inputFirstName">First name</label>
        <input class="form-control" id="inputFirstName" type="text" value={userData.firstname} onChange={(e) => handleInputChange({ target: { name: 'firstname', value: e.target.value } })} />
    </div>
    <div class="col-md-6">
        <label class="small mb-1" for="inputLastName">Last name</label>
        <input class="form-control" id="inputLastName" type="text" value={userData.lastname} onChange={(e) => handleInputChange({ target: { name: 'lastname', value: e.target.value } })} />
    </div>
</div>
<div class="row gx-3 mb-3">
    <div class="col-md-6">
        <label class="small mb-1" for="inputLocation">Country</label>
        <input class="form-control" id="inputLocation" type="text" value={userData.country} onChange={(e) => handleInputChange({ target: { name: 'country', value: e.target.value } })} />
    </div>
    <div class="col-md-6">
        <label class="small mb-1" for="inputLocation">Profession</label>
        <input class="form-control" id="b" type="text" value={userData.profession} onChange={(e) => handleInputChange({ target: { name: 'profession', value: e.target.value } })} />
    </div>
</div>
<div class="row gx-3 mb-3">
    <div class="col-md-6">
        <label class="small mb-1" for="inputPhone">Phone number</label>
        <input class="form-control" id="inputPhone" type="tel" value={userData.phone_number} onChange={(e) => handleInputChange({ target: { name: 'phone_number', value: e.target.value } })} />
    </div>
    <div class="col-md-6">
        <label class="small mb-1" for="inputEmailAddress">Recovery Email</label>
        <input class="form-control" id="inputEmailAddress" type="email" value={userData.email} onChange={(e) => handleInputChange({ target: { name: 'email', value: e.target.value } })} />
    </div>
</div>

                        <button class="btn btn-primary" type="submit">Save changes</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="container-xl px-4 mt-4">
        
        <hr class="mt-0 mb-4"/>
        <div class="row">
            <div class="col-lg-8">
                <div class="card mb-4">
                    <div class="card-header">Change Password</div>
                    <div class="card-body">
          <form onSubmit={handlePasswordChangeSubmit}>
                            <div class="mb-3">
                                <label class="small mb-1" for="currentPassword">Current Password</label>
                                <input class="form-control" id="currentPassword" type="password" placeholder="Enter current password"/>
                            </div>
                            <div class="mb-3">
                                <label class="small mb-1" for="newPassword">New Password</label>
                                <input class="form-control" id="newPassword" type="password" placeholder="Enter new password"/>
                            </div>
                            <div class="mb-3">
                                <label class="small mb-1" for="confirmPassword">Confirm Password</label>
                                <input class="form-control" id="confirmPassword" type="password" placeholder="Confirm new password"/>
                            </div>
                            <button class="btn btn-primary" type="submit">Save</button>
                        </form>
                    </div>
                </div>
                <div class="card mb-4">
                    <div class="card-header">Security Preferences</div>
                    <div class="card-body">
                        <h5 class="mb-1">Account Privacy</h5>
                        <p class="small text-muted">By setting your account to private, your profile information and posts will not be visible to users outside of your user groups.</p>
                        <form>
                            <div class="form-check">
                                <input class="form-check-input" id="radioPrivacy1" type="radio" name="radioPrivacy" checked=""/>
                                <label class="form-check-label" for="radioPrivacy1">Public (posts are available to all users)</label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" id="radioPrivacy2" type="radio" name="radioPrivacy"/>
                                <label class="form-check-label" for="radioPrivacy2">Private (posts are available to only users in your groups)</label>
                            </div>
                        </form>
                        
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="card mb-4">
                    <div class="card-header">Two-Factor Authentication</div>
                    <div class="card-body">
                        <p>Add another level of security to your account by enabling two-factor authentication. We will send you a text message to verify your login attempts on unrecognized devices and browsers.</p>
                        <form>
                            <div class="form-check">
                                <input class="form-check-input" id="twoFactorOn" type="radio" name="twoFactor" checked=""/>
                                <label class="form-check-label" for="twoFactorOn">On</label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" id="twoFactorOff" type="radio" name="twoFactor"/>
                                <label class="form-check-label" for="twoFactorOff">Off</label>
                            </div>
                            <div class="mt-3">
                                <label class="small mb-1" for="twoFactorSMS">SMS Number</label>
                                <input class="form-control" id="twoFactorSMS" type="tel" placeholder="Enter a phone number" value="555-123-4567"/>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="card mb-4">
                    <div class="card-header">Delete Account</div>
                    <div class="card-body">
                        <p>Deleting your account is a permanent action and cannot be undone. If you are sure you want to delete your account, select the button below.</p>
                        <button class="btn btn-danger-soft text-danger" onClick={handleDeleteAccount}>
                          I understand, delete my account</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container-xl px-4 mt-4">
  
    <hr class="mt-0 mb-4"/>
    <div class="row">
        <div class="col-lg-12">
            <div class="card card-header-actions mb-4">
                <div class="card-header">
                    Email Notifications
                    <div class="form-check form-switch">
                        <input class="form-check-input" id="flexSwitchCheckChecked" type="checkbox" checked=""/>
                        <label class="form-check-label" for="flexSwitchCheckChecked"></label>
                    </div>
                </div>
                <div class="card-body">
                    <form>
                        <div class="mb-3">
                            <label class="small mb-1" for="inputNotificationEmail">Default notification email</label>
                            <input class="form-control" id="inputNotificationEmail" type="email" value="name@example.com" disabled=""/>
                        </div>
                        <div class="mb-0">
                            <label class="small mb-2">Choose which types of email updates you receive</label>
                            <div class="form-check mb-2">
                                <input class="form-check-input" id="checkAccountChanges" type="checkbox" checked=""/>
                                <label class="form-check-label" for="checkAccountChanges">Changes made to your account</label>
                            </div>
                            <div class="form-check mb-2">
                                <input class="form-check-input" id="checkProductNew" type="checkbox" checked=""/>
                                <label class="form-check-label" for="checkProductNew">Information on new Challenges and services</label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" id="checkSecurity" type="checkbox" checked="" disabled=""/>
                                <label class="form-check-label" for="checkSecurity">Security alerts</label>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="card card-header-actions mb-4">
                <div class="card-header">
                    Push Notifications
                    <div class="form-check form-switch">
                        <input class="form-check-input" id="smsToggleSwitch" type="checkbox" checked=""/>
                        <label class="form-check-label" for="smsToggleSwitch"></label>
                    </div>
                </div>
               
            </div>
        </div>
      
    </div>
</div>
   </>
    
  );
};

export default EditProfile;
