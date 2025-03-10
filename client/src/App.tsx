import { Switch, Route, useRouter } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Products from "@/pages/products";
import Industry from "@/pages/industry";
import Resources from "@/pages/resources";
import Pricing from "@/pages/pricing";
import Login from "@/pages/login";
import Signup from "@/pages/signup";
import About from "@/pages/about";
import RootLayout from "@/components/layout/RootLayout";

// Use base path from Vite config
const base = import.meta.env.BASE_URL;

// Custom hook to handle base path
const useBasePath = () => {
  const [location] = useRouter();
  return (to: string) => {
    // Remove leading slash if present
    const path = to.startsWith('/') ? to.slice(1) : to;
    return `${base}${path}`;
  };
};

function Router() {
  const basePath = useBasePath();

  return (
    <RootLayout>
      <Switch>
        {/* Add pages below */}
        <Route path={basePath("")} component={Home} />
        <Route path={basePath("products")} component={Products} />
        <Route path={basePath("industry")} component={Industry} />
        <Route path={basePath("resources")} component={Resources} />
        <Route path={basePath("pricing")} component={Pricing} />
        <Route path={basePath("about")} component={About} />
        <Route path={basePath("login")} component={Login} />
        <Route path={basePath("signup")} component={Signup} />
        {/* Fallback to 404 */}
        <Route component={NotFound} />
      </Switch>
    </RootLayout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;