let lastUrl = location.href;
new MutationObserver(() => {
    const url = location.href;
    if (url !== lastUrl) {
        lastUrl = url;
        onUrlChange();
    }
}).observe(document, { subtree: true, childList: true });

function onUrlChange() {
    let page_url = location.href.split("&index")[0]; // Will remove &index=N part of url to avoid recursive reloading which sometimes happen as result of N changing after every window.open.
    window.open(page_url, "_self");
}
