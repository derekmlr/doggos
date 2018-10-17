import { SET_SEARCH_VALUE, FETCH_DOG_DATA } from './constants';


// Search Dogs Reducer
const initialSearchState = {
	searchValue: ''
}
export const searchDogs = (state=initialSearchState, action={}) => {
	switch(action.type) {
		case SET_SEARCH_VALUE:
			return { ...state, searchValue: action.payload }
		default:
			return state;
	}
}

// Dog Data Reducer
const initialDogDataState = {
	doggos:[]
}
export const dogsData = (state=initialDogDataState, action={}) => {
	switch(action.type) {
		case FETCH_DOG_DATA:
			return { ...state, doggos: action.payload}
		default:
			return state;
	}
}