import {
    COMPLETE_GET_LIST_ITEM_DISH, COMPLETE_GET_LIST_ITEM_ROOM, COMPLETE_GET_LIST_ITEM_TABLE, FETCHING_DATA,
} from "../actions/types";

const initialState = {
    list_dish: [],
    list_table: [],
    list_room: [],
    isFetching: false
};

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCHING_DATA:
            return {
                ...state,
                isFetching: true
            };
        case COMPLETE_GET_LIST_ITEM_DISH:
            return {
                ...state,
                isFetching: false,
                list_dish: action.payload.list_dish
            };
        case COMPLETE_GET_LIST_ITEM_TABLE:
            return {
                ...state,
                isFetching: false,
                list_table: action.payload.list_table
            };
        case COMPLETE_GET_LIST_ITEM_ROOM:
            return {
                ...state,
                isFetching: false,
                list_room: action.payload.list_room
            };
        default:
            return state;
    }
}