import Components from "views/Components/Components.jsx";
import LandingPage from "views/LandingPage/LandingPage.jsx";
import ProfilePage from "views/ProfilePage/ProfilePage.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";
import RepositoryPage from "views/RepositoryPage/RepositoryPage.jsx";

var indexRoutes = [
  { path: "/home", name: "LandingPage", component: LandingPage },
  { path: "/profile-page", name: "ProfilePage", component: ProfilePage },
  { path: "/login-page", name: "LoginPage", component: LoginPage },
  { path: "/components", name: "Components", component: Components },
  { path: "/repository", name: "Repositorys", component: RepositoryPage }
];

export default indexRoutes;
