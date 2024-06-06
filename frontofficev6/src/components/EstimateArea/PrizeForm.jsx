import React, { useState } from "react";
import axios from "axios";
import Recaptcha from 'react-google-recaptcha';
import { Link, useNavigate } from 'react-router-dom';

const PrizeForm = () => {
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    prizeType: "",
    prizeAmount: "",
    giftType: "",
    internshipSubject: "",
    internshipRequirement: "",
    internshipStartDate: "",
    internshipEndDate: "",
    internshipRenumeration: "",
    freelanceSubject: "",
    freelanceRequirement: "",
    freelanceStartDate: "",
    freelanceEndDate: "",
    freelanceRenumeration: "",
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
      navigate('/shop');
    } catch (error) {
      console.error("Failed to create challenge:", error);
    }
  };

  const renderPrizeFields = () => {
    switch(formData.prizeType) {
      case "Monitoring":
        return (
          <div className="col-sm-4">
            <div className="form-grp">
              <label htmlFor="prizeAmount">Amount</label>
              <input type="text" className="form-control" name="prizeAmount" value={formData.prizeAmount} onChange={handleChange} required />
            </div>
          </div>
        );
      case "gift":
        return (
          <div className="col-sm-4">
            <div className="form-grp">
              <label htmlFor="gift">Gift type</label>
              <input type="text" className="form-control" name="gift" value={formData.giftType} onChange={handleChange} required />
            </div>
          </div>
        );
      case "internship":
        return (
          <>
          <div className="col-sm-4">
          <div className="form-grp">
          <label htmlFor="internship">Internship subject</label>
          <input type="text" className="form-control" name="internship" value={formData.internshipSubject} onChange={handleChange} required />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-grp">
          <label htmlFor="requirement">Requierment</label>
          <input type="text" className="form-control" name="requirement" value={formData.internshipRequirement} onChange={handleChange} required />
          </div>
        </div>
        <div className="col-sm-4">
          <div className="form-grp">
          <label htmlFor="startDate">Starts at</label>
          <input type="date" className="form-control"  name="startDate" value={formData.internshipStartDate} onChange={handleChange} required />
          </div>
        </div>
        <div className="col-sm-4">
        <div className="form-grp">
        <label htmlFor="endDate">Ends at</label>
      <input type="date" className="form-control"  name="deadline" value={formData.internshipEndDate} onChange={handleChange} required />
      </div>
        </div>
        <div className="col-sm-4">
          <div className="form-grp">
          <label htmlFor="renumeration">Renumeration</label>
          <input type="number" className="form-control" name="renumeration" value={formData.internshipRenumeration} onChange={handleChange} required />
          </div>
        </div>
        </>
        );
      case "freelanceOpportunity":
        return (
          <>
            <div className="col-sm-4">
          <div className="form-grp">
          <label htmlFor="internship">Subject</label>
          <input type="text" className="form-control" name="internship" value={formData.freelanceSubject} onChange={handleChange} required />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-grp">
          <label htmlFor="requirement">Requierment</label>
          <input type="text" className="form-control" name="requirement" value={formData.freelanceRequirement} onChange={handleChange} required />
          </div>
        </div>
        <div className="col-sm-4">
          <div className="form-grp">
          <label htmlFor="startDate">Starts at</label>
          <input type="date" className="form-control"  name="startDate" value={formData.freelanceStartDate} onChange={handleChange} required />
          </div>
        </div>
        <div className="col-sm-4">
        <div className="form-grp">
        <label htmlFor="endDate">Ends at</label>
      <input type="date" className="form-control"  name="deadline" value={formData.freelanceEndDate} onChange={handleChange} required />
      </div>
        </div>
        <div className="col-sm-4">
          <div className="form-grp">
          <label htmlFor="renumeration">Renumeration</label>
          <input type="number" className="form-control" name="renumeration" value={formData.freelanceRenumeration} onChange={handleChange} required />
          </div>
        </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-horizontal">
            <h4 style={{backgroundColor:"red",width:"90px",height:"25px"}}>Prize:</h4>
      <div className="row">
  
        <div className="col-sm-2">
          <div className="form-grp">
            <label htmlFor="visibility">Type</label>
            <select name="prizeType" id="prizeType" className="form-select" style={{height:"50px",borderColor:"#7A98BF"}} onChange={handleChange} required>
              <option value=""> Prize Type</option>
              <option value="Monitoring">Monitoring</option>
              <option value="gift">Gift</option>
              <option value="internship">Internship</option>
              <option value="freelanceOpportunity">Freelance opportunity</option>
            </select>
          </div>
        </div>
        {renderPrizeFields()} {/* Appel de la fonction pour afficher dynamiquement les champs */}
      </div>
    </form>
  );
};

export default PrizeForm;
