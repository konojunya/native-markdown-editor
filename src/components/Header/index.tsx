import React from "react";
import "./header.css";
import { useSelector } from "react-redux";
import { RootState } from "../../core/reducer";

export const Header = () => {
  const { fileName, isModified } = useSelector((state: RootState) => {
    const { handle, isModified } = state.app;

    if (handle != null) {
      return {
        fileName: handle.name,
        isModified
      };
    }

    return {
      fileName: "Blank File",
      isModified
    };
  });

  return (
    <header id="header">
      <p>
        {fileName}
        {isModified && "*"}
      </p>
      <ul>
        <li>cmd | ctrl + s: SaveFile</li>
        <li>cmd | ctrl + o: OpenFile</li>
        <li>cmd | ctrl + shift + n: NewFile</li>
      </ul>
    </header>
  );
};
