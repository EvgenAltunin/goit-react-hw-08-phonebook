import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/auth.operations';

import { Wrapper, LogoutBtn, Text } from 'components/UserMenu/UserMenu.styled';

export const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Text>{user.email}</Text>
      <LogoutBtn type="button" onClick={() => dispatch(logout())}>
        Log Out
      </LogoutBtn>
    </Wrapper>
  );
};
