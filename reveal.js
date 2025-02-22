const meta = document.createElement('meta');
meta.setAttribute('charset', 'UTF-8');
document.head.appendChild(meta);

function loadScript(src, callback) {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.onload = callback;
    script.onerror = () => {
        console.error(`Failed to load script: ${src}`);
        if (callback) callback(new Error(`Failed to load script: ${src}`));
    };
    document.head.appendChild(script);
}

function loadCSS(href) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = href;
    link.onerror = () => {
        console.error(`Failed to load CSS: ${href}`);
    };
    document.head.appendChild(link);
}


loadScript("https://cdnjs.cloudflare.com/ajax/libs/reveal.js/5.1.0/plugin/markdown/markdown.min.js", () => {
    loadScript("https://cdnjs.cloudflare.com/ajax/libs/reveal.js/5.1.0/reveal.js", () => {

        // Load Reveal.js CSS *after* Reveal.js script loads
        loadCSS("https://cdnjs.cloudflare.com/ajax/libs/reveal.js/5.1.0/reveal.min.css");

        // *** DOM Manipulation ***
        const body = document.body;
        const originalContent = body.innerHTML; // Store the original content

        // Create the Reveal.js structure
        const revealDiv = document.createElement('div');
        revealDiv.className = 'reveal';

        const slidesDiv = document.createElement('div');
        slidesDiv.className = 'slides';

        // Markdown Section
        const section = document.createElement('section');
        section.setAttribute('data-markdown', '');
        const textArea = document.createElement('textarea');
        textArea.setAttribute('data-template', ''); // if needed
        section.appendChild(textArea);

        // Add the original content to the <textarea>
        textArea.innerHTML = originalContent;

        slidesDiv.appendChild(section);
        revealDiv.appendChild(slidesDiv);
        body.innerHTML = ''; // Clear the body
        body.appendChild(revealDiv); // Append the Reveal.js structure


        Reveal.initialize({
            plugins: [RevealMarkdown],
        });

        console.log("Reveal.js and Markdown plugin initialized.");
    });
});