import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Navbar from "./components/shared/Navbar";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Home from "./Home";
import Jobs from "./components/Jobs";
import Browse from "./components/Browse";
import HackathonPage from "./components/HackathonPage";
import HackathonsList from "./components/HackathonList";
import Profile from "./components/Profile";
import JobDescription from "./components/JobDescription";
import FeedbackForm from "./components/Feedback";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/jobs",
    element: <Jobs />,
  },
  {
    path: "/description/:id",
    element: <JobDescription />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
  {
    path: "/hackathon",
    element: <HackathonsList />,
  },
  {
    path: "/hackathon/:id",
    element: <HackathonPage />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/feedback",
    element: <FeedbackForm />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
