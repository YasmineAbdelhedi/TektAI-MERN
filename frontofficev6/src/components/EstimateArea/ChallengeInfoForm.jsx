
/****************************************process*************************** */

import React, { useState } from "react";
import axios from "axios";
import { Form, Button, Col, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Stepper from "react-stepper-horizontal";

const EstimateForm = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    challengeName: "",
    companyName: "",
    startDate: "",
    deadline: "",
    description: "",
    prizeType: "",
    prizeAmount: "",
    giftType: "",
    tags: [],
    visibility: "",
    access: "",
    freelanceSubject: "",
    internshipSubject: "",
    picture: null,
    status: "",
    teamSize: "",
    minSize: "",
    maxSize: "",
    internshipRequirement: "",
    internshipStartDate: "",
    internshipEndDate: "",
    internshipRenumeration: "",
    freelanceRequirement: "",
    freelanceStartDate: "",
    freelanceEndDate: "",
    freelanceRenumeration: ""
  });

  const steps = [
    { title: "Challenge Info" },
    { title: "Evaluation Metrics" },
    { title: "Prize" }
  ];

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleChange = (field, value) => {
    if (field === 'tags') {
      const tagsArray = value.split(',');
      setFormData({ ...formData, [field]: tagsArray });
    } else {
      setFormData({ ...formData, [field]: value });
    }
  };
  
  
  const handleFileChange = (file) => {
    setFormData({ ...formData, picture: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataWithFile = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (key === 'picture' && value) {
          formDataWithFile.append(key, value, value.name);
        } else if (key === 'dataset' && value) {
          formDataWithFile.append(key, value, value.name);
        } else {
          formDataWithFile.append(key, value);
        }
      });

      const response = await axios.post("http://localhost:3000/api/challenge/create", formDataWithFile);
      console.log(response.data);
      navigate(`/fund?prizeAmount=${formData.prizeAmount}`);
    } catch (error) {
      console.error("Failed to create challenge:", error);
    }
  };

  return (
    <Card style={{ boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)' }}>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Stepper
            steps={steps}
            activeStep={currentStep}
            activeColor="#007bff"
            completeColor="#28a745"
            circleFontSize={18}
            circleTop={0}
            size={40}
          />
          <Form.Group>
            {currentStep === 0 && (
              <>
                {/* Challenge Name */}
                <Form.Control
                  type="text"
                  placeholder="Enter challenge name"
                  value={formData.challengeName}
                  onChange={(e) => handleChange("challengeName", e.target.value)}
                />
                {/* Company Name */}
                <Form.Control
                  type="text"
                  placeholder="Enter company name"
                  value={formData.companyName}
                  onChange={(e) => handleChange("companyName", e.target.value)}
                />
                {/* Upload Picture */}
                <Form.Control type="file" onChange={(e) => handleFileChange(e.target.files[0])} accept="image/*" />
              </>
            )}
            {currentStep === 1 && (
              <>
                {/* Description */}
                <Form.Control
                  type="text"
                  placeholder="Write your challenge description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                />
                <Form.Control
                  type="date"
                  value={formData.startDate}
                  onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                />
            
                <Form.Control
                  type="date"
                  value={formData.deadline}
                  onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                />
 <div className="grid grid-cols-2 gap-5.5">
      <div className="p-7">
        <Form.Control
          className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
          type="number"
          name="teamSize"
          id="teamSize"
          placeholder="Team Size"
          value={formData.teamSize}
          onChange={(e) => handleChange("teamSize", e.target.value)}
        />
      </div>
      <div className="p-7">
        <select
          className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
          name="access"
          id="access"
          value={formData.access}
          onChange={(e) => handleChange("access", e.target.value)}
        >
          <option value="">Select Access</option>
          <option value="public">Public</option>
          <option value="private">Private</option>
          <option value="restricted">Restricted</option>
        </select>
      </div>
    </div>

    <div className="grid grid-cols-2 gap-5.5">
      <div className="p-7">
        <Form.Control
          className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
          type="number"
          name="minSize"
          id="minSize"
          placeholder="Min Size"
          value={formData.minSize}
          onChange={(e) => handleChange("minSize", e.target.value)}
        />
      </div>
      <div className="p-7">
        <Form.Control
          className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
          type="number"
          name="maxSize"
          id="maxSize"
          placeholder="Max Size"
          value={formData.maxSize}
          onChange={(e) => handleChange("maxSize", e.target.value)}
        />
      </div>
    </div>

    <div className="grid grid-cols-2 gap-5.5">
      <div>
        <Form.Control
            className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
            type="text"
            name="tags"
            id="tags"
            placeholder="Enter tags"
            value={formData.tags ? formData.tags.join(",") : ""} // Convertir le tableau de tags en une chaîne séparée par des virgules
            onChange={(e) => handleChange("tags", e.target.value)} // Diviser la chaîne en un tableau de tags en retirant les espaces
            />
      </div>
      <div>
        <select
          className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
          name="visibility"
          id="visibility"
          value={formData.visibility}
          onChange={(e) => handleChange("visibility", e.target.value)}
        >
          <option value="">Select Visibility</option>
          <option value="public">Public</option>
          <option value="private">Private</option>
        </select>
      </div>
    </div>              </>
            )}
            {currentStep === 2 && (
              <>
                <Form.Control
                  as="select"
                  value={formData.prizeType}
                  onChange={(e) => handleChange("prizeType", e.target.value)}
                >
                  <option value="">Select Prize Type</option>
                  <option value="monitoring">Monitoring</option>
                  <option value="gift">Gift</option>
                  <option value="internship">Internship</option>
                  <option value="freelance">Freelancer</option>
                </Form.Control>
                {formData.prizeType === "monitoring" && (
                  <>
                    <Form.Control
                      type="text"
                      placeholder="Prize Amount"
                      value={formData.prizeAmount}
                      onChange={(e) => handleChange("prizeAmount", e.target.value)}
                    />
                  </>
                )}

{formData.prizeType === "gift" && (
                  <>
                    <Form.Control
                      type="text"
                      placeholder="gift Type"
                      value={formData.giftType}
                      onChange={(e) => handleChange("giftType", e.target.value)}
                    />
                  </>
                )}



  {formData.prizeType === "internship" && (
    <div className="p-7">
<div className="grid grid-cols-2 gap-5.5">

<div>

<Form.Control
   className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
   type="text"
   name="internshipSubject"
   id="internshipSubject"
   placeholder="Internship Subject"
   value={formData.internshipSubject}
   onChange={(e) => handleChange("internshipSubject", e.target.value)}
/>
</div>
<div>
<Form.Control
   className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
   type="date"
   name="internshipEndDate"
   id="internshipEndDate"
   value={formData.internshipEndDate}
   onChange={(e) => setFormData({ ...formData, internshipEndDate: e.target.value })}
/>
</div>
<div>
<Form.Control
   className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
   type="text"
   name="internshipRenumeration"
   id="internshipRenumeration"
   placeholder="Internship Renumeration"
   value={formData.internshipRenumeration}
   onChange={(e) => handleChange("internshipRenumeration", e.target.value)}
/>
</div>


<div>
<Form.Control
   className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
   type="date"
   name="internshipStartDate"
   id="internshipStartDate"
   value={formData.internshipStartDate}
   onChange={(e) => setFormData({ ...formData, internshipStartDate: e.target.value })}
/>
</div>


<div className="grid grid-cols-2 gap-5.5">
<div>
<Form.Control
   className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
   type="text"
   name="internshipRequirement"
   id="internshipRequirement"
   placeholder="Internship Requirement"
   value={formData.internshipRequirement}
   onChange={(e) => handleChange("internshipRequirement", e.target.value)}
/>
</div>
</div></div>
</div>  
  )}

  {formData.prizeType === "freelance" && (
    <div className="p-7">

<div className="grid grid-cols-2 gap-5.5">
<div>
      <Form.Control
          className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
          type="text"
          name="freelanceSubject"
          id="freelanceSubject"
          placeholder="Freelance Subject"
          value={formData.freelanceSubject}
          onChange={(e) => handleChange("freelanceSubject", e.target.value)}
      />
  </div>
  <div>
      <Form.Control
          className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
          type="text"
          name="freelanceRequirement"
          id="freelanceRequirement"
          placeholder="Freelance Requirement"
          value={formData.freelanceRequirement}
          onChange={(e) => handleChange("freelanceRequirement", e.target.value)}
      />
  </div>
  <div>
      <Form.Control
          className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
          type="date"
          name="freelanceStartDate"
          id="freelanceStartDate"
          value={formData.freelanceStartDate}
          onChange={(e) => setFormData({ ...formData, freelanceStartDate: e.target.value })}
      />
  </div>

<div className="grid grid-cols-2 gap-5.5">
  <div>
      <Form.Control
          className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
          type="date"
          name="freelanceEndDate"
          id="freelanceEndDate"
          value={formData.freelanceEndDate}
          onChange={(e) => setFormData({ ...formData, freelanceEndDate: e.target.value })}
      />
  </div>
  <div>
      <Form.Control
          className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
          type="text"
          name="freelanceRenumeration"
          id="freelanceRenumeration"
          placeholder="Freelance Renumeration"
          value={formData.freelanceRenumeration}
          onChange={(e) => handleChange("freelanceRenumeration", e.target.value)}
      />
  </div>      </div> </div> </div>
  )}              </>
            )}
          </Form.Group>
          {/* Next/Previous buttons */}
          <div className="d-flex justify-content-between">
            {currentStep !== 0 && (
              <Button variant="secondary" onClick={prevStep}>Previous</Button>
            )}
            {currentStep !== steps.length - 1 && (
              <Button variant="primary" onClick={nextStep}>Next</Button>
            )}
            {currentStep === steps.length - 1 && (
              <Button type="submit" variant="success">Add</Button>
            )}
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default EstimateForm;







