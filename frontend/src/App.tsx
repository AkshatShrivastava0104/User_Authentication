// import { Routes, Route } from 'react-router-dom';
// import { AuthContext } from './Contexts/auth_context';
// import Signup from './components/signup-form';
// import Login from './components/login_form';
// import Home from './components/home';
// import './App.css';

// function App() {
//   return (
//     <AuthContext.Provider value={{ user: null, isAuthenticated: false, token: null, login: () => {}, logout: () => {} }}>
//       <Routes>
//         <Route path="/" element={<Signup />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/home" element={<Home />} />
//       </Routes>
//     </AuthContext.Provider>
//   );
// }

// export default App;



//import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './Contexts/auth_context';
import Login from './components/login_form';
import Signup from './components/signup-form';
import Home from './components/home';
import ProtectedRoute from './route/ProtectedRoute';
import './App.css';

function App() {
  return (
      <AuthProvider>
        <div className="min-h-screen bg-gray-100">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route 
              path="/home" 
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              } 
            />
            <Route path="/" element={<Navigate to="/login" replace />} />
          </Routes>
        </div>
      </AuthProvider>
  );
}

export default App;

