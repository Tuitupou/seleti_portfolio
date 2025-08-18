import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "./components/ui/toaster";
import { Suspense, lazy } from "react";
import { PageLoader } from "./components/ui/loading";
import { ErrorBoundary } from "./components/ErrorBoundary";

// Lazy load components for better performance
const Home = lazy(() => 
  import("./pages/Home").then(module => ({ default: module.Home }))
);

const NotFound = lazy(() => 
  import("./pages/NotFound").then(module => ({ default: module.NotFound }))
);

function App() {
  return (
    <ErrorBoundary>
      <Toaster />
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route index element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;