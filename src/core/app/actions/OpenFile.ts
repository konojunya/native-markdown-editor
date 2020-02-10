import { Dispatch } from "redux";
import { updateMarkdown } from "./UpdateMarkdown";
import { Action } from "../../store";
import { getFileHandle } from "../utils/FileUtils";
import { setFileHandle } from "./SaveFile";
import { batch } from "react-redux";

export function openFile(): Action<Promise<void>, any> {
  return async (dispatch: Dispatch) => {
    const handle = await getFileHandle();
    const file = await handle.getFile();
    const text = await file.text();

    batch(() => {
      dispatch(updateMarkdown(text));
      dispatch(setFileHandle(handle));
    });
  };
}
