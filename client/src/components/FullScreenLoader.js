import React, { Fragment } from "react";

const FullScreenLoader = () => {
  return (
    <Fragment>
      <div className={"LoadingOverlay d-non"}>
        <div className="Line-Progress">
          <div className="indeterminate"></div>
        </div>
      </div>
    </Fragment>
  );
};

export default FullScreenLoader;
