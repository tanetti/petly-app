export const globalStyles = theme => ({
  body: {
    fontFamily: 'Manrope, sans-serif',
    fontWeight: 500,
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.dark,
    overflowX: 'hidden',
  },
  '#root': {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
  a: {
    outlineOffset: 5,
    textDecoration: 'none',
  },
});
