export default function ToolsLoanForm() {
  return (
    <main className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Tool & Equipment Loan Application</h1>
      <form className="space-y-4">
        <div>
          <label className="block font-medium">Full Name</label>
          <input type="text" className="w-full border rounded p-2" />
        </div>
        <div>
          <label className="block font-medium">What tools do you need?</label>
          <textarea rows="3" className="w-full border rounded p-2" />
        </div>
        <button className="bg-red-600 text-white px-4 py-2 rounded">Submit</button>
      </form>
    </main>
  );
}
