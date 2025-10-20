import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    number: "",
    location: "",
    size: "",
    stage: "",
    buyTimeline: "",
    budget: "",
    requirements: "",
  });
  const [errors, setErrors] = useState({});

  const steps = ["Step 1", "Step 2", "Step 3"]; // for progress bar
  const totalSteps = steps.length;

  // Validation function for current step
  const validateStep = () => {
    const stepErrors = {};
    if (currentStep === 0) {
      if (!formData.fullName.trim())
        stepErrors.fullName = "Full Name is required";
      if (!formData.email.trim()) {
        stepErrors.email = "Email is required";
      } else if (!/^\S+@\S+\.\S+$/.test(formData.email.trim())) {
        stepErrors.email = "Enter a valid email";
      }
      if (!formData.number.trim()) {
        stepErrors.number = "Phone number is required";
      } else if (!/^\d{11}$/.test(formData.number.trim())) {
        stepErrors.number = "Phone must be numeric and exactly 11 digits";
      }
    }

    if (currentStep === 1) {
      if (!formData.location.trim())
        stepErrors.location = "Location is required";
      if (!formData.size) stepErrors.size = "Select a size";
      if (!formData.stage) stepErrors.stage = "Select construction stage";
    }

    if (currentStep === 2) {
      if (!formData.buyTimeline) stepErrors.buyTimeline = "Select timeline";
      if (!formData.budget) stepErrors.budget = "Select budget";
      if (!formData.requirements)
        stepErrors.requirements = "Select a requirement";
    }

    setErrors(stepErrors);
    return Object.keys(stepErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep() && currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
      setErrors({});
    }
  };

  const prevStep = () => setCurrentStep(currentStep - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep()) {
      console.log("Form Submitted:", formData);
      alert("Form submitted successfully!");

      // Reset form data
      setFormData({
        fullName: "",
        email: "",
        number: "",
        location: "",
        size: "",
        stage: "",
        buyTimeline: "",
        budget: "",
        requirements: "",
      });

      // Reset step and errors
      setCurrentStep(0);
      setErrors({});
    }
  };

  // small input/select classes + validation class
  const getInputClass = (field) =>
    `form-control form-control-sm ${errors[field] ? "is-invalid" : ""}`;
  const getSelectClass = (field) =>
    `form-select form-select-sm ${errors[field] ? "is-invalid" : ""}`;

  return (
    <div className="d-flex justify-content-center ">
      {/* compact input sizing tweaks */}
      <style>{`
        /* Make inputs compact: smaller height, padding, font-size */
        .form-control-sm, .form-select-sm {
          height: 40px;            /* smaller height */
          padding: 6px 10px;      /* tighter padding */
          font-size: 0.92rem;     /* slightly smaller font */
          border-radius: 8px;     /* rounded corners */
        }

        /* smaller textarea-like controls if any in future */
        textarea.form-control-sm { height: 80px; padding: 8px 10px; }

        /* tighten label spacing */
        .form-label { margin-bottom: 6px; font-size: 0.95rem; }

        /* reduce gap between rows */
        .mb-3 { margin-bottom: 10px !important; }

        /* keep bootstrap invalid feedback visible but slightly smaller */
        .invalid-feedback { font-size: 0.85rem; }

        /* make radio and check spacing slightly tighter */
        .form-check { margin-bottom: 6px; }
        .form-check-label { font-size: 0.94rem; margin-left: 8px; }

        /* if you want selects to show compact option height on some browsers */
        select.form-select-sm option { padding: 6px 10px; }

        /* optional: keep buttons same but slightly smaller on mobile */
        @media (max-width: 480px) {
          .form-control-sm, .form-select-sm { height: 38px; font-size: 0.9rem; }
        }
      `}</style>

      <div
        className="card py-4 mt-2 px-3 w-100"
        style={{ maxWidth: "600px", minWidth: "400px" }}
      >
        <div className="">
          {/* 3-Slab Rounded Progress Bar */}
          <div className="d-flex mb-4" style={{ height: "12px", gap: "4px" }}>
            {steps.map((_, index) => (
              <div
                key={index}
                className={currentStep >= index ? "bg-extra" : "bg-light"}
                style={{
                  flex: 1,
                  borderRadius:
                    index === 0
                      ? "8px 0 0 8px"
                      : index === steps.length - 1
                      ? "0 8px 8px 0"
                      : "0",
                  transition: "background-color 0.3s",
                }}
              ></div>
            ))}
          </div>
          {/* Step Titles and Step count */}
          {currentStep === 0 && (
            <div className="text-start">
              <h3>Basic Information</h3>
              <h5>Step 1 of 3</h5>
            </div>
          )}

          {currentStep === 1 && (
            <div className="text-start">
              <h3>Project Details</h3>
              <h5>Step 2 of 3</h5>
            </div>
          )}

          {currentStep === 2 && (
            <div className="text-start">
              <h3>Purchase Intent</h3>
              <h5>Step 3 of 3</h5>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="text-start">
            {/* Step 1 */}
            {currentStep === 0 && (
              <>
                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className={getInputClass("fullName")}
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                  />
                  {errors.fullName && (
                    <div className="invalid-feedback">{errors.fullName}</div>
                  )}
                </div>

                <div className="mb-3">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    className={getInputClass("email")}
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>

                <div className="mb-3">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="text"
                    placeholder="01700-000000"
                    className={getInputClass("number")}
                    value={formData.number}
                    onChange={(e) =>
                      setFormData({ ...formData, number: e.target.value })
                    }
                  />
                  {errors.number && (
                    <div className="invalid-feedback">{errors.number}</div>
                  )}
                </div>
              </>
            )}

            {/* Step 2 */}
            {currentStep === 1 && (
              <>
                <div className="mb-3">
                  <label className="form-label">
                    Property Location (City/Area)
                  </label>
                  <input
                    type="text"
                    placeholder="Dhaka"
                    className={getInputClass("location")}
                    value={formData.location}
                    onChange={(e) =>
                      setFormData({ ...formData, location: e.target.value })
                    }
                  />
                  {errors.location && (
                    <div className="invalid-feedback">{errors.location}</div>
                  )}
                </div>

                <div className="mb-3">
                  <label className="form-label">Flat/Home Size</label>
                  <select
                    className={getSelectClass("size")}
                    value={formData.size}
                    onChange={(e) =>
                      setFormData({ ...formData, size: e.target.value })
                    }
                  >
                    <option value="">Select size</option>
                    <option value="<1000 sq.ft">&lt;1000 sq.ft</option>
                    <option value="1000-1500 sq.ft">1000-1500 sq.ft</option>
                    <option value="1500-2000 sq.ft">1500-2000 sq.ft</option>
                    <option value="2000-3000 sq.ft">2000-3000 sq.ft</option>
                    <option value="3000+ sq.ft">3000+ sq.ft</option>
                  </select>
                  {errors.size && (
                    <div className="invalid-feedback">{errors.size}</div>
                  )}
                </div>

                <div className="mb-3">
                  <label className="form-label">Construction Stage</label>
                  <select
                    className={getSelectClass("stage")}
                    value={formData.stage}
                    onChange={(e) =>
                      setFormData({ ...formData, stage: e.target.value })
                    }
                  >
                    <option value="">Select stage</option>
                    <option value="planning stage">Planning Stage</option>
                    <option value="foundation done">Foundation Done</option>
                    <option value="structure ready">Structure Ready</option>
                    <option value="finishing stage">Finishing Stage</option>
                    <option value="ready to install">Ready to Install</option>
                  </select>
                  {errors.stage && (
                    <div className="invalid-feedback">{errors.stage}</div>
                  )}
                </div>
              </>
            )}

            {/* Step 3 */}
            {currentStep === 2 && (
              <>
                <div className="mb-3">
                  <label className="form-label">
                    When do you plan to buy fittings?
                  </label>
                  <select
                    className={getSelectClass("buyTimeline")}
                    value={formData.buyTimeline}
                    onChange={(e) =>
                      setFormData({ ...formData, buyTimeline: e.target.value })
                    }
                  >
                    <option value="">Select timeline</option>
                    <option value="within 1 month">Within 1 month</option>
                    <option value="1-3 months">1-3 months</option>
                    <option value="3-6 months">3-6 months</option>
                    <option value="6-12 months">6-12 months</option>
                    <option value="just researching">Just researching</option>
                  </select>
                  {errors.buyTimeline && (
                    <div className="invalid-feedback">{errors.buyTimeline}</div>
                  )}
                </div>

                <div className="mb-3">
                  <label className="form-label">Estimated Budget Range</label>
                  <select
                    className={getSelectClass("budget")}
                    value={formData.budget}
                    onChange={(e) =>
                      setFormData({ ...formData, budget: e.target.value })
                    }
                  >
                    <option value="">Select budget</option>
                    <option value="2-5 Lakhs">৳2-5 Lakhs</option>
                    <option value="5-10 Lakhs">৳5-10 Lakhs</option>
                    <option value="10-20 Lakhs">৳10-20 Lakhs</option>
                    <option value="20+ Lakhs">৳20+ Lakhs</option>
                  </select>
                  {errors.budget && (
                    <div className="invalid-feedback">{errors.budget}</div>
                  )}
                </div>

                <div className="mb-3">
                  <label className="form-label">Specific Requirements</label>
                  <div>
                    {["kitchen fittings", "bathroom fittings", "both"].map(
                      (value) => (
                        <div className="form-check" key={value}>
                          <input
                            type="radio"
                            id={value}
                            name="requirements"
                            value={value}
                            className="form-check-input"
                            checked={formData.requirements === value}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                requirements: e.target.value,
                              })
                            }
                            required
                          />
                          <label htmlFor={value} className="form-check-label">
                            {value.charAt(0).toUpperCase() + value.slice(1)}
                          </label>
                        </div>
                      )
                    )}
                    {errors.requirements && (
                      <div className="text-danger mt-1">
                        {errors.requirements}
                      </div>
                    )}
                  </div>
                </div>
              </>
            )}

            {/* Navigation Buttons */}
            <div className="d-flex flex-wrap justify-content-between mt-4 gap-2">
              {currentStep > 0 && (
                <button
                  type="button"
                  className="btn btn-secondary flex-grow-1 flex-sm-grow-0"
                  onClick={prevStep}
                >
                  <FontAwesomeIcon icon={faArrowLeft} className="me-2" />
                  Previous
                </button>
              )}

              <button
                type={currentStep === totalSteps - 1 ? "submit" : "button"}
                className={`btn ${
                  currentStep === totalSteps - 1
                    ? " bg-extra"
                    : "btn-primary bg-extra"
                } ${
                  currentStep === 0 ? "w-100" : "flex-grow-1 flex-sm-grow-0"
                }`}
                onClick={currentStep === totalSteps - 1 ? undefined : nextStep}
              >
                {currentStep < totalSteps - 1 ? (
                  <>
                    Next{" "}
                    <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
                  </>
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;
