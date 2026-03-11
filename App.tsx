import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home"; 

// ✅ CHANGED: Now pointing to the Smart Wrappers instead of the Desktop-only files!
import Platform from "./pages/Platform"; 
import LandSurvey from "./pages/LandSurvey"; 
import ConstructionMonitoring from "./pages/ConstructionMonitoring"; 
import MediaAndMarketing from "./pages/MediaAndMarketing"; // Ensure you made a wrapper for this too!

import { AssetInspection } from "./pages/AssetInspection";
import { ScantoBIM } from "./pages/ScantoBIM";           
import { Possibilities } from "./pages/Possibilities";
import { Resources } from "./pages/Resources";
import { About } from "./pages/About";
import { BookDemo } from "./pages/BookDemo";
import { AppRoutes } from "./types";

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path={AppRoutes.HOME} element={<Home />} />
          <Route path={AppRoutes.PLATFORM} element={<Platform />} />
          <Route path={AppRoutes.POSSIBILITIES} element={<Possibilities />} />
          <Route path={AppRoutes.RESOURCES} element={<Resources />} />
          <Route path={AppRoutes.ABOUT} element={<About />} />
          <Route path={AppRoutes.BOOK_DEMO} element={<BookDemo />} />

          {/* SOLUTIONS PAGES */}
          <Route path="/solutions/land-survey" element={<LandSurvey />} />
          <Route
            path="/solutions/construction-monitoring"
            element={<ConstructionMonitoring />}
          />
          <Route 
            path="/solutions/asset-inspection" 
            element={<AssetInspection />} 
          />
          <Route 
            path="/solutions/media-and-marketing" 
            element={<MediaAndMarketing />} 
          />
          <Route 
            path="/solutions/scan-to-bim" 
            element={<ScantoBIM />} 
          />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;