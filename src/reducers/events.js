import lodash from 'lodash' // 配列のデータを編集のに適したもの
import { READ_EVENTS,DELETE_EVENTS } from '../actions'

export default (events = {}, action) => {
  switch (action.type) {
    case READ_EVENTS:
      return lodash.mapKeys(action.response.data, 'id')
    case DELETE_EVENTS:
    delete events[action.id]
    return { ...events }
    default:
      return events
  }
}
