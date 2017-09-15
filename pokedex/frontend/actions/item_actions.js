import * as APIUtil from '../util/api_util';

export const RECEIVE_ALL_ITEMS = 'RECEIVE_ALL_ITEMS';

export const receiveAllItems = (items) => ({
  type: RECEIVE_ALL_ITEMS,
  items
});

export const requestAllItems = () => (dispatch) => {
  // Call APIUtil to fetchAllItems
};
