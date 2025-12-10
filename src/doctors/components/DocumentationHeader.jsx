// src/components/DocumentationHeader.jsx
export default function DocumentationHeader() {
  return (
    <div className="mb-8">
      <a
        href="#"
        className="text-sm text-gray-600 hover:underline mb-3 inline-block"
      >
        Back to Dashboard
      </a>
      <h1 className="text-3xl font-bold text-gray-900">
        Doctor Platform Guide
      </h1>
      <p className="text-gray-600 mt-1">
        Welcome to the Doctor Portal – your all-in-one platform for managing
        patient care
      </p>
    </div>
  );
}
