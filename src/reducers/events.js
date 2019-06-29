import lodash from 'lodash' // 配列のデータを編集のに適したもの
import { READ_EVENTS } from '../actions'

export default (events = {}, action) => {
  switch (action.type) {
    case READ_EVENTS:
      return lodash.mapKeys(action.response.data, 'id')
    default:
      return events
  }
}
