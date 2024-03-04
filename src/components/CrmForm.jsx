import axios from "axios";
import React, { useEffect, useState } from "react";
import { BaseUrl } from "../ApiEndpoint/api";
import { Formik, Form } from "formik";
import * as Yup from "yup";


const SignupSchema = Yup.object().shape({
  cleaners: Yup.string()
    .required("cleaners are required"),
  bookingtype: Yup.string()
    .required("booking type is required"),
    bookingdate: Yup.string()
    .required("booking date is required"),
    duration: Yup.string()
    .required("duration is required"),
    start_time: Yup.string()
    .required("start time is required"),
});

function CrmForm() {
  const [bookingType, setBookingType] = useState([]);
  // const [bookingValue, setBookingValue] = useState();
  const [duration, setDuration] = useState();
  const [timeSlot, setTimeSlot] = useState();
  //   const [pinCode, setPinCode] = useState("");
  //   const [availableCleaners, setAvailableCleaners] = useState([]);
  //   const [error, setError] = useState(false);
  // const [loading, setLoading] = useState(false);

  // getbookitem api
  const getbookitem = async () => {
    try {
      const res = await axios.get(BaseUrl.cleaninginformation);
      if (res.status === 200 && res.data.status === true) {
        setBookingType(res.data.booking_type);
        setDuration(res.data.duration);
        setTimeSlot(res.data.time_slot);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getbookitem();
  }, []);

  //   form handleSubmit function
  const handleSubmit = () => {
  };

  // handlePinCode function
  //   const handlePinCode = async () => {
  //     if (pinCode.length !== 0 && bookingValue.id.length !== 0) {
  //       setError(false);
  //       setLoading(true);
  //       try {
  //         const res = await axios.post(BaseUrl.availablecleaners, {
  //           pin_code: pinCode,
  //           selected_item_code: bookingValue.id,
  //         });
  //         if (res.status === 200 && res.data.status === true) {
  //           // toast.success("Successfully pincode Send");
  //           alert("Successfully pincode Send");
  //           setAvailableCleaners(res.data.available_cleaners);
  //           setPinCode("");
  //           setLoading(false);
  //         }
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     } else {
  //       // toast.error("Both fields are mandatory")
  //       setError(true);
  //     }
  //   };

  //   handleBookCleaner function
  //   const handleBookCleaner = async (id) => {
  //     setLoading(true);
  //     try {
  //       const res = await axios.post(BaseUrl.bookcleaner, {
  //         cleaner_id: id,
  //       });
  //       if (res.status === 200 && res.data.status === true) {
  //         // toast.success(res.data.message);
  //         alert(res.data.message);
  //         setLoading(false);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  return (
   <div className="booking-form-wrapper">
    <div className="container" style={{maxWidth:'600px'}}>
    <section className="crm-form">
      <Formik
        initialValues={{
          cleaners: "",
          bookingtype: "",
          bookingdate: "",
          duration:"",
          start_time:"",
        }}
        validationSchema={SignupSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched,handleChange,handleBlur,values }) => (
          <Form>
            <div mt={2}>
              <div className="form-group">
                <label
                  htmlFor="Booking Date"
                  className="control-label lable-title"
                >
                  Required Cleaners
                </label>
                <select
                  name="cleaners"
                  value={values.cleaners}
                  className="form-control required"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(touched.cleaners && errors.cleaners)}
                >
                  <option value>test</option>
                  <option value="test">test</option>
                </select>
                
                <p className="help-block text-danger" error>
                  {touched.cleaners && errors.cleaners}
                </p>
               
              </div>
              <div className="form-group">
                <label
                  htmlFor="how-often"
                  className="control-label lable-title"
                >
                  How Often
                </label>
                <select
                  className="form-control required"
                  defaultValue="Booking Type"
                  name="bookingtype"
                  value={values.bookingtype}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(touched.bookingtype && errors.bookingtype)}
                  // value={bookingValue}
                  // onChange={(e) => setBookingValue(e.target.value)}
                >
                  {bookingType &&
                    bookingType.map((data) => (
                      <option key={data.id} value={data.id}>
                        {data.name_type}
                      </option>
                    ))}
                </select>

                <p className="help-block text-danger" error>
                  {touched.bookingtype && errors.bookingtype}
                </p>
              </div>
              <div className="form-group">
                <label
                  htmlFor="Booking Date"
                  className="control-label lable-title"
                >
                  Booking Date
                </label>
                <input
                  type="date"
                  name="bookingdate"
                  value={values.bookingdate}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter Booking Date"
                  className="form-control required"
                  error={Boolean(touched.bookingdate && errors.bookingdate)}
                />
                    <p className="help-block text-danger" error>
                  {touched.bookingdate && errors.bookingdate}
                </p>
              </div>

              {/* <div mt={3} className="form-group">
          <input
            className="required form-control"
            placeholder="Enter pincode"
            fullWidth
            name="pincode"
            value={pinCode}
            onChange={(e) => setPinCode(e.target.value)}
          />
          <div error className="error">
            {error && <>plase enter pin code</>}
          </div>
        </div> */}

              <div className="form-group">
                <label
                  htmlFor="Select Duration"
                  className="control-label lable-title"
                >
                  Select Duration
                </label>
                <select
                  name="duration"
                  value={values.duration}
                  className="form-control required"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(touched.duration && errors.duration)}
                >
                  <option>Select Duration</option>
                  {duration &&
                    duration.map((duration) => (
                      <option key={duration.id} value={duration.hours}>
                        {duration.hours}
                      </option>
                    ))}
                </select>
                <p className="help-block text-danger" error>
                  {touched.duration && errors.duration}
                </p>
              </div>
              <div className="form-group">
                <label
                  htmlFor="Select Start Time"
                  className="control-label lable-title"
                >
                  Select Start Time
                </label>
                <select
                  name="start_time"
                  value={values.start_time}
                  className="form-control required"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(touched.start_time && errors.start_time)}
                >
                  <option value>Select Start Time</option>
                  {timeSlot &&
                    timeSlot.map((timeslot) => (
                      <option key={timeslot.id} value={timeslot.time_bw}>
                        {timeslot.time_bw}
                      </option>
                    ))}
                </select>
                <p className="help-block text-danger" error>
                  {touched.start_time && errors.start_time}
                </p>
              </div>
              <div mt={3} align="center">
                <button
                  type="submit"
                  className="btn btn-custom btn-lg page-scrol"
                  // disabled={loading}
                >
                  Submit
                </button>
              </div>
            </div>

            {/* <div mt={5}>
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
      </div> */}
          </Form>
        )}
      </Formik>
    </section>
    </div>
   </div>
  );
}
export default CrmForm;
