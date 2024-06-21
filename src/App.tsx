import "./index.css";
import "./App.css";
import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Footer from "./components/footer/Footer";
import { FreeSession } from "./pages/FreeSession/FreeSession";
import { Navbar } from "./components/navbar/Navbar";
import { InPersonTraining } from "./pages/InPersonTrainingPage/InPersonTraining";
import { Events } from "./pages/EventsPage/Events";
import { Testimonials } from "./pages/Testimonials/Testimonials";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route index element={<HomePage />} />
      <Route path="events" element={<Events />} />
      <Route path="free-session" element={<FreeSession />} />
      <Route path="in-person-training" element={<InPersonTraining />} />
      <Route path="testimonials" element={<Testimonials />} />
      <Route path="*" element={<HomePage />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
