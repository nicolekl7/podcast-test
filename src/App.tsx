import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import SimpleVersion from "./pages/SimpleVersion.tsx";
import Episode3 from "./pages/Episode3.tsx";
import Episode4 from "./pages/Episode4.tsx";
import Podcasts from "./pages/Podcasts.tsx";
import NotFound from "./pages/NotFound.tsx";
import ScrollToTop from "@/components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<SimpleVersion />} />
          <Route path="/episode-5-v2" element={<SimpleVersion />} />
          
          <Route path="/episode-3" element={<Episode3 />} />
          <Route path="/episode-4" element={<Episode4 />} />
          <Route path="/podcasts" element={<Podcasts />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
