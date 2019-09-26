import { takeLatest, put, call } from 'redux-saga/effects';
import actions from 'src/redux/actions';
import * as requests from 'src/api_layer/requests/images';

export default function* actionWatcher() {
    yield takeLatest(actions.GET_IMAGES, getImagesSaga);
    yield takeLatest(actions.ADD_IMAGE, addImageSaga);
    yield takeLatest(actions.DELETE_IMAGE, deleteImageSaga);
    yield takeLatest(actions.EDIT_IMAGE, editImageSaga);
}

function* getImagesSaga() {
    try {
        const { data } = yield call(requests.getImages);
        yield put(actions.getImagesSuccess({ payload: data }));
    } catch (error) {   
        yield put(actions.getImagesError());
    }
}

function* addImageSaga({ payload }) {
    try {
        const { data } = yield call(requests.addImage, payload);
        yield put(actions.addImageSuccess({ payload: data }));
    } catch (error) {   
        yield put(actions.addImageError());
    }
}

function* deleteImageSaga({ payload }) {
    try {
        yield call(requests.deleteImage, payload);
        yield put(actions.deleteImageSuccess({ payload }));
    } catch (error) {   
        yield put(actions.deleteImageError());
    }
}

function* editImageSaga({ payload }) {
    try {
        const { data } = yield call(requests.editImage, payload);
        yield put(actions.editImageSuccess({ payload: data }));
    } catch (error) {   
        yield put(actions.editImageError());
    }
}
