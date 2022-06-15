import React from "react";
import { btn_dn } from "../../../lib/export/data";

export default function BtnDn() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "1050px",
      }}
    >
      {btn_dn.map((btn) => (
        <img src={btn} alt="" />
      ))}
    </div>
  );
}
