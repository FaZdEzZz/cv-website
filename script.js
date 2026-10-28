/* =========================================================
   Small enhancements. The page works fully without them.
   1. Traceroute load animation
   2. Light / dark theme toggle (remembered per visitor)
   3. Highlight the nav link of the section in view
   4. Copy email button
   ========================================================= */

document.documentElement.classList.add("js");

/* ---------- 1. Traceroute: give each hop its order for the CSS delay ---------- */
document.querySelectorAll(".hop").forEach((hop, index) => {
  hop.style.setProperty("--i", index);
});

/* ---------- 2. Theme toggle ---------- */
const root = document.documentElement;
const toggle = document.querySelector(".theme-toggle");
const systemDark = window.matchMedia("(prefers-color-scheme: dark)");

function readSavedTheme() {
  try {
    return localStorage.getItem("theme");
  } catch (error) {
    return null; // storage blocked (private mode, etc.)
  }
}

function saveTheme(theme) {
  try {
    localStorage.setItem("theme", theme);
  } catch (error) {
    /* ignore: the theme just won't be remembered */
  }
}

function currentTheme() {
  return root.dataset.theme || (systemDark.matches ? "dark" : "light");
}

function updateToggleLabel() {
  const next = currentTheme() === "dark" ? "light" : "dark";
  toggle.setAttribute("aria-label", `Switch to ${next} theme`);
}

const savedTheme = readSavedTheme();
if (savedTheme === "light" || savedTheme === "dark") {
  root.dataset.theme = savedTheme;
}
updateToggleLabel();

toggle.addEventListener("click", () => {
  const next = currentTheme() === "dark" ? "light" : "dark";
  root.dataset.theme = next;
  saveTheme(next);
  updateToggleLabel();
});

systemDark.addEventListener("change", updateToggleLabel);

/* ---------- 3. Active section in the navigation ---------- */
const navLinks = document.querySelectorAll(".nav__link");
const sections = document.querySelectorAll("main .section, #contact");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        const isCurrent = link.getAttribute("href") === `#${entry.target.id}`;
        link.classList.toggle("is-active", isCurrent);
        if (isCurrent) {
          link.setAttribute("aria-current", "true");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    });
  },
  { rootMargin: "-45% 0px -50% 0px" } // a thin band in the middle of the screen
);

sections.forEach((section) => observer.observe(section));

/* ---------- 4. Copy email ---------- */
const copyButton = document.querySelector(".copy-btn");
const copyStatus = document.querySelector(".copy-status");

copyButton.addEventListener("click", async () => {
  const email = copyButton.dataset.copy;
  try {
    await navigator.clipboard.writeText(email);
    copyStatus.textContent = "Copied to clipboard";
  } catch (error) {
    copyStatus.textContent = "Copy failed, select the address above instead";
  }
  setTimeout(() => {
    copyStatus.textContent = "";
  }, 2500);
});
