import React, { useState, useMemo } from 'react';
import { Form, Button, Input } from 'semantic-ui-react';
import './ImageForm.scss';
import PropTypes from 'prop-types';
import ImageUpload from 'src/components/elements/ImageUpload';
import { useLoadingState } from 'src/hooks/stateHooks';
import Image from 'src/components/elements/Image';

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
    const handleImageUrlChange = e => setState({ ...state, src: e.target.value });
   
    return (
        <>
            <Form onSubmit={handleSubmit}>
                <div className='image-form__fields'>
                    <ImageUpload onChange={handleImageChange}/>
                    <div className='image-form__fields__divider'>OR</div>
                    <Input
                        placeholder='Image URL'
                        className='image-form__fields__input'
                        onChange={handleImageUrlChange}
                        inline
                        fluid
                    />
                </div>
                <div className='image-form__fields'>
                    <Input
                        fluid
                        className='image-form__fields__input'
                        value={state.description}
                        placeholder='Description'
                        onChange={handleDescriptionChange}
                        inline
                    />
                    <Button className='image-form__fields__submit' loading={loading} color='green' type='submit' disabled={submitDisabled} icon='check'/>
                </div>
                
                {state.src && (
                    <Form.Field className='image-preview'>
                        <label>Preview</label>
                        <Image src={state.src}/>
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
