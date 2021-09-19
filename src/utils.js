import { useState, useEffect, useRef } from 'react';

export function toRGBA(hexValue, alpha) {
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

export function areEquals(str1, str2) {
  return str1.localeCompare(str2, undefined, { sensitivity: 'base' }) === 0;
}

export default function useComponentVisible(initialIsVisible) {
  const [isComponentVisible, setIsComponentVisible] =
    useState(initialIsVisible);
  const ref = useRef(null);

  const handleClickOutside = event => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsComponentVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  });

  return { ref, isComponentVisible, setIsComponentVisible };
}

export function stripDiacritics(str) {
  return str.normalize('NFD').replace(/\p{Diacritic}/gu, '');
}

export const mdScreenBreakpoint = '650px';
export const mdScreenBpreakpoint2 = '746px';
export const mdScreenBpreakpoint3 = '984px';

export const lgScreenBreakpoint = '1325px';
export const lgScreenBreakpoint2 = '1440px';
export const lgScreenBreakpoint3 = '1600px';
