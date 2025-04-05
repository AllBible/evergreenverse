document.getElementById('reminder-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const startDate = document.getElementById('start-date').value;
  const interval = parseInt(document.getElementById('interval').value);
  const theme = document.getElementById('theme').value;

  const startTime = new Date(startDate).getTime();
  const delay = startTime - Date.now();

  if (delay > 0) {
    chrome.alarms.create('bibleReminder', { when: Date.now() + delay, periodInMinutes: interval * 60 });
    chrome.storage.local.set({ theme });
    alert('Reminder set!');
  } else {
    alert('Start date must be in the future.');
  }
});
