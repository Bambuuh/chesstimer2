import { GameModeActions } from './gameMode.actions'
import { combineReducers } from 'redux'

export type GameModeState = {
  mode: string
}

const INITIAL_STATE = 'test'

function mode(state = INITIAL_STATE, action: GameModeActions) {
  switch (action.type) {
    default:
      return state
  }
}

export const gameMode = combineReducers<GameModeState>({ mode })
