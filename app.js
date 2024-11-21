const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// 정적 파일 제공
app.use(express.static(path.join(__dirname, 'public')));

// 기본 경로 설정
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'pages', 'login.html')); 
});

// HTML 파일 응답
app.get('/public/pages/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'pages', 'login.html'));
});

app.get('/public/pages/signup', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'pages', 'signup.html'));
});

// 서버 시작
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});