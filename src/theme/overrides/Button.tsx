export const MuiButtonOverride = () => {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 700,
          fontSize: 18,
        },
      },
      defaultProps: {
        disableElevation: true,
        disableRipple: true,
      },
    },
  };
};

export default MuiButtonOverride;
