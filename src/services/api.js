import { getApi } from './apiClient';
import { apiUrls } from 'core/constant/urls';

export const addUserData = async () => {
  try {
    const url = apiUrls.user.list;
    const response = await getApi(url);
    return response?.data;
  } catch (error) {
    console.log('error');
  }
};
