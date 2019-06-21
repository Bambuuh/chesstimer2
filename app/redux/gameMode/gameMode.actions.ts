import { Action } from 'redux'

export interface ITestAction extends Action {
  type: 'TEST'
}

export type GameModeActions = ITestAction
