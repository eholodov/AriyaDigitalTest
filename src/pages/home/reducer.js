import immutable from 'seamless-immutable';

import {
  GET_REAL_ESTIMATE_OFFERINGS,
  REAL_ESTIMATE_OFFERING_SUCCESS,
} from './constants';

const initialState = immutable({
  loader: false,
  realEstateOfferings: [],
  fundriseIPO: [],
});
const HANDLERS = {
  [GET_REAL_ESTIMATE_OFFERINGS]: state => ({
    ...state,
    loader: true,
  }),
  [REAL_ESTIMATE_OFFERING_SUCCESS]: (state, action) => ({
    ...state,
    loader: false,
    realEstateOfferings: action.payload,
  }),
};


export default function authReducer(state = initialState, action) {
  const handler = HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
