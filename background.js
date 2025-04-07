importScripts('./verses/background.fear.js');
importScripts('./verses/background.anxious.js');
importScripts('./verses/background.praise.js');
importScripts('./verses/background.comfort.js');
importScripts('./verses/background.encouragement.js');
importScripts('./verses/background.faith.js');
importScripts('./verses/background.forgiveness.js');
importScripts('./verses/background.hope.js');
importScripts('./verses/background.inspiring.js');
importScripts('./verses/background.love.js');
importScripts('./verses/background.motivation.js');
importScripts('./verses/background.peace.js');
importScripts('./verses/background.strength.js');
importScripts('./verses/background.thankfulness.js');
importScripts('./verses/background.wisdom.js');


// coming from importScripts
const verses = {
  anxious,
  comfort,
  encouragement,
  faith,
  fear,
  forgiveness,
  hope,
  inspiring,
  love,
  motivation,
  peace,
  praise,
  strength,
  thankfulness,
  wisdom,
};

chrome.alarms.onAlarm.addListener(async (alarm) => {
  
  const { enable } = await chrome.storage.local.get('enable');
  if (!enable) return;

  if (alarm.name === 'bibleReminder') {
    chrome.storage.local.get('theme', (data) => {
      const theme = data.theme || 'motivation';
      const verseList = verses[theme];
      const i = Math.floor(Math.random() * verseList.length)
      const verse = verseList[i];
      const id = `${i}-${theme}`
      chrome.notifications.create(id, {
        type: 'basic',
        iconUrl: 'icon.png',
        title: 'Ever Green Verse 🍃',
        contextMessage: verse.title,
        message: verse.text,
        priority: 2
      });
    });
  }
});


chrome.notifications.onClicked.addListener((notificationId) => {
  const [index, theme] = notificationId.split('-')
  const verseList = verses[theme];
  const verse = verseList[index];
  const url = `https://www.biblegateway.com/passage/?search=${encodeURIComponent(verse.title)}&version=NIV`
  chrome.tabs.create({ url })
});
