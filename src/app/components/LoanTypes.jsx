import React from 'react';
import { LuHammer, LuTruck, LuDollarSign, LuUser, LuBriefcase } from 'react-icons/lu';

export default function LoanTypes() {
  const iconClass = "text-3xl text-white";
  const iconWrapper = "w-12 h-12 flex items-center justify-center bg-red-600 rounded mb-4";

  const loans = [
    {
      title: "Tool & Equipment Loans",
      description: "Get the gear you need to do the job right — from power drills to testing kits.",
      icon: <div className={iconWrapper}><LuHammer className={iconClass} /></div>,
    },
    {
      title: "Vehicle & Ute Finance",
      description: "Finance your next work ute or van with low-doc options and fast approvals.",
      icon: <div className={iconWrapper}><LuTruck className={iconClass} /></div>,
    },
    {
      title: "Business Cash Flow Loans",
      description: "Stay ahead of bills, wages, and supplier payments when cash is tight.",
      icon: <div className={iconWrapper}><LuDollarSign className={iconClass} /></div>,
    },
    {
      title: "Personal Loans for Tradies",
      description: "Need funds for something outside the job? We’ve got you covered there too.",
      icon: <div className={iconWrapper}><LuUser className={iconClass} /></div>,
    },
    {
      title: "Start-Up & ABN Loans",
      description: "Just got your ABN? No problem — we work with new sparkies too.",
      icon: <div className={iconWrapper}><LuBriefcase className={iconClass} /></div>,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Loan Solutions Made for Sparkies</h2>
        <p className="text-gray-600 mb-12">
          Whether you're just starting out or ready to grow, we've got the right loan for the job.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loans.map((loan, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-md text-left">
              {loan.icon}
              <h3 className="text-xl font-semibold  mb-2">{loan.title}</h3>
              <p className="text-gray-700">{loan.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
