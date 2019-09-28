import axios from 'axios';
import config from 'src/api_layer/urls';
import mockAPI from 'src/mocks/mockRequests';

const baseURL = config.API_HOST;

const restdbIoKey = '5d8fb3001ce70f6379855111';

axios.defaults.headers.common['x-apikey'] = restdbIoKey;

mockAPI(axios); //comment to use external api (api does not allow images larger than 200kb)

export const apiInstance = axios.create({ baseURL });
