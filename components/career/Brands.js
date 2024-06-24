import Image from "next/image"
import React, { useState } from "react"

const Brands = () => {
  const [selectedCategory, setSelectedCategory] = useState("Social media")

  const categories = [
    {
        category: "Social media",
        images: [
          { id: 1, src: "/images/Airtel.svg", alt: "airtel", width: 49 },
          { id: 2, src: "/images/ZEE.svg", alt: "ZEE", width: 110 },
          { id: 3, src: "/images/OYO.svg", alt: "OYO", width: 142 },
          { id: 4, src: "/images/Josh.svg", alt: "Josh", width: 105 },
          { id: 5, src: "/images/Share-Chat.svg", alt: "ShareChat", width: 182 },
          { id: 6, src: "/images/Dream11.svg", alt: "Dream11", width: 182 },
          { id: 7, src: "/images/Dunzo.svg", alt: "Dunzo", width: 219 },
          {
            id: 8,
            src: "/images/Make-My-Trip.svg",
            alt: "Make-My-trip",
            width: 155,
          },
          { id: 9, src: "/images/Goibibo.svg", alt: "Goibibo", width: 158 },
          { id: 10, src: "/images/ixigo.svg", alt: "ixigo", width: 108 },
          { id: 11, src: "/images/Yatra.svg", alt: "Yatra", width: 115 },
          { id: 12, src: "/images/fectar.svg", alt: "Fectar", width: 115 },
          { id: 13, src: "/images/mint.svg", alt: "Mint", width: 115 },
          { id: 14, src: "/images/Fancode.svg", alt: "FanCODE", width: 247 }
        ],
      },
      {
        category: "E-commerce",
        images: [
          { id: 1, src: "/images/Nykaa.svg", alt: "Nykaa", width: 146 },
          { id: 2, src: "/images/Myntra.svg", alt: "Myntra", width: 177 },
          { id: 3, src: "/images/Snapdeal.svg", alt: "Snapdeal", width: 241 },
          { id: 4, src: "/images/Smood.ch-PINK.svg", alt: "Smood", width: 247 },
          {
            id: 5,
            src: "/images/Alibabagroup.svg",
            alt: "Alibabagroup",
            width: 103,
          },
          {
            id: 6,
            src: "/images/Urban-company.svg",
            alt: "Urbancompany",
            width: 169,
          },
        ],
      },
      {
        category: "Ed-tech",
        images: [
          { id: 1, src: "/images/ELSA.svg", alt: "ELSA", width: 146 },
          {
            id: 2,
            src: "/images/SimpleLearn.svg",
            alt: "SimpleLearn",
            width: 195,
          },
          {
            id: 3,
            src: "/images/BYJUs-Exam-Prep.svg",
            alt: "BYJU'sExamPrep",
            width: 287,
          },
        ],
      },
    {
      category: "Finance & Banking",
      images: [
        { id: 1, src: "/images/HDFC.svg", alt: "hdfc", width: 304 },
        { id: 2, src: "/images/Groww.svg", alt: "groww", width: 182 },
        {
          id: 3,
          src: "/images/Bajaj-Finserve.svg",
          alt: "BajajFinserve",
          width: 190,
        },
        {
          id: 4,
          src: "/images/Alibabagroup.svg",
          alt: "Alibabagroup",
          width: 103,
        },
        { id: 5, src: "/images/Cred.svg", alt: "Cred", width: 151 },
        { id: 6, src: "/images/Kotak.svg", alt: "Kotak", width: 165 },
        { id: 7, src: "/images/IDFC.svg", alt: "IDFC", width: 120 },
        { id: 8, src: "/images/Yes-Bank.svg", alt: "YesBank", width: 139 },
        { id: 9, src: "/images/Edelweiss.svg", alt: "Edelweiss", width: 203 },
        {
          id: 10,
          src: "/images/CoinMArketcap.svg",
          alt: "CoinMArketcap",
          width: 49,
        },
      ],
    },
   
    {
      category: "Real estate",
      images: [
        {
          id: 1,
          src: "/images/Magicbricks.svg",
          alt: "Magicbricks",
          width: 278,
        },
        { id: 2, src: "/images/Housing.com.svg", alt: "Housing", width: 359 },
        { id: 3, src: "/images/Nobroker.svg", alt: "Nobroker", width: 260 },
      ],
    },
    {
      category: "Health services",
      images: [
        { id: 1, src: "/images/netmeds.svg", alt: "Netmeds", width: 278 },
        { id: 2, src: "/images/Tata-1mg.svg", alt: "Housing", width: 359 },
        { id: 2, src: "/images/Ultrahuman.svg", alt: "Ultrahuman", width: 153 },
      ],
    },
    {
      category: "Technology",
      images: [{ id: 1, src: "/images/Fynd.svg", alt: "fynd", width: 123 }],
    },
  ]

  const handleClick = category => {
    setSelectedCategory(category)
  }

  return (
    <section className="section mt-80 mb-30">
      <div className="container">
        <div className="text-start mb-20">
          <h3 className="color-brand-1 mb-20">
            Loved By Developers <br className="d-none d-lg-block" />
            Trusted By Enterprises
          </h3>
          <p className="font-lg color-grey-500">
            We helped some of the top brands craft success stories by unlocking
            their organic growth potential.
          </p>
        </div>
        {/* ************ */}
        <div>
          {categories.map((item, index) => (
            <button
              key={index}
              onClick={() => handleClick(item.category)}
              style={{
                marginRight: "10px",
                background:
                  selectedCategory === item.category ? "#024430" : "white",
                color:
                  selectedCategory === item.category ? "#ffe7bb" : "#024430",
                padding: "5px 10px",
                border: "1px solid #024430",
                cursor: "pointer",
              }}
              className="hover-up btn btn-brand-1 mb-10"
            >
              {item.category.toUpperCase()}
            </button>
          ))}
        </div>
        {/* ************ */}
        <div className="mt-50">
          <div
            className="row brands-container"
          >
            {selectedCategory &&
              categories
                .find(item => item.category === selectedCategory)
                .images.map(image => (
                  <div
                    key={image.id}
                    className="brands_wrapper"
                  >
                    <Image
                      src={image.src}
                      width={image.width}
                      height={120}
                      alt={image.alt}
                      class="icon_brand"
                    />
                  </div>
                ))}
          </div>
        </div>
        {/* ************* */}
      </div>
    </section>
  )
}

export default Brands
