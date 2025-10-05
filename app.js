// CTA button feedback
const ctaBtn = document.querySelector('.cta-button');
ctaBtn.addEventListener('click', function () {
  ctaBtn.textContent = "Activated!";
  ctaBtn.style.background = "linear-gradient(90deg, #70c4ff 0%, #a6d6ff 100%)";
  setTimeout(() => {
    ctaBtn.textContent = "Start 14-day free trial";
    ctaBtn.style.background = "";
  }, 1500);
});

// Gear icon pop-up info
const gearIcons = document.querySelectorAll('.gear-icon');
gearIcons.forEach(icon => {
  icon.addEventListener('click', (e) => {
    e.stopPropagation();
    alert("Settings will be available in the full product.");
  });
});

// Simple card fade-in animations when in viewport
const cards = document.querySelectorAll('.card');
function animateCards() {
  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 40) {
      card.style.transform = "translateY(0)";
      card.style.opacity = 1;
      card.style.transition = "all 0.7s cubic-bezier(.25,1,.5,1)";
    }
  });
}
window.addEventListener('scroll', animateCards);
window.addEventListener('load', () => {
  cards.forEach(card => {
    card.style.transform = "translateY(60px)";
    card.style.opacity = 0.2;
  });
  animateCards();
});

// "See what we do" link feedback
document.querySelector('.cta-link').addEventListener('click', (e) => {
  e.preventDefault();
  alert("This would link to a demo section in the full version.");
});

// Animated card fade-in on load
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.card').forEach((card, idx) => {
    card.style.opacity = 0;
    setTimeout(() => {
      card.style.transition = 'opacity 0.8s cubic-bezier(.25,1,.5,1)';
      card.style.opacity = 1;
    }, 200 + idx * 200);
  });
});

// CTA button click effect
document.querySelector('.cta-button').addEventListener('click', function() {
  this.textContent = "Activated!";
  setTimeout(() => { this.textContent = "Start 14-day free trial"; }, 1500);
});

// Gear icon click - simple info
document.querySelectorAll('.gear-icon').forEach(icon => {
  icon.style.cursor = 'pointer';
  icon.addEventListener('click', function(event) {
    event.stopPropagation();
    alert("Settings coming soon!");
  });
});

// 'See what we do' link - demo action
document.querySelector('.cta-link').addEventListener('click', function(e) {
  e.preventDefault();
  alert("This would open more info in the full product!");
});

// Fade cards in on page load
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.card').forEach((card, i) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(40px)';
    setTimeout(() => {
      card.style.transition = 'opacity 0.6s cubic-bezier(.25,1,.5,1), transform 0.6s';
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, 200 + i * 200);
  });
});

// Interactive gear icons
document.querySelectorAll('.gear-icon').forEach(icon => {
  icon.addEventListener('click', (e) => {
    e.stopPropagation();
    alert('Settings page is coming soon!');
  });
});

// Start trial button click feedback
document.querySelector('.cta-button').addEventListener('click', function () {
  this.textContent = "Activated!";
  setTimeout(() => { this.textContent = "Start 14-day free trial"; }, 1200);
});

// 'See what we do' link
document.querySelector('.cta-link').addEventListener('click', (e) => {
  e.preventDefault();
  alert('This would link to the demo section in real app.');
});
