(() => {
  'use strict';

  const preventDefault = event => event.preventDefault();

  // Safari 私有 gesture events：處理仍忽略 user-scalable=no 的 iPadOS 版本。
  document.addEventListener('gesturestart', preventDefault, { passive: false });
  document.addEventListener('gesturechange', preventDefault, { passive: false });
  document.addEventListener('gestureend', preventDefault, { passive: false });

  // 保留單指捲動，但攔截雙指頁面手勢。
  document.addEventListener('touchmove', event => {
    if (event.touches.length > 1) event.preventDefault();
  }, { passive: false });

  // 同時停用觸控板縮放及常見鍵盤縮放快捷鍵。
  document.addEventListener('wheel', event => {
    if (event.ctrlKey) event.preventDefault();
  }, { passive: false });

  document.addEventListener('keydown', event => {
    if ((event.ctrlKey || event.metaKey) && ['+', '-', '=', '0'].includes(event.key)) {
      event.preventDefault();
    }
  });
})();
