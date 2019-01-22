import { GET_REAL_ESTIMATE_OFFERINGS, REAL_ESTIMATE_OFFERING_SUCCESS } from './constants';


export const getRealEstimateOfferings = payload => ({
  type: GET_REAL_ESTIMATE_OFFERINGS,
  payload,
});

export const realEstimateOfferingsSuccess = payload => ({
  type: REAL_ESTIMATE_OFFERING_SUCCESS,
  payload,
});
