import MockAdapter from 'axios-mock-adapter';

const mocks = [
    {
        path: '/images',
        callback: () => [200, { images: [{ hi: 1 }] }],
        method: 'onGet',
    },
    {
        path: '/images',
        callback: config => [200, config.data],
        method: 'onPost',
    },
];

export default (api) => {
    const mock = new MockAdapter(api);

    mocks.forEach(({ method, path, callback }) => mock[method](path).reply(callback));
};
