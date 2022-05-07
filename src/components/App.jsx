import { Route, Routes } from 'react-router-dom';
import Container from './Layout';
import { createAsyncView } from 'utils/AsyncViews/';

const RegisterPage = createAsyncView('RegisterPage');
const LoginPage = createAsyncView('LoginPage');
const ContactPage = createAsyncView('ContactPage');

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Container />}>
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="contacts" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}
