import React from "react";

// TODO: Add your providers here. NOTE: These were directly in the variable below.

//Example:
{
  /* <CheckoutProvider />,
<LoginProvider />
<AlertProvider /> */
}
// const providerArray = [<DevDataProvider />];

function ProviderComposer({ contexts, children }) {
  return contexts.reduceRight(
    (kids, parent) =>
      React.cloneElement(parent, {
        children: kids,
      }),
    children
  );
}

function ContextProvider({ children }) {
  return (
    <ProviderComposer contexts={<DevDataProvider />}>
      {children}
    </ProviderComposer>
  );
}

export { ContextProvider };
