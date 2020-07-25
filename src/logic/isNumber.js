export default function isNumber(item) {
  return +item && /[0-9]+/.test(item);
}
