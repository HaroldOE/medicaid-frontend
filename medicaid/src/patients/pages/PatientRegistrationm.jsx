import { useState } from 'react';
import Sidebar from './components/Sidebar';
import AuthLayout from './components/AuthLayout';

function App() {
  const [isAuthPage, setIsAuthPage] = useState(true); // or use route logic

  return (
    <>
      {isAuthPage ? (
        <AuthLayout />
      ) : (
        <div className="flex min-h-screen bg-gray-50">
          <Sidebar />
          <main className="flex-1 p-8">
            {/* Your protected dashboard content */}
          </main>
        </div>
      )}
    </>
  );
}

export default App;