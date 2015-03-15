chrome.webRequest.onBeforeRequest.addListener(function(details) {
  var url = details.url;
  var m;

  if (m = /^http:\/\/(\w+)\.2ch\.net\/(\w+)\/subject\.txt$/.exec(url)) {
    return {redirectUrl: 'http://' + m[1] + '.2ch.sc/' + m[2] + '/subject.txt'};
  }
  if (m = /^http:\/\/(\w+)\.2ch\.net\/(\w+)\/dat\/(\d+)\.dat$/.exec(url)) {
    return {redirectUrl: 'http://' + m[1] + '.2ch.sc/' + m[2] + '/dat/' + m[3] + '.dat'};
  }
  return {};
}, {urls: ['http://*.2ch.net/*']}, ['blocking']);
