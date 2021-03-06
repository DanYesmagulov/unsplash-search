import { IState, IAction } from './types'

const initialState: IState = {
	imageList: [],
	currentInputValue: '',
	searchKey: '',
	currentSearchPage: 1,
	imagesToLoad: 12,
	hasMoreImage: true,
	hasError: false,
	errorMessage: '',
    searchTerm: [],
    hideSearchBar: true,
};

const reducer = (state = initialState, action: IAction) => {
	switch (action.type) {
		case 'PUSH_NEW_IMAGE':
			return {
				...state,
				imageList: [...state.imageList, ...action.payload],
			};

		case 'CLEAR_IMAGE_LIST':
			return { ...state, imageList: [] };

		case 'RESET_CURRENT_SEARCH_PAGE':
			return { ...state, currentSearchPage: 1 };

		case 'INC_CURRENT_SEARCH_PAGE':
			return { ...state, currentSearchPage: state.currentSearchPage + 1 };

		case 'SET_SEARCH_KEY':
			return { ...state, searchKey: action.payload };

		case 'SET_HAS_MORE_IMAGE_FALSE':
			return { ...state, hasMoreImage: false };

		case 'SET_HAS_IMAGE_TRUE':
			return { ...state, hasMoreImage: true };

		case 'SET_HAS_ERROR_TRUE':
			return { ...state, hasError: true };

		case 'SET_HAS_ERROR_FALSE':
			return { ...state, hasError: false };

		case 'SET_ERROR_MESSAGE':
            return { ...state, errorMessage: action.payload };

        case 'ADD_SEARCH_TERM':
            return { ...state, searchTerm: [ ...state.searchTerm, action.payload ] }

        case 'SHOW_SEARCH_BAR':
            return {...state, hideSearchBar: action.payload}

		default:
			return state;
	}
};

export default reducer;