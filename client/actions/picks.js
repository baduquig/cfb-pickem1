import * as api from '../api';

const getPicks = () => async(dispatch) => {
    try {
        const { data } = await api.fetchPicks();
        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message)
    }
}