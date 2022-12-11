import {useQuery} from 'react-query';
import {usersServices} from './api';

const useUsers = () => {
  const users = useQuery(['getUsers'], () => usersServices(), {
    enabled: true,
    refetchOnWindowFocus: false,
    retry: 0,
  });

  return {users: users.data};
};

export default useUsers;
