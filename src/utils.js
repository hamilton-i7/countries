function toRGBA(hexValue, alpha) {
  if (hexValue.length < 6 || hexValue.length > 7) {
    throw new Error('Only six or seven digit hex colors are allowed.');
  }

  const filteredValue = hexValue.includes('#') ? hexValue.slice(1) : hexValue;

  var aRgbHex = filteredValue.match(/.{1,2}/g);
  var aRgb = [
    parseInt(aRgbHex[0], 16),
    parseInt(aRgbHex[1], 16),
    parseInt(aRgbHex[2], 16),
  ];
  aRgb.push(alpha);
  return `rgba(${aRgb.join(',')})`;
}

export default toRGBA;
