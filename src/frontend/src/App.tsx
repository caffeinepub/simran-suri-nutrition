import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Toaster } from "@/components/ui/sonner";
import { AboutPage } from "@/pages/AboutPage";
import { BlogPostPage } from "@/pages/BlogPostPage";
import { ContactPage } from "@/pages/ContactPage";
import { HomePage } from "@/pages/HomePage";
import { ResourcesPage } from "@/pages/ResourcesPage";
import { ServicesPage } from "@/pages/ServicesPage";
import { TestimonialsPage } from "@/pages/TestimonialsPage";
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";

/* ── Root layout ─────────────────────────────────────────────────────── */
const rootRoute = createRootRoute({
  component: () => (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
      <Toaster richColors position="top-right" />
    </div>
  ),
});

/* ── Page routes ─────────────────────────────────────────────────────── */
const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutPage,
});

const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services",
  component: ServicesPage,
});

const testimonialsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/testimonials",
  component: TestimonialsPage,
});

const resourcesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/resources",
  component: ResourcesPage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: ContactPage,
});

const blogPostRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/resources/blog/$slug",
  component: BlogPostPage,
});

/* ── Router ──────────────────────────────────────────────────────────── */
const routeTree = rootRoute.addChildren([
  homeRoute,
  aboutRoute,
  servicesRoute,
  testimonialsRoute,
  resourcesRoute,
  blogPostRoute,
  contactRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
