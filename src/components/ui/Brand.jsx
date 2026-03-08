import { colors, fonts } from "../../styles/theme";

// ─── MEDITATION ILLUSTRATION ──────────────────────────────────────────────────
export const MeditationSVG = ({ size = 180 }) => (
  <img
    src="/hero-image.png"
    alt="Meditation illustration"
    style={{
      width: size,
      height: size * 0.65,
      objectFit: "cover",
      objectPosition: "center",
      borderRadius: 16,
      flexShrink: 0,
    }}
  />
);

// ─── LOGO ─────────────────────────────────────────────────────────────────────
export const Logo = ({ size = "md", dark = false }) => (
  <img
    src="/logo.png"
    alt="CalmMind"
    style={{
      height: size === "sm" ? 36 : 48,
      width: "auto",
      objectFit: "contain",
      filter: dark ? "brightness(0) invert(1)" : "none",
    }}
  />
);