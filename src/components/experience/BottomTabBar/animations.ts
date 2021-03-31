import { AnimationControls } from 'framer-motion';

export async function animateMarkRight(controls: AnimationControls, left: number) {
  await controls.start({
    width: 60,
    transition: { duration: 0.25 },
  });
  await controls.start({
    left: left - 20,
    transition: { duration: 0.25 },
  });
  await controls.start({
    left,
    width: 40,
    transition: { duration: 0.25 },
  });
}

export async function animateMarkLeft(controls: AnimationControls, left: number) {
  await controls.start({
    width: 60,
    transition: { duration: 0.25 },
  });
  await controls.start({
    left: left - 20,
    transition: { duration: 0.25 },
  });
  await controls.start({
    left,
    width: 40,
    transition: { duration: 0.25 },
  });
}
