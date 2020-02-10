import { reducerWithInitialState } from "typescript-fsa-reducers";
import { updateMarkdown } from "../actions/UpdateMarkdown";
import { setFileHandle } from "../actions/SaveFile";
import { updateModified } from "../actions/UpdateModified";

export type AppState = {
  md: string;
  handle: FileSystemFileHandle | null;
  isModified: boolean;
  showPWABanner: boolean;
};

export const initialState = {
  md: "",
  handle: null,
  isModified: false,
  showPWABanner: false
};

export const appReducer = reducerWithInitialState<AppState>(initialState)
  .case(updateMarkdown, (state, payload) => ({
    ...state,
    md: payload,
    isModified: true
  }))
  .case(setFileHandle, (state, payload) => ({
    ...state,
    handle: payload,
    isModified: false,
    showPWABanner: true
  }))
  .case(updateModified, (state, payload) => ({
    ...state,
    isModified: payload
  }));
