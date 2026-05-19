import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import AddPropertyPage from './pages/AddPropertyPage';
import PropertyVerificationPage from './pages/PropertyVerificationPage';
import AdminPanelPage from './pages/AdminPanelPage';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<LoginPage signup />} />
      <Route path="/verification" element={<PropertyVerificationPage />} />
      <Route path="/dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
      <Route path="/properties/new" element={<ProtectedRoute><AddPropertyPage /></ProtectedRoute>} />
      <Route path="/admin" element={<ProtectedRoute admin><AdminPanelPage /></ProtectedRoute>} />
    </Routes>
  </BrowserRouter>
);

export default App;
