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
import { Services } from "./pages/Services/Services";
import { Events } from "./pages/EventsPage/Events";
import { Testimonials } from "./pages/Testimonials/Testimonials";
import { Login } from "./pages/Login/Login";
import { TermsAndConditions } from "./pages/TermsAndConditions/TermsAndConditions";
import { Profile } from "./pages/Profile/Profile";
import { Programs } from "./pages/Programs/Programs";
import { Booking } from "./pages/Booking/Booking";
import { Contact } from "./pages/Contact/Contact";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route index element={<HomePage />} />
      <Route path="booking" element={<Booking />} />
      <Route path="contact" element={<Contact />} />
      <Route path="events" element={<Events />} />
      <Route path="login" element={<Login />} />
      <Route path="programs" element={<Programs />} />
      <Route path="profile" element={<Profile />} />
      <Route path="services" element={<Services />} />
      <Route path="testimonials" element={<Testimonials />} />
      <Route path="terms" element={<TermsAndConditions />} />
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
