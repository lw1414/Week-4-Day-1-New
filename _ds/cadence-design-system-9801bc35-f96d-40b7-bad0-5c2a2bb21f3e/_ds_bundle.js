/* @ds-bundle: {"format":3,"namespace":"CadenceDesignSystem_9801bc","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"MetricStat","sourcePath":"components/data/MetricStat.jsx"},{"name":"Tag","sourcePath":"components/data/Tag.jsx"},{"name":"Waveform","sourcePath":"components/data/Waveform.jsx"},{"name":"Banner","sourcePath":"components/feedback/Banner.jsx"},{"name":"LiveIndicator","sourcePath":"components/feedback/LiveIndicator.jsx"},{"name":"StatusPill","sourcePath":"components/feedback/StatusPill.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"TopBar","sourcePath":"components/navigation/TopBar.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"74d976b91f16","components/core/Button.jsx":"f73121d8e807","components/core/Card.jsx":"39973cd06c73","components/data/MetricStat.jsx":"6f3e7565bf26","components/data/Tag.jsx":"e6cb5d4dbd95","components/data/Waveform.jsx":"e3f65afaa0a1","components/feedback/Banner.jsx":"5fe125ed9952","components/feedback/LiveIndicator.jsx":"bd8c2a5c5f92","components/feedback/StatusPill.jsx":"6b3ed18d528a","components/forms/Input.jsx":"85aa283b0086","components/navigation/TopBar.jsx":"f2b262402d64","ui_kits/cadence-app/screens.jsx":"e3b90b177f61","ui_kits/cadence-app/widgets.jsx":"4adc1d6d71ac"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.CadenceDesignSystem_9801bc = window.CadenceDesignSystem_9801bc || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Cadence Avatar — round, pill-radius. Image or initials with a soft tint.
 */
function Avatar({
  src = null,
  name = "",
  size = 40,
  style = {},
  ...rest
}) {
  const initials = name.split(" ").map(w => w[0]).filter(Boolean).slice(0, 2).join("").toUpperCase();
  const base = {
    width: size,
    height: size,
    borderRadius: "var(--radius-pill)",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    background: "var(--signal-100)",
    color: "var(--signal-600)",
    fontFamily: "var(--font-mono)",
    fontWeight: 500,
    fontSize: Math.round(size * 0.36),
    flex: "none",
    border: "1px solid rgba(20,19,43,.06)",
    boxSizing: "border-box",
    ...style
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: base
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : initials || "?");
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Cadence Button — primary actions in Dawn, calm and rounded.
 * Variants: primary | secondary | ghost. Sizes: lg | md | sm.
 */
function Button({
  variant = "primary",
  size = "md",
  disabled = false,
  icon = null,
  iconRight = null,
  children,
  onClick,
  type = "button",
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const heights = {
    lg: 48,
    md: 40,
    sm: 32
  };
  const fontSizes = {
    lg: 15,
    md: 15,
    sm: 14
  };
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "var(--space-2)",
    height: heights[size],
    padding: size === "sm" ? "0 var(--space-4)" : "0 var(--space-5)",
    borderRadius: "var(--radius-lg)",
    fontFamily: "var(--font-body)",
    fontWeight: 600,
    fontSize: fontSizes[size],
    lineHeight: 1,
    cursor: disabled ? "not-allowed" : "pointer",
    border: "1px solid transparent",
    transition: "background .15s ease, color .15s ease, border-color .15s ease, transform .08s ease",
    opacity: disabled ? 0.4 : 1,
    whiteSpace: "nowrap",
    transform: active && !disabled ? "scale(0.97)" : "scale(1)",
    outline: "none",
    boxSizing: "border-box"
  };
  const variants = {
    primary: {
      background: hover && !disabled ? "var(--dawn-600)" : "var(--dawn-500)",
      color: "var(--night-900)"
    },
    secondary: {
      background: hover && !disabled ? "var(--paper-100)" : "transparent",
      color: "var(--text-strong)",
      borderColor: "var(--ink-300)"
    },
    ghost: {
      background: hover && !disabled ? "var(--accent-ghost-hover)" : "transparent",
      color: "var(--accent-ghost-text)"
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    onFocus: e => {
      e.currentTarget.style.boxShadow = "0 0 0 2px var(--bg-page), 0 0 0 4px var(--focus-ring)";
    },
    onBlur: e => {
      e.currentTarget.style.boxShadow = "none";
    },
    style: {
      ...base,
      ...variants[variant],
      ...style
    }
  }, rest), icon, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Cadence Card — the workhorse surface for signals and insights.
 * Light: white + Ink/200 border + soft shadow. Night: Night/800 + Night/700 border.
 */
function Card({
  night = false,
  interactive = false,
  padding = "var(--space-6)",
  children,
  onClick,
  style = {},
  className = "",
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const base = {
    background: night ? "var(--night-800)" : "var(--white)",
    border: `1px solid ${night ? "var(--night-700)" : "var(--ink-200)"}`,
    borderRadius: "var(--radius-xl)",
    padding,
    boxShadow: night ? "none" : interactive && hover ? "var(--shadow-card-hover)" : "var(--shadow-card)",
    transition: "box-shadow .18s ease, transform .18s ease",
    transform: interactive && hover ? "translateY(-2px)" : "translateY(0)",
    cursor: interactive ? "pointer" : "default",
    boxSizing: "border-box",
    color: night ? "var(--paper-50)" : "var(--text-body)",
    ...style
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    className: className,
    onClick: onClick,
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false),
    style: base
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/data/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Cadence Tag — signal category chip. Paper bg, Ink text, radius 8px.
 */
function Tag({
  children,
  icon = null,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-2)",
      height: 26,
      padding: "0 var(--space-3)",
      borderRadius: "var(--radius-sm)",
      background: "var(--paper-100)",
      color: "var(--ink-500)",
      fontFamily: "var(--font-body)",
      fontSize: 13,
      fontWeight: 500,
      lineHeight: 1,
      boxSizing: "border-box",
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      color: "var(--ink-500)"
    }
  }, icon), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Tag.jsx", error: String((e && e.message) || e) }); }

// components/data/Waveform.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Cadence Waveform — the signature living biosignal line. A single breathing
 * pulse, Signal/400 crossing toward Dawn at the apex. Use sparingly.
 */
function Waveform({
  width = 240,
  height = 56,
  animate = true,
  strokeWidth = 2.5,
  color = "var(--signal-400)",
  style = {},
  ...rest
}) {
  const gid = React.useId ? React.useId().replace(/:/g, "") : "wave";
  // A calm repeating breath with one taller pulse peak.
  const d = "M0 28 H40 L52 28 L62 28 L70 14 L78 28 L120 28 L132 28 L142 6 L154 50 L164 28 L210 28 L222 28 L232 20 L240 28";
  const len = 520;
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 240 56",
    width: width,
    height: height,
    fill: "none",
    preserveAspectRatio: "none",
    style: {
      display: "block",
      overflow: "visible",
      ...style
    }
  }, rest), animate && /*#__PURE__*/React.createElement("style", null, `@keyframes cad-wave-draw-${gid} {
          from { stroke-dashoffset: ${len}; }
          to { stroke-dashoffset: 0; }
        }`), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: `grad-${gid}`,
    x1: "0",
    y1: "28",
    x2: "240",
    y2: "28",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: color
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "80%",
    stopColor: color
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "var(--dawn-500)"
  }))), /*#__PURE__*/React.createElement("path", {
    d: d,
    stroke: `url(#grad-${gid})`,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: animate ? {
      strokeDasharray: len,
      animation: `cad-wave-draw-${gid} 2.4s ease-out forwards`
    } : undefined
  }));
}
Object.assign(__ds_scope, { Waveform });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Waveform.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Banner.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const VARIANTS = {
  insight: {
    bg: "var(--signal-100)",
    bar: "var(--signal-500)",
    text: "var(--signal-600)"
  },
  info: {
    bg: "var(--info-soft)",
    bar: "var(--info-solid)",
    text: "var(--info-solid)"
  },
  caution: {
    bg: "var(--caution-soft)",
    bar: "var(--caution-solid)",
    text: "var(--caution-solid)"
  },
  alert: {
    bg: "var(--alert-soft)",
    bar: "var(--alert-solid)",
    text: "var(--alert-solid)"
  },
  positive: {
    bg: "var(--positive-soft)",
    bar: "var(--positive-solid)",
    text: "var(--positive-solid)"
  }
};

/**
 * Cadence Banner — full-width message with a left accent bar, icon, title & body.
 */
function Banner({
  variant = "insight",
  icon = null,
  title,
  children,
  onDismiss = null,
  style = {},
  ...rest
}) {
  const v = VARIANTS[variant] || VARIANTS.insight;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: "var(--space-3)",
      background: v.bg,
      borderRadius: "var(--radius-lg)",
      borderLeft: `4px solid ${v.bar}`,
      padding: "var(--space-4) var(--space-5)",
      boxSizing: "border-box",
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      color: v.text,
      display: "inline-flex",
      flex: "none",
      marginTop: 1
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14,
      lineHeight: "22px",
      fontWeight: 600,
      color: "var(--night-900)"
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14,
      lineHeight: "22px",
      color: "var(--ink-500)",
      marginTop: title ? 2 : 0
    }
  }, children)), onDismiss && /*#__PURE__*/React.createElement("button", {
    onClick: onDismiss,
    "aria-label": "Dismiss",
    style: {
      border: "none",
      background: "transparent",
      cursor: "pointer",
      color: "var(--ink-500)",
      fontSize: 18,
      lineHeight: 1,
      padding: 2,
      flex: "none"
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Banner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Banner.jsx", error: String((e && e.message) || e) }); }

// components/feedback/LiveIndicator.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Cadence LiveIndicator — a Signal/400 dot with a slow pulse for real-time tracking.
 */
function LiveIndicator({
  label = "Live",
  size = 6,
  showLabel = true,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-2)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("style", null, `@keyframes cad-live-pulse {
        0% { box-shadow: 0 0 0 0 rgba(111,227,201,.55); }
        70% { box-shadow: 0 0 0 7px rgba(111,227,201,0); }
        100% { box-shadow: 0 0 0 0 rgba(111,227,201,0); }
      }`), /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      borderRadius: 999,
      background: "var(--signal-400)",
      animation: "cad-live-pulse 2s ease-out infinite",
      flex: "none"
    }
  }), showLabel && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      fontWeight: 500,
      letterSpacing: "1px",
      textTransform: "uppercase",
      color: "var(--signal-600)"
    }
  }, label));
}
Object.assign(__ds_scope, { LiveIndicator });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/LiveIndicator.jsx", error: String((e && e.message) || e) }); }

// components/feedback/StatusPill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  positive: {
    bg: "var(--positive-soft)",
    fg: "var(--positive-solid)"
  },
  caution: {
    bg: "var(--caution-soft)",
    fg: "var(--caution-solid)"
  },
  alert: {
    bg: "var(--alert-soft)",
    fg: "var(--alert-solid)"
  },
  info: {
    bg: "var(--info-soft)",
    fg: "var(--info-solid)"
  },
  neutral: {
    bg: "var(--paper-100)",
    fg: "var(--ink-500)"
  }
};

/**
 * Cadence StatusPill — pill-radius capsule, Mono 12 uppercase, calm Status pair.
 */
function StatusPill({
  tone = "neutral",
  dot = false,
  children,
  style = {},
  ...rest
}) {
  const t = TONES[tone] || TONES.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-2)",
      height: 24,
      padding: "0 var(--space-3)",
      borderRadius: "var(--radius-pill)",
      background: t.bg,
      color: t.fg,
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      fontWeight: 500,
      letterSpacing: "0.5px",
      textTransform: "uppercase",
      lineHeight: 1,
      boxSizing: "border-box",
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 999,
      background: t.fg
    }
  }), children);
}
Object.assign(__ds_scope, { StatusPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/StatusPill.jsx", error: String((e && e.message) || e) }); }

// components/data/MetricStat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Cadence MetricStat — eyebrow label, mono metric, optional trend pill.
 */
function MetricStat({
  label,
  value,
  unit = null,
  trend = null,
  trendTone = "neutral",
  size = "md",
  style = {},
  ...rest
}) {
  const metricSize = size === "xl" ? 40 : 24;
  const metricLine = size === "xl" ? "44px" : "28px";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)",
      ...style
    }
  }, rest), label && /*#__PURE__*/React.createElement("span", {
    className: "cad-eyebrow",
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      fontWeight: 500,
      letterSpacing: "1.5px",
      textTransform: "uppercase",
      color: "var(--text-secondary)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: "var(--space-3)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: metricSize,
      lineHeight: metricLine,
      fontWeight: 500,
      color: "var(--text-strong)"
    }
  }, value, unit && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: Math.round(metricSize * 0.45),
      color: "var(--text-secondary)",
      marginLeft: 4
    }
  }, unit)), trend && /*#__PURE__*/React.createElement(__ds_scope.StatusPill, {
    tone: trendTone
  }, trend)));
}
Object.assign(__ds_scope, { MetricStat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/MetricStat.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Cadence Input — 48px field, Signal focus ring, calm error treatment.
 */
function Input({
  label = null,
  helper = null,
  error = null,
  disabled = false,
  type = "text",
  value,
  defaultValue,
  onChange,
  placeholder = "",
  id,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const reactId = React.useId ? React.useId() : undefined;
  const fieldId = id || reactId;
  const hasError = Boolean(error);
  const borderColor = hasError ? "var(--alert-solid)" : focus ? "var(--signal-500)" : "var(--ink-300)";
  const field = {
    width: "100%",
    height: 48,
    padding: "0 var(--space-4)",
    borderRadius: "var(--radius-md)",
    border: `1px solid ${borderColor}`,
    background: disabled ? "var(--paper-100)" : "var(--white)",
    color: disabled ? "var(--ink-400)" : "var(--text-body)",
    fontFamily: "var(--font-body)",
    fontSize: 16,
    lineHeight: "26px",
    boxShadow: focus && !hasError ? "0 0 0 3px rgba(111,227,201,.30)" : "none",
    outline: "none",
    transition: "border-color .15s ease, box-shadow .15s ease",
    boxSizing: "border-box",
    cursor: disabled ? "not-allowed" : "text",
    ...style
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)"
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      lineHeight: "18px",
      fontWeight: 500,
      color: "var(--ink-500)"
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    type: type,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    placeholder: placeholder,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: field
  }, rest)), (helper || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14,
      lineHeight: "22px",
      color: hasError ? "var(--alert-solid)" : "var(--ink-500)"
    }
  }, error || helper));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TopBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function DefaultLogo({
  night
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "28",
    height: "28",
    viewBox: "0 0 160 160",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "tb-mark",
    x1: "24",
    y1: "80",
    x2: "136",
    y2: "80",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#6FE3C9"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "70%",
    stopColor: "#6FE3C9"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#FF9E7A"
  }))), /*#__PURE__*/React.createElement("circle", {
    cx: "80",
    cy: "80",
    r: "54",
    stroke: night ? "#46436A" : "#E7E2DC",
    strokeWidth: "8",
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M40 88 H66 L78 56 L92 104 L102 80 H120",
    stroke: "url(#tb-mark)",
    strokeWidth: "9",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 22,
      letterSpacing: "-0.5px",
      color: night ? "var(--paper-50)" : "var(--night-900)"
    }
  }, "Cadence"));
}

/**
 * Cadence TopBar — 64px sticky header. Logo · nav links · primary CTA + avatar.
 */
function TopBar({
  night = false,
  logo = null,
  links = [],
  activeLink = null,
  onNavClick = () => {},
  cta = null,
  avatar = null,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-6)",
      height: 64,
      padding: "0 var(--space-6)",
      background: night ? "var(--night-900)" : "var(--paper-50)",
      borderBottom: `1px solid ${night ? "var(--night-700)" : "var(--ink-200)"}`,
      position: "sticky",
      top: 0,
      zIndex: 20,
      boxSizing: "border-box",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "none"
    }
  }, logo || /*#__PURE__*/React.createElement(DefaultLogo, {
    night: night
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-6)",
      marginLeft: "auto"
    }
  }, links.map(l => {
    const label = typeof l === "string" ? l : l.label;
    const isActive = activeLink === label;
    return /*#__PURE__*/React.createElement("button", {
      key: label,
      onClick: () => onNavClick(label),
      style: {
        border: "none",
        background: "transparent",
        cursor: "pointer",
        fontFamily: "var(--font-body)",
        fontSize: 15,
        fontWeight: 500,
        color: isActive ? "var(--dawn-600)" : night ? "var(--lilac-400)" : "var(--ink-500)",
        padding: "4px 0",
        borderBottom: isActive ? "2px solid var(--dawn-500)" : "2px solid transparent",
        lineHeight: "20px"
      }
    }, label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-4)",
      flex: "none"
    }
  }, cta, avatar));
}
Object.assign(__ds_scope, { TopBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TopBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/cadence-app/screens.jsx
try { (() => {
// Cadence app — screens. Each screen is a function taking { nav } to route.
const CADs = window.CadenceDesignSystem_9801bc;
function ScreenScroll({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      padding: "0 20px 28px",
      WebkitOverflowScrolling: "touch"
    }
  }, children);
}
function ScreenHeader({
  eyebrow,
  title,
  right = null
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      padding: "8px 0 20px"
    }
  }, /*#__PURE__*/React.createElement("div", null, eyebrow && /*#__PURE__*/React.createElement("p", {
    className: "cad-eyebrow",
    style: {
      margin: "0 0 4px"
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h1", {
    className: "cad-display-m",
    style: {
      fontSize: 30,
      lineHeight: "34px"
    }
  }, title)), right);
}

// ============ TODAY ============
function TodayScreen({
  nav
}) {
  const {
    Banner,
    Card,
    Waveform
  } = CADs;
  return /*#__PURE__*/React.createElement(ScreenScroll, null, /*#__PURE__*/React.createElement(ScreenHeader, {
    eyebrow: "Tuesday \xB7 June 16",
    title: "Good morning, Maya"
  }), /*#__PURE__*/React.createElement(Card, {
    interactive: true,
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 16,
      paddingTop: 28,
      paddingBottom: 20
    }
  }, /*#__PURE__*/React.createElement(ReadinessRing, {
    value: 86,
    sub: "Ready to go"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      opacity: 0.9
    }
  }, /*#__PURE__*/React.createElement(Waveform, {
    width: 300,
    height: 44
  })), /*#__PURE__*/React.createElement("p", {
    className: "cad-body-s",
    style: {
      textAlign: "center",
      color: "var(--ink-500)",
      maxWidth: 280
    }
  }, "You slept steadily and your heart settled early. A good day to push a little.")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 16
    }
  }), /*#__PURE__*/React.createElement("div", {
    onClick: () => nav("Insight"),
    style: {
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(Banner, {
    variant: "insight",
    icon: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "sparkles",
      style: {
        width: 20,
        height: 20
      }
    }),
    title: "Your recovery is trending up"
  }, "Three nights of steadier sleep. Tap to see what changed.")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 20
    }
  }), /*#__PURE__*/React.createElement("p", {
    className: "cad-eyebrow",
    style: {
      margin: "0 0 12px"
    }
  }, "Last night's signals"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(SignalCard, {
    icon: "moon",
    label: "Sleep",
    value: "7h 48m",
    trend: "+22m",
    trendTone: "positive"
  }), /*#__PURE__*/React.createElement(SignalCard, {
    icon: "heart",
    label: "Resting HR",
    value: "52",
    unit: "bpm",
    trend: "-3 vs base",
    trendTone: "positive"
  }), /*#__PURE__*/React.createElement(SignalCard, {
    icon: "wind",
    label: "Breath",
    value: "13.6",
    unit: "br/min",
    trend: "Steady",
    trendTone: "neutral"
  }), /*#__PURE__*/React.createElement(SignalCard, {
    icon: "activity",
    label: "HRV",
    value: "64",
    unit: "ms",
    trend: "+8",
    trendTone: "positive"
  })));
}

// ============ SLEEP ============
function SleepScreen({
  nav
}) {
  const {
    Card,
    StatusPill,
    Tag
  } = CADs;
  const stages = [{
    stage: "Awake",
    pct: 6
  }, {
    stage: "Light",
    pct: 22
  }, {
    stage: "Deep",
    pct: 16
  }, {
    stage: "REM",
    pct: 14
  }, {
    stage: "Light",
    pct: 18
  }, {
    stage: "Deep",
    pct: 10
  }, {
    stage: "REM",
    pct: 14
  }];
  return /*#__PURE__*/React.createElement(ScreenScroll, null, /*#__PURE__*/React.createElement(ScreenHeader, {
    eyebrow: "Last night",
    title: "Sleep",
    right: /*#__PURE__*/React.createElement(Tag, {
      icon: /*#__PURE__*/React.createElement("i", {
        "data-lucide": "moon",
        style: {
          width: 14,
          height: 14
        }
      })
    }, "11:08p\u20136:56a")
  }), /*#__PURE__*/React.createElement(Card, {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "cad-eyebrow",
    style: {
      margin: 0
    }
  }, "Sleep Score"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 56,
      lineHeight: "56px",
      fontWeight: 500,
      color: "var(--night-900)"
    }
  }, "88"), /*#__PURE__*/React.createElement(StatusPill, {
    tone: "positive",
    dot: true
  }, "Restorative")), /*#__PURE__*/React.createElement("p", {
    className: "cad-body-s",
    style: {
      color: "var(--ink-500)",
      margin: "4px 0 0"
    }
  }, "More deep sleep than your two-week average. Your bedtime was on rhythm.")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 16
    }
  }), /*#__PURE__*/React.createElement(Card, {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "cad-eyebrow",
    style: {
      margin: 0
    }
  }, "Stages"), /*#__PURE__*/React.createElement(StageTimeline, {
    stages: stages
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 16
    }
  }), /*#__PURE__*/React.createElement(Card, {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "cad-eyebrow",
    style: {
      margin: 0
    }
  }, "Consistency \xB7 7 nights"), /*#__PURE__*/React.createElement(StatusPill, {
    tone: "positive"
  }, "+12%")), /*#__PURE__*/React.createElement(TrendChart, {
    data: [78, 74, 80, 72, 84, 82, 88],
    baseline: 80,
    stroke: "var(--signal-500)",
    fill: "var(--signal-100)"
  }), /*#__PURE__*/React.createElement("p", {
    className: "cad-body-s",
    style: {
      color: "var(--ink-500)",
      margin: 0
    }
  }, "Dotted line is your personal normal.")));
}

// ============ HEART & BREATH ============
function HeartScreen({
  nav
}) {
  const {
    Card,
    StatusPill
  } = CADs;
  return /*#__PURE__*/React.createElement(ScreenScroll, null, /*#__PURE__*/React.createElement(ScreenHeader, {
    eyebrow: "Overnight",
    title: "Heart & Breath"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(SignalCard, {
    icon: "heart",
    label: "Resting HR",
    value: "52",
    unit: "bpm",
    trend: "-3 vs base",
    trendTone: "positive",
    showWave: true
  }), /*#__PURE__*/React.createElement(SignalCard, {
    icon: "wind",
    label: "Respiration",
    value: "13.6",
    unit: "br/min",
    trend: "Steady",
    trendTone: "neutral"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 16
    }
  }), /*#__PURE__*/React.createElement(Card, {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "cad-eyebrow",
    style: {
      margin: 0
    }
  }, "HRV trend \xB7 7 nights"), /*#__PURE__*/React.createElement(StatusPill, {
    tone: "positive"
  }, "Recovering")), /*#__PURE__*/React.createElement(TrendChart, {
    data: [44, 48, 46, 52, 58, 60, 64],
    baseline: 50
  }), /*#__PURE__*/React.createElement("p", {
    className: "cad-body-s",
    style: {
      color: "var(--ink-500)",
      margin: 0
    }
  }, "Higher variability often follows good rest and lighter training loads.")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 16
    }
  }), /*#__PURE__*/React.createElement(Card, {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "cad-eyebrow",
    style: {
      margin: 0
    }
  }, "Resting heart rate \xB7 overnight"), /*#__PURE__*/React.createElement(TrendChart, {
    data: [58, 56, 54, 53, 52, 51, 52, 54],
    stroke: "var(--dawn-500)",
    fill: "var(--dawn-100)"
  }), /*#__PURE__*/React.createElement("p", {
    className: "cad-body-s",
    style: {
      color: "var(--ink-500)",
      margin: 0
    }
  }, "Settled within 40 minutes of falling asleep.")));
}

// ============ INSIGHT DETAIL ============
function InsightScreen({
  nav
}) {
  const {
    Card,
    Button,
    Banner,
    StatusPill
  } = CADs;
  return /*#__PURE__*/React.createElement(ScreenScroll, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "8px 0 16px"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => nav("Today"),
    style: {
      border: "none",
      background: "transparent",
      cursor: "pointer",
      display: "inline-flex",
      color: "var(--night-900)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-left",
    style: {
      width: 22,
      height: 22
    }
  })), /*#__PURE__*/React.createElement("span", {
    className: "cad-eyebrow"
  }, "Insight")), /*#__PURE__*/React.createElement("h1", {
    className: "cad-display-m",
    style: {
      fontSize: 30,
      lineHeight: "36px",
      marginBottom: 8
    }
  }, "Your recovery is trending up"), /*#__PURE__*/React.createElement("p", {
    className: "cad-lead",
    style: {
      color: "var(--ink-500)",
      marginBottom: 20
    }
  }, "Over the last three nights, your heart rate variability rose while resting heart rate held low \u2014 a pattern that usually means your body is recovering well."), /*#__PURE__*/React.createElement(Card, {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "cad-eyebrow",
    style: {
      margin: 0
    }
  }, "What changed"), /*#__PURE__*/React.createElement(TrendChart, {
    data: [44, 48, 46, 52, 58, 60, 64],
    baseline: 50
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(StatusPill, {
    tone: "positive",
    dot: true
  }, "HRV +14ms"), /*#__PURE__*/React.createElement(StatusPill, {
    tone: "positive"
  }, "RHR -3 bpm"))), /*#__PURE__*/React.createElement(Card, {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      color: "var(--caution-solid)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "eye",
    style: {
      width: 18,
      height: 18
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      letterSpacing: "1.5px",
      textTransform: "uppercase"
    }
  }, "What to watch")), /*#__PURE__*/React.createElement("p", {
    className: "cad-body",
    style: {
      color: "var(--night-900)",
      margin: 0
    }
  }, "If resting heart rate climbs more than 5 bpm above your normal for two nights, that's a gentle signal to ease off and rest.")), /*#__PURE__*/React.createElement(Banner, {
    variant: "info",
    icon: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "stethoscope",
      style: {
        width: 20,
        height: 20
      }
    }),
    title: "Bring this to your clinician"
  }, "Cadence spots patterns \u2014 it doesn't diagnose. Share this trend at your next visit."), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 20
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    style: {
      width: "100%"
    },
    icon: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "share-2",
      style: {
        width: 18,
        height: 18
      }
    }),
    onClick: () => nav("Report")
  }, "Add to weekly report"));
}

// ============ CONNECT ============
function ConnectScreen({
  nav,
  onConnected
}) {
  const {
    Card,
    Button,
    Input
  } = CADs;
  const [linking, setLinking] = React.useState(null);
  const devices = [{
    id: "ring",
    name: "Cadence Ring",
    icon: "circle-dot",
    note: "Pairs over Bluetooth"
  }, {
    id: "phone",
    name: "This phone",
    icon: "smartphone",
    note: "Motion & microphone at night"
  }, {
    id: "watch",
    name: "Apple Watch",
    icon: "watch",
    note: "Heart & sleep via Health"
  }];
  return /*#__PURE__*/React.createElement(ScreenScroll, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      padding: "32px 0 24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 64,
      borderRadius: 20,
      background: "var(--signal-100)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "bluetooth",
    style: {
      width: 30,
      height: 30,
      color: "var(--signal-600)"
    }
  })), /*#__PURE__*/React.createElement("h1", {
    className: "cad-display-m",
    style: {
      fontSize: 28,
      lineHeight: "34px",
      marginBottom: 8
    }
  }, "Connect a device to start your baseline"), /*#__PURE__*/React.createElement("p", {
    className: "cad-body",
    style: {
      color: "var(--ink-500)",
      maxWidth: 300
    }
  }, "No new hardware needed. Cadence learns your normal over your first few nights.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, devices.map(d => /*#__PURE__*/React.createElement(Card, {
    key: d.id,
    interactive: true,
    onClick: () => setLinking(d.id),
    padding: "var(--space-4)",
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      borderColor: linking === d.id ? "var(--signal-500)" : "var(--ink-200)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 12,
      background: "var(--paper-100)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": d.icon,
    style: {
      width: 22,
      height: 22,
      color: "var(--night-700)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "cad-body",
    style: {
      fontWeight: 600,
      margin: 0
    }
  }, d.name), /*#__PURE__*/React.createElement("p", {
    className: "cad-body-s",
    style: {
      color: "var(--ink-500)",
      margin: 0
    }
  }, d.note)), /*#__PURE__*/React.createElement("i", {
    "data-lucide": linking === d.id ? "check-circle-2" : "chevron-right",
    style: {
      width: 20,
      height: 20,
      color: linking === d.id ? "var(--signal-600)" : "var(--ink-400)"
    }
  })))), linking && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Pairing code",
    placeholder: "6-digit code from your device",
    helper: "Hold the sensor near your phone."
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    style: {
      width: "100%"
    },
    onClick: onConnected
  }, "Pair & start baseline")));
}

// ============ WEEKLY REPORT ============
function ReportScreen({
  nav
}) {
  const {
    Card,
    Button,
    StatusPill,
    Avatar
  } = CADs;
  const rows = [{
    label: "Avg sleep",
    value: "7h 41m",
    trend: "+18m",
    tone: "positive"
  }, {
    label: "Resting HR",
    value: "53 bpm",
    trend: "-2",
    tone: "positive"
  }, {
    label: "HRV",
    value: "61 ms",
    trend: "+9",
    tone: "positive"
  }, {
    label: "Respiration",
    value: "13.8 br/min",
    trend: "Steady",
    tone: "neutral"
  }];
  return /*#__PURE__*/React.createElement(ScreenScroll, null, /*#__PURE__*/React.createElement(ScreenHeader, {
    eyebrow: "Jun 9 \u2013 Jun 15",
    title: "Weekly report"
  }), /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 0,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cadence-night",
    style: {
      background: "var(--night-900)",
      padding: "20px 22px",
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Maya Okafor",
    size: 40
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "cad-body",
    style: {
      color: "var(--paper-50)",
      fontWeight: 600,
      margin: 0
    }
  }, "Maya Okafor"), /*#__PURE__*/React.createElement("p", {
    className: "cad-body-s",
    style: {
      color: "var(--lilac-200)",
      margin: 0
    }
  }, "For your June 18 visit")), /*#__PURE__*/React.createElement("i", {
    "data-lucide": "shield",
    style: {
      width: 20,
      height: 20,
      color: "var(--signal-400)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 6
    }
  }, rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: r.label,
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "14px 16px",
      borderBottom: i < rows.length - 1 ? "1px solid var(--ink-200)" : "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      letterSpacing: "1px",
      textTransform: "uppercase",
      color: "var(--ink-500)"
    }
  }, r.label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 16,
      fontWeight: 500,
      color: "var(--night-900)"
    }
  }, r.value), /*#__PURE__*/React.createElement(StatusPill, {
    tone: r.tone
  }, r.trend)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 16
    }
  }), /*#__PURE__*/React.createElement("p", {
    className: "cad-body-s",
    style: {
      color: "var(--ink-500)",
      textAlign: "center",
      margin: "0 0 16px"
    }
  }, "Cadence describes shifts relative to your own baseline. It does not diagnose."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    style: {
      width: "100%"
    },
    icon: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "share-2",
      style: {
        width: 18,
        height: 18
      }
    })
  }, "Share with clinician"));
}
Object.assign(window, {
  TodayScreen,
  SleepScreen,
  HeartScreen,
  InsightScreen,
  ConnectScreen,
  ReportScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/cadence-app/screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/cadence-app/widgets.jsx
try { (() => {
// Cadence app — shared widgets (charts, gauges, chrome).
// Reads brand primitives from the compiled bundle namespace.
const CAD = window.CadenceDesignSystem_9801bc;

// ---- iOS-style status bar ----
function StatusBar({
  night = false
}) {
  const color = night ? "var(--paper-50)" : "var(--night-900)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 22px 0 26px",
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 600,
      fontSize: 15,
      color
    }
  }, "6:42"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      color
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "signal",
    style: {
      width: 16,
      height: 16
    }
  }), /*#__PURE__*/React.createElement("i", {
    "data-lucide": "wifi",
    style: {
      width: 16,
      height: 16
    }
  }), /*#__PURE__*/React.createElement("i", {
    "data-lucide": "battery-full",
    style: {
      width: 20,
      height: 20
    }
  })));
}

// ---- Readiness ring: arc gauge with metric center ----
function ReadinessRing({
  value = 86,
  label = "Readiness",
  size = 168,
  sub = "Ready to go"
}) {
  const stroke = 12;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const pct = Math.max(0, Math.min(100, value)) / 100;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: size,
      height: size
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    style: {
      transform: "rotate(-90deg)"
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    stroke: "var(--ink-200)",
    strokeWidth: stroke
  }), /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    stroke: "var(--signal-500)",
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeDasharray: c,
    strokeDashoffset: c * (1 - pct),
    style: {
      transition: "stroke-dashoffset 1s cubic-bezier(.4,0,.2,1)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 44,
      lineHeight: "44px",
      fontWeight: 500,
      color: "var(--night-900)"
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "1.5px",
      textTransform: "uppercase",
      color: "var(--signal-600)"
    }
  }, sub)));
}

// ---- Trend chart: single line, dawn stroke, soft area, dotted baseline ----
function TrendChart({
  data = [],
  baseline = null,
  width = 320,
  height = 120,
  stroke = "var(--dawn-500)",
  fill = "var(--dawn-100)"
}) {
  const pad = 8;
  const min = Math.min(...data) - 2,
    max = Math.max(...data) + 2;
  const xs = i => pad + i / (data.length - 1) * (width - pad * 2);
  const ys = v => height - pad - (v - min) / (max - min) * (height - pad * 2);
  const line = data.map((v, i) => `${i === 0 ? "M" : "L"}${xs(i).toFixed(1)} ${ys(v).toFixed(1)}`).join(" ");
  const area = `${line} L${xs(data.length - 1).toFixed(1)} ${height - pad} L${xs(0).toFixed(1)} ${height - pad} Z`;
  const baseY = baseline != null ? ys(baseline) : null;
  return /*#__PURE__*/React.createElement("svg", {
    width: "100%",
    viewBox: `0 0 ${width} ${height}`,
    style: {
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: area,
    fill: fill,
    opacity: "0.6"
  }), baseY != null && /*#__PURE__*/React.createElement("line", {
    x1: pad,
    y1: baseY,
    x2: width - pad,
    y2: baseY,
    stroke: "var(--ink-400)",
    strokeWidth: "1.5",
    strokeDasharray: "3 4"
  }), /*#__PURE__*/React.createElement("path", {
    d: line,
    fill: "none",
    stroke: stroke,
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), data.map((v, i) => i === data.length - 1 && /*#__PURE__*/React.createElement("circle", {
    key: i,
    cx: xs(i),
    cy: ys(v),
    r: "4",
    fill: stroke
  })));
}

// ---- Sleep stage timeline ----
function StageTimeline({
  stages = []
}) {
  // stages: [{ stage: 'Awake'|'REM'|'Light'|'Deep', pct: number }]
  const colors = {
    Awake: "var(--dawn-300)",
    REM: "var(--lilac-400)",
    Light: "var(--signal-400)",
    Deep: "var(--signal-600)"
  };
  const order = ["Awake", "REM", "Light", "Deep"];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      height: 64,
      gap: 2,
      borderRadius: 8,
      overflow: "hidden"
    }
  }, stages.map((s, i) => {
    const top = order.indexOf(s.stage);
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        width: `${s.pct}%`,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: `${100 - top * 24}%`,
        background: colors[s.stage],
        borderRadius: "3px 3px 0 0"
      }
    }));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      flexWrap: "wrap"
    }
  }, order.map(s => /*#__PURE__*/React.createElement("span", {
    key: s,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      fontFamily: "var(--font-body)",
      fontSize: 12,
      color: "var(--ink-500)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 2,
      background: colors[s]
    }
  }), s))));
}

// ---- Bottom tab bar ----
function BottomNav({
  active,
  onChange
}) {
  const tabs = [{
    id: "Today",
    icon: "sunrise"
  }, {
    id: "Sleep",
    icon: "moon"
  }, {
    id: "Heart",
    icon: "heart"
  }, {
    id: "Report",
    icon: "file-text"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flex: "none",
      height: 76,
      paddingBottom: 14,
      borderTop: "1px solid var(--ink-200)",
      background: "var(--paper-50)"
    }
  }, tabs.map(t => {
    const on = active === t.id;
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      onClick: () => onChange(t.id),
      style: {
        flex: 1,
        border: "none",
        background: "transparent",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
        paddingTop: 12,
        color: on ? "var(--dawn-600)" : "var(--ink-400)"
      }
    }, /*#__PURE__*/React.createElement("i", {
      "data-lucide": t.icon,
      style: {
        width: 22,
        height: 22
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-body)",
        fontSize: 11,
        fontWeight: on ? 600 : 500
      }
    }, t.id));
  }));
}

// ---- Signal card: eyebrow → metric → inline waveform → trend ----
function SignalCard({
  icon,
  label,
  value,
  unit,
  trend,
  trendTone,
  showWave = false
}) {
  const {
    Card,
    StatusPill,
    Waveform
  } = CAD;
  return /*#__PURE__*/React.createElement(Card, {
    padding: "var(--space-5)",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      color: "var(--ink-500)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon,
    style: {
      width: 16,
      height: 16
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      letterSpacing: "1.5px",
      textTransform: "uppercase"
    }
  }, label)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 28,
      fontWeight: 500,
      color: "var(--night-900)"
    }
  }, value), unit && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 14,
      color: "var(--ink-500)"
    }
  }, unit)), showWave && /*#__PURE__*/React.createElement(Waveform, {
    width: 140,
    height: 28,
    strokeWidth: 2,
    animate: false
  }), trend && /*#__PURE__*/React.createElement(StatusPill, {
    tone: trendTone
  }, trend));
}
Object.assign(window, {
  StatusBar,
  ReadinessRing,
  TrendChart,
  StageTimeline,
  BottomNav,
  SignalCard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/cadence-app/widgets.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.MetricStat = __ds_scope.MetricStat;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Waveform = __ds_scope.Waveform;

__ds_ns.Banner = __ds_scope.Banner;

__ds_ns.LiveIndicator = __ds_scope.LiveIndicator;

__ds_ns.StatusPill = __ds_scope.StatusPill;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.TopBar = __ds_scope.TopBar;

})();
