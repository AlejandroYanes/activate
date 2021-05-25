import { AvatarOptions } from '../types';

export function handleAvatarChange(fileInputRef) {
  return (value, setFields) => {
    if (value === AvatarOptions.ADD) {
      fileInputRef.current.click();
    } else {
      setFields({ avatar: value });
    }
  };
}
