"use client";

import { useState } from "react";

export default function VehicleLoanForm() {
  const [loanAmount, setLoanAmount] = useState("");
  const [vehicleCondition, setVehicleCondition] = useState(""); // new or used
  const [hasDeposit, setHasDeposit] = useState(""); // yes or no
  const [usage, setUsage] = useState(""); // personal or business

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      loanAmount,
      vehicleCondition,
      hasDeposit,
      usage,
    };
    console.log("Form data:", data);
    // here you can do further processing like API calls
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 space-y-6">
      <div>
        <label htmlFor="loanAmount" className="block font-medium mb-1">
          What’s the loan amount you’re after?
        </label>
        <input
          type="number"
          id="loanAmount"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
          required
          className="w-full border rounded px-3 py-2"
          placeholder="Enter amount in $"
          min="0"
        />
      </div>

      <div>
        <p className="font-medium mb-1">Is it a new or used vehicle?</p>
        <label className="mr-4">
          <input
            type="radio"
            name="vehicleCondition"
            value="New"
            checked={vehicleCondition === "New"}
            onChange={(e) => setVehicleCondition(e.target.value)}
            required
          />{" "}
          New
        </label>
        <label>
          <input
            type="radio"
            name="vehicleCondition"
            value="Used"
            checked={vehicleCondition === "Used"}
            onChange={(e) => setVehicleCondition(e.target.value)}
          />{" "}
          Used
        </label>
      </div>

      <div>
        <p className="font-medium mb-1">Do you have a deposit?</p>
        <label className="mr-4">
          <input
            type="radio"
            name="hasDeposit"
            value="Yes"
            checked={hasDeposit === "Yes"}
            onChange={(e) => setHasDeposit(e.target.value)}
            required
          />{" "}
          Yes
        </label>
        <label>
          <input
            type="radio"
            name="hasDeposit"
            value="No"
            checked={hasDeposit === "No"}
            onChange={(e) => setHasDeposit(e.target.value)}
          />{" "}
          No
        </label>
      </div>

      <div>
        <p className="font-medium mb-1">Will it be for personal or business use?</p>
        <label className="mr-4">
          <input
            type="radio"
            name="usage"
            value="Personal"
            checked={usage === "Personal"}
            onChange={(e) => setUsage(e.target.value)}
            required
          />{" "}
          Personal
        </label>
        <label>
          <input
            type="radio"
            name="usage"
            value="Business"
            checked={usage === "Business"}
            onChange={(e) => setUsage(e.target.value)}
          />{" "}
          Business
        </label>
      </div>

      <button
        type="submit"
        className="bg-[#d4040a] text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
}
