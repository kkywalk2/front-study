### CSS Animation
transition과 유사하게, 전환에 대한 애니메이션을 적용, 하지만 중간에 변경되는 스타일을 세밀하게 지정할 수 있음

- keyframes 문법
```css
@keyframes fall {
      0% {
        top: 0;
      }
      50% {
        top: 100px;
      }
      100%{
        top: 300px;
      }
    }
@keyframes fadeout {
      0% {
        opacity: 1;
      }
      100%{
        opacity: 0;
      }
}
```
keyframes란 문법으로 애니메이션의 진행도에 따라 어떤 동작을 할지 정의

```css
.box1 {
      background-color: yellow;
      width: 10vw;
      position: relative;
      animation-name: fall, fadeout; /*여러개 한번에 적용가능*/
      animation-duration: 5s; 
      animation-iteration-count: infinite;
      animation-fill-mode: none; /*처음 스타일 -> 0% -> 100% -> 처음 스타일*/
      animation-direction: alternate; /*애니메이션 재생 방식, alternate면 처음 스타일로 돌아가는 부분이 역재생 되는 방식으로 돌아감*/
}
```
keyframe 적용하기
추가로 animation-play-state라는 프로퍼티가 있는데 paused값을 주면 애니메이션을 정지시킬 수 있음, javascript에서 제어하기 위한 프로퍼티

```css
.box1 {
  /* name duration timing-function delay iteration-count direction*/
  animation: ball 2s ease-in 4s infinite reverse both paused 
}
```