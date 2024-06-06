import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Button } from "evergreen-ui";

const SolutionForm = () => {
  const { challengeId } = useParams();
  const [formData, setFormData] = useState({
    dataset: null,
    readMeFile: null,
    rapport: null,
    demo: null,
    sourceCode: null,
    output:"",
  });

  const handleFileChange = (event, field) => {
    if (event.target.type === 'file') {
      const file = event.target.files[0];
      setFormData({...formData, [field]: file });
    } else {
      // Pour les champs numériques, convertissez la valeur en nombre
      setFormData({...formData, [field]: Number(event.target.value) });
    }}

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("challengeId", challengeId);

    Object.entries(formData).forEach(([fieldName, file]) => {
      if (file) {
        formDataToSend.append(fieldName, file);
      }
    });

    try {
      const response = await axios.post(
        "http://localhost:3000/api/solution/addSolution",
        formDataToSend
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  
  
  return (
    <div className="solution-form-container" style={{ position: 'relative', minHeight: '100vh' }}>
      <video autoPlay muted loop style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}>
        <source src="/img/images/sol.mp4" type="video/mp4" />
      </video>
      <style>
        {
          `
          
          
          
          .solution-form {
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin-left:30%;
          }
          
          .file-input {
            padding: 10px;
            border: 1px solid blue;
            border-radius: 5px;
            transition: border-color 0.3s ease;
          }
          
          .file-input:focus {
            border-color: blue;
          }
          
          .submit-button {
            align-self: center;
            padding: 10px 20px;
            background-color: #F2CB05;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }
          
        
       
          .solution-form {
            display: flex;
            flex-direction: column;
            gap: 20px;
           
          }
          
          .form-group {
            display: flex;
            flex-direction: column;
          }
         
          .label {
            margin-bottom: 5px;
            color:blue;
          }
          
          .file-input {
            width: 60%;
            padding: 10px;
            border: 2px solid blue;
            border-radius: 5px;
            font-size: 16px;
          }
          
          .submit-button {
            align-self: center;
            width:200px;
            height:50px;
            color:black
          }
          .solution-form-container {
            position: relative;
            min-height: 100vh;
            padding: 60px;
            background-color: #D9D9D9;
          }
          
         .solution-form {
            display: flex;
            flex-direction: column;
            gap: 20px;
            position: relative;
          }
          label{
            color:blue;
            font-weight:bold;
          }

      `
        }
      </style>
      <form onSubmit={handleSubmit} className="solution-form">
      <div className="form-group">
  <label htmlFor="output">Output</label>
  <input
    type="text" // Assurez-vous que c'est un champ numérique
    id="output"
    onChange={(event) => handleFileChange(event, "output")}
    className="file-input"
  />
</div>

        <div className="form-group">
         
           <label htmlFor="dataset">Dataset</label>
          <input
            type="file"
            id="dataset"
            onChange={(event) => handleFileChange(event, "dataset")}
            className="file-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="readMeFile">ReadMe File</label>
          <input
            type="file"
            id="readMeFile"
            onChange={(event) => handleFileChange(event, "readMeFile")}
            className="file-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="rapport">Rapport</label>
          <input
            type="file"
            id="rapport"
            onChange={(event) => handleFileChange(event, "rapport")}
            className="file-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="demo">Demo</label>
          <input
            type="file"
            id="demo"
            onChange={(event) => handleFileChange(event, "demo")}
            className="file-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="sourceCode">Source Code</label>
          <input
            type="file"
            id="sourceCode"
            onChange={(event) => handleFileChange(event, "sourceCode")}
            className="file-input"
          />
        </div>
        <Button type="submit" className="submit-button">
          Add Solution
        </Button>
      </form>
    </div>
  );
  
};

export default SolutionForm;
