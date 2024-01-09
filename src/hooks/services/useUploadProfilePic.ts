import {useMutation, useQueryClient} from '@tanstack/react-query';

import {
  uploadImageToFirebaseStorage,
  getImageFromFirebaseStorage,
} from '../../utils/services/utils';
import {updateUser} from '../../services/crudUser';
import {FIREBASE_AUTH} from '../../services/FirebaseConfig';

const useUploadProfilePic = () => {
  const userId = FIREBASE_AUTH.currentUser?.uid;

  const queryClient = useQueryClient();

  const storageImageName = `images-avatar-${userId}`;

  const mutationData = useMutation({
    mutationFn: (BlobFile: Blob) =>
      uploadImageToFirebaseStorage(storageImageName, BlobFile),

    onSuccess: async () => {
      const uri = await getImageFromFirebaseStorage(storageImageName);

      await updateUser(userId!, uri);

      queryClient.invalidateQueries({queryKey: [userId]});
    },
  });

  return {...mutationData, uidExists: !!userId};
};

export default useUploadProfilePic;
