import { AxiosError } from 'axios';
import router from '@/router';

export function HandleAxiosRequestErrors(resource: string, error: AxiosError) {
  if (error && error.response && error.response.status === 404) {
    router.push({ name: 'NotFoundResource', params: { resource } });
  } else {
    router.push({ name: 'NetworkError' });
  }
}
