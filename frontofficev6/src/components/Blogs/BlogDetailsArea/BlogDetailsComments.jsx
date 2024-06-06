import React from "react";

const BlogDetailsComments = () => {
  return (
    <div className="latest-comments">
      <ul className="list-wrap">
        <li>
          <div className="comments-box">
            <div className="comments-avatar">
              <img src="/img/blog/comment_avatar01.png" alt="" />
            </div>
            <div className="comments-text">
              <div className="avatar-name">
                <h6 className="name">
                  David Martin
                  <a href="#" className="comment-reply-link">
                    <i className="fas fa-reply"></i>Reply
                  </a>
                </h6>
                <span className="date">September 6, 2023</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur. Ut tellus suspendisse
                nulla aliquam. Risus rutrum tellus eget ultrices pretium nisi
                amet facilisis. Augue vulputate tortor egestas cursus vivamus.
              </p>
            </div>
          </div>
          
          <ul className="list-wrap children">
            <li>
              <div className="comments-box">
                <div className="comments-avatar">
                  <img src="/img/blog/comment_avatar01.png" alt="" />
                </div>
                <div className="comments-text">
                  <div className="avatar-name">
                    <h6 className="name">
                      David Martin
                      <a href="#" className="comment-reply-link">
                        <i className="fas fa-reply"></i>Reply
                      </a>
                    </h6>
                    <span className="date">September 6, 2023</span>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Ut tellus
                    suspendisse nulla aliquam. Risus rutrum tellus ultrices.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </li>

        <li>
          <div className="comments-box">
            <div className="comments-avatar">
              <img src="/img/blog/comment_avatar01.png" alt="" />
            </div>
            <div className="comments-text">
              <div className="avatar-name">
                <h6 className="name">
                  David Martin
                  <a href="#" className="comment-reply-link">
                    <i className="fas fa-reply"></i>Reply
                  </a>
                </h6>
                <span className="date">September 6, 2023</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur. Ut tellus suspendisse
                nulla aliquam. Risus rutrum tellus eget ultrices pretium nisi
                amet facilisis. Augue vulputate tortor egestas cursus vivamus.
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default BlogDetailsComments;
