import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import App from './components/App';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

if (module.hot) {// module이 정의 되지 않았다고 경고 밑줄이 생겼는데, babel-cli를 설치하니 사라졌다. 이유는 모르겠음. 찬찬히 알아 보자.
	module.hot.accept();// 이걸 사용하면 새로고침 없이 브라우저화면이 바로 갱신됨
}

// registerServiceWorker();
