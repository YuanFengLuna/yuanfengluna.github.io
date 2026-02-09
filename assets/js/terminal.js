/**
 * Interactive terminal overlay
 * Togglable via the _ icon in nav/footer
 * Supports commands: help, whoami, ls, cat skills.md, ping yuan, clear, brew coffee
 */
(function () {
    var isOpen = false;

    // Build terminal DOM
    var overlay = document.createElement('div');
    overlay.id = 'terminal-overlay';
    overlay.innerHTML = [
        '<div class="terminal-window">',
        '  <div class="terminal-header">',
        '    <span class="terminal-dots"><span></span><span></span><span></span></span>',
        '    <span class="terminal-title">yuan.luna_ terminal</span>',
        '    <button class="terminal-close" aria-label="Close terminal">&times;</button>',
        '  </div>',
        '  <div class="terminal-body" id="terminal-body">',
        '    <div class="terminal-output" id="terminal-output"></div>',
        '    <div class="terminal-input-line">',
        '      <span class="terminal-prompt">yuan.luna ~$</span>',
        '      <input type="text" class="terminal-input" id="terminal-input" autocomplete="off" spellcheck="false" autofocus>',
        '    </div>',
        '  </div>',
        '</div>'
    ].join('\n');

    document.body.appendChild(overlay);

    // Style injection
    var style = document.createElement('style');
    style.textContent = [
        '#terminal-overlay {',
        '  position: fixed; top: 0; left: 0; right: 0; bottom: 0;',
        '  background: rgba(10,10,15,0.85); backdrop-filter: blur(8px);',
        '  z-index: 10000; display: none; align-items: center; justify-content: center;',
        '  padding: 1.5rem;',
        '}',
        '#terminal-overlay.open { display: flex; }',
        '.terminal-window {',
        '  width: 100%; max-width: 700px; max-height: 80vh;',
        '  background: #0d0d14; border: 1px solid rgba(232,180,184,0.1);',
        '  border-radius: 0.75rem; overflow: hidden; display: flex; flex-direction: column;',
        '  box-shadow: 0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(232,180,184,0.05);',
        '}',
        '.terminal-header {',
        '  display: flex; align-items: center; padding: 0.75rem 1rem;',
        '  background: #161620; border-bottom: 1px solid rgba(232,180,184,0.06);',
        '}',
        '.terminal-dots { display: flex; gap: 6px; }',
        '.terminal-dots span {',
        '  width: 10px; height: 10px; border-radius: 50%;',
        '}',
        '.terminal-dots span:nth-child(1) { background: #ff5f57; }',
        '.terminal-dots span:nth-child(2) { background: #ffbd2e; }',
        '.terminal-dots span:nth-child(3) { background: #28c840; }',
        '.terminal-title {',
        '  flex: 1; text-align: center; font-family: var(--font-mono);',
        '  font-size: 0.75rem; color: var(--text-muted);',
        '}',
        '.terminal-close {',
        '  background: none; border: none; color: var(--text-muted); font-size: 1.25rem;',
        '  cursor: pointer; padding: 0 0.25rem; line-height: 1;',
        '}',
        '.terminal-close:hover { color: var(--accent-rose); }',
        '.terminal-body {',
        '  padding: 1rem; overflow-y: auto; flex: 1; min-height: 300px; max-height: 60vh;',
        '}',
        '.terminal-output { font-family: var(--font-mono); font-size: 0.8125rem; line-height: 1.7; }',
        '.terminal-output .line { margin-bottom: 0.25rem; }',
        '.terminal-output .line.cmd { color: var(--accent-rose); }',
        '.terminal-output .line.info { color: var(--text-primary); opacity: 0.9; }',
        '.terminal-output .line.muted { color: var(--text-muted); }',
        '.terminal-output .line.gold { color: var(--accent-gold); }',
        '.terminal-output .line.lavender { color: var(--accent-lavender); }',
        '.terminal-input-line {',
        '  display: flex; align-items: center; gap: 0.5rem; margin-top: 0.5rem;',
        '}',
        '.terminal-prompt { font-family: var(--font-mono); font-size: 0.8125rem; color: var(--accent-rose); white-space: nowrap; }',
        '.terminal-input {',
        '  flex: 1; background: none; border: none; outline: none;',
        '  font-family: var(--font-mono); font-size: 0.8125rem; color: var(--text-primary);',
        '  caret-color: var(--accent-rose);',
        '}',
        '.terminal-toggle {',
        '  position: fixed; bottom: 1.5rem; right: 1.5rem; z-index: 9000;',
        '  width: 44px; height: 44px; border-radius: 50%;',
        '  background: var(--bg-surface); border: 1px solid rgba(232,180,184,0.1);',
        '  color: var(--accent-rose); font-family: var(--font-mono); font-size: 1.25rem;',
        '  cursor: pointer; display: flex; align-items: center; justify-content: center;',
        '  transition: all 0.3s ease; box-shadow: 0 4px 16px rgba(0,0,0,0.3);',
        '}',
        '.terminal-toggle:hover {',
        '  border-color: var(--accent-rose); box-shadow: 0 0 20px rgba(232,180,184,0.12);',
        '}'
    ].join('\n');
    document.head.appendChild(style);

    // Toggle button
    var toggleBtn = document.createElement('button');
    toggleBtn.className = 'terminal-toggle';
    toggleBtn.setAttribute('aria-label', 'Open terminal');
    toggleBtn.textContent = '_';
    document.body.appendChild(toggleBtn);

    var output = document.getElementById('terminal-output');
    var input = document.getElementById('terminal-input');
    var body = document.getElementById('terminal-body');

    function writeLine(text, cls) {
        var line = document.createElement('div');
        line.className = 'line ' + (cls || 'info');
        line.textContent = text;
        output.appendChild(line);
        body.scrollTop = body.scrollHeight;
    }

    function writeHTML(html, cls) {
        var line = document.createElement('div');
        line.className = 'line ' + (cls || 'info');
        line.innerHTML = html;
        output.appendChild(line);
        body.scrollTop = body.scrollHeight;
    }

    // Welcome message
    function showWelcome() {
        writeLine('Welcome to yuan.luna_ terminal', 'lavender');
        writeLine('Type "help" for available commands.', 'muted');
        writeLine('', 'info');
    }

    var commands = {
        help: function () {
            writeLine('Available commands:', 'lavender');
            writeLine('  whoami          - about me', 'info');
            writeLine('  ls              - list sections', 'info');
            writeLine('  cat skills.md   - my skills', 'info');
            writeLine('  source .core    - what drives me', 'info');
            writeLine('  ping yuan       - contact info', 'info');
            writeLine('  clear           - clear terminal', 'info');
            writeLine('  exit            - close terminal', 'info');
            writeLine('', 'muted');
            writeLine('...and maybe a secret command or two.', 'muted');
        },

        whoami: function () {
            writeLine('Yuan Luna', 'lavender');
            writeLine('Software engineer, AI builder, cat mom.', 'info');
            writeLine('From Beijing to Irvine, California.', 'info');
            writeLine('8+ years: FAANG -> startup -> agentic AI.', 'info');
            writeLine('INTJ. Morning person. Americano drinker.', 'muted');
        },

        ls: function () {
            writeLine('drwxr-xr-x  intro/      -> #intro', 'info');
            writeLine('drwxr-xr-x  skills/     -> #work', 'info');
            writeLine('drwxr-xr-x  faith/      -> #faith', 'info');
            writeLine('drwxr-xr-x  blog/       -> /blog', 'info');
            writeLine('drwxr-xr-x  contact/    -> #contact', 'info');
        },

        'cat skills.md': function () {
            writeLine('# Skills', 'lavender');
            writeLine('', 'info');
            writeLine('## Agentic AI Solutions', 'info');
            writeLine('LangChain, CrewAI, Claude, GPT, RAG', 'muted');
            writeLine('', 'info');
            writeLine('## AI Application Development', 'info');
            writeLine('Python, TypeScript, React, Next.js, FastAPI', 'muted');
            writeLine('', 'info');
            writeLine('## Product Design & Engineering', 'info');
            writeLine('System Design, Data Pipelines, Cloud, CI/CD', 'muted');
        },

        'source .core': function () {
            writeLine('', 'info');
            writeLine('"She is clothed with strength and dignity,', 'gold');
            writeLine(' and she laughs without fear of the future."', 'gold');
            writeLine('                        — Proverbs 31:25', 'muted');
            writeLine('', 'info');
        },

        'ping yuan': function () {
            writeLine('PING yuan.luna (available)', 'info');
            writeLine('64 bytes: email=yuanfengluna@gmail.com ttl=64', 'info');
            writeLine('64 bytes: github=github.com/yuanfengluna ttl=64', 'info');
            writeLine('64 bytes: linkedin=linkedin.com/in/yuanluna ttl=64', 'info');
            writeLine('', 'info');
            writeLine('--- yuan.luna ping statistics ---', 'muted');
            writeLine('status: available for freelance work', 'lavender');
        },

        clear: function () {
            output.innerHTML = '';
        },

        exit: function () {
            closeTerminal();
        },

        'brew coffee': function () {
            writeLine('Brewing...', 'gold');
            writeLine('', 'info');
            writeLine('You found the secret! Want a free coffee?', 'lavender');
            writeLine('Head to the quiz section and prove you know me.', 'info');
            writeLine('', 'info');

            var quizSection = document.querySelector('.quiz-section, [id*="quiz"]');
            if (quizSection) {
                writeHTML('<span style="color:var(--accent-rose);cursor:pointer;text-decoration:underline;" onclick="document.getElementById(\'terminal-overlay\').classList.remove(\'open\');document.querySelector(\'.quiz-section, [id*=quiz]\').scrollIntoView({behavior:\'smooth\'})">-> Take me to the quiz</span>', 'info');
            } else {
                writeLine('(Quiz section not found on this page — head to the homepage!)', 'muted');
            }
        }
    };

    function processCommand(cmd) {
        var trimmed = cmd.trim().toLowerCase();
        writeLine('yuan.luna ~$ ' + cmd, 'cmd');

        if (!trimmed) return;

        if (commands[trimmed]) {
            commands[trimmed]();
        } else {
            writeLine('command not found: ' + trimmed, 'muted');
            writeLine('Type "help" for available commands.', 'muted');
        }

        writeLine('', 'info');
    }

    function openTerminal() {
        isOpen = true;
        overlay.classList.add('open');
        if (output.children.length === 0) {
            showWelcome();
        }
        setTimeout(function () { input.focus(); }, 100);
    }

    function closeTerminal() {
        isOpen = false;
        overlay.classList.remove('open');
    }

    // Event listeners
    toggleBtn.addEventListener('click', function () {
        if (isOpen) {
            closeTerminal();
        } else {
            openTerminal();
        }
    });

    overlay.querySelector('.terminal-close').addEventListener('click', closeTerminal);

    overlay.addEventListener('click', function (e) {
        if (e.target === overlay) {
            closeTerminal();
        }
    });

    input.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            processCommand(input.value);
            input.value = '';
        }
        if (e.key === 'Escape') {
            closeTerminal();
        }
    });

    // Global keyboard shortcut: Escape to close
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && isOpen) {
            closeTerminal();
        }
        // Backtick to open (when not typing in an input)
        if (e.key === '`' && !isOpen && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
            e.preventDefault();
            openTerminal();
        }
    });
})();
