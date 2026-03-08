import { useState, useRef, useEffect } from "react";
import { MeditationSVG } from "../components/ui/Brand";
import MoodChart from "../components/ui/MoodChart";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import { colors, fonts, radius, shadows } from "../styles/theme";
import { INITIAL_MESSAGES, AI_REPLIES, CHAT_QUICK_ACTIONS } from "../data";

// ─── Message Bubble ───────────────────────────────────────────────────────────
const Bubble = ({ msg }) => (
  <div style={{
    display: "flex",
    justifyContent: msg.from === "user" ? "flex-end" : "flex-start",
    alignItems: "flex-end", gap: 8,
  }}>
    {msg.from === "ai" && (
      <div style={{
        width: 28, height: 28, borderRadius: 10, flexShrink: 0,
        background: `linear-gradient(135deg, ${colors.purple}, ${colors.purpleLight})`,
        display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14,
      }}>🧘</div>
    )}
    <div style={{
      maxWidth: "72%",
      background: msg.from === "user"
        ? `linear-gradient(135deg, ${colors.purple}, ${colors.purpleLight})`
        : colors.purpleSoft,
      color: msg.from === "user" ? "#fff" : colors.text,
      padding: "10px 14px",
      borderRadius: msg.from === "user" ? "16px 16px 4px 16px" : "16px 16px 16px 4px",
      fontSize: 13, fontFamily: fonts.body, lineHeight: 1.55, fontWeight: 600,
      boxShadow: msg.from === "user" ? `0 4px 14px ${colors.purple}35` : "0 2px 8px rgba(0,0,0,0.06)",
      border: msg.from === "ai" ? `1px solid ${colors.border}` : "none",
    }}>
      {msg.text}
    </div>
  </div>
);

// ─── Chat Panel ───────────────────────────────────────────────────────────────
const ChatPanel = ({ messages, onSend, typing }) => {
  const [input, setInput] = useState("");
  const bottomRef = useRef();

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages, typing]);

  const handleSend = () => {
    if (!input.trim()) return;
    onSend(input);
    setInput("");
  };

  return (
    <div style={{
      width: 390, background: colors.card,
      borderRight: `1.5px solid ${colors.border}`,
      display: "flex", flexDirection: "column",
      boxShadow: "4px 0 20px rgba(124,58,237,0.07)",
    }}>
      {/* Header */}
      <div style={{
        padding: "18px 20px", borderBottom: `1.5px solid ${colors.border}`,
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{
            width: 42, height: 42, borderRadius: 14,
            background: `linear-gradient(135deg, ${colors.purple}, ${colors.purpleLight})`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 20, boxShadow: `0 4px 12px ${colors.purple}40`,
          }}>🧘</div>
          <div>
            <div style={{ fontFamily: fonts.display, fontWeight: 700, fontSize: 15, color: colors.text }}>CalmMind AI</div>
            <div style={{ fontSize: 11, fontFamily: fonts.body, color: colors.green, fontWeight: 700, display: "flex", alignItems: "center", gap: 4 }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: colors.green, display: "inline-block" }} />
              Online • Always here for you
            </div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          {["🔔","☰"].map((ic, i) => (
            <button key={i} style={{
              background: colors.purpleSoft, border: `1px solid ${colors.border}`,
              borderRadius: 10, width: 34, height: 34, cursor: "pointer", fontSize: 16,
            }}>{ic}</button>
          ))}
        </div>
      </div>

      {/* Date stamp */}
      <div style={{ textAlign: "center", padding: "12px 0 4px", fontSize: 11, color: colors.textMuted, fontFamily: fonts.body }}>
        Today, {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
      </div>

      {/* Messages */}
      <div style={{ flex: 1, overflowY: "auto", padding: "8px 16px", display: "flex", flexDirection: "column", gap: 8 }}>
        {messages.map((m, i) => <Bubble key={i} msg={m} />)}
        {typing && (
          <div style={{ display: "flex", alignItems: "flex-end", gap: 8 }}>
            <div style={{
              width: 28, height: 28, borderRadius: 10,
              background: `linear-gradient(135deg, ${colors.purple}, ${colors.purpleLight})`,
              display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14,
            }}>🧘</div>
            <div style={{
              background: colors.purpleSoft, padding: "10px 16px",
              borderRadius: "16px 16px 16px 4px", fontSize: 13,
              color: colors.textMuted, fontFamily: fonts.body,
              border: `1px solid ${colors.border}`,
            }}>Typing…</div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Quick actions */}
      <div style={{ padding: "10px 14px 0", display: "flex", gap: 8 }}>
        {CHAT_QUICK_ACTIONS.map(({ icon, label }) => (
          <button key={label}
            onClick={() => { onSend(label); }}
            style={{
              flex: 1, background: colors.purpleSoft,
              border: `1px solid ${colors.border}`, borderRadius: 10,
              padding: "8px 4px", cursor: "pointer",
              fontFamily: fonts.body, fontSize: 10, fontWeight: 700,
              color: colors.purple,
              display: "flex", flexDirection: "column", alignItems: "center", gap: 4,
            }}>
            <span style={{ fontSize: 16 }}>{icon}</span>{label}
          </button>
        ))}
      </div>

      {/* Input */}
      <div style={{ padding: "12px 14px 16px", display: "flex", gap: 10 }}>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === "Enter" && handleSend()}
          placeholder="Type a message…"
          style={{
            flex: 1, background: colors.bg,
            border: `1.5px solid ${colors.border}`, borderRadius: radius.md,
            padding: "11px 14px", fontSize: 13, color: colors.text, outline: "none",
          }}
        />
        <button onClick={handleSend} style={{
          width: 42, height: 42, borderRadius: radius.md,
          background: `linear-gradient(135deg, ${colors.purple}, ${colors.purpleLight})`,
          border: "none", cursor: "pointer", fontSize: 18,
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: `0 4px 14px ${colors.purple}40`,
        }}>🎤</button>
      </div>
    </div>
  );
};

// ─── Right summary panel ──────────────────────────────────────────────────────
const SummaryPanel = () => (
  <div style={{ flex: 1, overflowY: "auto", padding: "24px 28px", background: colors.bg }}>
    {/* Mini hero */}
    <div style={{
      borderRadius: radius.xl,
      background: "linear-gradient(135deg, #EDE9FE 0%, #F5EFE8 55%, #FEF3C7 100%)",
      marginBottom: 20, padding: "24px 36px",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      boxShadow: "0 4px 20px rgba(124,58,237,0.1)", border: `1px solid ${colors.border}`,
    }}>
      <div>
        <h2 style={{ fontFamily: fonts.display, fontSize: 24, fontWeight: 700, color: colors.text, lineHeight: 1.2, marginBottom: 8 }}>
          How are you<br />feeling today?
        </h2>
        <p style={{ fontFamily: fonts.body, fontSize: 12, color: colors.textMid, fontWeight: 600 }}>
          Your AI companion is always here.
        </p>
      </div>
      <MeditationSVG size={120} />
    </div>

    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
      <Card>
        <div style={{ fontSize: 10, fontFamily: fonts.body, color: colors.textMuted, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10 }}>
          Past 7 Days Mood Trend
        </div>
        <MoodChart />
      </Card>

      <Card>
        <div style={{ fontSize: 10, fontFamily: fonts.body, color: colors.textMuted, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12 }}>
          Your Next Session
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
          <div style={{
            width: 36, height: 36, borderRadius: 10,
            background: colors.purpleSoft, border: `1px solid ${colors.lavender}`,
            display: "flex", alignItems: "center", justifyContent: "center", fontSize: 17,
          }}>📚</div>
          <div>
            <div style={{ fontFamily: fonts.display, fontSize: 13, fontWeight: 700, color: colors.text }}>Mood Trend Review</div>
            <div style={{ fontSize: 11, color: colors.textMuted, fontFamily: fonts.body }}>with Dr. Anya Sharma</div>
          </div>
        </div>
        <div style={{ fontSize: 11, color: colors.textMuted, fontFamily: fonts.body, fontWeight: 600, marginBottom: 14 }}>
          📍 Monday, Nov 20, 2024 at 10:30am
        </div>
        <Button variant="primary" size="sm" fullWidth>Reschedule</Button>
      </Card>
    </div>
  </div>
);

// ─── CHAT PAGE ────────────────────────────────────────────────────────────────
const Chat = () => {
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [typing, setTyping] = useState(false);

  const handleSend = (text) => {
    const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    setMessages(m => [...m, { from: "user", text, time }]);
    setTyping(true);
    setTimeout(() => {
      const reply = AI_REPLIES[Math.floor(Math.random() * AI_REPLIES.length)];
      setMessages(m => [...m, { from: "ai", text: reply, time }]);
      setTyping(false);
    }, 1400);
  };

  return (
    <div className="page-enter" style={{
      display: "flex",
      height: "100%",
      margin: "-24px -28px",   /* bleed out of AppLayout padding */
    }}>
      <ChatPanel messages={messages} onSend={handleSend} typing={typing} />
      <SummaryPanel />
    </div>
  );
};

export default Chat;
