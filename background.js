const verses = {
  inspiring: ["Isaiah 40:31", "Philippians 4:13"],
  motivation: ["Joshua 1:9", "Romans 8:28"],
  fear: ["Psalm 23:4", "Isaiah 41:10"],
  anxious: ["Philippians 4:6-7", "Matthew 6:34"],
  praise: ["Psalm 100:1-5", "Psalm 150:6"],
  other: ["John 3:16", "Romans 5:8"]
};

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === 'bibleReminder') {
    chrome.storage.local.get('theme', (data) => {
      const theme = data.theme || 'other';
      const verseList = verses[theme];
      const verse = verseList[Math.floor(Math.random() * verseList.length)];

      chrome.notifications.create({
        type: 'basic',
        iconUrl: 'icon.png',
        title: 'Bible Verse Reminder',
        message: `Today's verse: ${verse}`,
        priority: 2
      });
    });
  }
});
