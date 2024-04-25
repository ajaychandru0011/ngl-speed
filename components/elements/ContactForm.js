import React from 'react'
import Button from './Button';
const ContactForm = () => {
  return (
    <div class="col-lg-7">
              <div class="box-form-contact"> 
                <div class="row"> 
                  <div class="col-lg-6 col-sm-6">
                    <div class="form-group mb-25"> 
                      <input class="form-control icon-user" type="text" placeholder="Your name"/>
                    </div>
                  </div>
                  <div class="col-lg-6 col-sm-6">
                    <div class="form-group mb-25"> 
                      <input class="form-control icon-email" type="text" placeholder="Email"/>
                    </div>
                  </div>
                  <div class="col-lg-6 col-sm-6">
                    <div class="form-group mb-25"> 
                      <input class="form-control icon-phone" type="text" placeholder="Phone"/>
                    </div>
                  </div>
                  <div class="col-lg-6 col-sm-6">
                    <div class="form-group mb-25"> 
                      <input class="form-control icon-company" type="text" placeholder="App URL"/>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="form-group mb-25"> 
                      <textarea class="form-control textarea-control" placeholder="Message"></textarea>
                    </div>
                  </div>
                  <div class="col-xl-4 col-lg-5 col-md-5 col-sm-6 col-9">
                    <div class="form-group">
                      <Button text={"Send message"} showIcon={true} onClick={"clicked"} />
                    </div>
                  </div>
                </div>
              </div>
            </div> 
  )
}

export default ContactForm;