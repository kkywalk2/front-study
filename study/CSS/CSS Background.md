## Background Image 설정하기

```css
h1 {
    background-image: url("https://storage.googleapis.com/static.fastcampus.co.kr/prod/uploads/202203/145715-474/star741-pofol-01-03.png"),
      url("https://storage.googleapis.com/static.fastcampus.co.kr/prod/uploads/202203/145715-474/star741-pofol-01-03.png");
    height: 100em;
    background-repeat: no-repeat no-repeat, repeat repeat;
    background-color: red;
    background-attachment: fixed;
}
```

- background-repeat 속성은 가로 세로 두가지 속성을 따로 줄 수 있고 쉼표로 image가 2개 이상이면 구분함
- background-attachment를 fixed로 설정하면 뒤의 화면이 같이 스크롤 되지 않음


## css 단위

- px 
- % : 부모 요소의 크기에 대한 비율?
- em : 부모 요소 크기의 배율
- rem : 최상위 요소 크기의 배율
- vw : viewport에 대한 비율



