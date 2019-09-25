import axios from 'axios';
import config from 'src/api_layer/urls';
import mockAPI from 'src/mocks/mockRequests';

const baseURL = config[`API_HOST_${process.env.NODE_ENV}`];

mockAPI(axios);

export const apiInstance = axios.create({ baseURL });
