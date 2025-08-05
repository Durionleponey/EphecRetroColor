//ce .js est lié à l'eperso





// fonction pour injecter le CSS
function injectCSS() {
    chrome.storage.local.get(['customCSS'], function(result) {
        if (result.customCSS) {
            const style = document.createElement('style');
            style.textContent = result.customCSS;
            document.head.appendChild(style);
        }
    });
}


injectCSS();

