// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation"; // Next 13 App Router
// import Link from "next/link";

// export default function LoginPage() {
//   const router = useRouter();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Simple client-side validation
//     if (!email || !password) {
//       setError("Please enter both email and password.");
//       return;
//     }

//     try {
//       // Call your backend login API here
//       const res = await fetch("/api/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         setError(data.message || "Login failed");
//         return;
//       }

//       // Successful login, redirect to homepage or dashboard
//       router.push("/"); // change to /dashboard if you have one
//     } catch (err) {
//       console.error(err);
//       setError("Something went wrong. Please try again.");
//     }
//   };

//   return (
//     <div className="min-h-screen flex justify-center items-center bg-gray-100">
//       <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
//         <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>

//         {error && (
//           <p className="text-red-500 text-center mb-4">{error}</p>
//         )}

//         <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
//           />
//           <button
//             type="submit"
//             className="bg-indigo-700 text-white py-3 rounded hover:bg-indigo-800 transition"
//           >
//             Login
//           </button>
//         </form>

//         <p className="mt-4 text-center text-gray-600">
//           Don't have an account?{" "}
//           <Link href="/signup" className="text-indigo-700 hover:underline">
//             Sign Up
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }

"use client";

import { SignIn } from "@clerk/nextjs";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      
        <SignIn
          path="/login"
          routing="path"
          signUpUrl="/signup"
        />
      
    </div>
  );
}
