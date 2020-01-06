import React from 'react';
import Spinner from "react-spinner-material";
import './loading.css';

export default function Loading() {
  return (
    <div className="spinner">
      <Spinner size={50} spinnerColor={"#333"} spinnerWidth={2} visible={true} />
    </div>
  )
}
