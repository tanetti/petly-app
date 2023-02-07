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

  li: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },

  ul: {
    margin: 0,
    padding: 0,
  },

  img: {
    display: 'block',
    maxWidth: '100%',
    height: 'auto',
  },

  h1: {
    margin: 0,
  },

  h2: {
    margin: 0,
  },

  h3: {
    margin: 0,
  },

  h4: {
    margin: 0,
  },

  h5: {
    margin: 0,
  },

  p: {
    margin: 0,
  },
  fieldset: {
    margin: 0,
    padding: 0,
    borderWidth: 0,
  },
});
