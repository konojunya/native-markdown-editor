import React, { useCallback } from "react";
import "./pwaBanner.css";
import { createPortal } from "react-dom";
import { tryInstallApp } from "../../utils/PWAUtils";

export const PWABanner = () => {
  const portalElement = document.createElement("div");
  portalElement.id = "portal";
  document.body.appendChild(portalElement);

  const onClickHandler = useCallback(async () => {
    try {
      await tryInstallApp();
    } catch (e) {
      console.log(e);
    }
  }, []);

  return createPortal(
    <div className="pwabanner-container">
      <p className="pwabanner-content">PWAで試しませんか？</p>
      <button className="pwabanner-install-button" onClick={onClickHandler}>
        インストール
      </button>
    </div>,
    portalElement
  );
};
