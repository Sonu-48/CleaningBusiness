import React from "react";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";

const PrivacyPolicy = () => {
  return (
    <>
      <BreadCrumbs title="Cleaning Business Privacy Policy" />
      <div className="terms-wrapper wrapper">
        <div className="container">
          <div className="term-condition">
            <div className="term-heading text-center">
              <h1>Privacy Policy</h1>
              <p>
                Cleaning Business is committed to protecting the privacy and
                security of your personal information. This Privacy Policy
                describes how we collect, use, and disclose personal information
                when you use our cleaning services or interact with us through
                our website or other channels.
              </p>
            </div>
            <div className="term-body">
              <h3>1. Information We Collect</h3>
              <p>
                We may collect the following types of personal information when
                you use our services or communicate with us:
              </p>
              <ul>
                <li>
                  Contact information (such as name, address, email address, and
                  phone number)
                </li>
                <li>Communication preferences</li>
                <li>Any other information you choose to provide to us</li>
              </ul>
            </div>
            <div className="term-body">
              <h3>2. How We Use Your Information</h3>
              <p>
                We may use the personal information we collect for the following
                purposes:
              </p>
              <ul>
                <li>
                  Providing cleaning services and fulfilling your requests
                </li>
                <li>
                  Communicating with you about your bookings, inquiries, and
                  feedback
                </li>
                <li>Improving our services and website</li>
                <li>Complying with legal obligations</li>
              </ul>
            </div>
            <div className="term-body">
              <h3>3. Information Sharing</h3>
              <p>
                We may share your personal information with third parties for
                the following purposes:
              </p>
              <ul>
                <li>
                  <b>Service providers</b>: We may share your information with
                  third-party service providers who assist us in operating our
                  business, such as payment processors and IT service providers.
                </li>
                <li>
                  <b>Legal compliance</b>: We may disclose your information in
                  response to a lawful request or to comply with applicable laws
                  and regulations.
                </li>
                <li>
                  <b>Business transfers</b>: If we are involved in a merger,
                  acquisition, or sale of all or a portion of our assets, your
                  information may be transferred as part of that transaction.
                </li>
              </ul>
            </div>
            <div className="term-body">
              <h3>4. Data Security</h3>
              <p>
                We take reasonable measures to protect your personal information
                from unauthorized access, use, or disclosure. However, no method
                of transmission over the internet or electronic storage is
                completely secure, so we cannot guarantee absolute security.
              </p>
            </div>
            <div className="term-body">
              <h3>5. Changes to this Privacy Policy</h3>
              <p>
                We may update this Privacy Policy from time to time. Any changes
                will be posted on this page, and the effective date will be
                updated accordingly.
              </p>
            </div>
            <div className="term-body">
              <h3>6. Contact Us</h3>
              <p>
                If you have any questions or concerns about this Privacy Policy
                or our privacy practices, please contact us at &nbsp;
                <a href="mailto:sales@webcleaningbusiness">sales@webcleaningbusiness.com</a>    
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PrivacyPolicy;
