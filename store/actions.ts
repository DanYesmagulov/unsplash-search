export const getRandomPhotos = () => ({
	type: 'USER_RANDOM_PHOTOS_FETCH_REQUEST',
});

export const requestNextSearchPage = () => ({
	type: 'USER_REQUEST_FETCH_NEXT_SEARCH_PAGE',
});

export const searchSubmit = (searchKey: string) => ({
	type: 'USER_SEARCH_SUBMIT',
	payload: searchKey,
});

export const addSearchTerm = (searchTerm: string) => ({
    type: 'ADD_SEARCH_TERM',
    payload: searchTerm
})

export const hideSearchBarAction = (bool: boolean) => ({
    type: 'SHOW_SEARCH_BAR',
    payload: bool
})