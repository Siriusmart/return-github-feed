// full credits to https://github.com/wangrongding/github-old-feed
(function () {
  'use strict';

  const feedContent = document.querySelector('.feed-content')
  const feedMain = document.querySelector('.feed-main')
  feedContent.style.maxWidth = "unset"
  feedMain.style.maxWidth = "1200px"

  fetch('https://github.com/dashboard-feed')
    .then(response => response.text())
    .then(text => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(text, 'text/html');
      // Preserving the SSO container
      const dashboard = document.querySelector("#dashboard feed-container");
      const main = doc.querySelector('main');
      if (dashboard && main) {
        dashboard.replaceWith(main);
      }
    })
    .catch(error => {
      console.error('Fetching the dashboard feed:', error);
    });
})();
