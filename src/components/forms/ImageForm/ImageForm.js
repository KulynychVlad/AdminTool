import React, { useState, useMemo } from 'react';
import { Form, Button } from 'semantic-ui-react';
import './ImageForm.scss';
import PropTypes from 'prop-types';
import { getImageDataUrl } from 'src/helpers/image';

const ImageForm = ({ afterSubmit, onSubmit, initialValues }) => {
    const [src, setImage] = useState(initialValues.src);
    const [description, setDescription] = useState(initialValues.description);

    const submitDisabled = useMemo(() => !src || (initialValues.src === src && description === initialValues.description),
        [src, description, initialValues]);

    const onImageChange = e => getImageDataUrl(e, setImage);
    const onDescriptionChange = e => setDescription(e.target.value);

    const handleSubmit = () => {
        const isImageChanged = initialValues.src !== src;

        const data = { ...initialValues, src, description };

        if (isImageChanged) data.position = undefined;

        onSubmit(data);
        afterSubmit();
    };

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Field>
                    <label>Image</label>
                    <input type='file' placeholder='Image' accept="image/*" onChange={onImageChange} />
                </Form.Field>
                <Form.Field>
                    <label>Description</label>
                    <input value={description} placeholder='Description' onChange={onDescriptionChange}/>
                </Form.Field>
                <Button primary type='submit' disabled={submitDisabled}>Submit</Button>
                {src && (
                    <Form.Field className='image-preview'>
                        <label>Preview</label>
                        <img src={src}/>
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
