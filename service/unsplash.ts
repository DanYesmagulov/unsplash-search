import { IImageItem } from './../store/types';
import Unsplash, { toJson } from 'unsplash-js';

export interface IImageItemUntransformed {
	alt_description: string;
	color: string;
	id: string;
	urls: {
		small: string;
		raw: string;
		regular: string;
	};
	liked_by_user: boolean;
	user: {
		name: string;
		username: string;
		instagram_username: string;
		profile_image: {
			medium: string
		}
	};
	tags: any[]
}

export interface ISinglePhotoData {
	id: string;
	name: string;
	userName: string;
	igUserName: string;
	userPic: string;
	alt: string;
	rawUrl: string;
	regUrl: string;
	likedByUser: boolean;
	tags: any[]
}

export interface ISearchSubmitArgTuple extends Array<number | string> {
	0: string;
	1: number;
	2: number;
	length: 3;
}

export default class UnsplashService extends Unsplash {
	constructor() {
		super({
			accessKey: 'CbMxo4GB7876dwJ-anahFXVPA_Zs4s8doGF0W7onG48',
			secret: '6WDcPGJEAIHsqXtZVrvGHetARk3j7FoSSdcwHGZJALU',
			callbackUrl: 'urn:ietf:wg:oauth:2.0:oob'
		});
	}

	getPhotoById = async (id: string): Promise<ISinglePhotoData> => {
		const res = await this.getResource(this.photos.getPhoto, id)
		return this.transformSinglePhotoData(res)
	}

	likePhotoById = async (id: string): Promise<IImageItem> => {
		const res = await this.getResource(this.photos.likePhoto, id)
		return this.transformData(res)
	}

	unlikePhotoById = async (id: string): Promise<IImageItem> => {
		const res = await this.getResource(this.photos.unlikePhoto, id)
		return this.transformData(res)
	}

	getUsersLikedPhotos = async (): Promise<IImageItem[]> => {
		const res = await this.getResource(this.users.likes, "danny651", 1, 12, "latest")
		return res.map((data: any) => {
			return this.transformData(data);
		})
	}

	getRandomPhotos = async (count: number): Promise<IImageItem[]> => {
		const res = await this.getResource(this.photos.getRandomPhoto, {
			count,
		});
		return res.map((data: any) => {
			return this.transformData(data);
		});
	};

	searchPhotos = async (
		...args: ISearchSubmitArgTuple
	): Promise<IImageItem[]> => {
		const response = await this.getResource(this.search.photos, ...args);
		return response.results.map((data: any) => {
			return this.transformData(data);
		});
	};

	private getResource = async (method: any, ...args: any) => {
		const res = await method(...args);

		if (!res.ok) {
			throw new Error(`Could not fetch, received ${res.status}`);
		}

		return toJson(res);
	};

	private transformData(data: IImageItemUntransformed): IImageItem {
		return {
			alt: data.alt_description,
			color: data.color,
			id: data.id,
			urlSmall: data.urls.small,
			name: data.user.name,
			userName: data.user.username,
			igUserName: data.user.instagram_username,
			userPic: data.user.profile_image.medium,
		};
	};

	private transformSinglePhotoData(data: IImageItemUntransformed): ISinglePhotoData {
		return {
			id: data.id,
			name: data.user.name,
			userName: data.user.username,
			igUserName: data.user.instagram_username,
			alt: data.alt_description,
			rawUrl: data.urls.raw,
			regUrl: data.urls.regular,
			likedByUser: data.liked_by_user,
			tags: data.tags,
			userPic: data.user.profile_image.medium,
		};
	};
}