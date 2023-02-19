import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from "components/Layout";

import 'react-toastify/dist/ReactToastify.css';


const HomePage = lazy(() => import('../pages/Home/Home'));
const RegisterPage = lazy(() => import('../pages/Register/Register'));
const LoginPage = lazy(() => import('../pages/Login/Login'));
const PhonebookPage = lazy(() => import('../pages/Phonebook/Phonebook'));

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<PhonebookPage />} />
      </Route>
    </Routes>
  );
}
