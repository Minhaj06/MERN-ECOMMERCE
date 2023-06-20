import React from "react";
import AllRoutes from "./AllRoutes";
import { Toaster } from "react-hot-toast";
import { ConfigProvider } from "antd";

const App = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#ff6b6b",
          colorSecondary: "#794afa",
          colorSecondaryDark: "#453c5c",
        },
      }}
    >
      <Toaster />
      <AllRoutes></AllRoutes>
    </ConfigProvider>
  );
};

export default App;
