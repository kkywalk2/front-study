### CSS Transform
transform은 요소의 회전, 크기 조절, 기울이기, 이동 효과를 부여하는 함수를 제공
애니메이션과 같이 키프레인 기반 설정은 제공하지 않아 필요하면 animation과 transition과 함께 사용하면 원하는 효과를 얻을 수 있음

```css
p.akshar:hover{
    /*transform에 대해 애니메이션을 적용*/
    transition: transform 2s;
    transform: translate(30px, 30px)
}

/*아래 처럼 keyframe에도 적용가능*/
@keyframes rotate {
      0% {
        transform: rotate(180deg)
      }
      100%{
        transform: rotate(360deg)
      }
    }
```