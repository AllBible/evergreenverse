chrome.storage.local.get(['enable', 'theme'], data => {

  // Set minimum date to now
  const now = new Date();
  const formatted = now.toISOString().slice(0, 16);
  document.getElementById('start-date').min = formatted;

  const { enable, theme } = data;
  const btnEnable = document.getElementById('btnEnable');
  if (theme) document.getElementById('theme').value = theme
  if (enable) {
    chrome.storage.local.set({ enable: true })
    btnEnable.classList.add('cancel')
    btnEnable.textContent = 'Disable'
  }
})

chrome.alarms.get('bibleReminder', (alarm) => {
  document.getElementById('interval').value = parseInt(alarm.periodInMinutes / 60)
  document.getElementById('start-date').value = new Date(alarm.scheduledTime).toISOString().replace(/\..*/, '')
})


document.getElementById('reminder-form').onsubmit = (e) => {
  e.preventDefault();

  const startDate = document.getElementById('start-date').value;
  const interval = parseInt(document.getElementById('interval').value);
  const theme = document.getElementById('theme').value;

  const startTime = new Date(startDate).getTime();
  const delay = startTime - Date.now();

  if (delay > 0) {
    chrome.alarms.create('bibleReminder', { when: Date.now() + delay, periodInMinutes:  interval * 60 });
    chrome.storage.local.set({ theme, enable: true })
    chrome.notifications.create({
      type: 'basic',
      iconUrl: 'icon.png',
      title: 'Ever Green Verse',
      message: `Verse reminders have been set for ${theme}`
    });
  } else {
    alert('Start date must be in the future.');
  }
}


document.getElementById('btnEnable').onclick = async () => {
  const btnEnable = document.getElementById('btnEnable');
  const { enable } = await chrome.storage.local.get('enable');
  if (enable) {
    chrome.storage.local.set({ enable: false })
    btnEnable.classList.remove('cancel');
    btnEnable.textContent = 'Enable';
  } else {
    chrome.storage.local.set({ enable: true })
    btnEnable.classList.add('cancel');
    btnEnable.textContent = 'Disable';
  }
}