import { useState } from '#app';
import { ref } from '#imports';

export const useTheme = () => {
  const isDark = ref(false);
  
  return useState('theme', () => {
      isDark: isDark
  });
};