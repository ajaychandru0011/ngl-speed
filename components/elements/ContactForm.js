import React from "react";
import Button from "./Button";
const ContactForm = () => {
  const clicked = () => {
    console.log("Send button clicked");
  };
  return (
    <div className="col-lg-7" id="contact">
      <div className="box-form-contact">
        <div className="row">
          <div className="col-lg-6 col-sm-6">
            <div className="form-group mb-25">
              <input
                className="form-control icon-user"
                type="text"
                placeholder="Your name"
              />
            </div>
          </div>
          <div className="col-lg-6 col-sm-6">
            <div className="form-group mb-25">
              <input
                className="form-control icon-email"
                type="text"
                placeholder="Work email"
              />
            </div>
          </div>
          <div className="col-lg-6 col-sm-6">
            <div className="form-group mb-25">
              <input
                className="form-control icon-phone"
                type="text"
                placeholder="Phone"
              />
            </div>
          </div>
          <div className="col-lg-6 col-sm-6">
            <div className="form-group mb-25">
              <input
                className="form-control icon-company"
                type="text"
                placeholder="App URL"
              />
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-group mb-25">
              <textarea
                className="form-control textarea-control"
                placeholder="Message"
              ></textarea>
            </div>
          </div>

          <div className="form-group">
            <Button
              text={"Send message"}
              showIcon={false}
              onClick={clicked}
              customBtnSize={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
