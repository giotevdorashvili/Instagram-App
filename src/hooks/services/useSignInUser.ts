import {useMutation} from '@tanstack/react-query';
import {signInUser} from '../../services/authentication';

const useSignInUser = () => {
  return useMutation({
    mutationFn: signInUser,
  });
};

export default useSignInUser;
