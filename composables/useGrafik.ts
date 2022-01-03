import { useState } from '#app';
import { ref } from '#imports';

export const useGrafik = () => {
  const isGrafik = ref(false);
  
  return useState('grafik', () => {
    return {
      isGrafik: isGrafik
    };
  });
};
