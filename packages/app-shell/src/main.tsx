import * as React from "react";
import { render } from "react-dom";

// @ts-ignore
const Header = React.lazy(() => import("nav/Navigation"));

const AppShell: React.FC = () => {
  return (
    <React.Suspense fallback={<div />}>
      <Header />
      <div>Hello, module federation!</div>
    </React.Suspense>
  );
};

render(<AppShell />, document.getElementById("app"));
