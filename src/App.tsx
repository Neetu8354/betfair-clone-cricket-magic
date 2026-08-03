import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import Exchange from "./pages/Exchange.tsx";
import Live from "./pages/Live.tsx";
import Stats from "./pages/Stats.tsx";
import Rankings from "./pages/Rankings.tsx";
import BlogIndex from "./pages/blog/BlogIndex.tsx";
import BlogPost from "./pages/blog/BlogPost.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import CricketId from "./pages/landing/CricketId.tsx";
import LiveBetting from "./pages/landing/LiveBetting.tsx";
import Ipl2026 from "./pages/landing/Ipl2026.tsx";
import AuthorIndex from "./pages/authors/AuthorIndex.tsx";
import AuthorProfile from "./pages/authors/AuthorProfile.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
        <Route path="/exchange" element={<Exchange />} />
          <Route path="/live" element={<Live />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/rankings" element={<Rankings />} />
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cricket-id" element={<CricketId />} />
          <Route path="/live-betting" element={<LiveBetting />} />
          <Route path="/ipl-2026" element={<Ipl2026 />} />
          <Route path="/authors" element={<AuthorIndex />} />
          <Route path="/authors/:slug" element={<AuthorProfile />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
