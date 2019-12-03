export const fps = 16;
export const isMobile = (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/).test(navigator.userAgent);
export const magnification = isMobile ? Math.floor(window.innerWidth / 100) : 5;
