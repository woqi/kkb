import { getProductData } from "../services/product";
export default {

  namespace: 'example',

  state: {
    data: [],
    pageSize: 10,//一页10条
    current: 1,//当前页
    total: 0//总页码
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    // *fetch({ payload }, { call, put }) {  // eslint-disable-line
    //   yield put({ type: 'save' });
    // },
    
    *getProductData({ payload }, { call, put }) {
      const res = yield call(getProductData, payload);
      yield put({ type: "productData", payload: res.data });
    }
  },

  reducers: {
    // save(state, action) {
    //   return { ...state, ...action.payload };
    // },
    productData(state, action) {
      return { ...state, data: action.payload.data };
    }
  },

};
