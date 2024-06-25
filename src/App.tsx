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
import { Navbar } from "./components/navbar/Navbar";
import { InPersonTraining } from "./pages/InPersonTrainingPage/InPersonTraining";
import { Events } from "./pages/EventsPage/Events";
import { Testimonials } from "./pages/Testimonials/Testimonials";
import { Login } from "./pages/Login/Login";
import { Programs } from "./pages/Programs/Programs";
import { TermsAndConditions } from "./pages/TermsAndConditions/TermsAndConditions";
import { Profile } from "./pages/Profile/Profile";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route index element={<HomePage />} />
      <Route path="events" element={<Events />} />
      <Route path="programs" element={<Programs />} />
      <Route path="profile" element={<Profile />} />
      <Route path="in-person-training" element={<InPersonTraining />} />
      <Route path="testimonials" element={<Testimonials />} />
      <Route path="terms" element={<TermsAndConditions />} />
      <Route path="login" element={<Login />} />
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
