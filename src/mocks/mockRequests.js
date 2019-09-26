import MockAdapter from 'axios-mock-adapter';
import { getImages, addImage } from 'src/storage/imageStorage';

const mocks = [
    {
        path: '/images',
        callback: () => [200, { images: getImages().map(JSON.parse) }],
        method: 'onGet',
    },
    {
        path: '/images',
        callback: (config) => {
            addImage(config.data);
            return [200, config.data];
        },
        method: 'onPost',
    },
];

export default (api) => {
    const mock = new MockAdapter(api);

    mocks.forEach(({ method, path, callback }) => mock[method](path).reply(callback));
};
