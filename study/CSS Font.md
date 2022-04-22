## font-family

```css
.class-name {
    font-familiy: serif, sans-serif
}
```

로컬환경에 따라 폰트가 없을 수 있기 때문에 선호폰트 순서대로 설정가능

## 웹폰트

- 사용자 pc에 설치되어 있지 않으면 설치해주는 기능, 크기가 작더라도 리소스이기 때문에 CDN을 활용
- [구글 폰트](https://fonts.google.com/) 같은 곳을 활용하면 쉽게 사용가능

### 사용예시
```css
<link href="https://fonts.googleapis.com/css2?family=Akshar&display=swap" rel="stylesheet">
<style>
    p.akshar{
      font-family:'Akshar';
      font-weight: 400;
    }
</style>
```

## line-height

inline 요소의 높이를 조절하는 요소 정도로 생각할 수 있는데 정확히는 text line의 높이
