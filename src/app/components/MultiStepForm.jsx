'use client';

import React, { useState } from 'react';
import SelectLoanType from './SelectLoanType';

import PersonalDetailsForm from './PersonalDetailsForm';
import VehicleLoanForm from './VehicleLoanForm';

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    loanType: '',
    // other form fields can go here
  });

  const next = () => setStep((prev) => prev + 1);
  const back = () => setStep((prev) => prev - 1);

  const handleLoanTypeSelect = (id) => {
    setFormData({ ...formData, loanType: id });
    next();
  };

  const handleSubmit = async () => {
  try {
    const response = await fetch('/api/submit-loan', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      const result = await response.json();
      console.log("Success:", result);
      alert("Form submitted successfully!");
    } else {
      console.error("Submission failed");
      alert("Something went wrong. Please try again.");
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    alert("There was a network error.");
  }
};


  return (
    <section className="py-20">
  <h2 className="text-4xl font-bold text-center mb-6">Apply for your Loan</h2>

  <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-md">
    {step === 1 && (
      <SelectLoanType selected={formData.loanType} onSelect={handleLoanTypeSelect} />
    )}

    {step === 2 && (
      <PersonalDetailsForm
        formData={formData}
        setFormData={setFormData}
        onNext={next}
      />
    )}

    {step === 3 && (
      <VehicleLoanForm
        onBack={back}
        onSubmit={handleSubmit}
      />
    )}
  </div>
</section>

  );
}
