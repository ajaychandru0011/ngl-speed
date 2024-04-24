import React from 'react'

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
                      <button class="btn btn-brand-1-full font-sm" type="submit">Send message
                        <svg class="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div> 
  )
}

export default ContactForm;