import Image from 'next/image';

export default function LeadCapture() {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-sky-700 mb-4">Apply for Your Loan</h1>
        <p className="text-gray-600 text-lg">
          Fast approvals. Flexible options. Trusted by hardworking Australians like you.
        </p>

        
      </div>

      <div className="max-w-3xl mx-auto shadow-xl border rounded-xl overflow-hidden">
        <iframe
          src="https://secure.brokerpad.com.au/client/lead-capture/1000030/primary-reason?embed=true"
          title="Loan Application Form"
          width="100%"
          height="800"
          frameBorder="0"
          className="w-full h-[800px]"
          style={{ backgroundColor: 'white' }}
        />
      </div>
    </section>
  );
}
