import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../core/reducer";
import { md2html } from "../../utils/MarkdownUtils";
import "./Preview.css";

export const Preview = () => {
  const html = useSelector((state: RootState) => md2html(state.app.md));

  return (
    <div
      className="markdown-body preview-container"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};
