const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = 5000;

// CORS 설정
app.use(cors({
    origin: 'http://localhost:3000', // 클라이언트에서 오는 요청을 허용
}));

app.get('/api/chzzk/profile', async (req, res) => {
  const { channelId } = req.query;
  const apiUrl = `https://api.chzzk.naver.com/service/v1/channels/${channelId}`;

  try {
      const response = await axios.get(apiUrl, {
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
          },
          timeout: 10000
      });
      console.log("API 응답 데이터:", response.data);
      res.json(response.data);
  } catch (error) {
      // 오류 로그 출력
      console.error('API 요청 중 오류 발생:', error.message);

      if (error.response) {
          // 서버에서 응답이 온 경우
          console.error('응답 데이터:', error.response.data); // 서버 응답 데이터
          console.error('상태 코드:', error.response.status); // 상태 코드
          console.error('응답 헤더:', error.response.headers); // 응답 헤더
          res.status(error.response.status).json({ message: error.response.data });
      } else if (error.request) {
          // 요청이 보내졌으나 응답이 없는 경우
          console.error('요청이 보내졌지만 응답이 없음:', error.request);
          res.status(500).json({ message: 'Request made but no response received' });
      } else {
          // 요청을 설정하는 도중 오류가 발생한 경우
          console.error('Error', error.message);
          res.status(500).json({ message: 'Internal Server Error' });
      }
  }
});


app.listen(PORT, () => {
    console.log(`프록시 서버가 포트 ${PORT}에서 실행 중입니다.`);
});
