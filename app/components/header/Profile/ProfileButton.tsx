import { getUserFromCookie } from '@/utils/actions';
import LoggedInUser from './LoggedInUser';
import LoginButton from './LoginButton';

const ProfileButton = async () => {
  const user = await getUserFromCookie();
  return <>{user ? <LoggedInUser user={user} /> : <LoginButton />}</>;
};

export default ProfileButton;
