/* =========================================================
   My Cookbook — dependency-free app logic
   ========================================================= */

/* ---------- Icons ---------- */
const ICONS = {
  watermelon: (s) => `<svg width="${s}" height="${s}" viewBox="0 0 64 64" fill="none" aria-hidden="true">
    <path d="M6 30 A26 26 0 0 1 58 30 Z" fill="#4B6A45"/>
    <path d="M10 30 A22 22 0 0 1 54 30 Z" fill="#E9E2CE"/>
    <path d="M14 30 A18 18 0 0 1 50 30 Z" fill="#C1442E"/>
    <circle cx="26" cy="24" r="1.6" fill="#2B3226"/><circle cx="34" cy="22" r="1.6" fill="#2B3226"/>
    <circle cx="30" cy="27" r="1.6" fill="#2B3226"/><circle cx="38" cy="26" r="1.6" fill="#2B3226"/>
    <circle cx="22" cy="27" r="1.6" fill="#2B3226"/></svg>`,
  paneer: (s) => `<svg width="${s}" height="${s}" viewBox="0 0 64 64" fill="none" aria-hidden="true">
    <rect x="10" y="18" width="16" height="16" rx="2" fill="#F1E4B8" stroke="#D2A03D" stroke-width="1.5"/>
    <rect x="28" y="26" width="16" height="16" rx="2" fill="#F6EDCB" stroke="#D2A03D" stroke-width="1.5"/>
    <rect x="18" y="34" width="16" height="16" rx="2" fill="#F1E4B8" stroke="#D2A03D" stroke-width="1.5"/>
    <circle cx="46" cy="16" r="3" fill="#4B6A45"/><circle cx="52" cy="22" r="2" fill="#4B6A45"/></svg>`,
  cake: (s) => `<svg width="${s}" height="${s}" viewBox="0 0 64 64" fill="none" aria-hidden="true">
    <rect x="12" y="34" width="40" height="18" rx="2" fill="#F6EDCB" stroke="#D2A03D" stroke-width="1.5"/>
    <rect x="12" y="34" width="40" height="6" fill="#D2A03D" opacity="0.3"/>
    <path d="M14 34 Q20 28 26 34 Q32 28 38 34 Q44 28 50 34" stroke="#B4472F" stroke-width="2" fill="none"/>
    <circle cx="20" cy="24" r="3.5" fill="#C1442E"/><circle cx="32" cy="20" r="3.5" fill="#C1442E"/>
    <circle cx="44" cy="24" r="3.5" fill="#C1442E"/>
    <line x1="32" y1="12" x2="32" y2="16" stroke="#4B6A45" stroke-width="2"/></svg>`,
  blank: (s) => `<svg width="${s}" height="${s}" viewBox="0 0 64 64" fill="none" aria-hidden="true">
    <rect x="12" y="10" width="40" height="44" rx="3" fill="#F1E4B8" stroke="#D2A03D" stroke-width="1.5"/>
    <line x1="20" y1="22" x2="44" y2="22" stroke="#B4472F" stroke-width="2"/>
    <line x1="20" y1="30" x2="44" y2="30" stroke="#B4472F" stroke-width="2"/>
    <line x1="20" y1="38" x2="36" y2="38" stroke="#B4472F" stroke-width="2"/></svg>`,
  jar: (s) => `<svg width="${s}" height="${s}" viewBox="0 0 64 64" fill="none" aria-hidden="true">
    <rect x="16" y="10" width="14" height="8" rx="2" fill="#D2A03D"/>
    <path d="M14 20 h20 a4 4 0 0 1 4 4 v26 a4 4 0 0 1 -4 4 h-20 a4 4 0 0 1 -4 -4 v-26 a4 4 0 0 1 4 -4 Z" fill="#F1E4B8" stroke="#D2A03D" stroke-width="1.5"/>
    <path d="M12 34 h24 v14 a4 4 0 0 1 -4 4 h-16 a4 4 0 0 1 -4 -4 Z" fill="#EDE6D6"/>
    <circle cx="20" cy="40" r="1.6" fill="#4B6A45"/><circle cx="26" cy="44" r="1.6" fill="#4B6A45"/>
    <circle cx="22" cy="47" r="1.6" fill="#4B6A45"/></svg>`,
  fritter: (s) => `<svg width="${s}" height="${s}" viewBox="0 0 64 64" fill="none" aria-hidden="true">
    <ellipse cx="32" cy="36" rx="22" ry="14" fill="#D2A03D"/>
    <ellipse cx="32" cy="33" rx="22" ry="14" fill="#E8B94F"/>
    <circle cx="24" cy="30" r="2" fill="#4B6A45"/><circle cx="34" cy="27" r="2" fill="#4B6A45"/>
    <circle cx="41" cy="33" r="2" fill="#4B6A45"/><circle cx="28" cy="37" r="2" fill="#4B6A45"/>
    <circle cx="38" cy="38" r="1.6" fill="#F1E4B8"/><circle cx="29" cy="24" r="1.6" fill="#F1E4B8"/></svg>`,
  spice: (s) => `<svg width="${s}" height="${s}" viewBox="0 0 64 64" fill="none" aria-hidden="true">
    <ellipse cx="32" cy="46" rx="24" ry="8" fill="#D8CFB8" opacity="0.5"/>
    <path d="M12 34 a20 14 0 0 0 40 0 Z" fill="#F1E4B8" stroke="#D2A03D" stroke-width="1.5"/>
    <ellipse cx="32" cy="34" rx="20" ry="7" fill="#B4472F"/>
    <circle cx="24" cy="32" r="1.4" fill="#7A2E1D"/><circle cx="30" cy="30" r="1.4" fill="#7A2E1D"/>
    <circle cx="37" cy="33" r="1.4" fill="#7A2E1D"/><circle cx="42" cy="30" r="1.4" fill="#7A2E1D"/>
    <circle cx="27" cy="36" r="1.4" fill="#7A2E1D"/><circle cx="35" cy="37" r="1.4" fill="#7A2E1D"/></svg>`,
  dijonjar: (s) => `<svg width="${s}" height="${s}" viewBox="0 0 64 64" fill="none" aria-hidden="true">
    <rect x="17" y="9" width="12" height="7" rx="2" fill="#B4472F"/>
    <path d="M15 18 h20 a3 3 0 0 1 3 3 v27 a4 4 0 0 1 -4 4 h-18 a4 4 0 0 1 -4 -4 v-27 a3 3 0 0 1 3 -3 Z" fill="#F1E4B8" stroke="#D2A03D" stroke-width="1.5"/>
    <path d="M13 30 h26 v18 a4 4 0 0 1 -4 4 h-18 a4 4 0 0 1 -4 -4 Z" fill="#D2A03D"/>
    <path d="M13 30 h26 v5 h-26 Z" fill="#E8B94F"/></svg>`,
};

function icon(name, size) {
  return (ICONS[name] || ICONS.blank)(size);
}

/* ---------- Helpers ---------- */
function esc(str) {
  return String(str).replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
  );
}

const FRACS = { 0.125: "⅛", 0.25: "¼", 0.375: "⅜", 0.5: "½", 0.625: "⅝", 0.75: "¾", 0.875: "⅞" };

// Unit ladders for stepping down to a smaller, still-standard kitchen unit
// when an amount is too small to express cleanly in the unit it was written in.
const UNIT_STEPS = {
  cup: [{ factor: 16, unit: "tbsp" }, { factor: 3, unit: "tsp" }],
  tbsp: [{ factor: 3, unit: "tsp" }],
  kg: [{ factor: 1000, unit: "g" }],
};

// Formats a raw quantity as a whole number or a nice eighths fraction.
// Rounds straight to the nearest eighth (which already covers quarters and
// halves exactly) rather than snapping to quarters first — a quarter-first
// pass can round an exact eighth like 0.125 up to 1/4, doubling it. Returns
// null when eighths round to 0 — signal to the caller that this unit can't
// express the amount and a smaller one should be tried.
function formatNiceFraction(val) {
  if (Math.abs(val - Math.round(val)) < 0.01) return String(Math.round(val));
  const rounded = Math.round(val * 8) / 8;
  if (rounded === 0) return null;
  if (Number.isInteger(rounded)) return String(rounded);
  const whole = Math.floor(rounded);
  const frac = Math.round((rounded - whole) * 1000) / 1000;
  const fracStr = FRACS[frac];
  if (!fracStr) return null;
  return whole > 0 ? `${whole}${fracStr}` : fracStr;
}

// Scales an ingredient amount and, only if the amount can't be shown cleanly
// in its original unit (e.g. 0.06 cup), steps down to a smaller standard unit
// (cup → tbsp → tsp, kg → g) until it can. Returns { text, unit } — unit may
// differ from the one passed in.
function scaleQuantity(amount, base, servings, unit) {
  let val = (amount / base) * servings;
  let displayUnit = unit;
  let text = formatNiceFraction(val);
  const steps = UNIT_STEPS[unit];
  if (text === null && steps) {
    for (const step of steps) {
      val *= step.factor;
      displayUnit = step.unit;
      text = formatNiceFraction(val);
      if (text !== null) break;
    }
  }
  // Nothing worked (e.g. a fraction of a whole onion, or already at the
  // smallest unit) — floor at an eighth rather than show a raw decimal.
  if (text === null) text = FRACS[0.125];
  return { text, unit: displayUnit };
}

function fmtTime(s) {
  const m = Math.floor(s / 60);
  return `${m}:${String(s % 60).padStart(2, "0")}`;
}

function humanTime(s) {
  if (s >= 3600) {
    const h = s / 3600;
    return `${Number.isInteger(h) ? h : h.toFixed(1)} hr`;
  }
  if (s >= 60) return `${Math.round(s / 60)} min`;
  return `${s} sec`;
}

/* ---------- App state ---------- */
const state = {
  openId: null,
  servings: null,
  query: "",
  category: null, // null = All
  cooking: null, // { stepIndex, secondsLeft, running }
};

let tick = null;
const app = document.getElementById("app");
const overlay = document.getElementById("overlay");

function findRecipe(id) {
  return RECIPES.find((r) => r.id === id) || null;
}

/* ---------- Views ---------- */
function renderList() {
  const q = state.query.trim().toLowerCase();
  const searched = !q
    ? RECIPES
    : RECIPES.filter((r) => {
        const hay = [
          r.title, r.tagline, r.notes || "",
          r.ingredients.map((i) => i.name).join(" "),
        ].join(" ").toLowerCase();
        return hay.includes(q);
      });
  const matches = state.category ? searched.filter((r) => r.category === state.category) : searched;

  const tabs = ["All", ...CATEGORIES]
    .map((cat) => {
      const count = cat === "All" ? searched.length : searched.filter((r) => r.category === cat).length;
      if (cat !== "All" && count === 0) return "";
      const active = cat === "All" ? !state.category : state.category === cat;
      return `<button class="tab${active ? " active" : ""}" data-tab="${esc(cat)}">${esc(cat)} <span class="tab-count">${count}</span></button>`;
    })
    .join("");

  const cardHtml = (r) => `
      <button class="card" data-open="${esc(r.id)}">
        ${
          r.image
            ? `<div class="card-media"><img src="${esc(r.image)}" alt="" loading="lazy" decoding="async" /></div>`
            : `<span class="badge">${icon(r.icon, 32)}</span>`
        }
        <span>
          <span class="card-title" style="display:block">${esc(r.title)}</span>
          <span class="card-tagline" style="display:block">${esc(r.tagline)}</span>
        </span>
        <span class="card-meta" style="color:${esc(r.accent)}">
          ${r.ingredients.length} ingredients · ${r.steps.length} steps
        </span>
      </button>`;

  let body;
  if (!matches.length) {
    body = `<p class="empty">No recipes match “${esc(state.query)}”.</p>`;
  } else if (state.category) {
    body = `<div class="grid">${matches.map(cardHtml).join("")}</div>`;
  } else {
    const groups = CATEGORIES
      .map((cat) => ({ cat, items: matches.filter((r) => r.category === cat) }))
      .filter((g) => g.items.length);
    const uncategorized = matches.filter((r) => !CATEGORIES.includes(r.category));
    if (uncategorized.length) groups.push({ cat: "Other", items: uncategorized });

    body = groups
      .map(
        ({ cat, items }) => `
        <section class="category">
          <h2 class="category-title">${esc(cat)} <span class="category-count">${items.length}</span></h2>
          <div class="grid">${items.map(cardHtml).join("")}</div>
        </section>`
      )
      .join("");
  }

  app.innerHTML = `
    <header class="masthead">
      <div class="eyebrow">A growing collection</div>
      <h1 class="title">My Cookbook</h1>
      <p class="subtitle">Every recipe you approve gets added here, ready with adjustable servings and a guided cooking mode.</p>
    </header>

    <div class="searchbar">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5B6355" stroke-width="2" aria-hidden="true">
        <circle cx="11" cy="11" r="7"/><line x1="16.5" y1="16.5" x2="21" y2="21"/>
      </svg>
      <input id="search" type="search" placeholder="Search recipes or ingredients…"
             value="${esc(state.query)}" aria-label="Search recipes" />
    </div>
    <div class="tabs">${tabs}</div>
    <div class="count">${matches.length} of ${RECIPES.length} recipe${RECIPES.length === 1 ? "" : "s"}</div>

    ${body}

    <footer class="foot">Updated whenever a new recipe is added. Tap any card for ingredients, scaling, and step-by-step cooking mode.</footer>
  `;

  const input = document.getElementById("search");
  input.addEventListener("input", (e) => {
    state.query = e.target.value;
    const pos = e.target.selectionStart;
    renderList();
    const next = document.getElementById("search");
    next.focus();
    next.setSelectionRange(pos, pos);
  });
}

function renderDetail(r) {
  const servings = state.servings;
  const isVideoSource = r.sourceUrl && /youtu\.?be/i.test(r.sourceUrl);
  const sourceLabel = isVideoSource ? "▶ Watch reference video" : "View original recipe →";
  const ings = r.ingredients
    .map((i) => {
      const q = scaleQuantity(i.amount, r.baseServings, servings, i.unit);
      return `<li>
        <span class="amt" style="color:${esc(r.accent)}">${esc(q.text)} ${esc(q.unit)}</span>
        <span>${esc(i.name)}</span>
      </li>`;
    })
    .join("");

  const steps = r.steps
    .map(
      (s, i) => `<li>
        <span class="step-num" style="background:${esc(r.accent)}">${i + 1}</span>
        <span>
          <span class="step-title" style="display:block">${esc(s.title)}${
            s.timer != null ? `<span class="step-time"> · ${humanTime(s.timer)}</span>` : ""
          }</span>
          <span class="step-body" style="display:block">${esc(s.content)}</span>
        </span>
      </li>`
    )
    .join("");

  app.innerHTML = `
    <div class="detail">
      <button class="back" data-back>← All recipes</button>

      ${
        r.image
          ? `<figure class="detail-media">
               <img src="${esc(r.image)}" alt="${esc(r.title)}" loading="lazy" decoding="async" />
               ${
                 r.imageCredit
                   ? `<figcaption class="img-credit">Photo: <a href="https://unsplash.com/@${esc(r.imageCredit.username)}?utm_source=ginnys-cookbook&utm_medium=referral" target="_blank" rel="noopener noreferrer">${esc(r.imageCredit.name)}</a> / <a href="https://unsplash.com/?utm_source=ginnys-cookbook&utm_medium=referral" target="_blank" rel="noopener noreferrer">Unsplash</a></figcaption>`
                   : ""
               }
             </figure>`
          : ""
      }

      <div class="detail-head">
        <div class="detail-badge">${icon(r.icon, 38)}</div>
        <div>
          <h2 class="detail-title">${esc(r.title)}</h2>
          <p class="detail-tagline">${esc(r.tagline)}</p>
          ${r.allergens ? `<p class="allergens">Allergens: ${esc(r.allergens)}</p>` : ""}
          ${r.sourceUrl ? `<a class="source-link" href="${esc(r.sourceUrl)}" target="_blank" rel="noopener noreferrer">${sourceLabel}</a>` : ""}
        </div>
      </div>

      <div class="toolbar">
        <div class="servings">
          ${
            r.scalable === false
              ? `<span class="servings-label">MAKES</span><span class="servings-num">${r.baseServings}</span>`
              : `<span class="servings-label">SERVINGS</span>
                 <button class="circle" data-serv="-" aria-label="Decrease servings">−</button>
                 <span class="servings-num">${servings}</span>
                 <button class="circle" data-serv="+" aria-label="Increase servings">+</button>
                 ${servings !== r.baseServings ? `<button class="reset" data-serv="reset">reset</button>` : ""}`
          }
        </div>
        <button class="cook-btn" data-cook style="background:${esc(r.accent)}">Start cooking mode →</button>
      </div>

      <section style="margin-top:26px">
        <h3 class="section-label">Ingredients</h3>
        <ul class="ingredients">${ings}</ul>
      </section>

      <section style="margin-top:30px">
        <h3 class="section-label">Steps</h3>
        <ol class="steps">${steps}</ol>
      </section>

      ${r.notes ? `<div class="notes"><strong>Note — </strong>${esc(r.notes)}</div>` : ""}
    </div>
  `;
}

function renderCooking(r) {
  const c = state.cooking;
  if (!c) {
    overlay.innerHTML = "";
    return;
  }
  const step = r.steps[c.stepIndex];
  const isLast = c.stepIndex === r.steps.length - 1;

  const dots = r.steps
    .map((s, i) => {
      const cls = i === c.stepIndex ? "dot current" : i < c.stepIndex ? "dot done" : "dot";
      return `<span class="${cls}"></span>`;
    })
    .join("");

  overlay.innerHTML = `
    <div class="cooking" role="dialog" aria-modal="true" aria-label="Cooking mode">
      <div class="cooking-top">
        <span class="cooking-name">${esc(r.title)}</span>
        <button class="exit-btn" data-exit>Exit cooking mode</button>
      </div>
      <div class="dots">${dots}</div>
      <div class="cooking-body">
        <div class="step-counter">STEP ${c.stepIndex + 1} OF ${r.steps.length}</div>
        <h2 class="cooking-title">${esc(step.title)}</h2>
        <p class="cooking-text">${esc(step.content)}</p>
        ${
          step.timer != null
            ? `<div class="timer-wrap">
                 <div class="timer-digits ${c.secondsLeft === 0 ? "done" : ""}">${fmtTime(c.secondsLeft)}</div>
                 <button class="timer-btn" data-timer ${c.secondsLeft === 0 ? "disabled" : ""}>
                   ${c.secondsLeft === 0 ? "Time's up" : c.running ? "Pause timer" : "Start timer"}
                 </button>
               </div>`
            : ""
        }
      </div>
      <div class="cooking-nav">
        <button class="nav-btn" data-prev ${c.stepIndex === 0 ? "disabled" : ""}>← Back</button>
        ${
          isLast
            ? `<button class="nav-btn nav-done" data-exit>Done cooking ✓</button>`
            : `<button class="nav-btn nav-next" data-next>Next →</button>`
        }
      </div>
    </div>
  `;
}

/* ---------- Render orchestration ---------- */
function render() {
  const r = state.openId ? findRecipe(state.openId) : null;
  if (r) renderDetail(r);
  else renderList();
  renderCooking(r);
  document.body.style.overflow = state.cooking ? "hidden" : "";
}

/* ---------- Timer ---------- */
function stopTick() {
  if (tick) { clearInterval(tick); tick = null; }
}

function startTick() {
  stopTick();
  tick = setInterval(() => {
    const c = state.cooking;
    if (!c || !c.running) return stopTick();
    c.secondsLeft = Math.max(0, c.secondsLeft - 1);
    if (c.secondsLeft === 0) {
      c.running = false;
      stopTick();
      beep();
    }
    render();
  }, 1000);
}

function beep() {
  try {
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return;
    const ctx = new Ctx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain); gain.connect(ctx.destination);
    osc.frequency.value = 660; osc.type = "sine";
    gain.gain.setValueAtTime(0.18, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.9);
    osc.start(); osc.stop(ctx.currentTime + 0.9);
  } catch (e) { /* audio not available */ }
}

/* ---------- Events ---------- */
document.addEventListener("click", (e) => {
  const openBtn = e.target.closest("[data-open]");
  if (openBtn) {
    location.hash = "#/" + openBtn.getAttribute("data-open");
    return;
  }
  if (e.target.closest("[data-back]")) { location.hash = ""; return; }

  const tabBtn = e.target.closest("[data-tab]");
  if (tabBtn) {
    const val = tabBtn.getAttribute("data-tab");
    state.category = val === "All" ? null : val;
    renderList();
    return;
  }

  const servBtn = e.target.closest("[data-serv]");
  if (servBtn) {
    const r = findRecipe(state.openId);
    const action = servBtn.getAttribute("data-serv");
    if (action === "+") state.servings += 1;
    else if (action === "-") state.servings = Math.max(1, state.servings - 1);
    else state.servings = r.baseServings;
    render();
    return;
  }

  if (e.target.closest("[data-cook]")) {
    const r = findRecipe(state.openId);
    state.cooking = { stepIndex: 0, secondsLeft: r.steps[0].timer, running: false };
    render();
    return;
  }
  if (e.target.closest("[data-exit]")) {
    stopTick();
    state.cooking = null;
    render();
    return;
  }
  if (e.target.closest("[data-next]")) { moveStep(1); return; }
  if (e.target.closest("[data-prev]")) { moveStep(-1); return; }

  if (e.target.closest("[data-timer]")) {
    const c = state.cooking;
    c.running = !c.running;
    if (c.running) startTick(); else stopTick();
    render();
    return;
  }
});

function moveStep(delta) {
  const r = findRecipe(state.openId);
  const c = state.cooking;
  const next = Math.min(r.steps.length - 1, Math.max(0, c.stepIndex + delta));
  if (next === c.stepIndex) return;
  stopTick();
  c.stepIndex = next;
  c.secondsLeft = r.steps[next].timer;
  c.running = false;
  render();
}

document.addEventListener("keydown", (e) => {
  if (!state.cooking) return;
  if (e.key === "Escape") { stopTick(); state.cooking = null; render(); }
  if (e.key === "ArrowRight") moveStep(1);
  if (e.key === "ArrowLeft") moveStep(-1);
});

/* ---------- Routing ---------- */
function syncFromHash() {
  const id = decodeURIComponent(location.hash.replace(/^#\/?/, ""));
  const r = id ? findRecipe(id) : null;
  stopTick();
  state.cooking = null;
  if (r) {
    state.openId = r.id;
    state.servings = r.scalable === false ? r.baseServings : 1;
    document.title = r.title + " — My Cookbook";
  } else {
    state.openId = null;
    state.servings = null;
    document.title = "My Cookbook";
  }
  render();
  window.scrollTo(0, 0);
}

window.addEventListener("hashchange", syncFromHash);
syncFromHash();
