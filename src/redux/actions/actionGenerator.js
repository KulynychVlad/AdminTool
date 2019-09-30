import flatten from 'lodash.flatten';
import camelCase from 'lodash.camelcase';

const actionTemplate = type => payload => ({
    type, 
    ...payload,
});

export const actionCreator = (constant) => {
    const successConstant = `${constant}_SUCCESS`;
    const errorConstant = `${constant}_ERROR`;

    const action = camelCase(constant);
    const successAction = camelCase(successConstant);
    const errorAction = camelCase(errorConstant);

    return {
        [constant]: constant,
        [successConstant]: successConstant,
        [errorConstant]: errorConstant,
        [action]: actionTemplate(constant),
        [successAction]: actionTemplate(successConstant),
        [errorAction]: actionTemplate(errorConstant),
    };
};

export const actionGenerator = actions => Object.assign({}, ...actions.map(actionCreator));

export const generateActions = collection => actionGenerator(flatten(Object.values(collection)));
