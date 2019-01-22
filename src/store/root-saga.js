import { all, fork } from 'redux-saga/effects';
import home from '../pages/home/effects';

export default function* () {
  yield all([
    fork(home),
  ]);
}
