// 캔버스 설정
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
document.body.appendChild(canvas);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// 원의 위치, 크기, 속도, 색상 설정
let circleX = 100;
let circleY = 100;
const circleRadius = 20;
const circleSpeed = 5;
const circleColor = 'red';

// 원의 방향 설정
let circleDirection = 'right';

// 애니메이션 프레임
function animate() {
  requestAnimationFrame(animate);

  // 원을 움직임
  if (circleDirection === 'right') {
    circleX += circleSpeed;
    // 오른쪽 벽에 닿았을 때
    if (circleX + circleRadius >= canvas.width) {
      circleDirection = 'down';
    }
  } else if (circleDirection === 'down') {
    circleY += circleSpeed;
    // 아래쪽 벽에 닿았을 때
    if (circleY + circleRadius >= canvas.height) {
      circleDirection = 'left';
    }
  } else if (circleDirection === 'left') {
    circleX -= circleSpeed;
    // 왼쪽 벽에 닿았을 때
    if (circleX - circleRadius <= 0) {
      circleDirection = 'up';
    }
  } else if (circleDirection === 'up') {
    circleY -= circleSpeed;
    // 위쪽 벽에 닿았을 때
    if (circleY - circleRadius <= 0) {
      circleDirection = 'right';
    }
  }

  // 캔버스를 검은색으로 채우고 원을 그림
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = circleColor;
  ctx.beginPath();
  ctx.arc(circleX, circleY, circleRadius, 0, Math.PI * 2);
  ctx.fill();
}

animate();
