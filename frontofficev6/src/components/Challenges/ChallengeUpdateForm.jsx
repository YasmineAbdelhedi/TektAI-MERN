import React, { useState } from "react";
import axios from "axios";
import Recaptcha from 'react-google-recaptcha';

const ChallengeUpdateForm = () => {
  const [recaptchaValue, setRecaptchaValue] = useState(null);

  const [formData, setFormData] = useState({
    challengeName: "",
    companyName: "",
    price: "",
    startDate: "",
    deadline: "",
    description: "",
    picture: null // Modification : initialiser picture à null
  });

  const handleFileChange = (e) => {
    setFormData({ ...formData, picture: e.target.files[0] }); // Modification : mettre à jour picture avec le fichier sélectionné
  };
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onChangeRecaptcha = (recaptchaToken) => {
    console.log("reCAPTCHA value: ", recaptchaToken);
    setRecaptchaValue(recaptchaToken);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataWithFile = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataWithFile.append(key, value);
      });
      
      const response = await axios.post("http://localhost:3000/api/challenge/update/:id", formDataWithFile);
      console.log(response.data);
    } catch (error) {
      console.error("Failed to create challenge:", error);
    }
  };
  

  return (
    <form onSubmit={handleSubmit} className="form-horizontal">
      <div className="row">
        <div className="col-sm-6">
          <div className="form-grp">
          <input type="text" className="form-control" placeholder="Challenge Name" name="challengeName" value={formData.challengeName} onChange={handleChange} required />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-grp">
          <input type="text" className="form-control" placeholder="Company Name" name="companyName" value={formData.companyName} onChange={handleChange} required />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-grp">
          <input type="text" className="form-control" placeholder="Price" name="price" value={formData.price} onChange={handleChange} required />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-grp">
          <input type="date" className="form-control" placeholder="Start Date" name="startDate" value={formData.startDate} onChange={handleChange} required />
          </div>
        </div>
        <div className="col-sm-6">
        <div className="form-grp">
      <input type="date" className="form-control" placeholder="Deadline" name="deadline" value={formData.deadline} onChange={handleChange} required />
      </div>
        </div>
        <div className="col-sm-3">
        <div className="form-grp" >
        <input type="file" name="picture" onChange={handleFileChange} accept="image/*" />
          </div>
        </div>
        <div className="col-sm-3">
        <div className="form-grp" >
        <input type="file" name="picture" onChange={handleFileChange} accept="image/*" />
          </div>
        </div>
      </div>
      <div className="col">
      <div className="form-grp">
      <textarea className="form-control" placeholder="Description" name="description" value={formData.description} onChange={handleChange} required />
      </div>
      </div>
          <div className="col-md-3" style={{marginLeft:"28%"}}>
          <div className="form-grp" >
            <Recaptcha
      sitekey="6Lej7MYpAAAAANcOGfuylrtynDnk9JHl-mu6mdgI"
      onChange={onChangeRecaptcha}
    />
          </div>
          </div>
     

      <button type="submit" className="btn btn-two">
        Update 
      </button>
    </form>
  );
};

export default ChallengeUpdateForm;
