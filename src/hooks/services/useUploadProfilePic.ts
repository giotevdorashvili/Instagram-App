import {useMutation, useQueryClient} from '@tanstack/react-query';

import {updateUser} from '../../services/crudUser';
import {FIREBASE_AUTH} from '../../services/FirebaseConfig';
import {alert} from '../../utils/generic/utils';
import {
  uploadImageToFirebaseStorage,
  getImageFromFirebaseStorage,
} from '../../utils/services/utils';

const useUploadProfilePic = () => {
  const userId = FIREBASE_AUTH.currentUser?.uid;

  const queryClient = useQueryClient();

  const storageImageName = `images-avatar-${userId}`;

  const mutationData = useMutation({
    mutationFn: (BlobFile: Blob) =>
      uploadImageToFirebaseStorage(storageImageName, BlobFile),

    onSuccess: async () => {
      try {
        const uri = await getImageFromFirebaseStorage(storageImageName);

        await updateUser(userId!, uri);

        queryClient.invalidateQueries({queryKey: [userId]});
      } catch (error) {
        alert(error as string);
      }
    },
  });

  return {...mutationData, uidExists: !!userId};
};

export default useUploadProfilePic;
