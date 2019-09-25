import { apiInstance } from 'src/api_layer';
import urls from 'src/api_layer/urls';

export const getImages = () => apiInstance.get(urls.images);
