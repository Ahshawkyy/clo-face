const { grey, teal } = require("@mui/material/colors");

const getDesignTokens = (mode) => ({
  palette: {
    // @ts-ignore
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          ahmed: {
            main: "#64748B",
          },

          favColor: {
            main: grey[500],
          },
        }
      : {
          // palette values for dark mode
          ahmed: {
            main: teal[500],
          },

          favColor: {
            main: null,
          },
        }),
  },
});

export default getDesignTokens;
