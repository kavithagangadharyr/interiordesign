import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import StyleGuid from "./pages/StyleGuid";
import Homepage1 from "./pages/Homepage1";
import Homepage2 from "./pages/Homepage2";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceSingle from "./pages/ServiceSingle";
import Pricing from "./pages/Pricing";
import Project from "./pages/Project";
import ProjectDetails from "./pages/ProjectDetails";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Team from "./pages/Team";
import TeamSingle from "./pages/TeamSingle";
import ContactUs from "./pages/ContactUs";
import FAQs from "./pages/FAQs";
import Component from "./pages/Component";
import Licence from "./pages/Licence";
import Password from "./pages/Password";
import Changelog from "./pages/Changelog";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/homepage-1":
        title = "";
        metaDescription = "";
        break;
      case "/homepage-2":
        title = "";
        metaDescription = "";
        break;
      case "/about":
        title = "";
        metaDescription = "";
        break;
      case "/services":
        title = "";
        metaDescription = "";
        break;
      case "/servicesingle":
        title = "";
        metaDescription = "";
        break;
      case "/pricing":
        title = "";
        metaDescription = "";
        break;
      case "/project":
        title = "";
        metaDescription = "";
        break;
      case "/project-details":
        title = "";
        metaDescription = "";
        break;
      case "/blog":
        title = "";
        metaDescription = "";
        break;
      case "/blog-details":
        title = "";
        metaDescription = "";
        break;
      case "/team":
        title = "";
        metaDescription = "";
        break;
      case "/teamsingle":
        title = "";
        metaDescription = "";
        break;
      case "/contact-us":
        title = "";
        metaDescription = "";
        break;
      case "/faqs":
        title = "";
        metaDescription = "";
        break;
      case "/404":
        title = "";
        metaDescription = "";
        break;
      case "/licence":
        title = "";
        metaDescription = "";
        break;
      case "/password":
        title = "";
        metaDescription = "";
        break;
      case "/changelog":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<StyleGuid />} />
      <Route path="/homepage-1" element={<Homepage1 />} />
      <Route path="/homepage-2" element={<Homepage2 />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/servicesingle" element={<ServiceSingle />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/project" element={<Project />} />
      <Route path="/project-details" element={<ProjectDetails />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog-details" element={<BlogDetails />} />
      <Route path="/team" element={<Team />} />
      <Route path="/teamsingle" element={<TeamSingle />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/faqs" element={<FAQs />} />
      <Route path="/404" element={<Component />} />
      <Route path="/licence" element={<Licence />} />
      <Route path="/password" element={<Password />} />
      <Route path="/changelog" element={<Changelog />} />
    </Routes>
  );
}
export default App;
