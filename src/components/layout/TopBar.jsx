import { useState } from "react";
import { colors, fonts, radius, shadows } from "../../styles/theme";

const TopBar = () => {
  const [query, setQuery] = useState("");

  return (
    <header style={{
      height: 64, background: colors.sidebar,
      borderBottom: `1.5px solid ${colors.border}`,
      display: "flex", alignItems: "center",
      padding: "0 28px", gap: 16, flexShrink: 0,
      boxShadow: shadows.navbar,
    }}>
      {/* Search */}
      <div style={{
        display: "flex", alignItems: "center", gap: 10,
        background: colors.bg, borderRadius: radius.md,
        border: `1.5px solid ${colors.border}`,
        padding: "8px 14px", maxWidth: 280, flex: "0 0 auto",
      }}>
        <span style={{ fontSize: 14, color: colors.textMuted }}>👤</span>
        <input
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="| User Name"
          style={{
            border: "none", background: "transparent", outline: "none",
            fontFamily: fonts.body, fontSize: 13, color: colors.text, width: 140,
          }}
        />
        <span style={{ fontSize: 13, color: colors.textMuted, cursor: "pointer" }}>🔍</span>
      </div>

      <div style={{ flex: 1 }} />

      <a href="#features" style={{
        color: colors.textMid, fontFamily: fonts.body,
        fontSize: 14, fontWeight: 700, textDecoration: "none",
      }}>Features</a>

      {/* Bell */}
      <div style={{
        width: 38, height: 38, borderRadius: "50%",
        background: colors.purpleSoft, border: `1.5px solid ${colors.border}`,
        display: "flex", alignItems: "center", justifyContent: "center",
        cursor: "pointer", fontSize: 17, position: "relative",
      }}>
        🔔
        <span style={{
          position: "absolute", top: 4, right: 4,
          width: 8, height: 8, borderRadius: "50%",
          background: colors.red, border: "2px solid white",
        }} />
      </div>

      {/* Search button */}
      <button style={{
        background: `linear-gradient(135deg, ${colors.purple}, ${colors.purpleLight})`,
        color: "#fff", fontFamily: fonts.body,
        fontSize: 13, fontWeight: 700, padding: "9px 22px",
        borderRadius: radius.md, border: "none", cursor: "pointer",
        boxShadow: shadows.purple,
      }}>Search</button>
    </header>
  );
};

export default TopBar;
