import React, { useCallback } from "react";
import { updateMarkdown } from "../../core/app/actions/UpdateMarkdown";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-markdown";
import "ace-builds/src-noconflict/theme-github";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../core/reducer";

export const Editor = () => {
  const value = useSelector((state: RootState) => state.app.md);
  const dispatch = useDispatch();
  const onChangeHandler = useCallback(
    (value: string) => {
      dispatch(updateMarkdown(value));
    },
    [dispatch]
  );

  return (
    <AceEditor
      mode="markdown"
      theme="github"
      width="50%"
      height="100%"
      showPrintMargin={false}
      enableBasicAutocompletion={true}
      editorProps={{ $blockScrolling: true }}
      fontSize={16}
      value={value}
      onChange={onChangeHandler}
    />
  );
};
