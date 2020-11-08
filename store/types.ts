export interface IAction {
	type: string,
	payload?: any
}

export interface IImageItem {
	alt: string,
	urlSmall: string,
	color: string,
	userName: string,
	name: string,
	id: string,
	userPic: string,
	igUserName: string,
}

export interface IState {
	imageList: IImageItem[],
	currentInputValue: string,
	searchKey: string,
	currentSearchPage: number,
	imagesToLoad: number,
	hasMoreImage: boolean,
	hasError: boolean,
    errorMessage: string,
    searchTerm: string[],
    hideSearchBar: boolean
}
