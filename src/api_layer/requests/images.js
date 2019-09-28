import { apiInstance } from 'src/api_layer';
import urls from 'src/api_layer/urls';

export const getImages = () => apiInstance.get(urls.images);
export const addImage = data => apiInstance.post(urls.images, data);
export const deleteImage = data => apiInstance.delete(`${urls.images}/${data._id}`);
export const editImage = data => apiInstance.put(`${urls.images}/${data._id}`, data);
