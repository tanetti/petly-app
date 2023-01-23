export const theme = Object.freeze({
  colors: {
    darkText: '#212121',
    lightText: '#6e6e6e',
    whiteText: '#fff',

    darkBG: '#ddd',
    lightBG: '#eee',
    whiteBG: '#fff',
  },
  space: [0, '2px', '4px', '8px', '16px', '32px', '64px', '128px', '256px'],
  sizes: {},
  fontSizes: {
    xs: '12px',
    s: '14px',
    m: '16px',
    l: '22px',
    xl: '26px',
    xxl: '32px',
  },
  fontWeights: {
    normal: 400,
    semiBold: 600,
    bold: 700,
  },
  borders: {
    generic: '1px solid #ccc',
  },
  radii: {
    none: '0',
    generic: '6px',
    round: '50%',
  },
  shadows: {
    generic:
      '0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06), 1px 4px 6px rgba(0, 0, 0, 0.16)',
    text: '0px 0px 10px rgba(0, 0, 0, 1)',
  },
  breakPoints: {
    midMin: '480px',
    midMax: '767.98px',
    tabletMin: '768px',
    tabletMax: '1279.98px',
    desktopMin: '1280px',
    desctopMax: '1679.98px',
    bigMin: '1680px',
  },
  transitions: {},
});
