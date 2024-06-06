import React from "react";

const BlogDetailsForm = () => {
  return (
    <form className="comment-form" action="#">
      {/* <div className="row">
        <div className="col-md-4">
          <div className="form-grp">
            <input type="text" placeholder="Name *" />
          </div>
        </div>

        <div className="col-md-4">
          <div className="form-grp">
            <input type="email" placeholder="Email *" />
          </div>
        </div>

        <div className="col-md-4">
          <div className="form-grp">
            <input type="url" placeholder="Website*" />
          </div>
        </div>
      </div> */}

      <div className="form-grp">
        <textarea name="message" placeholder="Comment *" />
      </div>

      {/* <div className="form-grp checkbox-grp">
        <input type="checkbox" id="checkbox" />

        <label for="checkbox">
          Save my name, email, and website in this browser for the next time I
          comment.
        </label>
      </div> */}

      <button type="submit" className="btn btn-two">
        Post Comment
      </button>
    </form>
  );
};

export default BlogDetailsForm;
