
export default function createGraphic(size, draw) {

  const [ width, height ] = Array.isArray(size) ? size : [size, size];
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');

  canvas.width = width;
  canvas.height = height;
  const result = draw.call(context, context, width, height);

  return typeof result === 'undefined' ? context : result;
};