import React from "react";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";

const TermsCondition = () => {
  return (
    <>
      <BreadCrumbs title="Cleaning Business Terms  & Conditions" />
      <div className="terms-wrapper wrapper">
        <div className="container">
          <div className="term-condition">
            <div className="term-heading text-center">
              <h1>Terms Of Service</h1>
              <p>
                Please read these terms and conditions carefully before using
                the cleaning services offered by Cleaning Business.
              </p>
            </div>
            <div className="term-body">
              <h3>1. Agreement to Terms</h3>
              <p>
                By accessing or using our cleaning services, you agree to be
                bound by these Terms. If you disagree with any part of the
                terms, then you may not access the services.
              </p>
            </div>
            <div className="term-body">
              <h3>2. Service Availability</h3>
              <p>
                Our cleaning services are available to customers within the
                specified service area. We reserve the right to refuse service
                to anyone for any reason at any time.
              </p>
            </div>
            <div className="term-body">
              <h3>3. Cancellation and Rescheduling</h3>
              <ul>
                <li>
                  <b>Cancellation:</b> If you need to cancel or reschedule your
                  cleaning appointment, please notify us at least 24 hours in
                  advance. Failure to do so may result in a cancellation fee.
                </li>
                <li>
                  <b>Rescheduling:</b> We will do our best to accommodate
                  rescheduling requests, subject to availability.
                </li>
              </ul>
            </div>
            <div className="term-body">
              <h3>4. Service Satisfaction</h3>
              <p>
                Your satisfaction with our cleaning services is important to us.
                If you are not satisfied with the service provided, please
                contact us within 24 hours of the cleaning, and we will address
                your concerns promptly.
              </p>
            </div>
            <div className="term-body">
              <h3>5. Liability</h3>
              <ul>
                <li>
                  <b>Property:</b> While we take utmost care in providing our
                  cleaning services, we are not liable for any damage to
                  property that occurs during the cleaning.
                </li>
                <li>
                  <b>Personal Injury:</b> We are not liable for any personal
                  injury that occurs during the cleaning process.
                </li>
              </ul>
            </div>
            <div className="term-body">
              <h3>6. Confidentiality</h3>
              <p>
                We respect your privacy and will treat all information obtained
                during the provision of our cleaning services confidentially.
              </p>
            </div>
            <div className="term-body">
              <h3>7. Changes to Terms</h3>
              <p>
                We reserve the right to update or modify these Terms at any time
                without prior notice. Any changes will be effective immediately
                upon posting on our website.
              </p>
            </div>
            <div className="term-body">
              <h3>8. Contact Us</h3>
              <p>
                If you have any questions about these Terms, please contact us
                at&nbsp;<a href="mailto:sales@webcleaningbusiness">sales@webcleaningbusiness.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default TermsCondition;
