import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/auth.operations';

export const UserMenu = () => {
  const { user } = useAuth();
 const dispatch = useDispatch();
  
  return (
    <div style={{ display: 'flex' }}>
      <p>{user.email}</p>
      <button type="button" onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
};
