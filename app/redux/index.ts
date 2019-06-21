import { combineReducers } from 'redux'

import { gameMode, GameModeState } from './gameMode'

export type RootState = {
  gameMode: GameModeState
}

export default combineReducers<RootState>({
  gameMode
})
