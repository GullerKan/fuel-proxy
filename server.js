const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch'); // теперь работает, т.к. версия 2

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/api/fuel', async (req, res) => {
    console.log('Получен запрос на /api/fuel');
    try {
        const response = await fetch('https://fuel.sevtech.org/fuel/qr/fuel-types');
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Ошибка прокси:', error);
        res.status(500).json({ error: 'Не удалось получить данные о топливе' });
    }
});

app.listen(PORT, () => {
    console.log(`✅ Сервер запущен на порту ${PORT}`);
});