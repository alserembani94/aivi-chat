import * as actions from './actionTypes';

export const thingAdded = (payload) => ({
    type: actions.THING_ADDED,
    payload,
})

export const thingRemoved = (payload) => ({
    type: actions.THING_REMOVED,
    payload,
})

export const thingUpdated = (payload) => ({
    type: actions.THING_UPDATED,
    payload,
})