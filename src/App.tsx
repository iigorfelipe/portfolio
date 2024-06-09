import SettingsProvider from "./contexts/settings/provider";
import Header from "./components/header";
import { AppRoutes } from "./routes";

const App = () => {
  return (
    <SettingsProvider>
      <Header />
      <AppRoutes />
    </SettingsProvider>
  );
};

export default App;
