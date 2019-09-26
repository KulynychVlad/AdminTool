import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
import './AddImageForm.scss';
import PropTypes from 'prop-types';

const AddImageForm = ({ afterSubmit, onSubmit, initialValues }) => {
    const [src, setImage] = useState(initialValues.src);
    const [description, setDescription] = useState(initialValues.description);

    const setImageDataUrl = (e) => {
        const reader = new FileReader();
        reader.addEventListener("load", () => {
            setImage(reader.result);
        }, false);
        reader.readAsDataURL(e.target.files[0]);
    };

    const handleSubmit = () => {
        const data = {
            ...initialValues,
            src,
            position: initialValues.src !== src ? undefined : initialValues.position,
            description,
        };
        onSubmit(data);
        afterSubmit();
    };

    const isDisabled = () => initialValues.src === src && description === initialValues.description;

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Field>
                    <label>Image</label>
                    <input type='file' placeholder='Image' accept="image/*" onChange={setImageDataUrl} />
                </Form.Field>
                <Form.Field>
                    <label>Description</label>
                    <input value={description} placeholder='Description' onChange={e => setDescription(e.target.value)}/>
                </Form.Field>
                <Button primary type='submit' disabled={isDisabled()}>Submit</Button>
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

AddImageForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    afterSubmit: PropTypes.func,
    initialValues: PropTypes.object,
};

AddImageForm.defaultProps = {
    afterSubmit: () => {},
    initialValues: {},
};

export default AddImageForm;
