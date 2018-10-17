import { SET_SEARCH_VALUE, FETCH_DOG_DATA } from './constants';
import doggos from './doggos';

export const setSearchValue = (text) => ({
	type: SET_SEARCH_VALUE,
	payload: text
})

export const fetchDogData = () => ({
	type: FETCH_DOG_DATA,
	payload: doggos
})