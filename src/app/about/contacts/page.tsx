import {UsersWrapper} from '@components/users/UsersWrapper';
import {Users} from '@components/users/Users';

const Contacts = () => {
  return (
    <div>
      <h2 className="text-base font-bold mb-4">Contacts</h2>
      <UsersWrapper>
        <Users />
      </UsersWrapper>
    </div>
  );
};

export default Contacts;
