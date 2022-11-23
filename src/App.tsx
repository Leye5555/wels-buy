import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useUserContext } from './utils/context/UserContext';
import ProtectedRoutes from './components/ProtectedRoutes';
import Dashboard from './pages/Dashboard';
import Home from './pages';
export default function App(): JSX.Element {
  const { state } = useUserContext();
  console.log(state);
  const SecureDashboard = ProtectedRoutes(Dashboard, state.loggedIn, '/');
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<SecureDashboard />} />
      </Routes>
    </Router>
  );
}
