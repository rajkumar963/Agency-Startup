
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Auth from "./pages/Auth";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BusinessIdeas from "./components/FounderTreasure/BusinessIdeas";
import ResourcesHub from "./components/resources/ResourcesHub";
import MarketingEbook from "./pages/EBookSection/MarketingEbook";
import SalesEbook from "./pages/EBookSection/SalesEbook";
import EntrepreneurshipEbook from "./pages/EBookSection/EntrepreneurshipEbook";
import CaseStudiesResearch from "./pages/EBookSection/CaseStudiesResearch";
import QASection from "./pages/EBookSection/QASection";
import KhajnaSection from "./components/khajna/KhajnaSection";
import AllKhajna from "./components/khajna/AllKhajna";
import InvestorVault from "./components/khajna/InvestorVault";
import InvestorsDtata from "./components/khajna/InvestorsData";
import BusinessesIdeas from "./components/businesses/BusinessesIdeas";
import PickModels from "./components/businesses/PickModels";
import MVPBlueprint from "./components/businesses/MVPBluePrint";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/business-ideas" element={<BusinessIdeas />} />
          <Route path="/resources" element={<ResourcesHub />} />
          <Route path="/resources/marketingebook" element={<MarketingEbook />} />
          <Route path="/resources/salesebook" element={<SalesEbook />} />
          <Route path="/resources/entrepreneurshipebook" element={<EntrepreneurshipEbook />} />
          <Route path="/resources/casestudiesresearch" element={<CaseStudiesResearch />} />
          <Route path="/resources/qasectionandgovernmentfunding" element={<QASection />} />
          <Route path="/khajna" element={<KhajnaSection />} />
          <Route path="/allkhajna" element={<AllKhajna />} />
          <Route path="/investorsvault" element={<InvestorVault/>}/>
          <Route path="/investorsdata" element={<InvestorsDtata />} />
          <Route path="/businessesideas" element={<BusinessesIdeas/>}/>
          <Route path="/pickmodels" element={<PickModels />} />
          <Route path="/mvpblueprint" element={<MVPBlueprint />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      <Footer/>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
