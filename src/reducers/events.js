import lodash from 'lodash' // 配列のデータを編集のに適したもの
import {
  READ_EVENTS,
  CREATE_EVENTS,
  DELETE_EVENTS,
  UPDATE_EVENTS,
  GET_EVENTS
} from '../actions'

export default (events = {}, action) => {
  switch (action.type) {
    case CREATE_EVENTS:
    case GET_EVENTS:
    case UPDATE_EVENTS:
      const data = action.response.data
      return { ...events, [data.id]: data }

    case DELETE_EVENTS:
      delete events[action.id]
      return { ...events }

    case READ_EVENTS:
      return lodash.mapKeys(action.response.data, 'id')
    default:
      return events
  }
}
