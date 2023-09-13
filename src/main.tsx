import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./Root.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  HomePage,
  AboutUsPage,
  ProductsPage,
  ContactPage,
  TermOfUsePage,
  PrivacyPolicyPage,
  ProfileSignInPage,
  NotFoundPage,
  ProfilePage,
  RegistrationPage,
} from "./pages/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about-us",
        element: <AboutUsPage />,
      },
      {
        path: "/products",
        element: <ProductsPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/term-of-use",
        element: <TermOfUsePage />,
      },
      {
        path: "/privacy policy",
        element: <PrivacyPolicyPage />,
      },
      {
        path: "/profile-sign-in",
        element: <ProfileSignInPage />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
      {
        path: "/registration",
        element: <RegistrationPage />,
      },

      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
