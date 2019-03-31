import * as types from './mutations_types'
export default {
  check_db: ({
    commit
  }, obj) => {
    commit(types.CHECK_DB, obj)
  },
  create_db: ({
    commit
  }, obj) => {
    commit(types.CREATE_DB, obj)
    commit(types.UPDATE_DB)
  },
  add_db: ({
    commit
  }, index) => {
    commit(types.ADD_DB, index)
    commit(types.UPDATE_DB)
  },
  reduce_db: ({
    commit
  }, index) => {
    commit(types.REDUCE_DB, index)
    commit(types.UPDATE_DB)
  },
  delete_db: ({
    commit
  }, index) => {
    commit(types.DELETE_DB, index)
    commit(types.UPDATE_DB)
  },
  clear_db: ({
    commit
  }, payload) => {
    commit(types.CLEAR_DB, payload)
    commit(types.UPDATE_DB)
  }
}
