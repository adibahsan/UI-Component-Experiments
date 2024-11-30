import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Introduction from './components/Introduction';
import { useTheme } from './context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

function App() {
  const { theme, toggleTheme } = useTheme();
  
  const handleSubmit = (descriptions) => {
    console.log("Selected descriptions:", descriptions);
    // Here you would typically navigate to a new page or update the state
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <button
          onClick={toggleTheme}
          className="fixed top-4 right-4 p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
        <Routes>
          <Route path="/" element={<Introduction onSubmit={handleSubmit} />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
