// animationFunction.ts
export function animationFunction(
  container: HTMLDivElement | null,
  speed = 0.1
) {
  if (!container) return;

  const circles = Array.from(
    container.querySelectorAll(".circle1, .circle2")
  ) as HTMLElement[];
  if (!circles.length) return;

  const containerWidth = container.clientWidth;
  const containerHeight = container.clientHeight;

  const positions = circles.map(() => ({
    x: Math.random() * containerWidth,
    y: Math.random() * containerHeight,
  }));

  const velocities = circles.map(() => ({
    x: (Math.random() * speed + 1) * (Math.random() > 0.5 ? 1 : -1),
    y: (Math.random() * speed + 1) * (Math.random() > 0.5 ? 1 : -1),
  }));

  const animate = () => {
    circles.forEach((circle, i) => {
      positions[i].x += velocities[i].x;
      positions[i].y += velocities[i].y;

      // Bounce off walls
      if (
        positions[i].x <= 0 ||
        positions[i].x + circle.offsetWidth >= containerWidth
      ) {
        velocities[i].x *= -1;
      }
      if (
        positions[i].y <= 0 ||
        positions[i].y + circle.offsetHeight >= containerHeight
      ) {
        velocities[i].y *= -1;
      }

      circle.style.transform = `translate(${positions[i].x}px, ${positions[i].y}px)`;
    });

    requestAnimationFrame(animate);
  };

  animate();
}
