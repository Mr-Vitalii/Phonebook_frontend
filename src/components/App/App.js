import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '../Layout/Layout';
import { PrivateRoute } from 'components/routes/PrivateRoute';
import { RestrictedRoute } from 'components/routes/RestrictedRoute';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';


const HomePage = lazy(() => import('../../pages/HomePage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage')); 


export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
 
  return isRefreshing ? (
      <b>Refreshing user...</b>
    ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
      
        <Route index element={<HomePage />} />
        <Route
          path="/register"
            element={<RestrictedRoute component={<RegisterPage/>} redirectTo="/contacts" />} />
        <Route
          path="/login"
            element={<RestrictedRoute component={<LoginPage/>} redirectTo="/contacts"/>} />
        <Route
          path="/contacts"
            element={<PrivateRoute component={<ContactsPage />} redirectTo="/login" />} />
      </Route>
    </Routes>
    );
}
