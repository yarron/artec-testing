import {
  SET_FILMS,
  GET_FILMS,
  SAVE_FILM,
  ADD_FILM,
} from '_actions/constants/films';

const initialState = {
  paginate: {
    visible: 0,
    count: 30,
    page: 0,
    limit: 52,
  },
  byId: {},
  allIds: [],
};

const films = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_FILMS:
      return {
        ...state,
        paginate: {
          ...payload,
        },
      };
    case SET_FILMS:
      return {
        ...state,
        paginate: {
          ...state.paginate,
          ...payload,
        },
        byId: {
          ...state.byId,
          ...payload.byId,
        },
        allIds: [...new Set([...state.allIds, ...payload.allIds])],
      };
    case SAVE_FILM: {
      const { id } = payload;

      return {
        ...state,
        byId: {
          ...state.byId,
          [id]: {
            ...payload,
          },
        },
        allIds: [...new Set([id, ...state.allIds])],
      };
    }
    case ADD_FILM: {
      const { id } = payload;

      return {
        ...state,
        byId: {
          ...state.byId,
          [id]: {
            ...payload,
          },
        },
        allIds: [...new Set([payload.id, ...state.allIds])],
      };
    }
    default:
      return state;
  }
};

export default films;
