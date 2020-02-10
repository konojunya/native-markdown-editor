import { saveFile, setFileHandle } from "../../core/app/actions/SaveFile";
import { RootStore } from "../../core/store";
import { openFile } from "../../core/app/actions/OpenFile";
import { updateMarkdown } from "../../core/app/actions/UpdateMarkdown";
import { batch } from "react-redux";

export function listenKeyboard(store: RootStore) {
  window.addEventListener(
    "keydown",
    e => {
      // cmd + s
      if ((e.metaKey || e.ctrlKey) && e.key === "s") {
        e.preventDefault();
        store.dispatch(saveFile() as any);
      }

      // cmd + o
      if ((e.metaKey || e.ctrlKey) && e.key === "o") {
        e.preventDefault();
        store.dispatch(openFile() as any);
      }

      // cmd + n
      if ((e.metaKey || e.ctrlKey) && e.key === "n") {
        e.preventDefault();
        batch(() => {
          store.dispatch(updateMarkdown(""));
          store.dispatch(setFileHandle(null));
        });
      }
    },
    false
  );
}
