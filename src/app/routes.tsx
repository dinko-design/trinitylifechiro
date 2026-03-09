import React from 'react';
import { createBrowserRouter, Outlet, useLocation, ScrollRestoration } from 'react-router';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

// Components
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Process } from './components/Process';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';

// Pages
import { ServicesPage } from './pages/ServicesPage';
import { ServiceTemplate } from './pages/ServiceTemplate';
import { ServiceAreasPage } from './pages/ServiceAreasPage';
import { TeamPage } from './pages/TeamPage';
import { CareersPage } from './pages/CareersPage';
import { BlogPage } from './pages/BlogPage';
import { BlogPost } from './pages/BlogPost';
import { LocationTemplate } from './pages/LocationTemplate';

const HomePage = () => (
  <>
    <Hero />
    <About />
    <Services />
    <Process />
    <Testimonials />
    <Contact />
  </>
);

const Root = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-white font-body text-gray-900">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  );
};

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: HomePage },

      // Main Services Landing
      { path: 'services', Component: ServicesPage },

      // Locations Hub
      { path: 'locations', Component: ServiceAreasPage },

      // Team, Careers, Blog
      { path: 'team', Component: TeamPage },
      { path: 'careers', Component: CareersPage },
      { path: 'blog', Component: BlogPage },
      { path: 'blog/:slug', Component: BlogPost },

      // Process alias
      { path: 'process', Component: Process },

      // Location Pages (before catch-all)
      { path: 'chiropractor-allen-tx', Component: LocationTemplate },
      { path: 'chiropractor-mckinney-tx', Component: LocationTemplate },
      { path: 'chiropractor-plano-tx', Component: LocationTemplate },
      { path: 'chiropractor-lucas-tx', Component: LocationTemplate },
      { path: 'chiropractor-fairview-tx', Component: LocationTemplate },
      { path: 'chiropractor-parker-tx', Component: LocationTemplate },
      { path: 'chiropractor-murphy-tx', Component: LocationTemplate },
      { path: 'chiropractor-frisco-tx', Component: LocationTemplate },
      { path: 'chiropractor-richardson-tx', Component: LocationTemplate },

      // Dynamic Service Routes - catch all for service pages
      { path: ':slug', Component: ServiceTemplate },
    ],
  },
]);
