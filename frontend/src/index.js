// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from 'react-router-dom';

// import HomePage from './pages/HomePage/HomePage'
// import SpeakersPage from './pages/SpeakersPage/SpeakersPage'
// import "./index.css";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <HomePage />,
//   },

//  {
//   path: "/speakers",
//   element: <SpeakersPage/>,
// },

// ]);

// createRoot(document.getElementById("root")).render(
//   <RouterProvider router={router}/>);

import React from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import SpeakersPage from "./pages/SpeakersPage/SpeakersPage";
import EventsPage from "./pages/EventsPage/EventsPage";
import SponsorsPage from "./pages/SponsorsPage/SponsorsPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import SpeakerDetail from "./pages/SpeakerDetail/SpeakerDetail";
import SignUp from "./pages/Auth/SignUp";
import AdminPage from "./pages/Admin/AdminPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/about",
        element: <AboutPage />,
    },
    {
        path: "/speakers",
        children: [
            {
                index: true,
                element: <SpeakersPage />,
            },
            {
                path: "/speakers/:speakerId",
                element: <SpeakerDetail />,
            },
        ],
    },
    {
        path: "/events",
        element: <EventsPage />,
    },
    {
        path: "/sponsors",
        element: <SponsorsPage />,
    },
    {
        path: "/contact",
        element: <ContactPage />,
    },
    {
        path: "/auth/signup",
        element: <SignUp />,
    },
    // {
    //     path: "/admin",
    //     element: <AdminPage />,
    //     children: [
    //         {
    //             path: "/admin/dashboard",
    //             element: <Dashboard />,
    //         },
    //         {
    //             path: "/admin/speakers",
    //             element: <Speakers />,
    //         },
    //         {
    //             path: "/admin/venues",
    //             element: <Venues />,
    //         },
    //         {
    //             path: "/admin/events",
    //             element: <Events />,
    //         },
    //         {
    //             path: "/admin/schedules",
    //             element: <Schedules />,
    //         },
    //         {
    //             path: "/admin/sponsors",
    //             element: <Sponsors />,
    //         },
    //     ],
    // },
]);

createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);
