# parcel-js-axios-lodash-template

이 프로젝트는 Node.js 환경에서 Parcel, Axios, Lodash를 사용하여 웹 애플리케이션을 개발하기 위한 기본 템플릿입니다. 이 템플릿은 Axios를 활용한 HTTP 요청과 Lodash를 사용한 유틸리티 함수, 그리고 Google Maps API 통합 등의 기본적인 사용법을 보여줍니다.

## 프로젝트 구조

```plaintext
parcel-js-axios-lodash-template/
│
├── .cache/               # Parcel bundler의 캐시 파일
├── dist/                 # 빌드된 파일이 저장되는 디렉토리
├── node_modules/         # 프로젝트의 의존성이 저장된 디렉토리
├── public/               # 정적 파일(HTML, 이미지 등) 저장
│   └── index.html        # 웹 페이지의 기본 HTML 파일
├── src/                  # 소스 코드 디렉토리
│   └── main.js           # 주요 JavaScript 파일
├── .gitignore            # Git에서 무시할 파일 목록
├── package-lock.json     # 정확한 의존성 버전을 기록한 파일
├── package.json          # 프로젝트 메타데이터 및 의존성 관리 파일
└── README.md             # 프로젝트 설명서
```

## 기술 스택

### 1. Node.js

Node.js는 크롬 V8 JavaScript 엔진으로 빌드된 JavaScript 런타임입니다. 이는 JavaScript를 서버 측에서 실행할 수 있게 해주는 환경입니다.

#### 1-1. Node.js 설치

Node.js를 설치하려면 [공식 웹사이트](https://nodejs.org/)를 방문하거나 패키지 매니저를 사용할 수 있습니다.

#### 1-2. NVM (Node Version Manager)

NVM을 사용하면 여러 버전의 Node.js를 관리할 수 있습니다. Windows 사용자는 [nvm-windows](https://github.com/coreybutler/nvm-windows)에서 설치할 수 있으며, nvm-setup.zip 파일을 다운로드하여 설치합니다.

#### 1-3. Node.js 버전 관리

- 모든 Node.js 버전 목록 확인: `nvm ls-remote`
- 버전 설치: `nvm install <버전>`
- 버전 삭제: `nvm uninstall <버전>`
- 현재 사용 중인 버전 확인: `nvm ls`
- 버전 사용: `nvm use <버전>`

### 2. npm (Node Package Manager)

npm은 전 세계 개발자들이 만든 다양한 패키지와 모듈을 관리하는 도구입니다. 이 프로젝트에서는 npm을 사용하여 의존성을 관리합니다.

- 프로젝트 초기화 (package.json 생성): `npm init -y`
- 패키지 설치:
  - `npm install parcel-bundler -D`: Parcel을 개발 의존성으로 설치합니다.
  - `npm install lodash`: Lodash를 일반 의존성으로 설치합니다.
  - `npm install axios`: Axios를 일반 의존성으로 설치합니다.
- `-g`: 패키지를 전역으로 설치합니다.
- `-D`: 개발 의존성으로 설치합니다. (개발 시에만 필요)
- Dependencies 구분:
  - `devDependencies`: 개발용 패키지 (웹 브라우저에서 동작하지 않음)
  - `dependencies`: 일반적인 의존성 (웹 브라우저에서 동작)

### 3. Parcel

Parcel은 웹 애플리케이션을 빌드하고 번들링하는 최신 JavaScript 번들러입니다. 사용하기 쉽고 설정이 거의 필요 없습니다.

- 개발 서버 실행: `npm run dev`
  - 이 명령어는 Parcel을 사용하여 public/index.html 파일을 번들링하고 개발 서버를 실행합니다.
- 캐시 정리 및 강제 설치: `npm cache clean --force`, `npm install parcel-bundler -D --force`
- npm 재설치: `npm install -g npm`을 사용하여 npm 자체를 최신 버전으로 재설치할 수 있습니다.

### 4. Lodash

Lodash는 자주 사용하는 유틸리티 함수들을 제공하는 라이브러리입니다. 다양한 기능을 제공하여 코드의 효율성을 높일 수 있습니다.

### 5. Axios

Axios는 HTTP 요청을 보내고 응답을 처리하기 위한 JavaScript 라이브러리입니다. 주로 비동기적으로 API와 통신할 때 사용되며, 간단하게 GET, POST, PUT, DELETE 등의 HTTP 요청을 수행할 수 있습니다. 또한, 프로미스 기반으로 동작하며, 브라우저와 Node.js 환경 모두에서 사용할 수 있습니다.

## 주요 기능

1. **영화 검색**:

   - 사용자가 입력한 영화 제목으로 [OMDb API](http://www.omdbapi.com/)를 통해 영화를 검색합니다.
   - 검색 결과를 화면에 표시합니다.

2. **Google Maps 연동**:
   - 서울시 자전거 대여소 정보를 가져와 [Google Maps](https://developers.google.com/maps)에서 마커를 표시합니다.

## 사용 방법

1. `npm install` 명령어를 통해 프로젝트의 의존성을 설치합니다.
2. `npm run dev` 명령어를 통해 개발 서버를 실행합니다.
3. 브라우저에서 `http://localhost:1234`로 접근하여 프로젝트를 확인할 수 있습니다.

## 파일 설명

- `index.html`: 애플리케이션의 HTML 구조를 정의하며, Google Maps API와 함께 사용할 자바스크립트 파일을 포함하고 있습니다.
- `main.js`: 애플리케이션의 주요 JavaScript 코드가 포함되어 있으며, Lodash를 사용하여 데이터 처리 및 API 호출 기능을 구현합니다.

### 1. 주요 JavaScript 코드

#### 1-1. 데이터 복사 및 Lodash 사용 예시

- 얕은 복사, 깊은 복사 및 Lodash의 유틸리티 함수 사용 예제를 보여줍니다.

#### 1-2. API 호출 및 데이터 처리

- `axios`를 사용하여 영화 정보를 가져오고, 로컬 스토리지에 데이터를 저장합니다.

#### 1-3. Google Maps API 사용

- 서울 자전거 대여소의 위치를 Google Maps에 표시하고, 마커 클릭 시 정보 창을 표시합니다.

## 참고 자료

- [Parcel 공식 문서](https://parceljs.org/)
- [Lodash 공식 문서](https://lodash.com/)
- [Axios 공식 문서](https://axios-http.com/)
- [Google Maps JavaScript API 문서](https://developers.google.com/maps/documentation/javascript/overview)
- [OMDb API 문서](http://www.omdbapi.com/)

## API 키 설정

이 프로젝트는 외부 API를 사용하므로, API 키를 설정해야 합니다. src/main.js 또는 .env 파일에 다음과 같이 API 키를 설정하세요:

```javascript
const OMDb_API_KEY = 'YOUR_API_KEY_HERE'; // OMDb API 키
const GOOGLE_MAPS_API_KEY = 'YOUR_GOOGLE_MAPS_API_KEY_HERE'; // Google Maps
API 키
```

또는 .env 파일을 사용할 수 있습니다. .env 파일에 다음과 같이 추가하세요:

```makefile
OMDb_API_KEY=YOUR_API_KEY_HERE
GOOGLE_MAPS_API_KEY=YOUR_GOOGLE_MAPS_API_KEY_HERE
```

`src/main.js`에서 환경 변수를 사용하는 방법은 다음과 같습니다:

```javascript
require("dotenv").config();
const OMDb_API_KEY = process.env.OMDb_API_KEY;
const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY;
```

## License

[MIT License](LICENSE).
