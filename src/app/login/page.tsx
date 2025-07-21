// src/app/login/page.tsx
export default function LoginPage() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Log In</h1>
      <div className="max-w-md bg-white p-6 rounded-lg shadow">
        <label className="block mb-2 font-medium" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          className="w-full mb-4 px-4 py-2 border border-gray-200 rounded focus:ring-2 focus:ring-blue-500"
        />

        <label className="block mb-2 font-medium" htmlFor="password">
          Password
        </label>
        <input
          id="password"
          type="password"
          className="w-full mb-6 px-4 py-2 border border-gray-200 rounded focus:ring-2 focus:ring-blue-500"
        />

        <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Sign In
        </button>
      </div>
    </>
  );
}