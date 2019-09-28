import MockAdapter from 'axios-mock-adapter';
import { getImages, addImage, deleteImage } from 'src/storage/imageStorage';
import generateId from 'src/helpers/generateId';
import { editImage } from '../storage/imageStorage';

const mocks = [
    {
        path: '/images',
        callback: () => [200, getImages().map(JSON.parse)],
        method: 'onGet',
    },
    {
        path: '/images',
        callback: (config) => {
            const image = JSON.stringify({ ...JSON.parse(config.data), id: generateId() });
            addImage(image);
            return [201, image];
        },
        method: 'onPost',
    },
    {
        path: '/images',
        callback: (config) => {
            editImage(config.data);
            return [200, config.data];
        },
        method: 'onPut',
    },
    {
        path: '/images',
        callback: (config) => {
            deleteImage(config.params);
            return [204];
        },
        method: 'onDelete',
    },
];

export default (api) => {
    const mock = new MockAdapter(api, { delayResponse: 300 });

    mocks.forEach(({ method, path, callback }) => mock[method](path).reply(callback));
};
