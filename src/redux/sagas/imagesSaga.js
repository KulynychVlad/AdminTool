import { takeLatest, put, call } from 'redux-saga/effects';
import actions from 'src/redux/actions';
import * as requests from 'src/api_layer/requests/images';

export default function* actionWatcher() {
    yield takeLatest(actions.GET_IMAGES, getImagesSaga);
}

function* getImagesSaga() {
    try {
        const { data } = yield call(requests.getImages);
        yield put(actions.getImagesSuccess({ payload: data.images }));
    } catch (error) {   
        yield put(actions.getImagesError());
    }
}
