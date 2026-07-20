/* ==========================================================================
   TECH ALPHA — NAVIGATION
   Vanilla ES2018. No jQuery. Independent of the legacy script.js.

   Responsibilities:
     1. Header scrolled state (passive, rAF-throttled scroll listener)
     2. Services dropdown: hover on desktop, accordion on mobile, keyboard
        accessible on both, aria-expanded always truthful
     3. Mobile panel: focus trap, Escape to close, background scroll lock
   ========================================================================== */

(function () {
  "use strict";

  var DESKTOP = window.matchMedia("(min-width: 1024px)");
  var FOCUSABLE = 'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';

  var header = document.querySelector("[data-ta-header]");
  var nav = document.querySelector("[data-ta-nav]");
  var burger = document.querySelector("[data-ta-burger]");

  if (!header || !nav || !burger) return;

  /* ---------------------------------------------------------------------
     1. Header scrolled state

     A zero-height IntersectionObserver sentinel was tried first and is a
     trap: a zero-area target holds intersectionRatio at 0 permanently, so
     it never crosses the default threshold and the callback never re-fires.
     This listener is passive and reads only window.scrollY — no geometry
     queries, so it cannot force synchronous layout the way the legacy
     stickIt() did with .offset()/.css("width") on every scroll event.
     --------------------------------------------------------------------- */

  var headerTicking = false;

  function syncHeader() {
    headerTicking = false;
    header.classList.toggle("is-scrolled", window.scrollY > 4);
  }

  window.addEventListener(
    "scroll",
    function () {
      if (headerTicking) return;
      headerTicking = true;
      window.requestAnimationFrame(syncHeader);
    },
    { passive: true }
  );

  syncHeader();

  /* ---------------------------------------------------------------------
     2. Services dropdown
     --------------------------------------------------------------------- */

  var dropdowns = [].slice.call(nav.querySelectorAll("[data-ta-dropdown]"));

  dropdowns.forEach(function (item) {
    var toggle = item.querySelector("[data-ta-dropdown-toggle]");
    var menu = item.querySelector("[data-ta-dropdown-menu]");
    if (!toggle || !menu) return;

    function setExpanded(open) {
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    }

    function isExpanded() {
      return toggle.getAttribute("aria-expanded") === "true";
    }

    toggle.addEventListener("click", function (event) {
      event.preventDefault();
      setExpanded(!isExpanded());
    });

    // Pointer affordance is desktop-only; aria state stays in sync with it.
    item.addEventListener("mouseenter", function () {
      if (DESKTOP.matches) setExpanded(true);
    });

    item.addEventListener("mouseleave", function () {
      if (DESKTOP.matches) setExpanded(false);
    });

    // Close once focus leaves the group entirely (keyboard tab-out).
    item.addEventListener("focusout", function (event) {
      if (DESKTOP.matches && !item.contains(event.relatedTarget)) setExpanded(false);
    });

    item.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && isExpanded()) {
        setExpanded(false);
        toggle.focus();
      }
    });

    // Collapse every dropdown when crossing the breakpoint so the
    // accordion and the desktop menu never inherit each other's state.
    var onBreakpoint = function () {
      setExpanded(false);
    };

    if (DESKTOP.addEventListener) DESKTOP.addEventListener("change", onBreakpoint);
    else DESKTOP.addListener(onBreakpoint);
  });

  /* ---------------------------------------------------------------------
     3. Mobile panel
     --------------------------------------------------------------------- */

  var lastFocused = null;

  function panelIsOpen() {
    return burger.getAttribute("aria-expanded") === "true";
  }

  function openPanel() {
    lastFocused = document.activeElement;
    burger.setAttribute("aria-expanded", "true");
    nav.classList.add("is-open");
    document.body.style.overflow = "hidden";

    // Safe to focus synchronously: ta-header.css flips the panel's
    // visibility with `visibility 0s linear 0s` on open, so it is already
    // focusable here. (A hidden element silently rejects focus() — if the
    // panel ever stops taking focus, check that transition first.)
    var first = nav.querySelector(FOCUSABLE);
    if (first) first.focus();
  }

  function closePanel(restoreFocus) {
    burger.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
    document.body.style.overflow = "";

    if (restoreFocus && lastFocused && typeof lastFocused.focus === "function") {
      lastFocused.focus();
    }
  }

  burger.addEventListener("click", function () {
    if (panelIsOpen()) closePanel(true);
    else openPanel();
  });

  // Escape closes; Tab is trapped inside the panel while it is open.
  document.addEventListener("keydown", function (event) {
    if (!panelIsOpen()) return;

    if (event.key === "Escape") {
      closePanel(true);
      return;
    }

    if (event.key !== "Tab") return;

    var items = [].slice.call(nav.querySelectorAll(FOCUSABLE)).filter(function (el) {
      return el.offsetParent !== null;
    });
    items.unshift(burger);
    if (!items.length) return;

    var first = items[0];
    var last = items[items.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

  // Following a link closes the panel.
  nav.addEventListener("click", function (event) {
    var link = event.target.closest("a[href]");
    if (link && panelIsOpen()) closePanel(false);
  });

  // Never leave the panel open (and the body locked) on resize to desktop.
  var onDesktopChange = function (event) {
    if (event.matches && panelIsOpen()) closePanel(false);
  };

  if (DESKTOP.addEventListener) DESKTOP.addEventListener("change", onDesktopChange);
  else DESKTOP.addListener(onDesktopChange);
})();
