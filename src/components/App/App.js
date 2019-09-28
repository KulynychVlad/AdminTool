import React, { useEffect } from 'react';
import { useLoadingAction } from 'src/hooks/actionHooks';
import actions from 'src/redux/actions';
import Grid from 'src/components/layouts/Grid';
import AddImageModal from 'src/components/modals/AddImageModal';
import Page from 'src/components/layouts/Page';
import Header from 'src/components/elements/Header';
import { useSelector } from 'react-redux';
import { getImagesState } from 'src/redux/selectors/imageSelectors';
import ImageViewModal from 'src/components/modals/ImageViewModal';

import { Loader } from 'semantic-ui-react';

const App = () => {
    const [loading, getImageLoading] = useLoadingAction(actions.getImages, true);

    const images = useSelector(getImagesState);

    useEffect(() => {
        getImageLoading();
    }, []);

    return (
        <Page>
            <Header/>
            {loading ? (
                <Loader active content='Loading...' />) 
                : (
                    <Grid>       
                        {[<AddImageModal key='add-image'/>, ...images.map(image => <ImageViewModal key={image._id} image={image}/>)]}
                    </Grid>
                )}
        </Page>
    );
};

export default App;
