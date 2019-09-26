import React, { useEffect } from 'react';
import './App.css';
import { useAction } from 'src/hooks/actionHooks';
import actions from 'src/redux/actions';
import Grid from 'src/layouts/Grid';
import Image from 'src/components/Image';
import AddImage from 'src/components/AddImage';
import Page from 'src/layouts/Page';
import Header from 'src/components/Header';
import { useSelector } from 'react-redux';
import { getImagesState } from 'src/redux/selectors/imageSelectors';

const App = () => {
    const getImages = useAction(actions.getImages);

    const images = useSelector(getImagesState);
    console.log('images: ', images);

    useEffect(() => {
        getImages();
    }, []);

    return (
        <Page>
            <Header/>
            <Grid>       
                {[<AddImage />, ...images.map(({ src }) => <Image src={src}/>)]}
            </Grid>
        </Page>
    );
};

export default App;
