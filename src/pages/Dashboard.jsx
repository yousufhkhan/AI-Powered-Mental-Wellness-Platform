import { useNavigate } from "react-router-dom";
import { MeditationSVG } from "../components/ui/Brand";
import MoodChart from "../components/ui/MoodChart";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import { colors, fonts, radius, shadows } from "../styles/theme";

// ─── Sub-components (Dashboard-only, kept here for locality) ─────────────────

const HeroBanner = () => {
  const navigate = useNavigate();
  return (
    <div style={{
      borderRadius: radius.xl,
      background: "linear-gradient(135deg, #EDE9FE 0%, #F5EFE8 55%, #FEF3C7 100%)",
      marginBottom: 22, padding: "28px 40px",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      boxShadow: "0 4px 20px rgba(124,58,237,0.1)",
      border: `1px solid ${colors.border}`,
      position: "relative", overflow: "hidden",
    }}>
      {/* Decorative circle */}
      <div style={{ position: "absolute", right: -30, bottom: -30, opacity: 0.06, pointerEvents: "none" }}>
        <svg width="200" height="200"><circle cx="100" cy="100" r="100" fill={colors.purple} /></svg>
      </div>
      <div>
        <div style={{ fontSize: 10, fontFamily: fonts.body, color: colors.purple, fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 8 }}>
          ✦ Daily Overview
        </div>
        <h2 style={{ fontFamily: fonts.display, fontSize: 32, fontWeight: 700, color: colors.text, lineHeight: 1.15, marginBottom: 8 }}>
          Welcome Back,<br />Your Day Awaits.
        </h2>
        <p style={{ fontFamily: fonts.body, fontSize: 13, color: colors.textMid, marginBottom: 20, fontWeight: 600 }}>
          Support For Today. Strength For Tomorrow.
        </p>
        <Button onClick={() => navigate("/chat")} size="md">Get Started →</Button>
      </div>
      <MeditationSVG size={170} />
    </div>
  );
};

const StreakCard = () => (
  <Card>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ fontSize: 22 }}>⚡</span>
        <div>
          <div style={{ fontSize: 10, fontFamily: fonts.body, color: colors.textMuted, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em" }}>Daily Streak</div>
          <div style={{ fontFamily: fonts.display, fontSize: 20, fontWeight: 700, color: colors.text }}>Reward System</div>
        </div>
      </div>
      <div style={{ display: "flex", gap: 6 }}>
        {[["🥇","linear-gradient(135deg,#F59E0B,#FBBF24)","rgba(245,158,11,0.4)"],
          ["🛡️",`linear-gradient(135deg,${colors.purple},${colors.purpleLight})`,`${colors.purple}40`]
        ].map(([ic, bg, sh], i) => (
          <div key={i} style={{
            width: 32, height: 32, borderRadius: 9,
            background: bg, display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 16, boxShadow: `0 3px 10px ${sh}`,
          }}>{ic}</div>
        ))}
      </div>
    </div>
    <div style={{ fontFamily: fonts.display, fontSize: 28, fontWeight: 700, color: colors.purple, marginBottom: 8 }}>
      7 Days 🔥
    </div>
    <div style={{ background: colors.bg, borderRadius: 8, height: 5, overflow: "hidden", marginBottom: 8 }}>
      <div style={{
        width: "23%", height: "100%",
        background: `linear-gradient(90deg, ${colors.purple}, ${colors.purpleLight})`,
        borderRadius: 8,
      }} />
    </div>
    <div style={{ fontSize: 12, color: colors.textMuted, fontFamily: fonts.body, fontWeight: 600 }}>
      Keep up the great work! 🌟
    </div>
  </Card>
);

const MoodTrendCard = () => (
  <Card style={{ gridColumn: "span 1" }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
      <div style={{ fontSize: 11, fontFamily: fonts.body, color: colors.textMuted, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em" }}>
        Past 7 Days Mood Trend
      </div>
      <span style={{
        fontSize: 11, fontFamily: fonts.body, fontWeight: 700,
        padding: "4px 12px", borderRadius: radius.full,
        background: colors.purpleSoft, color: colors.purple,
        border: `1px solid ${colors.lavender}`,
      }}>This Week</span>
    </div>
    <MoodChart />
  </Card>
);

const AppointmentCard = () => {
  const navigate = useNavigate();
  return (
    <Card>
      <div style={{ fontSize: 22, marginBottom: 10 }}>⚡</div>
      <div style={{ fontFamily: fonts.display, fontSize: 16, fontWeight: 700, color: colors.text, marginBottom: 8 }}>
        Proper Appointment
      </div>
      <p style={{ fontSize: 12, fontFamily: fonts.body, color: colors.textMuted, lineHeight: 1.65, marginBottom: 14, fontWeight: 600 }}>
        Build habits, earn badges, stay motivated with daily check-ins and rewards.
      </p>
      <Button variant="secondary" size="sm" onClick={() => navigate("/appointments")}>
        Book Now →
      </Button>
    </Card>
  );
};

const TodayTaskCard = () => (
  <Card>
    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
      <div style={{
        width: 38, height: 38, borderRadius: 10,
        background: colors.purpleSoft, border: `1px solid ${colors.lavender}`,
        display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18,
      }}>📊</div>
      <div>
        <div style={{ fontSize: 10, fontFamily: fonts.body, color: colors.textMuted, fontWeight: 700, textTransform: "uppercase" }}>Today's Task</div>
        <div style={{ fontFamily: fonts.display, fontSize: 14, fontWeight: 700, color: colors.text }}>Dr. Anya Sharma</div>
      </div>
    </div>
    <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 12px", background: colors.bg, borderRadius: 10 }}>
      <span style={{ fontSize: 16 }}>💜</span>
      <span style={{ fontSize: 12, fontFamily: fonts.body, color: colors.textMid, fontWeight: 600 }}>
        Start Guided Breathing Entry
      </span>
    </div>
  </Card>
);

const NextSessionCard = () => (
  <Card>
    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
      <div style={{
        width: 38, height: 38, borderRadius: 10,
        background: colors.purpleSoft, border: `1px solid ${colors.lavender}`,
        display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18,
      }}>📚</div>
      <div>
        <div style={{ fontSize: 10, fontFamily: fonts.body, color: colors.textMuted, fontWeight: 700, textTransform: "uppercase" }}>Your Next Session</div>
        <div style={{ fontFamily: fonts.display, fontSize: 14, fontWeight: 700, color: colors.text }}>Mood Trend</div>
      </div>
    </div>
    <div style={{ fontSize: 11, color: colors.textMuted, fontFamily: fonts.body, fontWeight: 600, marginBottom: 16 }}>
      📍 Monday, Nov 20, 2024 at 10:30am
    </div>
    <Button variant="primary" size="sm" fullWidth>Reschedule</Button>
  </Card>
);

// ─── DASHBOARD PAGE ───────────────────────────────────────────────────────────
const Dashboard = () => (
  <div className="page-enter">
    <HeroBanner />

    {/* Row 1 */}
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1.7fr", gap: 20, marginBottom: 20 }}>
      <StreakCard />
      <MoodTrendCard />
    </div>

    {/* Row 2 */}
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20 }}>
      <AppointmentCard />
      <TodayTaskCard />
      <NextSessionCard />
    </div>
  </div>
);

export default Dashboard;
