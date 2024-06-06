import React, { useState, useEffect } from "react";
import BlogDetailsComments from "./BlogDetailsComments";
import BlogDetailsForm from "./BlogDetailsForm";
import BlogDetailsPagination from "./BlogDetailsPagination";
import BlogSidebar from "../BlogSidebar/BlogSidebar";
import BlogDetailsBottom from "./BlogDetailsBottom";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
const BlogDetailsArea = () => {
  const { id } = useParams();
  const [challenge, setChallenge] = useState(null);
  useEffect(() => {
    const fetchChallengeDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/challenge/getById/${id}`);
        setChallenge(response.data.challenge);
      } catch (error) {
        console.error("Error fetching challenge details:", error);
      }
    };

    fetchChallengeDetails();
  }, [id]);

  return (
    <section className="blog-details-area pt-130 pb-130">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="blog-details-wrap">
            {challenge && (
              <div className="blog-item-two inner-blog-item">
                <div className="blog-thumb-two blog-details-thumb">
                <img src={`data:${challenge.picture.contentType};base64,${challenge.picture.data}`} alt={challenge.challengeName} />

                </div>
              
                <div className="blog-content-two blog-details-content">
                
  <Link to="#" className="tag">
    {challenge.price}{'   '}TND
  </Link>


                  <div className="blog-meta">
                    <ul className="list-wrap">
                      <li>
                        <i className="fas fa-calendar-alt"></i>{challenge.startDate}
                      </li>
                      <li>
  {challenge.status === "coming soon" && (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hourglass-top" viewBox="0 0 16 16">
      <path d="M2 14.5a.5.5 0 0 0 .5.5h11a.5.5 0 1 0 0-1h-1v-1a4.5 4.5 0 0 0-2.557-4.06c-.29-.139-.443-.377-.443-.59v-.7c0-.213.154-.451.443-.59A4.5 4.5 0 0 0 12.5 3V2h1a.5.5 0 0 0 0-1h-11a.5.5 0 0 0 0 1h1v1a4.5 4.5 0 0 0 2.557 4.06c.29.139.443.377.443.59v.7c0 .213-.154.451-.443.59A4.5 4.5 0 0 0 3.5 13v1h-1a.5.5 0 0 0-.5.5m2.5-.5v-1a3.5 3.5 0 0 1 1.989-3.158c.533-.256 1.011-.79 1.011-1.491v-.702s.18.101.5.101.5-.1.5-.1v.7c0 .701.478 1.236 1.011 1.492A3.5 3.5 0 0 1 11.5 13v1z"/>
    </svg>
  )}
  {challenge.status === "ongoing" && (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hourglass-split" viewBox="0 0 16 16">
  <path d="M2.5 15a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 0 0 4.5 13s.866-1.299 3-1.48zm1 0v3.17c2.134.181 3 1.48 3 1.48a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351z"/>
</svg> 
  )}
  {challenge.status === "expired" && (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hourglass-bottom" viewBox="0 0 16 16">
      <path d="M2 1.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1-.5-.5m2.5.5v1a3.5 3.5 0 0 0 1.989 3.158c.533.256 1.011.791 1.011 1.491v.702s.18.149.5.149.5-.15.5-.15v-.7c0-.701.478-1.236 1.011-1.492A3.5 3.5 0 0 0 11.5 3V2z"/>
    </svg>
  )}
  <Link to="/blog">{challenge.status}</Link>
</li>

                    </ul>
                  </div>

                  <h2 className="title">
                  {challenge.challengeName}
                  </h2>

                  <p>
                  {challenge.description}
                  </p>
                  <blockquote>
                    <p>
                      Commodo dictum iaculis eget massa phasellus ultrices
                      dignissim. Id nulla amet tincidunt urna sed massa sed.
                    </p>
                    <cite>David Moree</cite>
                  </blockquote>
                 
                
                  <div className="blog-details-inner-img">
                    <div className="row">
                      <div className="col-md-6">
                        <img src="/img/blog/blog_details-img01.jpg" alt="" />
                      </div>
                     
                    </div>
                  
                  </div>
                
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Ut tellus
                    suspendisse nulla aliquam. Risus rutrum tellus eget ultrices
                    pretium nisi amet facilisis. Augue eu vulputate tortor
                    egestas cursus vivamus. Commodo dictum iaculis eget massa
                    phasellus ultrices nunc dignissim. Id nulla amet tincidunt
                    urna sed massa sed.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Ut tellus
                    suspendisse nulla aliquam. Risus rutrum tellus eget ultrices
                    pretium nisi amet facilisis. Augue eu vulputate tortor
                    egestas cursus vivamus.{" "}
                  </p>

                  <div className="blog-details-bottom">
                    <BlogDetailsBottom />
                  </div>
                </div>
                
              </div>

)}
      
              {/* <BlogDetailsPagination /> */}

              <div className="comments-wrap">
                <h4 className="comments-wrap-title">Comments (3)</h4>
                <BlogDetailsComments />
              </div>

              <div className="comment-respond">
                <h3 className="comment-reply-title">Leave A Comment</h3>
                <BlogDetailsForm />
              </div>
            </div>
          </div>
        
          <div className="col-lg-4 col-md-8">
            <BlogSidebar />
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default BlogDetailsArea;
