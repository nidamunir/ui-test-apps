import { lazy, Suspense } from "react";
import { dependencies } from "../package.json";

const RemoteComponent = ({ scope, module, ...props }) => {
  if (!global[scope]) {
    console.log("returning null");
    return null;
  }

  global[scope].init({
    react: {
      [dependencies.react]: {
        get: () => Promise.resolve().then(() => () => require("react")),
      },
    },
  });

  const Component = lazy(() =>
    global[scope].get(module).then((factory) => factory())
  );

  return (
    <Suspense fallback={null}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Home() {
  return (
    // Error while loading alert dialog, cannnot mount unmounted component
      <RemoteComponent scope="ui" module="./CircularIndeterminate" />
    
  );
}
