import React, { useEffect } from 'react';
import './App.css';
import { useAction } from 'src/hooks/actionHooks';
import actions from 'src/redux/actions';
import Grid from 'src/layouts/Grid';
import AddImageModal from 'src/components/AddImageModal';
import Page from 'src/layouts/Page';
import Header from 'src/components/Header';
import { useSelector } from 'react-redux';
import { getImagesState } from 'src/redux/selectors/imageSelectors';
import ImageViewModal from 'src/components/ImageViewModal';

const App = () => {
    const getImages = useAction(actions.getImages);

    const images = useSelector(getImagesState);

    useEffect(() => {
        getImages();
    }, []);

    return (
        <Page>
            <Header/>
            <Grid>       
                {[<AddImageModal key='add-image'/>, ...images.map(image => <ImageViewModal key={image.id} image={image}/>)]}
            </Grid>
        </Page>
    );
};

export default App;
