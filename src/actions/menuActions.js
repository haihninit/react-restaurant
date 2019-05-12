import {
    COMPLETE_GET_LIST_ITEM_DISH,
    COMPLETE_GET_LIST_ITEM_TABLE, FETCHING_DATA,
} from "./types";

export const loadedListDish = () => (dispatch) => {
    dispatch({type: FETCHING_DATA});
    dispatch({
        type: COMPLETE_GET_LIST_ITEM_DISH,
        payload: {
            list_dish: [
                {
                    id: "1",
                    name: "Tôm chiên nước mắm",
                    price: "65.000đ",
                    description: "Với lớp vỏ giòn tan, bên trong là vị ngọt của tôm, thêm độ đậm đà của nước mắm Phú Quốc, chút cay cay của ớt và mùi thơm của hành phi hòa quyện khiến món tôm chiên nước mắm hấp dẫn đến lạ.",
                    status: "NEW"
                },
                {
                    id: "2",
                    name: "Tôm kho đậu hủ",
                    price: "35.000đ",
                    description: "Với lớp vỏ giòn tan, bên trong là vị ngọt của tôm, thêm độ đậm đà của nước mắm Phú Quốc, chút cay cay của ớt và mùi thơm của hành phi hòa quyện khiến món tôm chiên nước mắm hấp dẫn đến lạ.",
                    status: "SALE"
                },
                {
                    id: "3",
                    name: "Tôm hoàng đế",
                    price: "350.000đ",
                    description: "Với lớp vỏ giòn tan, bên trong là vị ngọt của tôm, thêm độ đậm đà của nước mắm Phú Quốc, chút cay cay của ớt và mùi thơm của hành phi hòa quyện khiến món tôm chiên nước mắm hấp dẫn đến lạ.",
                    status: "HOT"
                },
                {
                    id: "4",
                    name: "Tôm lai cua",
                    price: "1.350.000đ",
                    description: "Với lớp vỏ giòn tan, bên trong là vị ngọt của tôm, thêm độ đậm đà của nước mắm Phú Quốc, chút cay cay của ớt và mùi thơm của hành phi hòa quyện khiến món tôm chiên nước mắm hấp dẫn đến lạ.",
                    status: "SALE"
                },
                {
                    id: "5",
                    name: "Tôm mượn tổ ốc",
                    price: "150.000đ",
                    description: "Với lớp vỏ giòn tan, bên trong là vị ngọt của tôm, thêm độ đậm đà của nước mắm Phú Quốc, chút cay cay của ớt và mùi thơm của hành phi hòa quyện khiến món tôm chiên nước mắm hấp dẫn đến lạ.",
                    status: "HOT"
                }
            ]
        }
    })
};

export const loadedListTable = () => (dispatch) => {
    dispatch({type: FETCHING_DATA});
    dispatch({
        type: COMPLETE_GET_LIST_ITEM_TABLE,
        payload: {
            list_table: [
                {
                    id: "1",
                    name: "Bàn cặp đôi",
                    capacity: 2,
                    description: "Với lớp vỏ giòn tan, bên trong là vị ngọt của tôm, thêm độ đậm đà của nước mắm Phú Quốc, chút cay cay của ớt và mùi thơm của hành phi hòa quyện khiến món tôm chiên nước mắm hấp dẫn đến lạ.",
                },
                {
                    id: "2",
                    name: "Bàn gia đình nhỏ",
                    capacity: 4,
                    description: "Với lớp vỏ giòn tan, bên trong là vị ngọt của tôm, thêm độ đậm đà của nước mắm Phú Quốc, chút cay cay của ớt và mùi thơm của hành phi hòa quyện khiến món tôm chiên nước mắm hấp dẫn đến lạ.",
                },
                {
                    id: "3",
                    name: "Bàn gia đình lớn",
                    capacity: 10,
                    description: "Với lớp vỏ giòn tan, bên trong là vị ngọt của tôm, thêm độ đậm đà của nước mắm Phú Quốc, chút cay cay của ớt và mùi thơm của hành phi hòa quyện khiến món tôm chiên nước mắm hấp dẫn đến lạ.",
                    status: "HOT"
                }
            ]
        }
    });
};

