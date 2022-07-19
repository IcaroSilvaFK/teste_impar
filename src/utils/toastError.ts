import { toast } from 'react-toastify';

export function toastError(message: string) {
  toast.error(message, {
    draggable: true,
    position: 'top-center',
  });
}
