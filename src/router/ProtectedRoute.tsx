import { Navigate, Route } from 'react-router-dom';
import { User } from '../types/User.types';

type Props = {
  user: User | null;
  children: JSX.Element;
  path: string;
};

const ProtectedRoute = ({ user, children, path }: Props) => {
  if (!user) {
    return <Navigate to="/landing" replace />;
  }

  return <Route path={path} element={children} />;
};

export default ProtectedRoute;
