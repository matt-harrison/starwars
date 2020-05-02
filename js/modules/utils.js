export function collision(obj1, obj2) {
  var overlap = false;
  var rect1 = obj1.selector.getBoundingClientRect();
  var rect2 = obj2.selector.getBoundingClientRect();
  if (rect1.right > rect2.left && rect1.left < rect2.right) {
    if (rect1.bottom > rect2.top && rect1.top < rect2.bottom) {
      overlap = true;
    }
  }
  return overlap;
}
