import {useMutation} from '@tanstack/react-query';
import {signUpUser} from '../../services/authentication';

const useSignUpUser = () => {
  return useMutation({
    mutationFn: signUpUser,
  });
};

export default useSignUpUser;
