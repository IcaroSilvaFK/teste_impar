import { toast } from 'react-toastify';

export function toastSucces(message: string) {
  toast.success(message, {
    draggable: true,
    position: 'top-center',
  });
}
