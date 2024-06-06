import React from "react";
import ProjectAreaThreeItem from "../ProjectAreaThreeItem";
import { ProjectList } from "../ProjectList";
import ClientInfo from "./ClientInfo";
import ProjectDetailsPagination from "./ProjectDetailsPagination";

const DatasetArea = () => {
  return (
    <section className="project-details-area pt-130 pb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="project-details-wrap">
              <div className="project-details-thumb">
                <img src="/img/images/originlogo.svg" alt="" />

                {/* client info */}
              
              </div>

              <div className="project-details-content">
                <h2 className="title">Types of Datasets</h2>
               
                <p>
                Understanding the types of datasets available is crucial for selecting the right data for your data science projects. TektAI offers a diverse range of datasets to cater to various research interests and analytical needs.
                </p>
                <h3 className="title-two">Supported File Types</h3>
                <p>TektAI supports various file types to accommodate different data formats and requirements for data science projects. Here are some of the supported file types:</p>
                <h6>CSV (Comma-Separated Values):</h6>
                <p>CSV files are widely used for tabular data storage, where each line represents a row, and values are separated by commas. They are compatible with spreadsheet software like Microsoft Excel and are commonly used for datasets in data science projects.</p>
                <h6>JSON (JavaScript Object Notation):</h6>
<p>JSON is a lightweight data interchange format commonly used for storing and exchanging structured data between a server and a web application. It is often used for semi-structured data and is easily readable by both humans and machines.</p>
                <h6>XML (eXtensible Markup Language):</h6>
<p>XML is another markup language used for encoding documents in a format that is both human-readable and machine-readable. It is commonly used for semi-structured data and can be used to represent hierarchical data structures.</p>
                <h6>Text Files:</h6>
<p> Plain text files (.txt) are supported for storing unstructured textual data. They are commonly used for tasks such as natural language processing (NLP), sentiment analysis, and text classification.</p>
                <h6>Excel Spreadsheets:</h6>
                <p>Excel files (.xlsx) are supported for tabular data storage and analysis. They can contain multiple sheets, each with its own tabular data, making them suitable for organizing and analyzing complex datasets.</p>
                <h6>Audio Files:</h6>
<p>Audio files in formats such as WAV (.wav) and MP3 (.mp3) are supported for tasks involving audio processing, speech recognition, and sound classification. TektAI enables users to upload and analyze audio data for various applications.</p>
                <h6>Image Files:</h6>
                <p> Image files in formats such as JPEG (.jpg), PNG (.png), and GIF (.gif) are supported for tasks involving computer vision, image processing, and deep learning. TektAI allows users to upload and analyze images for various applications.</p>
                <h6>Video Files:</h6>
<p> Video files in formats such as MP4 (.mp4) and AVI (.avi) are supported for tasks involving video analysis, object detection, and action recognition. TektAI allows users to upload and analyze video data for various applications.</p>
                <hr />
                <p>
                By supporting a wide range of file types, TektAI aims to provide flexibility and compatibility for data science projects across different domains and applications.
                </p>
                <h2 className="title">Searching for Datasets</h2>
                <p>Searching for datasets on TektAI is a straightforward process designed to help you find the right data for your projects efficiently. </p>
               
              </div>
            </div>
          </div>
        </div>

       
        {/* <div className="more-project-wrap">
          <h2 className="title">See More Projects</h2>

          <div className="row justify-content-center">
            {ProjectList.slice(0, 3).map((x, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <ProjectAreaThreeItem item={x} />
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default DatasetArea;
