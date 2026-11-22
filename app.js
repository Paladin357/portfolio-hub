// Nexus Studio Interactive Portfolio Logic

document.addEventListener('DOMContentLoaded', () => {
  // 1. Filter Pills
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      projectCards.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 2. Interactive Blur Sandbox
  const blurTargets = document.querySelectorAll('.blur-target');
  let blurEnabled = true;

  blurTargets.forEach(target => {
    target.addEventListener('click', () => {
      target.classList.toggle('screenshield-blurred');
    });
  });

  const toggleBlurBtn = document.getElementById('demoToggleBlur');
  const resetBlurBtn = document.getElementById('demoResetBlur');

  if (toggleBlurBtn) {
    toggleBlurBtn.addEventListener('click', () => {
      blurEnabled = !blurEnabled;
      blurTargets.forEach(target => {
        if (blurEnabled) {
          target.classList.add('screenshield-blurred');
        } else {
          target.classList.remove('screenshield-blurred');
        }
      });
      toggleBlurBtn.textContent = blurEnabled ? 'Unmask All Elements' : 'Mask Sensitive Elements [Alt+B]';
    });
  }

  if (resetBlurBtn) {
    resetBlurBtn.addEventListener('click', () => {
      blurTargets.forEach(target => target.classList.remove('screenshield-blurred'));
      blurEnabled = false;
      if (toggleBlurBtn) toggleBlurBtn.textContent = 'Toggle ScreenShield [Alt + B]';
    });
  }

  // 3. Dynamic Revenue & Payout Calculator
  const salesSlider = document.getElementById('salesSlider');
  const userCountDisplay = document.getElementById('userCountDisplay');
  const monthlyUsdDisplay = document.getElementById('monthlyUsdDisplay');
  const monthlyInrDisplay = document.getElementById('monthlyInrDisplay');
  const annualRunRateDisplay = document.getElementById('annualRunRateDisplay');

  const PRICE_PER_UNIT = 9; // $9 discounted license
  const USD_TO_INR = 85.50; // Exchange rate

  function updateCalculator() {
    const sales = parseInt(salesSlider.value, 10);
    const monthlyUsd = sales * PRICE_PER_UNIT;
    const monthlyInr = Math.round(monthlyUsd * USD_TO_INR);
    const annualUsd = monthlyUsd * 12;
    const annualInr = Math.round(annualUsd * USD_TO_INR);

    userCountDisplay.textContent = `${sales.toLocaleString()} sales / mo`;
    monthlyUsdDisplay.textContent = `$${monthlyUsd.toLocaleString()}`;
    monthlyInrDisplay.textContent = `₹${monthlyInr.toLocaleString()}`;
    annualRunRateDisplay.textContent = `$${annualUsd.toLocaleString()} / ₹${annualInr.toLocaleString()}`;
  }

  if (salesSlider) {
    salesSlider.addEventListener('input', updateCalculator);
    updateCalculator();
  }

  // 4. Modal Handler
  const modalOverlay = document.getElementById('modalOverlay');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');
  const modalCloseBtn = document.getElementById('modalCloseBtn');

  const modalData = {
    omniclean: {
      title: "⚡ OmniClean Pro Architecture & Source",
      content: `
        <p><strong>Language:</strong> Pure Python 3 (Cross-Platform standard library)</p>
        <p><strong>Supported OS:</strong> Windows 10/11 & macOS (Darwin)</p>
        <p style="margin-top: 10px;"><strong>Key Subsystems:</strong></p>
        <ul style="padding-left: 20px; margin: 8px 0;">
          <li><code>cleaner.py</code>: Native OS temporary file purgers, DNS flushers, and memory trim hooks.</li>
          <li><code>app.py</code>: Lightweight built-in HTTP controller serving the Noir & Vert Sombre card UI.</li>
          <li><code>Photo Cloak</code>: Binary EXIF/GPS parser that produces clean <code>_sanitized</code> copies.</li>
        </ul>
        <p style="margin-top: 10px;"><strong>Directory:</strong> <code>C:\\Users\\HomePC\\.gemini\\antigravity\\scratch\\omniclean-suite</code></p>
      `
    },
    screenshield: {
      title: "🛡️ ScreenShield Chrome Extension Blueprint",
      content: `
        <p><strong>Architecture:</strong> Manifest V3 (Chrome, Edge, Brave, Arc)</p>
        <p><strong>Monetization:</strong> $9 Pro License (50% OFF) via Dodo Payments / Razorpay</p>
        <p style="margin-top: 10px;"><strong>Features:</strong></p>
        <ul style="padding-left: 20px; margin: 8px 0;">
          <li>Point-and-click DOM selector masking with <code>Alt + B</code>.</li>
          <li>Instant regex auto-masking for client emails and financial figures.</li>
          <li>Domain-level persistent masking via <code>chrome.storage.local</code>.</li>
        </ul>
        <p style="margin-top: 10px;"><strong>Directory:</strong> <code>C:\\Users\\HomePC\\.gemini\\antigravity\\scratch\\blur-shield</code></p>
      `
    },
    handy: {
      title: "🎙️ Handy Local Dictation Setup Guide",
      content: `
        <p><strong>Type:</strong> 100% Offline Local Speech-to-Text Utility</p>
        <p><strong>Model:</strong> Embedded Whisper / Parakeet Engine</p>
        <p style="margin-top: 10px;"><strong>Features:</strong></p>
        <ul style="padding-left: 20px; margin: 8px 0;">
          <li>Global Push-to-Talk shortcut (hold down, speak, release).</li>
          <li>Zero cloud latency: audio never leaves the PC.</li>
          <li>Official Releases: <a href="https://github.com/cjpais/Handy/releases" target="_blank" style="color: #34d399;">GitHub Releases Page</a></li>
        </ul>
        <p style="margin-top: 10px;"><strong>Guide:</strong> <code>C:\\Users\\HomePC\\.gemini\\antigravity\\scratch\\pc-optimizations\\Handy-Dictation.md</code></p>
      `
    }
  };

  window.openDemoModal = function(key) {
    const data = modalData[key];
    if (data) {
      modalTitle.textContent = data.title;
      modalBody.innerHTML = data.content;
      modalOverlay.classList.add('open');
    }
  };

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', () => modalOverlay.classList.remove('open'));
  }
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) modalOverlay.classList.remove('open');
    });
  }

  window.scrollToPlayground = function() {
    const el = document.getElementById('playground');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };
});
