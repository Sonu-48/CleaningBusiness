import axios from "axios";
import React, { useEffect, useState } from "react";
import { BaseUrl } from "../ApiEndpoint/api";

function AvailableClearners() {

  const [availableCleaners, setAvailableCleaners] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    getbookitem();
  }, []);

  // handlePinCode function
  const handlePinCode = async () => {
    console.log(bookingValue);
    if (pinCode.length !== 0 && bookingValue.id.length !== 0) {
      setError(false);
      setLoading(true);
      try {
        const res = await axios.post(BaseUrl.availablecleaners, {
          pin_code: pinCode,
          selected_item_code: bookingValue.id,
        });
        if (res.status === 200 && res.data.status === true) {
          // toast.success("Successfully pincode Send");
          alert("Successfully pincode Send");
          setAvailableCleaners(res.data.available_cleaners);
          setPinCode("");
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      // toast.error("Both fields are mandatory")
      setError(true);
    }
  };

  //   handleBookCleaner function
  const handleBookCleaner = async (id) => {
    setLoading(true);
    try {
      const res = await axios.post(BaseUrl.bookcleaner, {
        cleaner_id: id,
      });
      if (res.status === 200 && res.data.status === true) {
        // toast.success(res.data.message);
        alert(res.data.message);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section>
      <div mt={5}>
        {availableCleaners &&
          availableCleaners.map((availableCleaners) => (
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <div
                className="available-cleaners-outer-wrapper"
                id={availableCleaners.id}
              >
                <div align="center">
                  <figure src={availableCleaners.avatar} />
                </div>
                <div className="availableCleaners-outer-box">
                  <p color="#fff">ID</p>
                  <p variant="body1">{availableCleaners.id}</p>
                </div>
                <div className="availableCleaners-outer-box">
                  <p variant="body1" color="#fff">
                    FirstName
                  </p>
                  <p variant="body1">{availableCleaners.fname}</p>
                </div>
                <div className="availableCleaners-outer-box">
                  <p variant="body1">Company Name</p>
                  <p variant="body1">{availableCleaners.company_name}</p>
                </div>
                <div className="availableCleaners-outer-box">
                  <p variant="body1">Email</p>
                  <p variant="body1">{availableCleaners.email}</p>
                </div>
                <div className="availableCleaners-outer-box">
                  <p variant="body1">Phone Number</p>
                  <p variant="body1">{availableCleaners.phone_no}</p>
                </div>
                <div mt={2}>
                  <button
                    className="btn btn-custom btn-lg page-scrol"
                    onClick={() => handleBookCleaner(availableCleaners.id)}
                    disabled={loading}
                  >
                    Book Cleaner
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
export default AvailableClearners;
