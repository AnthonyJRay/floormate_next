import { useState } from "react";

export default function withLabel(Component) {
  const defaultClassNames = "text-left p-1";
  return function WrappedComponent({ children, ...rest }) {
    return (
      <>
        <label className={defaultClassNames}>{children}</label>
        <Component {...rest} />
      </>
    );
  };
}
