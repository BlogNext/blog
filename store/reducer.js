/*
 * @Description: 
 * @Author: LaughingZhu
 * @Date: 2021-06-19 13:04:09
 * @LastEditros: 
 * @LastEditTime: 2021-06-22 23:03:09
 */

export const initState = {
  type_id: null,
};



function reducer(state = initState, {
  type,
  payload
}) {

  switch (type) {

    case 'setTypeHandle':
      return {
        ...state,
        type_id: payload.id
      };
      break;

    default:
      return state;
  }
}
export default reducer;