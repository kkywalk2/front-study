### meta


#### 검색엔진을 위한 정보

검색엔진에서 검색에 용이하게 하기 위해 기본적으로 넣은 meta정보
- description
- keywords
- author

#### viewport를 위한 정보

추가로 보통 viewport를 위한 다음의 속성을 넣음
```html
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
```

위 정보는 확대를 불가능하게 하기위한 설정, 확대나 축소를 가능하게 하려면 initial-scale속성만 있으면 될 것 같음

#### Open Graph

다른 사이트에 링크를 걸었을 경우 표시될 정보를 정의한다. (페이스북이나 링크드인 같은..)

```html
<meta property="og:type" content="website" />
<meta property="og:description" content="잔재미코딩 온라인 강의 리스트" />
<meta property="og:image" content="img/fun-coding-mark.png" />
<meta property="og:url" content="http://cnt2020.hopto.org:9000/blog/#/" />
<meta property="og:site_name" content="kky의 프론트 연습하기" />
```

기본적인 포맷은 위와 같음, 트위터는 별개의 포맷을 사용한다(왜..)

```html
<meta name="twitter:card" content="summary" /> <!--Open Graph의 type과 같은 놈-->
<meta name="twitter:title" content="잔재미코딩" />
<meta name="twitter:description" content="잔재미코딩 온라인 강의 리스트" />
<meta name="twitter:image" content="img/fun-coding-mark.png" />
<meta name="twitter:url" content="https://www.fun-coding.org" />
<meta name="twitter:creator" content="Dave Lee" />
```

### link

#### fabicon

```html
<!-- 일반적인 fabicon 설정 -->
<link rel="icon" href="img/fun-coding.ico" />
<!-- 아이폰용 fabicon 설정 -->
<link rel="apple-touch-icon" href="img/fun-coding.ico" />
<!-- 인터넷 익스플로어용 fabicon 설정 -->
<link rel="shortcut icon" tyle="image/x-icon" href="img/fun-coding.ico" />
```

아니 왜 같은 기능이 이렇게 파편회 되있는거지

#### css 초기화 및 각종 리소스 불러오기

```html
<!-- CSS설정 초기화, 자신이 적용할 css보다 무조건 앞에 나와야함, 대충 적당히 이쁘게 초기화 해준다고 보면 됨 -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" />
<!-- 편하게 사용할 수 있는 아이콘의 모음 가져오기 -->
<script src="https://kit.fontawesome.com/f1def33959.js" crossorigin="anonymous"></script>
<!-- 웹폰트 설정 -->
<link href="//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css" rel="stylesheet" type="text/css" />
```
