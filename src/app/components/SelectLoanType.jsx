import React from 'react';
import { LuHammer, LuTruck, LuDollarSign, LuUser, LuBriefcase } from 'react-icons/lu';

export default function SelectLoanType({ selected, onSelect }) {
  const loans = [
    {
      id: 'tools',
      title: "Tool & Equipment Loans",
      description: "Get the gear you need to do the job right — from power drills to testing kits.",
      icon: <LuHammer className="text-3xl text-white" />,
    },
    {
      id: 'vehicles',
      title: "Vehicle & Ute Finance",
      description: "Finance your next work ute or van with low-doc options and fast approvals.",
      icon: <LuTruck className="text-3xl text-white" />,
    },
    {
      id: 'cashflow',
      title: "Business Cash Flow Loans",
      description: "Stay ahead of bills, wages, and supplier payments when cash is tight.",
      icon: <LuDollarSign className="text-3xl text-white" />,
    },
    {
      id: 'personal',
      title: "Personal Loans for Tradies",
      description: "Need funds for something outside the job? We’ve got you covered there too.",
      icon: <LuUser className="text-3xl text-white" />,
    },
    {
      id: 'startup',
      title: "Start-Up & ABN Loans",
      description: "Just got your ABN? No problem — we work with new sparkies too.",
      icon: <LuBriefcase className="text-3xl text-white" />,
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-center">What type of loan do you want?</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {loans.map((loan) => (
          <button
            key={loan.id}
            onClick={() => onSelect(loan.id)}
            className={`text-left p-6 rounded-xl border-2 transition
              ${selected === loan.id ? 'border-red-600 bg-red-50' : 'border-gray-200 hover:border-red-400'}`}
          >
            <div className="w-12 h-12 flex items-center justify-center bg-red-600 rounded mb-4">
              {loan.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{loan.title}</h3>
            <p className="text-gray-700">{loan.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
