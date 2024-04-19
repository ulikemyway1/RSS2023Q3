let timeZones = Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC';
console.log(
    new Date(1713423127758).toLocaleString('ru-Ru', { timeZone: 'timeZones' })
);
