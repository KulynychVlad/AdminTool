import React, { useState, useMemo } from 'react';
import { Form, Button } from 'semantic-ui-react';
import './ImageForm.scss';
import PropTypes from 'prop-types';
import ImageUpload from 'src/components/elements/ImageUpload';
import { getSize } from 'src/helpers/localeStorage';
import { useLoadingState } from 'src/hooks/stateHooks';

const ImageForm = ({ afterSubmit, onSubmit, initialValues }) => {
    const [state, setState] = useState(initialValues);
    const [loading, loadingSubmit] = useLoadingState(onSubmit);

    const submitDisabled = useMemo(() => !state.src || (initialValues.src === state.src && state.description === initialValues.description),
        [state, initialValues]);
    
    const handleSubmit = async () => {
        const isImageChanged = initialValues.src !== state.src;

        const data = { ...state };

        if (isImageChanged) data.position = undefined;

        await loadingSubmit(data);
        afterSubmit();
    };
    

    const handleDescriptionChange = e => setState({ ...state, description: e.target.value });
    const handleImageChange = src => setState({ ...state, src });
   

    const getStateSize = () => (getSize(JSON.stringify(state)) / 1024 / 1024).toFixed(3);

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group className='image-form__fields'>
                    <ImageUpload onChange={handleImageChange}/>
                    <Form.Input
                        fluid
                        className='image-form__fields__description'
                        value={state.description}
                        placeholder='Description'
                        onChange={handleDescriptionChange}
                        inline
                    />
                    <Button loading={loading} color='green' type='submit' disabled={submitDisabled} icon='check'/>
                </Form.Group>
                {state.src && (
                    <Form.Field className='image-preview'>
                        <label>{`Preview (${getStateSize()} MB)`}</label>
                        <img src={state.src}/>
                    </Form.Field>
                )}
            </Form>
        </>
    );
};

ImageForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    afterSubmit: PropTypes.func,
    initialValues: PropTypes.object,
};

ImageForm.defaultProps = {
    afterSubmit: () => {},
    initialValues: {},
};

export default ImageForm;
