// utils/preloadAssets.js
export function preloadImages(urls) {
    return Promise.all(
        urls.map(
            (url) =>
                new Promise((resolve) => {
                    const img = new Image();
                    img.src = url;
                    img.onload = resolve;
                    img.onerror = resolve; // don't hang forever on a broken image
                })
        )
    );
}