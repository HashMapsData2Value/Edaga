import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "@/style/global.css";

import { BASE_PATH } from "./App";

import Replies from "@/components/views/Replies";
import Topic from "@/components/views/Topic";
import All from "@/components/views/All";
import Topics from "@/components/views/Topics";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <All />,
    },
    {
      path: "replies/:originalTxId",
      element: <Replies />,
    },
    {
      path: "topics",
      children: [
        {
          path: "",
          element: <Topics />,
        },
        {
          path: ":topic",
          element: <Topic />,
        },
      ],
    },
  ],
  {
    // Note: not confirmed, but we _may_ be able to remove (GH pages)
    basename: BASE_PATH,
  }
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
