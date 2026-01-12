// North City Bruins template (GitHub Pages friendly)
//
// Customize links & season dates here:
const SETTINGS = {
  registrationUrl: "https://example.com/registration", // <-- replace with your real form link
  volunteerUrl: "https://example.com/volunteer",       // <-- replace with your real form link
  earlyBirdDateText: "Feb 15",
  dates: {
    registration: "Jan 10 – Mar 01",
    evaluations: "Mar 02 – Mar 08",
    games: "Mar 15 – Jun 08",
    playoffs: "Jun 14 – Jun 22",
  }
};

function byId(id){ return document.getElementById(id); }

function applySettings(){
  byId("year").textContent = new Date().getFullYear();

  byId("earlyBirdDate").textContent = SETTINGS.earlyBirdDateText;
  byId("dateRegistration").textContent = SETTINGS.dates.registration;
  byId("dateEvaluations").textContent = SETTINGS.dates.evaluations;
  byId("dateGames").textContent = SETTINGS.dates.games;
  byId("datePlayoffs").textContent = SETTINGS.dates.playoffs;
}

function setupMobileNav(){
  const btn = document.querySelector(".nav__toggle");
  const menu = document.querySelector("#navMenu");
  if(!btn || !menu) return;

  btn.addEventListener("click", () => {
    const open = menu.classList.toggle("is-open");
    btn.setAttribute("aria-expanded", String(open));
  });

  // close menu on click
  menu.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      menu.classList.remove("is-open");
      btn.setAttribute("aria-expanded", "false");
    });
  });

  // close on escape
  document.addEventListener("keydown", (e) => {
    if(e.key === "Escape"){
      menu.classList.remove("is-open");
      btn.setAttribute("aria-expanded", "false");
    }
  });
}

function setupContactForm(){
  const form = byId("contactForm");
  const note = byId("formNote");
  if(!form || !note) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Demo-only: no backend. Replace with your form provider (Formspree, Netlify Forms, etc.)
    note.style.display = "block";
    note.textContent = "Thanks! Your message is ready to send — connect a form backend to receive submissions.";
    form.reset();
  });
}

window.openRegistration = function(){
  window.open(SETTINGS.registrationUrl, "_blank", "noopener,noreferrer");
};

window.openVolunteer = function(){
  window.open(SETTINGS.volunteerUrl, "_blank", "noopener,noreferrer");
};

applySettings();
setupMobileNav();
setupContactForm();
