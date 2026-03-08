import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import { colors } from "../../styles/theme";

/**
 * AppLayout wraps all authenticated/dashboard pages.
 * Sidebar + TopBar stay fixed; <Outlet> renders the active page.
 */
const AppLayout = () => (
  <div style={{ display: "flex", height: "100vh", overflow: "hidden", background: colors.bg }}>
    <Sidebar />
    <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
      <TopBar />
      <main style={{ flex: 1, overflowY: "auto", padding: "24px 28px" }} className="page-enter">
        <Outlet />
      </main>
    </div>
  </div>
);

export default AppLayout;
