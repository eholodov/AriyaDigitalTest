import {
  put,
  takeEvery,
} from 'redux-saga/effects';

import {
  GET_REAL_ESTIMATE_OFFERINGS,
} from './constants';

import {
  realEstimateOfferingsSuccess,
} from './actions';

import * as fakeData from '../../fakeData';
import Logger from '../../utils/logger';

const HANDLERS = {
  * [GET_REAL_ESTIMATE_OFFERINGS]() {
    try {
      const { realEstateOfferings } = fakeData;
      const subTotal = realEstateOfferings.reduce((accumulator, estateOfferingsItem) => {
        const [
          { valueOfShares: accumulatorValueOfShares, positionTotal: accumulatorPositionTotal },
          { valueOfShares: estateValuesOfShares, positionTotal: estateOfferingsItemPositionTotal },
        ] = [accumulator, estateOfferingsItem];
        const valueOfShares = accumulatorValueOfShares
          ? accumulatorValueOfShares + estateValuesOfShares
          : estateValuesOfShares;

        const positionTotal = accumulatorPositionTotal
          ? accumulatorPositionTotal + estateValuesOfShares
          : estateOfferingsItemPositionTotal;

        return {
          name: 'Subtotal',
          percent: 97.4,
          valueOfShares,
          positionTotal,
        };
      }, {});
      console.log('-->subTotal', subTotal);

      realEstateOfferings.push(subTotal);
      yield put(realEstimateOfferingsSuccess(fakeData.realEstateOfferings));
    } catch (err) {
      Logger.error(err);
    }
  },
};

export function* switchSagasAuth({ type, payload }) {
  const handler = HANDLERS[type];

  if (handler != null) yield* handler(payload);
}

export default function* sagaReducerAuth() {
  yield takeEvery('*', switchSagasAuth);
}
