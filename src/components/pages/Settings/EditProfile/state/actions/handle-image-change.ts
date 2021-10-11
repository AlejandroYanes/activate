import { ProfileFormActions } from '../reducer';

export function handleImageChange(dispatch) {
  return (event) => {
    const image = (event.target as HTMLInputElement).files[0];

    if (image) {
      const reader = new FileReader();
      reader.onload = () => {
        dispatch({
          type: ProfileFormActions.LOAD_IMAGE,
          payload: { image, imagePreview: reader.result },
        });
      };

      reader.readAsDataURL(image);
    }
  }
}
