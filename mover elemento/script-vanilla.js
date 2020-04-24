const box = document.querySelector('.box');
const container = document.getElementById('container');
let click = false;

const mousePosition = {};
const offset = [0, 0];
let isDown = false;

box.addEventListener(
  'mousedown',
  ({ currentTarget, clientX, clientY }) => {
    isDown = true;
    offset[0] = currentTarget.offsetLeft - clientX;
    offset[1] = currentTarget.offsetTop - clientY;
  },
  true,
);

document.body.addEventListener('mouseup', _ => (isDown = false), true);

handleMove = e => {
  e.preventDefault();

  if (isDown) {
    //debugger;
    const container = e.currentTarget.getBoundingClientRect();
    const child = e.target.getBoundingClientRect();
    mousePosition.x = e.clientX;
    mousePosition.y = e.clientY;

    const left = mousePosition.x + offset[0];

    if (left >= 0) {
      const isRight = left + child.width > container.right;

      if (isRight) return null;
      box.style.left = `${left}px`;
    }

    const top = mousePosition.y + offset[1];
    if (top >= 0) {
      const isBottom = top + child.height > container.height;
      if (isBottom) return null;
      box.style.top = `${top}px`;
    }
  }
};
document.body.addEventListener('mousemove', handleMove, true);
