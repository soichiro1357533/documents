// Load Mermaid.js from CDN
var script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js';
script.onload = function() {
    mermaid.initialize({ startOnLoad: true });
};
document.head.appendChild(script);