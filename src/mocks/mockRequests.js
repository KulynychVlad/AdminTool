import MockAdapter from 'axios-mock-adapter';

const mocks = [
    {
        path: '/images',
        response: { images: [{ hi: 1 }] },
        method: 'onGet',
    },
];

export default (api) => {
    const mock = new MockAdapter(api);

    mocks.forEach(({ method, response, path }) => mock[method](path).reply(200, response));
};
