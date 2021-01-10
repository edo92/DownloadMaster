import { SET_HISTORY_LIST, REMOVE_HISTORY_ITEM } from '../constants';
import { fetchList, removeItem } from '../../helpers/db';

export const removeHistoryItem = contentId => {
    return dispatch => {
        removeItem({ contentId });

        dispatch({
            type: REMOVE_HISTORY_ITEM,
            payload: { contentId }
        })
    }
}

export const getHistory = () => {
    return async dispatch => {

        const convertToObj = arr => {
            let list = {};
            arr.map((item, i) => {
                list[item.contentId] = arr[i];
            })
            return list;
        }

        const fetchData = await fetchList();
        const historyList = convertToObj(fetchData.rows._array);

        dispatch({ type: SET_HISTORY_LIST, payload: historyList });
    }
}