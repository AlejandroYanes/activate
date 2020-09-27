const height = window.innerHeight;
const w = 80;
const y = 90;

export function getRtLPath(x, width) {
  const anchorDistance = 200 + x * 0.5;
  const curviness = anchorDistance - 60;
  return `
    M ${w}, ${height}
    H ${w}
    V 0
    h -${width}
    v ${y - anchorDistance}
    c 0, ${curviness}, -${x}, ${curviness}, -${x}, ${anchorDistance}
    S ${w - width}, ${y}, ${w - width}, ${y + anchorDistance * 2}
    V ${height}
    z
  `;
}

export const getLtRPath = (x, width) => {
  const anchorDistance = 200 + x * 0.5;
  const curviness = anchorDistance - 60;
  return `
    M 0,${height}
    H 0
    V 0
    h ${width}
    v ${y - anchorDistance}
    c 0,${curviness}, ${x},${curviness}, ${x},${anchorDistance}
    S ${width},${y} ,${width},${y + anchorDistance * 2}
    V ${height}
    z
  `;
};
