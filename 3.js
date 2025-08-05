//ce .js est lié à moodle






// fonction pour injecter le CSS
function injectCSS() {
    chrome.storage.local.get(['customCSS2'], function(result) {
        if (result.customCSS2) {
            const style = document.createElement('style');
            style.textContent = result.customCSS2;
            document.head.appendChild(style);
        }
    });
}


injectCSS();


