import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../../layouts/LayoutOne";
import HeroSliderFifteen from "../../wrappers/hero-slider/HeroSliderFifteen";
import FeatureIcon from "../../wrappers/feature-icon/FeatureIcon";
import TabProductNine from "../../wrappers/product/TabProductNine";
import BannerEleven from "../../wrappers/banner/BannerEleven";
import CountDownThree from "../../wrappers/countdown/CountDownThree";
import FeatureIconFour from "../../wrappers/feature-icon/FeatureIconFour";
import NewsletterThree from "../../wrappers/newsletter/NewsletterThree";
import TabProductEleven from "../../wrappers/product/TabProductEleven";
import TestimonialOne from "../../wrappers/testimonial/TestimonialOne";
import MedicalContact from "../../components/contact/MedicalContact";


const HomeFashionSeven = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Flone | Fashion Home</title>
        <meta
          name="description"
          content="Fashion home of flone react minimalist eCommerce template."
        />
      </MetaTags>
      <LayoutOne
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-2"
        headerTop="visible"
      >
        {/* hero slider */}
        <HeroSliderFifteen />

         {/* featured icon */}
         <FeatureIcon spaceTopClass="pt-100" spaceBottomClass="pb-60" />

        {/* tab product */}
        <TabProductNine
          category="fashion"
          spaceBottomClass="pb-100"
          spaceTopClass="pt-100"
        />
        {/* banner */}
        <BannerEleven />
        {/* tab product */}
        <TabProductEleven
          category="kids"
          spaceTopClass="pt-100"
          spaceBottomClass="pb-100"
          sectionTitle="Best Deals"
        />
        {/* testimonial */}
        <TestimonialOne
          spaceTopClass="pt-95"
          spaceBottomClass="pb-95"
          spaceLeftClass="ml-70"
          spaceRightClass="mr-70"
          bgColorClass="bg-gray-3"
        />
        {/* contact */}
        <MedicalContact />
        
        {/* countdown */}
        {/* <CountDownThree
          spaceTopClass="pt-100"
          spaceBottomClass="pb-100"
          dateTime="November 13, 2020 12:12:00"
          countDownImage="/assets/img/banner/deal-2.png"
        /> */}
        {/* feature icon */}
        {/* <FeatureIconFour
          bgImg="/assets/img/bg/shape.png"
          containerClass="container-fluid"
          gutterClass="padding-10-row-col"
          spaceTopClass="pt-50"
          spaceBottomClass="pb-40"
        /> */}
        {/* newsletter */}
        <NewsletterThree
          spaceTopClass="pt-100"
          spaceBottomClass="pb-100"
          subscribeBtnClass="dark-red-subscribe"
        />
      </LayoutOne>
    </Fragment>
  );
};

export default HomeFashionSeven;
