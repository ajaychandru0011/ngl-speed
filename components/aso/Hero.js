import Button from "../elements/Button"
import React, { useState } from "react";
const Hero = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const options = [
    { value: "option1", label: "🇺🇸 United States" },
    { value: "option2", label: "🇬🇧 United Kingdom" },
    { value: "option3", label: "🇨🇦 Canada" },
  ];

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <section class="section" style={{ backgroundColor: "#E0F1F4" }}>
      <div class="container text-center">
        <div class="row mt-100 mb-100">
          <div class="col-xl-8 col-lg-10 m-auto">
            <h1 class="color-brand-1 mb-25 mt-10">App Store Optimization</h1>
            <p class="font-md color-grey-500 mb-25">
              Since 2016, we've been at the forefront of App Marketing. Some of
              world's top brands too read these lines, before contacting and
              working with us. The next 5 minutes you spend reading about us
              will give you a glimpse to our approach. Want a customised
              presentation? Let us know.
            </p>
            <div className="aso-input-form mb-25">
              <div class="mb-25">
                <input
                  class="form-control input-search"
                  type="text"
                  placeholder="Enter an app name to get [quick insights, data, information]"
                />
              </div>
              <div class="mb-25">
                <select
                  className="form-control aso-select"
                  value={selectedOption}
                  onChange={handleSelectChange}
                >
                  {options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <div class="d-sm-inline-block mb-25">
                <Button text="Start Now" href={"#"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
