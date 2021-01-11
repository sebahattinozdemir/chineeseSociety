import React, { Component } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import "./Kayıt.css";


// Email validation
const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

// Form validation
const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // Validate form errors being empty
  Object.values(formErrors).forEach((val) => {
    val.length > 0 && (valid = false);
  });

  // Validate the form was filled out
  Object.values(rest).forEach((val) => {
    val === "" && (valid = false);
  });

  return valid;
};

class Kayıt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      birth_date: "",
      birth_place: "",
      address: "",
      cellphone: "",
      expectation: "",
      formErrors: {
        name: "",
        email: "",
        birth_date: "",
        birth_place: "",
        address: "",
        cellphone: "",
        expectation: "",
      },
    };
  }

  toastifySuccess() {
    toast.success("Form sent!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: "submit-feedback success",
    });
  }

  toastifyFail() {
    toast.error("Form failed to send!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: "submit-feedback fail",
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if (formValid(this.state)) {
      // Handle form validation success
      const { name, email, birth_place, birth_date, address, cellphone, expectation  } = this.state;

      // Set template params
      let templateParams = {
        name: name,
        email: email,
        birth_place: birth_place,
        birth_date: birth_date,
        address : address,
        cellphone: cellphone,
        expectation:expectation,

      };

      emailjs.send(
        "china_turkey_association",
        "uyelikKayitFormu",
        templateParams,
        "user_CCgoj5BUHeInwA0gvJZVj"
        
      );

      console.log(`
        --SUBMITTING--
        Name: ${name}
        Email: ${email}
        Birth_Date: ${birth_date}
        Address: ${address}
        Birth_Place:${birth_place}
        Cellphone: ${cellphone}
        Expectation:${expectation}

      `);

      this.toastifySuccess();
      this.resetForm();
    } else {
      // Handle form validation failure
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
      this.toastifyFail();
    }
  };

  // Function to reset form
  resetForm() {
    this.setState({
      name: "",
      email: "",
      birth_place:"",
      birth_date:"",
      cellphone:"",
      address:"",
      expectation:"",
    });
  }

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "name":
        formErrors.name = value.length < 1 ? "Please enter your name." : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "Please enter a valid email address.";
        break;
      case "birth_date":
        formErrors.birth_date = value.length < 1 ? "Please enter a birth date dd/mm/yyyy." : "";
        break;
      case "birth_place":
        formErrors.birth_place = value.length < 1 ? "Please enter a birth place" : "";
        break;
        case "address":
          formErrors.address = value.length < 1 ? "Please enter an address" : "";
          break;
        case "cellphone":
          formErrors.cellphone = value.length < 1 ? "Please enter a cellphone" : "";
          break;
        case "expectation":
          formErrors.expectation = value.length < 1 ? "Please enter a reason for enrollment to association" : "";
          break;
      default:
        break;
    }
    this.setState({ formErrors, [name]: value });
  };

  render() {
    const { formErrors } = this.state;

    return (
      <div>
        <div
          className="col-12"
          style={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#333",
            marginTop:"-1rem",
            
            
            
          }}
        >
          <div className="col-lg-8 col-md-8 col-sm-12 col-12 m-3">
            <p className="kayıt_formu"
              style={{
                display: "flex",
                justifyContent: "center",
                color: "#A4203A",
                padding:"1%",
                fontSize:"x-large",
                
              }}
            >
               会员注册表格
            </p>
            
            <form id="contact-form" style={{marginLeft:"10%",marginRight:"10%"}} onSubmit={this.handleSubmit} noValidate>
              <div className="row" >
                <div className="col-12">
                  <input
                    type="text"
                    name="name"
                    value={this.state.name}
                    className={`form-control formInput ${
                      formErrors.name.length > 0 ? "error" : null
                    }`}
                    onChange={this.handleChange}
                    placeholder="名和姓"
                    noValidate
                  ></input>
                  {formErrors.name.length > 0 && (
                    <span className="errorMessage">{formErrors.name}</span>
                  )}
                </div>
               <br/>
               <br/>
               <div className="col-12">
                  <input
                    type="text"
                    name="birth_place"
                    value={this.state.birth_place}
                    className={`form-control formInput ${
                      formErrors.birth_place.length > 0 ? "error" : null
                    }`}
                    onChange={this.handleChange}
                    placeholder="您的出生地"
                    noValidate
                  ></input>
                  {formErrors.birth_place.length > 0 && (
                    <span className="errorMessage">{formErrors.birth_place}</span>
                  )}
                </div>
               <br/>
               <br/>
               <div className="col-12">
                  <input
                    type="text"
                    name="birth_date"
                    value={this.state.birth_date}
                    className={`form-control formInput ${
                      formErrors.birth_date.length > 0 ? "error" : null
                    }`}
                    onChange={this.handleChange}
                    placeholder="您的出生日期"
                    noValidate
                  ></input>
                  {formErrors.birth_date.length > 0 && (
                    <span className="errorMessage">{formErrors.birth_date}</span>
                  )}
                </div>
               <br/>
               <br/>
               <div className="col-12">
                  <input
                    type="text"
                    name="cellphone"
                    value={this.state.cellphone}
                    className={`form-control formInput ${
                      formErrors.cellphone.length > 0 ? "error" : null
                    }`}
                    onChange={this.handleChange}
                    placeholder="您的手机号码"
                    noValidate
                  ></input>
                  {formErrors.cellphone.length > 0 && (
                    <span className="errorMessage">{formErrors.cellphone}</span>
                  )}
                </div>
               <br/>
               <br/>

                <div className="col-12">
                  <input
                    type="email"
                    name="email"
                    value={this.state.email}
                    className={`form-control formInput ${
                      formErrors.email.length > 0 ? "error" : null
                    }`}
                    onChange={this.handleChange}
                    placeholder="您的电子邮件地址"
                    noValidate
                  ></input>
                  {formErrors.email.length > 0 && (
                    <span className="errorMessage">{formErrors.email}</span>
                  )}
                </div>
                <br/>
                <br/>
                <div className="col-12">
                  <input
                    type="text"
                    name="address"
                    value={this.state.address}
                    className={`form-control formInput ${
                      formErrors.address.length > 0 ? "error" : null
                    }`}
                    onChange={this.handleChange}
                    placeholder="你的地址"
                    noValidate
                  ></input>
                  {formErrors.address.length > 0 && (
                    <span className="errorMessage">{formErrors.address}</span>
                  )}
                </div>
                <br/>
                <br/>

                <div className="col-12">
                  <textarea
                    rows="3"
                    name="expectation"
                    value={this.state.expectation}
                    className={`form-control formInput ${
                      formErrors.expectation.length > 0 ? "error" : null
                    }`}
                    onChange={this.handleChange}
                    placeholder="您在协会注册的目的"
                    noValidate
                  ></textarea>
                  {formErrors.expectation.length > 0 && (
                    <span className="errorMessage">{formErrors.expectation}</span>
                  )}
                </div>
              </div>
              <br/>
              
              <div
                className="col-12"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <div className="col-4">
                  <button
                    className="btn btn-primary"
                    type="submit"
                    style={{ width: "100%",backgroundColor:"#A4203A" }}
                  >
                    <b>寄存器</b>
                  </button>
                </div>
              </div>
              <br/>
            </form>
          </div>

          <ToastContainer />
        </div>
      </div>
    );
  }
}

export default Kayıt;

