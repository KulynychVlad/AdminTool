import { takeLatest, put, call } from 'redux-saga/effects';
import actions from 'src/redux/actions';
import * as requests from 'src/api/requests/images';

export default function* actionWatcher() {
    yield takeLatest(actions.GET_IMAGES, getImagesSaga);
    yield takeLatest(actions.ADD_IMAGE, addImageSaga);
    yield takeLatest(actions.DELETE_IMAGE, deleteImageSaga);
    yield takeLatest(actions.EDIT_IMAGE, editImageSaga);
}

function* getImagesSaga({ resolve, reject }) {
    try {
        const { data } = yield call(requests.getImages);
        yield put(actions.getImagesSuccess({ payload: data }));
        yield call(resolve, data);
    } catch (error) {   
        yield put(actions.getImagesError());
        yield call(reject, error);
    }
}

function* addImageSaga({ payload, resolve, reject }) {
    try {
        const { data } = yield call(requests.addImage, payload);
        yield put(actions.addImageSuccess({ payload: data }));
        yield call(resolve, data);
    } catch (error) {   
        yield put(actions.addImageError());
        yield call(reject, error);
    }
}

function* deleteImageSaga({ payload, resolve, reject }) {
    try {
        yield call(requests.deleteImage, payload);
        yield put(actions.deleteImageSuccess({ payload }));
        yield call(resolve, payload);
    } catch (error) {   
        yield put(actions.deleteImageError());
        yield call(reject, error);
    }
}

function* editImageSaga({ payload, resolve, reject }) {
    try {
        const { data } = yield call(requests.editImage, payload);
        yield put(actions.editImageSuccess({ payload: data }));
        yield call(resolve, data);
    } catch (error) {   
        yield put(actions.editImageError());
        yield call(reject, error);
    }
}
