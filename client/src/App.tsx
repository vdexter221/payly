import { Switch, Route } from "wouter";
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

function Router() {
  return (
    <RootLayout>
      <Switch>
        {/* Add pages below */}
        <Route path="/" component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/industry" component={Industry} />
        <Route path="/resources" component={Resources} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
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