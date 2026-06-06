(() => {
  "use strict";

  const CURATED = [
    { text: "We suffer more often in imagination than in reality.", author: "Seneca", category: "philosophy" },
    { text: "You have power over your mind — not outside events. Realize this, and you will find strength.", author: "Marcus Aurelius", category: "philosophy" },
    { text: "It's not what happens to you, but how you react to it that matters.", author: "Epictetus", category: "philosophy" },
    { text: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.", author: "Aristotle", category: "philosophy" },
    { text: "The beginning is the most important part of the work.", author: "Plato", category: "philosophy" },
    { text: "He who has a why to live can bear almost any how.", author: "Friedrich Nietzsche", category: "philosophy" },
    { text: "Life can only be understood backwards; but it must be lived forwards.", author: "Søren Kierkegaard", category: "philosophy" },
    { text: "In the midst of winter, I found there was, within me, an invincible summer.", author: "Albert Camus", category: "philosophy" },
    { text: "The limits of my language mean the limits of my world.", author: "Ludwig Wittgenstein", category: "philosophy" },
    { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius", category: "philosophy" },
    { text: "The unexamined life is not worth living.", author: "Socrates", category: "philosophy" },

    { text: "Design is so simple, that's why it is so complicated.", author: "Paul Rand", category: "design" },
    { text: "Less, but better.", author: "Dieter Rams", category: "design" },
    { text: "The details are not the details. They make the design.", author: "Charles Eames", category: "design" },
    { text: "Good design is actually a lot harder to notice than poor design.", author: "Don Norman", category: "design" },
    { text: "There are three responses to a piece of design — yes, no, and WOW! Wow is the one to aim for.", author: "Milton Glaser", category: "design" },
    { text: "Design is the application of intent.", author: "Stefan Sagmeister", category: "design" },
    { text: "Confusion and clutter are failures of design, not attributes of information.", author: "Edward Tufte", category: "design" },
    { text: "Typography is the craft of endowing human language with a durable visual form.", author: "Paula Scher", category: "design" },
    { text: "Design is thinking made visual.", author: "Saul Bass", category: "design" },
    { text: "A user interface is well-designed when the program behaves exactly as the user imagined it would.", author: "Jef Raskin", category: "design" },

    { text: "I would rather have questions that can't be answered than answers that can't be questioned.", author: "Richard Feynman", category: "science" },
    { text: "Somewhere, something incredible is waiting to be known.", author: "Carl Sagan", category: "science" },
    { text: "Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.", author: "Marie Curie", category: "science" },
    { text: "The first principle is that you must not fool yourself — and you are the easiest person to fool.", author: "Richard Feynman", category: "science" },
    { text: "The important thing is not to stop questioning. Curiosity has its own reason for existing.", author: "Albert Einstein", category: "science" },
    { text: "In nature, nothing exists alone.", author: "Rachel Carson", source: "Silent Spring", category: "science" },
    { text: "The universe is under no obligation to make sense to you.", author: "Neil deGrasse Tyson", category: "science" },
    { text: "What you do makes a difference, and you have to decide what kind of difference you want to make.", author: "Jane Goodall", category: "science" },
    { text: "We can only see a short distance ahead, but we can see plenty there that needs to be done.", author: "Alan Turing", category: "science" },
    { text: "Science is the belief in the ignorance of experts.", author: "Richard Feynman", category: "science" },

    { text: "Not everything that is faced can be changed, but nothing can be changed until it is faced.", author: "James Baldwin", category: "literature" },
    { text: "We live in capitalism, its power seems inescapable — but then, so did the divine right of kings.", author: "Ursula K. Le Guin", category: "literature" },
    { text: "Until the lions have their own historians, the history of the hunt will always glorify the hunter.", author: "Chinua Achebe", category: "literature" },
    { text: "If you want to fly, you have to give up the things that weigh you down.", author: "Toni Morrison", category: "literature" },
    { text: "For most of history, Anonymous was a woman.", author: "Virginia Woolf", category: "literature" },
    { text: "I have always imagined that Paradise will be a kind of library.", author: "Jorge Luis Borges", category: "literature" },
    { text: "A classic is a book that has never finished saying what it has to say.", author: "Italo Calvino", category: "literature" },
    { text: "The sky is not the limit. The limit is the imagination.", author: "Octavia E. Butler", category: "literature" },
    { text: "Curiosity is insubordination in its purest form.", author: "Vladimir Nabokov", category: "literature" },
    { text: "Tell all the truth but tell it slant.", author: "Emily Dickinson", category: "literature" },

    { text: "You can't be neutral on a moving train.", author: "Howard Zinn", category: "history" },
    { text: "The past is never dead. It's not even past.", author: "William Faulkner", category: "history" },
    { text: "Dissent is the highest form of patriotism.", author: "Howard Zinn", category: "history" },
    { text: "The welfare of the people shall be the supreme law.", author: "Cicero", source: "De Legibus", category: "history" },
    { text: "Very few things happen at the right time, and the rest do not happen at all.", author: "Herodotus", category: "history" },
    { text: "The supreme art of war is to subdue the enemy without fighting.", author: "Sun Tzu", source: "The Art of War", category: "history" },
    { text: "Learning never exhausts the mind.", author: "Leonardo da Vinci", category: "history" },
    { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill", category: "history" },
    { text: "History does not repeat itself, but it does rhyme.", author: "Mark Twain", category: "history" },
    { text: "A small body of determined spirits fired by an unquenchable faith in their mission can alter the course of history.", author: "Mahatma Gandhi", category: "history" },

    { text: "If you can't measure it, you can't manage it.", author: "Peter Drucker", category: "business" },
    { text: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.", author: "Steve Jobs", category: "business" },
    { text: "An entrepreneur is someone who jumps off a cliff and builds a plane on the way down.", author: "Reid Hoffman", category: "business" },
    { text: "It takes 20 years to build a reputation and five minutes to ruin it.", author: "Warren Buffett", category: "business" },
    { text: "Your brand is what other people say about you when you're not in the room.", author: "Jeff Bezos", category: "business" },
    { text: "The way to get startup ideas is not to try to think of startup ideas.", author: "Paul Graham", category: "business" },
    { text: "Don't be intimidated by what you don't know.", author: "Sara Blakely", category: "business" },
    { text: "If you're offered a seat on a rocket ship, don't ask what seat! Just get on.", author: "Sheryl Sandberg", category: "business" },
    { text: "Make it work, make it right, make it fast.", author: "Kent Beck", category: "business" },
    { text: "The best way to predict the future is to invent it.", author: "Alan Kay", category: "business" }
  ];

  const AUTHOR_CATEGORY = {
    "Marcus Aurelius": "philosophy",
    "Aristotle": "philosophy",
    "Lao Tzu": "philosophy",
    "Rumi": "philosophy",
    "Herodotus": "history",
    "Ayn Rand": "philosophy",
    "Plato": "philosophy",
    "Confucius": "philosophy",
    "Epictetus": "philosophy",
    "Seneca": "philosophy",
    "Socrates": "philosophy",
    "Friedrich Nietzsche": "philosophy",
    "Søren Kierkegaard": "philosophy",
    "Albert Camus": "philosophy",
    "Ludwig Wittgenstein": "philosophy",

    "Emily Dickinson": "literature",
    "Franz Kafka": "literature",
    "Herman Melville": "literature",
    "Stephen King": "literature",
    "William Faulkner": "literature",
    "Carlos Ruiz Zafon": "literature",
    "Anne Frank": "literature",
    "Mark Manson": "literature",
    "Virginia Woolf": "literature",
    "Toni Morrison": "literature",
    "Jorge Luis Borges": "literature",
    "Ursula K. Le Guin": "literature",
    "Chinua Achebe": "literature",
    "James Baldwin": "literature",
    "Italo Calvino": "literature",
    "Octavia E. Butler": "literature",
    "Vladimir Nabokov": "literature",
    "Bob Dylan": "literature",

    "Theodore Roosevelt": "history",
    "Eleanor Roosevelt": "history",
    "Martin Luther King, Jr.": "history",
    "Amelia Earhart": "history",
    "Napoleon Hill": "history",
    "Winston Churchill": "history",
    "Mahatma Gandhi": "history",
    "Mark Twain": "history",
    "Howard Zinn": "history",
    "Sun Tzu": "history",
    "Leonardo da Vinci": "history",
    "Cicero": "history",

    "Henry Ford": "business",
    "Tony Robbins": "business",
    "Simon Sinek": "business",
    "Jim Rohn": "business",
    "Zig Ziglar": "business",
    "Brian Tracy": "business",
    "Jeffrey Gitomer": "business",
    "Steve Maraboli": "business",
    "Robert Greene": "business",
    "Steve Jobs": "business",
    "Jeff Bezos": "business",
    "Warren Buffett": "business",
    "Peter Drucker": "business",
    "Reid Hoffman": "business",
    "Paul Graham": "business",
    "Sara Blakely": "business",
    "Sheryl Sandberg": "business",
    "Kent Beck": "business",
    "Alan Kay": "business"
  };

  const CATEGORIES = [
    { id: "all", label: "All" },
    { id: "philosophy", label: "Philosophy" },
    { id: "design", label: "Design" },
    { id: "science", label: "Science" },
    { id: "literature", label: "Literature" },
    { id: "history", label: "History" },
    { id: "business", label: "Business" }
  ];

  const API_ENDPOINT = "https://zenquotes.io/api/quotes";
  const FETCH_TIMEOUT_MS = 10000;
  const BATCH_SIZE = 50;

  const els = {
    filters: document.getElementById("filters"),
    quoteCard: document.getElementById("quote-card"),
    quoteText: document.getElementById("quote-text"),
    quoteAttr: document.getElementById("quote-attr"),
    newBtn: document.getElementById("new-btn"),
    copyBtn: document.getElementById("copy-btn"),
    shareBtn: document.getElementById("share-btn"),
    counter: document.getElementById("counter")
  };

  const state = {
    category: "all",
    current: null,
    shown: new Set(),
    pool: [],
    apiPool: [],
    apiOnline: false,
    isFetching: false,
    pendingFetches: 0
  };

  function buildPool() {
    state.pool = CURATED.slice();
  }

  function normalizeApiQuote(item) {
    if (!item || typeof item.q !== "string" || typeof item.a !== "string") return null;
    const author = item.a.trim();
    if (!author || author.toLowerCase() === "unknown") return null;
    const category = AUTHOR_CATEGORY[author] || "literature";
    return {
      text: item.q.trim(),
      author: author,
      source: undefined,
      category: category,
      _src: "api"
    };
  }

  function mergeApiQuotes(items) {
    let added = 0;
    for (const item of items) {
      const q = normalizeApiQuote(item);
      if (!q) continue;
      const dup = state.apiPool.some(existing =>
        existing.text === q.text && existing.author === q.author
      );
      if (dup) continue;
      state.apiPool.push(q);
      state.pool.push(q);
      added++;
    }
    return added;
  }

  async function fetchWithTimeout(url, timeoutMs) {
    const controller = new AbortController();
    const t = setTimeout(() => controller.abort(), timeoutMs);
    try {
      const res = await fetch(url, { signal: controller.signal, cache: "no-store" });
      return res;
    } finally {
      clearTimeout(t);
    }
  }

  async function fetchFromApi() {
    if (state.isFetching) return;
    state.isFetching = true;
    state.pendingFetches++;
    els.newBtn.disabled = true;

    try {
      const res = await fetchWithTimeout(API_ENDPOINT, FETCH_TIMEOUT_MS);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      if (!Array.isArray(data)) throw new Error("Bad payload");
      const added = mergeApiQuotes(data);
      if (added > 0) {
        state.apiOnline = true;
        setStatus("", null);
      }
    } catch {
      state.apiOnline = false;
      if (state.pool.length === 0) {
        setStatus("Could not reach quote service. Showing offline set.", "warning");
      } else if (state.apiPool.length === 0) {
        setStatus("Live quotes unavailable. Showing curated set.", "warning");
      }
    } finally {
      state.isFetching = false;
      state.pendingFetches--;
      els.newBtn.disabled = false;
    }
  }

  function setStatus(message, kind) {
    let bar = document.getElementById("status-bar");
    if (!message) {
      if (bar) bar.remove();
      return;
    }
    if (!bar) {
      bar = document.createElement("p");
      bar.id = "status-bar";
      bar.className = "status";
      bar.setAttribute("role", "status");
      bar.setAttribute("aria-live", "polite");
      const actions = document.querySelector(".actions");
      if (actions && actions.parentNode) {
        actions.parentNode.insertBefore(bar, actions.nextSibling);
      }
    }
    bar.textContent = message;
    bar.classList.remove("is-warning", "is-error");
    if (kind === "warning") bar.classList.add("is-warning");
    if (kind === "error") bar.classList.add("is-error");
  }

  function poolFor(category) {
    if (category === "all") return state.pool;
    return state.pool.filter(q => q.category === category);
  }

  function pickRandom(category, excludeCurrent) {
    const pool = poolFor(category);
    if (!pool.length) return null;
    if (pool.length === 1) return pool[0];
    let q;
    let attempts = 0;
    do {
      q = pool[Math.floor(Math.random() * pool.length)];
      attempts++;
    } while (excludeCurrent && q === excludeCurrent && attempts < 8);
    return q;
  }

  function quoteKey(q) {
    return q ? `${q.author}::${q.text}` : "";
  }

  function formatAttr(quote) {
    if (!quote) return "";
    const dash = "\u2014\u2009";
    if (quote.source) {
      return `${dash} ${quote.author}, <span class="source">${quote.source}</span>`;
    }
    return `${dash} ${quote.author}`;
  }

  function showQuote(quote) {
    if (!quote) return;
    state.current = quote;
    state.shown.add(quoteKey(quote));
    const card = els.quoteCard;
    card.classList.add("is-leaving");
    setTimeout(() => {
      els.quoteText.textContent = quote.text;
      els.quoteAttr.innerHTML = formatAttr(quote);
      card.classList.remove("is-leaving");
      updateCounter();
    }, 200);
  }

  function showLoading() {
    const card = els.quoteCard;
    card.classList.add("is-leaving");
    setTimeout(() => {
      els.quoteText.textContent = "Loading…";
      els.quoteAttr.textContent = "";
      card.classList.remove("is-leaving");
    }, 200);
  }

  function showError() {
    const card = els.quoteCard;
    card.classList.add("is-leaving");
    setTimeout(() => {
      els.quoteText.textContent = "No quotes available.";
      els.quoteAttr.textContent = "Check connection and try again.";
      card.classList.remove("is-leaving");
    }, 200);
  }

  function updateCounter() {
    const pool = poolFor(state.category);
    const position = state.shown.size || (state.current ? 1 : 0);
    els.counter.textContent = `Quote ${position} of ${pool.length}`;
  }

  function buildFilters() {
    const frag = document.createDocumentFragment();
    CATEGORIES.forEach(c => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "pill";
      btn.dataset.category = c.id;
      btn.textContent = c.label;
      btn.setAttribute("aria-pressed", c.id === state.category ? "true" : "false");
      if (c.id === state.category) btn.classList.add("is-active");
      frag.appendChild(btn);
    });
    els.filters.appendChild(frag);
  }

  function onFilterClick(e) {
    const btn = e.target.closest(".pill");
    if (!btn) return;
    const cat = btn.dataset.category;
    if (cat === state.category) return;
    state.category = cat;
    state.shown = new Set();
    els.filters.querySelectorAll(".pill").forEach(p => {
      const active = p.dataset.category === cat;
      p.classList.toggle("is-active", active);
      p.setAttribute("aria-pressed", active ? "true" : "false");
    });
    const next = pickRandom(cat, null);
    if (next) showQuote(next);
    if (!state.apiPool.length && state.category !== "all") {
      fetchFromApi().catch(() => {});
    }
  }

  function onNew() {
    const pool = poolFor(state.category);
    if (state.shown.size >= pool.length && pool.length > 0) {
      state.shown = new Set();
    }
    const next = pickRandom(state.category, state.current);
    if (next) {
      showQuote(next);
    } else {
      showError();
    }
    if (!state.isFetching) {
      fetchFromApi().catch(() => {});
    }
  }

  function buildShareText(quote) {
    if (!quote) return "";
    return `"${quote.text}" — ${quote.author}`;
  }

  function onCopy() {
    if (!state.current) return;
    const text = buildShareText(state.current);
    copyText(text).then(ok => {
      if (!ok) return;
      flashCopy("Copied");
    });
  }

  function onShare() {
    if (!state.current) return;
    const text = buildShareText(state.current);
    const shareData = {
      title: "Vox",
      text: text,
      url: window.location.href
    };
    if (navigator.share) {
      navigator.share(shareData).catch(() => {
        copyText(text).then(ok => { if (ok) flashCopy("Copied"); });
      });
    } else {
      copyText(text).then(ok => { if (ok) flashCopy("Copied"); });
    }
  }

  function flashCopy(label) {
    const original = els.copyBtn.textContent;
    els.copyBtn.textContent = label;
    els.copyBtn.classList.add("is-copied");
    setTimeout(() => {
      els.copyBtn.textContent = original;
      els.copyBtn.classList.remove("is-copied");
    }, 1500);
  }

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text).then(() => true).catch(() => fallbackCopy(text));
    }
    return Promise.resolve(fallbackCopy(text));
  }

  function fallbackCopy(text) {
    try {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.top = "-9999px";
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand("copy");
      document.body.removeChild(ta);
      return ok;
    } catch {
      return false;
    }
  }

  function onKeydown(e) {
    if (e.key === " " || e.key === "n" || e.key === "N") {
      const t = e.target;
      const isEditable = t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable);
      if (isEditable) return;
      const tag = t && t.tagName;
      if (tag === "BUTTON" || tag === "A") return;
      e.preventDefault();
      onNew();
    }
  }

  function init() {
    buildPool();
    buildFilters();
    els.filters.addEventListener("click", onFilterClick);
    els.newBtn.addEventListener("click", onNew);
    els.copyBtn.addEventListener("click", onCopy);
    els.shareBtn.addEventListener("click", onShare);
    document.addEventListener("keydown", onKeydown);

    showLoading();
    fetchFromApi()
      .then(() => {
        const first = pickRandom("all", null);
        if (first) {
          showQuote(first);
        } else {
          showError();
        }
      })
      .catch(() => {
        const first = pickRandom("all", null);
        if (first) showQuote(first);
        else showError();
      });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();
