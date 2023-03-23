import React from "react";
import './Divider.css';

export const Divider = ({ children }) => {
    return (
        <div className="line-contain">
            <div className="line"></div>
            <div className="text-contain">{children}</div>
            <div className="line"></div>
        </div>
    );
  };
  