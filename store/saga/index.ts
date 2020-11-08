import {all} from 'redux-saga/effects'
import {watchFetchRandomPhotos, watchUserRequestNextSearchPage, watchUserSearchSubmit} from './watchers';

export default function* rootSaga() {
    yield all([
    watchFetchRandomPhotos(),
    watchUserRequestNextSearchPage(),
    watchUserSearchSubmit(),
    ])
}