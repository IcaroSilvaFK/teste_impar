import { useRef, useState } from 'react';

export function useFileReader() {
  const [image, setImage] = useState<string | null>(null);
  const inputFileRef = useRef<any>();

  function convertImageToBase64() {
    if (!inputFileRef.current?.files && !inputFileRef.current.files[0]) return;

    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result as string);
    };
    reader.readAsDataURL(inputFileRef.current.files[0]);
    inputFileRef.current.value = null;
  }

  return {
    image,
    inputFileRef,
    convertImageToBase64,
    setImage,
  };
}
