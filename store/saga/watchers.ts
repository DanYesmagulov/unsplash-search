import { takeEvery } from 'redux-saga/effects';
import {fetchRandomPhotos, userSearchSubmit, requestNextSearchPage} from './workers';

export function* watchFetchRandomPhotos() {
	yield takeEvery(
		'USER_RANDOM_PHOTOS_FETCH_REQUEST',
		fetchRandomPhotos
	);
}

export function* watchUserRequestNextSearchPage() {
	yield takeEvery(
		'USER_REQUEST_FETCH_NEXT_SEARCH_PAGE',
		requestNextSearchPage
	);
}

export function* watchUserSearchSubmit() {
	yield takeEvery('USER_SEARCH_SUBMIT', userSearchSubmit);
}