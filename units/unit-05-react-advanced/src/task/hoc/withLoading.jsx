import React from "react";

/**
 * withLoading(Component)
 * If `loading` prop is true, render a simple loading UI; otherwise render the child.
 */
export function withLoading(Component) {
  return function WithLoading(props) {
    const { loading, ...rest } = props;
    if (loading) {
      return <div role="status">Loading…</div>;
    }
    return <Component {...rest} />;
  };
}
