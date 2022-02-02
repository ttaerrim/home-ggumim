<h1  align="center"> 🏠 집 소개 컴포넌트 구현 과제 🏠 </h1>
<h3  align="center"> 서비스 링크 : https://elastic-kalam-c18661.netlify.app/</h3>

<p align="center"><img src="https://user-images.githubusercontent.com/43867711/152129329-891ddea0-fcf9-4354-b3b5-e7acda81dbd1.gif"/></p>

## `Stack`

`react` `javascript` `styled-component`

## `Install`

```
git clone https://github.com/ttaerrim/home-ggumim.git
cd home-ggumim
npm ci
npm start
```

## `Directory Structure`

```
├── README.md
├── jsconfig.json
├── package-lock.json
├── package.json
├── public
└── src
    ├── App.js
    ├── GlobalStyle.js					# 글로벌 스타일
    ├── components
    │   ├── Detail					# 돋보기 버튼 하위 컴포넌트
    │   │   ├── ButtonItem.js
    │   │   ├── ButtonList.js
    │   │   └── FurnitureDetailItem.js
    │   ├── Furniture				         # 하단 가구 컴포넌트
    │   │   ├── FurnitureItem.js
    │   │   └── FurnitureList.js
    │   ├── HomeTemplate.js
    │   └── ImageContainer.js
    ├── context						# API 호출 Context
    │   └── HomeContext.js
    └── index.js
```
