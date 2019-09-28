import React, { useEffect } from 'react';
import { useAction } from 'src/hooks/actionHooks';
import actions from 'src/redux/actions';
import Grid from 'src/components/layouts/Grid';
import AddImageModal from 'src/components/modals/AddImageModal';
import Page from 'src/components/layouts/Page';
import Header from 'src/components/elements/Header';
import { useSelector } from 'react-redux';
import { getImagesState, getImagesLoadingState } from 'src/redux/selectors/imageSelectors';
import ImageViewModal from 'src/components/modals/ImageViewModal';

const App = () => {
    const getImages = useAction(actions.getImages);

    const images = useSelector(getImagesState);
    const loading = useSelector(getImagesLoadingState);

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
