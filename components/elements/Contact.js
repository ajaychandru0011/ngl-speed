import React from 'react'
import Image from 'next/image'
const Contact = () => {
  return (
    <section className='section mt-70'>

    
    <div class="container"> 
          <div class="row">
            <div class="col-lg-5">
              <h2 class="color-brand-1 mb-15">Drop a Message</h2>
              <p class="font-sm color-grey-500">Interested in driving growth? Have a general question? We’re just an email away.</p>
              <div class="mt-50"> 
                
                <div class="card-offer card-we-do card-contact hover-up">
                  <div class="card-image"><Image width={64} height={73} src="/assets/imgs/page/contact/img3.png" alt="iori"/></div>
                  <div class="card-info">
                    <h6 class="color-brand-1 mb-10">Get in touch with Our Experts</h6>
                    <p class="font-md color-grey-500 mb-5">Email us at : contact@nextgrowthlabs.com</p>
                  </div>
                </div>
                <div class="card-offer card-we-do card-contact hover-up">
                  <div class="card-image"><Image width={64} height={73} src="/assets/imgs/page/contact/img2.png" alt="iori"/></div>
                  <div class="card-info">
                    <h6 class="color-brand-1 mb-10">Reach Us </h6>
                    <p class="font-md color-grey-500 mb-5">Bangalore: 1216, 14th Main, HSR Layout</p>
                  </div>
                </div>
              </div>
            </div>
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
          </div>
        </div>
        </section>
  )
}

export default Contact