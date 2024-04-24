import React from 'react'
import Image from 'next/image'
import ContactForm from '../elements/ContactForm'
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
            <ContactForm />
          </div>
        </div>
        </section>
  )
}

export default Contact