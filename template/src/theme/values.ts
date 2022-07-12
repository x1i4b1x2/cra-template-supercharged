type ThemeList = 'normal';

export const setTheme = (themeType: ThemeList) => {
  document.body.dataset.theme = themeType;
};

export const colors = {
  primary: 'var(--colors-primary)',
  secondary: 'var(--colors-secondary)',
};

export const sizes = {};

setTheme('normal');
