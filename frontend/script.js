const btn = document.getElementById('translateBtn');
const source = document.getElementById('source');
const target = document.getElementById('target');
const result = document.getElementById('result');
const historyList = document.getElementById('history');

// כאן את מדביקה את הכתובת שקיבלת מהפקודה minikube service backend-service --url
const BACKEND_URL = 'http://192.168.49.2:32000'; // דוגמה - תחליפי בכתובת שלך!

btn.addEventListener('click', async () => {
    const text = source.value.trim();
    if (!text) return;

    result.textContent = 'מתרגם...';
    try {
        const res = await fetch(`${BACKEND_URL}/translate`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text, target: target.value })
        });
        const data = await res.json();
        result.textContent = data.translatedText;
        loadHistory();
    } catch (err) {
        result.textContent = 'שגיאה: ' + err.message;
    }
});

async function loadHistory() {
    try {
        const res = await fetch(`${BACKEND_URL}/history`);
        const data = await res.json();
        historyList.innerHTML = data.map(t => `<li>${t.source_text} → ${t.translated_text}</li>`).join('');
    } catch (err) {
        console.error('History error:', err);
    }
}

loadHistory();