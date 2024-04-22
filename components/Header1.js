import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Header1 = ({ handleOpen, handleRemove, openClass, addClass }) => {
    const [scroll, setScroll] = useState(0)
    const [isSearchToggled, setSearchToggled] = useState(false);
    const [isLanguageToggled, setLanguageToggled] = useState(false);
    const toggleSearchTrueFalse = () => setSearchToggled(!isSearchToggled);
    const toggleLanguageTrueFalse = () => setLanguageToggled(!isLanguageToggled);
    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })
    })
    return (
        <>
            <header className={`${scroll ? "header sticky-bar stick" : "header sticky-bar"} ${addClass}`}>
                <div className="container">
                    <div className="main-header">
                        <div className="header-left">
                            <div className="header-logo"><Link className="d-flex" href="/"><Image width={40} height={40} alt="/Ecom" src="assets/imgs/template/logo.svg" /></Link></div>
                            <div className="header-nav">
                                <nav className="nav-main-menu d-none d-xl-block">
                                    <ul className="main-menu">
                                        <li className="has-children"><Link className="active" href="/">Home</Link>
                                            <div className="sub-menu two-col"><Link className="btn-homepage" href="#"><span>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                                </svg></span>Homepage</Link>
                                                <p className="font-xs color-grey-300">Beautiful and Truly Unique Pre-Built Frontend Homepages Easily complete website for your business. New designs will be continuously added. Click to view the demo.</p>
                                                <ul className="menu-inner">
                                                    <li><Link href="/">
                                                        <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                                        </svg>Homepage - 1</Link></li>
                                                    <li><Link href="/index-2">
                                                        <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                                        </svg>Homepage - 2</Link></li>
                                                    <li><Link href="/index-3">
                                                        <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                                        </svg>Homepage - 3</Link></li>
                                                    <li><Link href="/index-4">
                                                        <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                                        </svg>Homepage - 4</Link></li>
                                                    <li><Link href="/index-5">
                                                        <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                                        </svg>Homepage - 5</Link></li>
                                                    <li><Link href="/index-6">
                                                        <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                                        </svg>Homepage - 6</Link>
                                                    </li>
                                                    <li><Link href="/index-7">
                                                        <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                                        </svg>Homepage - 7</Link>
                                                    </li>
                                                    <li><Link href="/index-8">
                                                        <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                                        </svg>Homepage - 8</Link>
                                                    </li>
                                                    <li><Link href="/index-9">
                                                        <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                                        </svg>Homepage - 9</Link>
                                                    </li>
                                                    <li><Link href="/index-10">
                                                        <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                                        </svg>Homepage - 10</Link>
                                                    </li>
                                                    <li><Link href="/index-11">
                                                        <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                                        </svg>Homepage - 11</Link>
                                                    </li>
                                                    <li><Link href="/index-12">
                                                        <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                                        </svg>Homepage - 12</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="has-children"><Link href="#">Company</Link>
                                            <ul className="sub-menu">
                                                <li><Link href="/about">About Us</Link></li>
                                                <li><Link href="/service">Our Services</Link></li>
                                                <li><Link href="/pricing">Pricing Plan</Link></li>
                                                <li><Link href="/team">Meet Our Team</Link></li>
                                                <li><Link href="/help">Help Center</Link></li>
                                                <li><Link href="/term-conditions">Term and Conditions</Link></li>
                                            </ul>
                                        </li>
                                        <li className="has-children"><Link href="#">Career</Link>
                                            <ul className="sub-menu">
                                                <li><Link href="/career">Jobs Listing</Link></li>
                                                <li><Link href="/job-detail">Job Details</Link></li>
                                            </ul>
                                        </li>
                                        <li className="has-children"><Link href="#">Blog</Link>
                                            <ul className="sub-menu">
                                                <li><Link href="/blog">Blog Listing 1</Link></li>
                                                <li><Link href="/blog-2">Blog Listing 2</Link></li>
                                                <li><Link href="/blog-detail">Blog Details</Link></li>
                                            </ul>
                                        </li>
                                        <li className="has-children"><Link href="#">Shop</Link>
                                            <ul className="sub-menu">
                                                <li><Link href="/shop-grid">Products Listing 1</Link></li>
                                                <li><Link href="/shop-list">Products Listing 2</Link></li>
                                                <li><Link href="/product-detail">Product Details</Link></li>
                                            </ul>
                                        </li>
                                        <li className="has-children"><Link href="#">Pages</Link>
                                            <ul className="sub-menu">
                                                <li><Link href="/register">Register</Link></li>
                                                <li><Link href="/login">Login</Link></li>
                                                <li><Link href="/coming-soon">Coming soon</Link></li>
                                                <li><Link href="/404">Error 404</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link href="/contact">Contact</Link></li>
                                    </ul>
                                </nav>
                                <div className={`burger-icon burger-icon-white ${openClass && "burger-close"}`}
                                    onClick={() => { handleOpen(); handleRemove() }}>
                                    <span className="burger-icon-top" />
                                    <span className="burger-icon-mid" />
                                    <span className="burger-icon-bottom" />
                                </div>
                            </div>
                            <div className="header-right">
                                <div className="d-inline-block box-search-top">
                                    <div className={isSearchToggled ? "form-search-top d-block" : " form-search-top d-none"}>
                                        <form action="#">
                                            <input className="input-search" type="text" placeholder="Search..." />
                                            <button className="btn btn-search">
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                                </svg>
                                            </button>
                                        </form>
                                    </div>
                                    <span className="font-lg icon-list search-post" onClick={toggleSearchTrueFalse}>
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg></span>
                                </div>
                                <div className="d-inline-block box-dropdown-cart" onClick={toggleLanguageTrueFalse}><span className="font-lg icon-list icon-account"><span className="font-lg color-grey-900 arrow-down">EN</span></span>
                                    <div className={isLanguageToggled ? "dropdown-account dropdown-open" : "dropdown-account"}>
                                        <ul>
                                            <li><Link className="font-md" href="#"><Image width={40} height={40} src="/assets/imgs/template/icons/en.png" alt="iori" />
                                                English</Link></li>
                                            <li><Link className="font-md" href="#"><Image width={40} height={40} src="/assets/imgs/template/icons/fr.png" alt="iori" />
                                                French</Link></li>
                                            <li><Link className="font-md" href="#"><Image width={40} height={40} src="/assets/imgs/template/icons/cn.png" alt="iori" />
                                                Chiness</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="d-none d-sm-inline-block"><Link className="btn btn-brand-1 hover-up" href="register">Get Started</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div class="mobile-header-active mobile-header-wrapper-style perfect-scrollbar">
      <div class="mobile-header-wrapper-inner">
        <div class="mobile-header-content-area">
          <div class="mobile-logo"><a class="d-flex" href="index.html"><Image width={40} height={40} alt="/IORI" src="assets/imgs/template/logo.svg" /></a></div>
          <div class="burger-icon"><span class="burger-icon-top"></span><span class="burger-icon-mid"></span><span class="burger-icon-bottom"></span></div>
          <div class="perfect-scroll">
            <div class="mobile-menu-wrap mobile-header-border">
              <ul class="nav nav-tabs nav-tabs-mobile mt-25" role="tablist">
                <li><a class="active" href="#tab-menu" data-bs-toggle="tab" role="tab" aria-controls="tab-menu" aria-selected="true">
                    <svg class="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>Menu</a></li>
                <li><a href="#tab-account" data-bs-toggle="tab" role="tab" aria-controls="tab-account" aria-selected="false">
                    <svg class="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>Account</a></li>
                <li><a href="#tab-notification" data-bs-toggle="tab" role="tab" aria-controls="tab-notification" aria-selected="false">
                    <svg class="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                    </svg>Notification</a></li>
              </ul>
              <div class="tab-content">
                <div class="tab-pane fade active show" id="tab-menu" role="tabpanel" aria-labelledby="tab-menu">
                  <nav class="mt-15">
                    <ul class="mobile-menu font-heading">
                      <li class="has-children"><a class="active" href="index.html">Home</a>
                        <ul class="sub-menu">
                          <li><a href="index.html">Homepage - 1</a></li>
                          <li><a href="index-2.html">Homepage - 2</a></li>
                          <li><a href="index-3.html">Homepage - 3</a></li>
                          <li><a href="index-4.html">Homepage - 4</a></li>
                          <li><a href="index-5.html">Homepage - 5</a></li>
                          <li><a href="index-6.html">Homepage - 6</a></li>
                          <li><a href="index-7.html">Homepage - 7</a></li>
                          <li><a href="index-8.html">Homepage - 8</a></li>
                          <li><a href="index-9.html">Homepage - 9</a></li>
                          <li><a href="index-10.html">Homepage - 10</a></li>
                          <li><a href="index-11.html">Homepage - 11</a></li>
                          <li><a href="index-12.html">Homepage - 12</a></li>
                        </ul>
                      </li>
                      <li class="has-children"><a href="#">Company</a>
                        <ul class="sub-menu">
                          <li><a href="about.html">About Us</a></li>
                          <li><a href="service.html">Our Services</a></li>
                          <li><a href="pricing.html">Pricing Plan</a></li>
                          <li><a href="team.html">Meet Our Team</a></li>
                          <li><a href="help.html">Help Center</a></li>
                          <li><a href="term-conditions.html">Term and Conditions</a></li>
                        </ul>
                      </li>
                      <li class="has-children"><a href="#">Career</a>
                        <ul class="sub-menu">
                          <li><a href="career.html">Jobs Listing</a></li>
                          <li><a href="job-detail.html">Job Details</a></li>
                        </ul>
                      </li>
                      <li class="has-children"><a href="blog.html">Blog</a>
                        <ul class="sub-menu">
                          <li><a href="blog.html">Blog Listing 1</a></li>
                          <li><a href="blog-2.html">Blog Listing 2</a></li>
                          <li><a href="blog-detail.html">Blog Details</a></li>
                        </ul>
                      </li>
                      <li class="has-children"><a href="#">Shop</a>
                        <ul class="sub-menu">
                          <li><a href="shop-grid.html">Products Listing 1</a></li>
                          <li><a href="shop-list.html">Products Listing 2</a></li>
                          <li><a href="product-detail.html">Product Details</a></li>
                        </ul>
                      </li>
                      <li class="has-children"><a href="#">Pages</a>
                        <ul class="sub-menu">
                          <li><a href="register.html">Register</a></li>
                          <li><a href="login.html">Login</a></li>
                          <li><a href="coming-soon.html">Coming soon</a></li>
                          <li><a href="404.html">Error 404</a></li>
                        </ul>
                      </li>
                      <li><a href="contact.html">Contact</a></li>
                    </ul>
                  </nav>
                </div>
                <div class="tab-pane fade" id="tab-account" role="tabpanel" aria-labelledby="tab-account">
                  <nav class="mt-15">
                    <ul class="mobile-menu font-heading">
                      <li><a class="active" href="login.html">My Profile</a></li>
                      <li><a href="#">Work Preferences</a></li>
                      <li><a href="#">My Boosted Shots</a></li>
                      <li><a href="#">My Collections</a></li>
                      <li><a href="#">Account Settings</a></li>
                      <li><a href="#">Go Pro</a></li>
                      <li><a href="register.html">Sign Out</a></li>
                    </ul>
                  </nav>
                </div>
                <div class="tab-pane fade" id="tab-notification" role="tabpanel" aria-labelledby="tab-notification">
                  <p class="font-sm-bold color-brand-1 mt-30">Today</p>
                  <div class="notifications-item">
                    <div class="item-notify">
                      <div class="item-image"><Image width={40} height={40} src="/assets/imgs/template/user1.png" alt="iori" /></div>
                      <div class="item-info">
                        <p class="color-grey-500 font-xs"><strong class="font-xs-bold">Steven Job</strong>like started a poll in your post “How to be a good trader in 2023”</p>
                      </div>
                      <div class="item-time"><span class="color-grey-500 font-xs">Just now</span></div>
                    </div>
                    <div class="item-notify">
                      <div class="item-image"><Image width={40} height={40} src="/assets/imgs/template/user2.png" alt="iori" /></div>
                      <div class="item-info">
                        <p class="color-grey-500 font-xs"><strong class="font-xs-bold">Steven Job</strong>like started a poll in your post “How to be a good trader in 2023”</p>
                      </div>
                      <div class="item-time"><span class="color-grey-500 font-xs">Just now</span></div>
                    </div>
                  </div>
                  <p class="font-sm-bold color-brand-1 mt-30">Yesterday</p>
                  <div class="notifications-item">
                    <div class="item-notify">
                      <div class="item-image"><Image width={40} height={40} src="/assets/imgs/template/user3.png" alt="iori" /></div>
                      <div class="item-info">
                        <p class="color-grey-500 font-xs"><strong class="font-xs-bold">Steven Job</strong>like started a poll in your post “How to be a good trader in 2023”</p>
                      </div>
                      <div class="item-time"><span class="color-grey-500 font-xs">Just now</span></div>
                    </div>
                    <div class="item-notify">
                      <div class="item-image"><Image width={40} height={40} src="/assets/imgs/template/user4.png" alt="iori" /></div>
                      <div class="item-info">
                        <p class="color-grey-500 font-xs"><strong class="font-xs-bold">Steven Job</strong>like started a poll in your post “How to be a good trader in 2023”</p>
                      </div>
                      <div class="item-time"><span class="color-grey-500 font-xs">Just now</span></div>
                    </div>
                    <div class="item-notify">
                      <div class="item-image"><Image width={40} height={40} src="/assets/imgs/template/user5.png" alt="iori" /></div>
                      <div class="item-info">
                        <p class="color-grey-500 font-xs"><strong class="font-xs-bold">Steven Job</strong>like started a poll in your post “How to be a good trader in 2023”</p>
                      </div>
                      <div class="item-time"><span class="color-grey-500 font-xs">Just now</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="site-copyright color-grey-400 mt-0">
              <div class="box-download-app">
                <p class="font-xs color-grey-400 mb-25">Download our Apps and get extra 15% Discount on your first Order…!</p>
                <div class="mb-25"><a class="mr-10" href="#"><Image width={40} height={40} src="/assets/imgs/template/appstore.png" alt="iori" /></a><a href="#"><Image width={40} height={40} src="/assets/imgs/template/google-play.png" alt="iori" /></a></div>
                <p class="font-sm color-grey-400 mt-20 mb-10">Secured Payment Gateways</p><Image width={40} height={40} src="/assets/imgs/template/payment-method.png" alt="iori" />
              </div>
              <div class="mb-0">Copyright 2023 &copy; IORI - Marketplace Template.<br />Designed by<a href="http://alithemes.com" target="_blank">&nbsp; AliThemes</a></div>
            </div>
          </div>
        </div>
      </div>
    </div>

        </>
    );
};

export default Header1;