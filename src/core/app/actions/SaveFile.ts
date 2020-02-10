import { actionCreator } from "./actionCreator";
import { writeFile, getNewFileHandle } from "../utils/FileUtils";
import { Action } from "../../store";
import { updateModified } from "./UpdateModified";

export const setFileHandle = actionCreator<FileSystemFileHandle | null>(
  "SET_FILE_HANDLE"
);

export function saveFile(): Action<Promise<void>, any> {
  return async (dispatch, getState) => {
    dispatch(updateModified(false));
    const { app } = getState();

    if (app.handle != null) {
      const { md, handle } = app;
      writeFile(md, handle);

      return;
    }

    const fileHandle = await getNewFileHandle();

    dispatch(setFileHandle(fileHandle));
    writeFile(app.md, fileHandle);
  };
}
