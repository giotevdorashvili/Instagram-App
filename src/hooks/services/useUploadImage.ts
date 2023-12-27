import {useMutation, useQueryClient} from '@tanstack/react-query';

import {
  getImageFromFirebase,
  uploadImageToFirebase,
} from '../../utils/services/utils';
import {updateUser} from '../../services/crudUser';
import {FIREBASE_AUTH} from '../../services/FirebaseConfig';

const useUploadImage = () => {
  const userId = FIREBASE_AUTH.currentUser?.uid;

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (BlobFile: Blob) => uploadImageToFirebase(BlobFile, userId!),

    onSuccess: async () => {
      const uri = await getImageFromFirebase(userId!);

      await updateUser(userId!, uri);

      queryClient.invalidateQueries({queryKey: [userId]});
    },
  });
};

export default useUploadImage;
