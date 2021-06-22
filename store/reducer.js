/*
 * @Description: 
 * @Author: LaughingZhu
 * @Date: 2021-06-19 13:04:09
 * @LastEditros: 
 * @LastEditTime: 2021-06-20 14:08:23
 */

export const initState = {
  menuList: [],
  type_id: null,
  detail: {},
  detail_id: null
};



function reducer(state = initState, {
  type,
  payload
}) {

  switch (type) {
    case 'changeMenuList':
      console.log('success, reducer')
      return {
        ...state,
        menuList: payload.data.list,
          total: payload.data.count
      };
      break;
    case 'changeMenuPage':
      return {
        ...state,
        page: payload,
      };
      break;

    case 'cleanTypeHandle':
      return {
        ...state,
        page: 1,
          total: 0,
          type_id: null
      };
      break;

    case 'setTypeHandle':
      return {
        ...state,
        page: 1,
          total: 0,
          type_id: payload.id
      };
      break;

    case 'setDetail':
      return {
        ...state,
        detail: payload.data
      };
      break;

    case 'setDetailId':
      return {
        ...state,
        detail_id: payload
      };
      break;

    default:
      return state;
  }
}
export default reducer;