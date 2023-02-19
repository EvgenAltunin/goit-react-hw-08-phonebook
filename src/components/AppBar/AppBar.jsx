import { Navigation } from 'components/Navigation/Navigation';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from "hooks";

export const AppBar = () => {
    const {isLoggedIn} = useAuth()
    return (
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
        
        
      </div>
    );
};
