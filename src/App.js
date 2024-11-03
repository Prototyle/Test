import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { Card, Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() { // 1페이지

  return (
    <div className = "App">
      <header className = "App-header">
        <img src = {logo} className = "App-logo" alt="logo" />
        <p className = "App-p">
          환영합니다. 이곳에서 세상 속 다양한 인터넷 방송인들을 만나보세요.
        </p>
       <Link to="/page2" className="App-button">
          이동하기 
        </Link>
      </header>
    </div>
  );
}
const YouTubeProfileComponent = () => { // 유튜버 1 프로필
  const [channelInfo, setChannelInfo] = useState(null);

  useEffect(() => {
    const fetchYouTubeChannelInfo = async () => {
      const API_KEY = 'AIzaSyAUd4RFU-ZqrYnacJv20sN6MvLjaza7bs0'; // 발급받은 YouTube API 키를 입력하세요.
      const channelId = 'UCilYpdgaNbW8x8_E83vomNw'; // 원하는 유튜브 채널 ID를 입력하세요.

      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${channelId}&key=${API_KEY}`
        );
        const channelData = response.data.items[0];
        
        const profileImage = channelData.snippet.thumbnails.default.url; // 프로필 이미지
        const channelName = channelData.snippet.title; // 채널명
        
        setChannelInfo({
          profileImage,
          channelName,
        });
      } catch (error) {
        console.error('채널 정보를 가져오는 중 오류 발생:', error);
      }
    };

    fetchYouTubeChannelInfo();
  }, []);

  return (
    <div>
      {channelInfo ? (
        <div>
          <img src={channelInfo.profileImage} alt="프로필 이미지" className="profile-image"/>
          <h2>{channelInfo.channelName}</h2>
        </div>
      ) : (
        <p>채널 정보를 불러오는 중...</p>
      )}
    </div>
  );
};

const YouTubeProfileComponent2 = () => { // 유튜버 2 프로필
  const [channelInfo, setChannelInfo] = useState(null);

  useEffect(() => {
    const fetchYouTubeChannelInfo = async () => {
      const API_KEY = 'AIzaSyAUd4RFU-ZqrYnacJv20sN6MvLjaza7bs0'; // 발급받은 YouTube API 키를 입력하세요.
      const channelId = 'UC_aEa8K-EOJ3D6gOs7HcyNg'; // 원하는 유튜브 채널 ID를 입력하세요.

      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${channelId}&key=${API_KEY}`
        );
        const channelData = response.data.items[0];
        
        const profileImage = channelData.snippet.thumbnails.default.url; // 프로필 이미지
        const channelName = channelData.snippet.title; // 채널명
        
        setChannelInfo({
          profileImage,
          channelName,
        });
      } catch (error) {
        console.error('채널 정보를 가져오는 중 오류 발생:', error);
      }
    };

    fetchYouTubeChannelInfo();
  }, []);

  return (
    <div>
      {channelInfo ? (
        <div>
          <img src={channelInfo.profileImage} alt="프로필 이미지" className="profile-image" />
          <h2>{channelInfo.channelName}</h2>
        </div>
      ) : (
        <p>채널 정보를 불러오는 중...</p>
      )}
    </div>
  );
};

const YouTubeProfileComponent3 = () => { // 유튜버 3 프로필
  const [channelInfo, setChannelInfo] = useState(null);

  useEffect(() => {
    const fetchYouTubeChannelInfo = async () => {
      const API_KEY = 'AIzaSyAUd4RFU-ZqrYnacJv20sN6MvLjaza7bs0'; // 발급받은 YouTube API 키를 입력하세요.
      const channelId = 'UCK44QT7G-cXYfIgm93N93Sg'; // 원하는 유튜브 채널 ID를 입력하세요.

      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${channelId}&key=${API_KEY}`
        );
        const channelData = response.data.items[0];
        
        const profileImage = channelData.snippet.thumbnails.default.url; // 프로필 이미지
        const channelName = channelData.snippet.title; // 채널명
        
        setChannelInfo({
          profileImage,
          channelName,
        });
      } catch (error) {
        console.error('채널 정보를 가져오는 중 오류 발생:', error);
      }
    };

    fetchYouTubeChannelInfo();
  }, []);

  return (
    <div>
      {channelInfo ? (
        <div>
          <img src={channelInfo.profileImage} alt="프로필 이미지" className="profile-image" />
          <h2>{channelInfo.channelName}</h2>
        </div>
      ) : (
        <p>채널 정보를 불러오는 중...</p>
      )}
    </div>
  );
};

const YouTubeLiveComponent = () => { // 유튜버 1 방송 정보
  const [isLive, setIsLive] = useState(false);
  const [liveStreamLink, setLiveStreamLink] = useState('');
  const [viewers, setViewers] = useState(null); // 시청자 수 상태 추가
  const API_KEY = 'AIzaSyAUd4RFU-ZqrYnacJv20sN6MvLjaza7bs0'; // 발급받은 API 키를 여기에 입력
  const channelId = 'UCilYpdgaNbW8x8_E83vomNw'; // 원하는 유튜브 채널 ID 입력

  const fetchLiveViewers = async (videoId) => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/videos?part=liveStreamingDetails&id=${videoId}&key=${API_KEY}`
      );
      const liveDetails = response.data.items[0].liveStreamingDetails;
      const concurrentViewers = liveDetails.concurrentViewers; // 실시간 시청자 수

      return concurrentViewers;
    } catch (error) {
      console.error('실시간 시청자 수를 가져오는 중 오류 발생:', error);
      return null;
    }
  };

  useEffect(() => {
    const checkLiveStream = async () => {
      try {
        const liveResponse = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&eventType=live&type=video&key=${API_KEY}`
        );

        if (liveResponse.data.items && liveResponse.data.items.length > 0) {
          const liveVideoId = liveResponse.data.items[0].id.videoId;
          setIsLive(true);
          setLiveStreamLink(`https://www.youtube.com/watch?v=${liveVideoId}`);

           // 실시간 시청자 수 가져오기
           const viewersCount = await fetchLiveViewers(liveVideoId);
           setViewers(viewersCount);
        } else {
          setIsLive(false);
          setViewers(null);
        }
      } catch (error) {
        console.error('Error fetching live stream:', error);
      }
    };
    checkLiveStream();
  }, []);

  return (
    <div>
      {isLive ? (
        <div>
          <p>현재 실시간 방송 중입니다!</p>
          <a href={liveStreamLink} target="_blank" rel="noopener noreferrer">
            실시간 방송 보러가기
          </a>
          {viewers && <p>실시간 시청자 수: {viewers}</p>}
        </div>
      ) : (
        <p>현재 실시간 방송이 없습니다.</p>
      )}
    </div>
  );
};

const YouTubeLiveComponent2 = () => { // 유튜버 2 방송 정보
  const [isLive, setIsLive] = useState(false);
  const [liveStreamLink, setLiveStreamLink] = useState('');
  const [viewers, setViewers] = useState(null); // 시청자 수 상태 추가
  const API_KEY = 'AIzaSyAUd4RFU-ZqrYnacJv20sN6MvLjaza7bs0'; // 발급받은 API 키를 여기에 입력
  const channelId = 'UC_aEa8K-EOJ3D6gOs7HcyNg'; // 원하는 유튜브 채널 ID 입력

  const fetchLiveViewers = async (videoId) => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/videos?part=liveStreamingDetails&id=${videoId}&key=${API_KEY}`
      );
      const liveDetails = response.data.items[0].liveStreamingDetails;
      const concurrentViewers = liveDetails.concurrentViewers; // 실시간 시청자 수

      return concurrentViewers;
    } catch (error) {
      console.error('실시간 시청자 수를 가져오는 중 오류 발생:', error);
      return null;
    }
  };

  useEffect(() => {
    const checkLiveStream = async () => {
      try {
        const liveResponse = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&eventType=live&type=video&key=${API_KEY}`
        );

        if (liveResponse.data.items && liveResponse.data.items.length > 0) {
          const liveVideoId = liveResponse.data.items[0].id.videoId;
          setIsLive(true);
          setLiveStreamLink(`https://www.youtube.com/watch?v=${liveVideoId}`);

           // 실시간 시청자 수 가져오기
           const viewersCount = await fetchLiveViewers(liveVideoId);
           setViewers(viewersCount);
        } else {
          setIsLive(false);
          setViewers(null);
        }
      } catch (error) {
        console.error('Error fetching live stream:', error);
      }
    };
    checkLiveStream();
  }, []);

  return (
    <div>
      {isLive ? (
        <div>
          <p>현재 실시간 방송 중입니다!</p>
          <a href={liveStreamLink} target="_blank" rel="noopener noreferrer">
            실시간 방송 보러가기
          </a>
          {viewers && <p>실시간 시청자 수: {viewers}</p>}
        </div>
      ) : (
        <p>현재 실시간 방송이 없습니다.</p>
      )}
    </div>
  );
};

const YouTubeLiveComponent3 = () => { // 유튜버 3 방송 정보
  const [isLive, setIsLive] = useState(false);
  const [liveStreamLink, setLiveStreamLink] = useState('');
  const [viewers, setViewers] = useState(null); // 시청자 수 상태 추가
  const API_KEY = 'AIzaSyAUd4RFU-ZqrYnacJv20sN6MvLjaza7bs0'; // 발급받은 API 키를 여기에 입력
  const channelId = 'UCK44QT7G-cXYfIgm93N93Sg'; // 원하는 유튜브 채널 ID 입력

  const fetchLiveViewers = async (videoId) => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/videos?part=liveStreamingDetails&id=${videoId}&key=${API_KEY}`
      );
      const liveDetails = response.data.items[0].liveStreamingDetails;
      const concurrentViewers = liveDetails.concurrentViewers; // 실시간 시청자 수

      return concurrentViewers;
    } catch (error) {
      console.error('실시간 시청자 수를 가져오는 중 오류 발생:', error);
      return null;
    }
  };

  useEffect(() => {
    const checkLiveStream = async () => {
      try {
        const liveResponse = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&eventType=live&type=video&key=${API_KEY}`
        );

        if (liveResponse.data.items && liveResponse.data.items.length > 0) {
          const liveVideoId = liveResponse.data.items[0].id.videoId;
          setIsLive(true);
          setLiveStreamLink(`https://www.youtube.com/watch?v=${liveVideoId}`);

           // 실시간 시청자 수 가져오기
           const viewersCount = await fetchLiveViewers(liveVideoId);
           setViewers(viewersCount);
        } else {
          setIsLive(false);
          setViewers(null);
        }
      } catch (error) {
        console.error('Error fetching live stream:', error);
      }
    };
    checkLiveStream();
  }, []);

  return (
    <div>
      {isLive ? (
        <div>
          <p>현재 실시간 방송 중입니다!</p>
          <a href={liveStreamLink} target="_blank" rel="noopener noreferrer">
            실시간 방송 보러가기
          </a>
          {viewers && <p>실시간 시청자 수: {viewers}</p>}
        </div>
      ) : (
        <p>현재 실시간 방송이 없습니다.</p>
      )}
    </div>
  );
};

const ChzzkProfileComponent = () => {
  const [profileInfo, setProfileInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchChzzkProfile = async () => {
      const channelId = '6fccf2c08f2e9f801fc3152a8923e1c2';
      try {
        const response = await axios.get(`http://localhost:5000/api/chzzk/profile?channelId=${channelId}`, { timeout: 5000 });
        console.log(response.data);
        setProfileInfo(response.data.content);
      } catch (error) {
        console.error('Chzzk 프로필 정보를 가져오는 중 오류 발생:', error);
        setError('Chzzk 프로필 정보를 가져오는 중 오류가 발생했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchChzzkProfile();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Chzzk 프로필 정보를 불러오는 중...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        profileInfo && (
          <div>
            <img src={profileInfo.channelImageUrl} alt="프로필 이미지" className="profile-image" />
            <h2>{profileInfo.channelName}</h2>
            {/* 필요한 추가 정보 표시 */}
          </div>
        )
      )}
    </div>
  );
};

const ChzzkLiveComponent = () => {

}

function App2() {
  const broadcasters = [
    { profileComponent: <YouTubeProfileComponent />, liveComponent: <YouTubeLiveComponent /> },
    { profileComponent: <YouTubeProfileComponent2 />, liveComponent: <YouTubeLiveComponent2 /> },
    { profileComponent: <YouTubeProfileComponent3 />, liveComponent: <YouTubeLiveComponent3 /> },
    { profileComponent: <ChzzkProfileComponent />, liveComponent: <YouTubeLiveComponent /> },
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center">방송인 목록</h2>
      <div className="d-flex flex-column align-items-start"> {/* 세로 정렬을 위해 flex-column 사용 */}
        {broadcasters.map((broadcaster, index) => (
          <div className="mb-3" key={index} style={{ width: '100%', maxWidth: '400px' }}> {/* 카드의 최대 너비 설정 */}
            <Card className="d-flex flex-row align-items-center" style={{ height: '150px' }}>
              <div style={{ flex: '0 0 100px', display: 'flex', justifyContent: 'center' }}>
                {broadcaster.profileComponent} {/* 동그란 프로필 이미지 */}
              </div>
              <Card.Body className="d-flex flex-column justify-content-center" style={{ flex: '1' }}>
                <Card.Title>{broadcaster.profileComponent.props.channelName}</Card.Title> {/* 방송인 닉네임 */}
                <Card.Text>시청자 수: {broadcaster.liveComponent.props.viewerCount}</Card.Text> {/* 시청자 수 */}
              </Card.Body>
              <div className="d-flex flex-column justify-content-center" style={{ marginLeft: 'auto', paddingRight: '20px' }}>
                <p>{broadcaster.liveComponent.props.isLive ? '🔴 실시간 방송 중' : '⚪️ 오프라인'}</p> {/* 실시간 방송 여부 */}
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/page2" element={<App2 />} />
      </Routes>
    </Router>
  );
 }

export default AppRouter;