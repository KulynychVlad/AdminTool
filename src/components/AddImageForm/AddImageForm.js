import React, { useState, useRef } from 'react';
import { Form, Button } from 'semantic-ui-react';
import './AddImageForm.scss';
import actions from 'src/redux/actions';
import { useAction } from 'src/hooks/actionHooks';

const AddImageForm = () => {
    const [image, setImage] = useState(null);
    const [description, setDescription] = useState(null);

    const addImage = useAction(actions.addImage);

    const setImageDataUrl = (e) => {
        const reader = new FileReader();
        reader.addEventListener("load", () => {
            setImage(reader.result);
        }, false);
        reader.readAsDataURL(e.target.files[0]);
    };

    const onSubmit = () => {
        const data = {
            src: image,
            description,
        };
        addImage(data);
    };


    return (
        <Form className='form--add-image' onSubmit={onSubmit}>
            <Form.Field>
                <label>Image</label>
                <input type='file' placeholder='Image' onChange={setImageDataUrl} />
            </Form.Field>
            <Form.Field>
                <label>Description</label>
                <input placeholder='Description' onChange={e => setDescription(e.target.value)}/>
            </Form.Field>
            {image && (
                <Form.Field>
                    <label>Preview</label>
                    <img src={image}/>
                </Form.Field>
            )}
            <Button type='submit'>Submit</Button>
        </Form>
    );
};

AddImageForm.propTypes = {

};

export default AddImageForm;
