// load external Remark
function loadScript(src, callback) {
    const script = document.createElement('script');
    script.src = src;
    script.async = true; // Important: Load asynchronously
    script.onload = callback;
    script.onerror = () => {
        console.error(`Failed to load script: ${src}`);
        if (callback) callback(new Error(`Failed to load script: ${src}`)); // Call the callback with the error
    };
    document.head.appendChild(script);
}

loadScript("https://remarkjs.com/downloads/remark-latest.min.js", (error) => {
    // load the current page as Markdown
    var slideshow = remark.create({sourceUrl: '#'});
    // hide the Markdown source
    var x = document.getElementsByTagName("body")[0].innerHTML="";
    console.log("hi");
});
