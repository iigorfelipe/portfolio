import SettingsProvider from "./contexts/settings/provider";
import Header from "./components/header";
import Footer from "./components/footer";
import { AppRoutes } from "./routes";

const App = () => {
  return (
    <SettingsProvider>
      <Header />
      <AppRoutes />
      <Footer />
    </SettingsProvider>
  );
};

export default App;
