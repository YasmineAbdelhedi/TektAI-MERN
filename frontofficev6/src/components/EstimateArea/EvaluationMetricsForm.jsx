import React, { useState } from "react";
import axios from "axios";
import Recaptcha from 'react-google-recaptcha';
import { Link, useNavigate } from 'react-router-dom';

const EvaluationMetricsForm = () => {
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    visibility: "public",
    access: "Anyone",
    teamSize: "",
    minSize: "",
    maxSize: "",
  });

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
      
      const response = await axios.post("http://localhost:3000/api/challenge/create", formDataWithFile);
      console.log(response.data);
      navigate('/fund');
    } catch (error) {
      console.error("Failed to create challenge:", error);
    }
  };
  

  return (
    <form onSubmit={handleSubmit} className="form-horizontal">
      <div className="row">
      <h4 style={{backgroundColor:"red",width:"280px",height:"25px"}}>Evaluation metrics:</h4>
      
      <h6 >Privacy  & Access :</h6>
      <div className="col-sm-2">
          <div className="form-grp">
          <label htmlFor="visibility">Visibility</label>

<select name="visibility" id="visibility"  className="form-select" style={{height:"50px",borderColor:"#7A98BF"}}>
<option value="public">public </option>
<option value="private">private</option>

    </select>
    </div>
        </div>
    
        <div className="col-sm-4">
          <div className="form-grp">
          <label htmlFor="access">Access</label>
          <select name="access" id="access"  className="form-select" style={{height:"50px",borderColor:"#7A98BF"}}>
<option value="Anyone">Anyone </option>
<option value="haslink">Only people with a link</option>
<option value="hasemail">Restricted email list</option>
    </select>
    </div>
        </div>
        <h6 >Team setting :</h6>
        <div className="col-sm-4">
          <div className="form-grp">
          <label htmlFor="teamSize">Team size</label>
          <input type="number" className="form-control" name="teamSize" value={formData.teamSize}  onChange={handleChange} required />
          </div>
        </div>
        <div className="col-sm-4">
          <div className="form-grp">
          <label htmlFor="minSize"> Min Team size </label>
          <input type="number" className="form-control" name="minSize" value={formData.minSize} onChange={handleChange} required />
          </div>
        </div>
        <div className="col-sm-4">
          <div className="form-grp">
          <label htmlFor="maxSize">Max Team size</label>
          <input type="number" className="form-control" name="maxSize" value={formData.maxSize} onChange={handleChange} required />
          </div>
        </div>
      </div>
  
    </form>
  );
};

export default EvaluationMetricsForm;
