import React from "react";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";

function GDPR() {
  return (
    <>
      <BreadCrumbs title="Cleaning Business GDPR" />
      <div className="wrapper">
        <div className="container">
          <div className="gdpr-content">
            <h3>Overview</h3>
            <p>
              At Cleaning Business, we prioritize the protection of our
              customers' data and are deeply committed to supporting businesses
              that use our product suite and services. As part of this
              commitment, we actively assist our business users in understanding
              and, when necessary, adhering to the General Data Protection
              Regulation (GDPR).
            </p>
            <p>
              Cleaning Business is fully dedicated to complying with GDPR
              regulations as a data processor. We have implemented robust data
              protection measures, privacy protocols, and security practices to
              ensure the safety of personal data. Our compliance efforts are
              regularly updated to align with the evolving GDPR guidelines.
            </p>
            <p>
              We take a comprehensive approach to GDPR compliance, with a
              primary focus on serving our business users and individual data
              subjects. As a data processor, Cleaning Business operates on
              behalf of its business users (data controllers) to process
              personal data within the scope of our services. We handle this
              data strictly in accordance with the instructions provided by our
              customers.
            </p>
          </div>
          <div className="gdpr-content">
            <h3>Cleaning Business Compliance</h3>
            <div className="gdpr-compliance-content">
              <h4>Data protection by design</h4>
              <p>
                "At Cleaning, Business ensuring the protection and security of
                data is a fundamental aspect of our platform. Over the years, we
                have continuously monitored developments in web technology,
                enabling us to adapt our platform to incorporate the latest
                advancements while remaining compliant with GDPR guidelines."
              </p>
            </div>
            <div className="gdpr-compliance-content">
              <h4>Compliant as a data processor under GDPR Guidelines</h4>
              <p>
                Cleaning Business, as a data processor committed to GDPR
                guidelines, places utmost importance on data protection and
                privacy across all our services. Recognizing our pivotal role in
                processing personal data on behalf of our business users, who
                act as data controllers, we've implemented robust data security
                measures and privacy protocols to ensure strict compliance with
                GDPR regulations. Our data processing practices are
                characterized by transparency and adherence to the specific
                instructions provided by our customers. As a trusted data
                processor, we prioritize responsible and secure handling of
                personal data, safeguarding its confidentiality and integrity
                throughout its lifecycle. Through continuous monitoring and
                updates to our processes, Cleaning Business remains a dependable
                and GDPR-compliant data processor, providing our customers with
                assurance and confidence in their data management practices.
              </p>
            </div>
            <div className="gdpr-compliance-content">
              <h4>Freedom to Choose and Consent</h4>
              <p>
                We prioritize choice and transparency in the collection, usage,
                and sharing of information, offering options within various
                product settings. You can find detailed information on how we
                manage your personal data in our updated, easily understandable
                Privacy Policy, which outlines your choices, how to exercise
                them, and any applicable limitations. Additionally, we present
                cookie and marketing message consents upfront to provide clarity
                and control during data collection. Our internal procedures
                consolidate consents to ensure consistent adherence to your
                preferences across all Cleaning Business product offerings.
              </p>
            </div>
            <div className="gdpr-compliance-content">
              <h4>Rights of Data Subjects</h4>
              <p>
                Cleaning Business has implemented policies to safeguard users'
                rights. We provide Cleaning Business, business and end users with
                the option to opt out of our notifications and stand ready to
                address any data access requests from both our business users
                and end users. Additionally, all business users have the
                capability to export and transfer their data.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default GDPR;
