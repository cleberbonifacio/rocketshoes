import { call, put, all, takeLatest } from 'redux-saga/effects';
import api from '../../services/api';

import { addToCartSucess } from './actions';

function* addToCart({ id }) {
  const reponse = yield call(api.get, `/products/${id}`);

  yield put(addToCartSucess(reponse.data));
}

export default all([takeLatest('@cart/ADD_REQUEST', addToCart)]);
