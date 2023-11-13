export interface Sizes {
    wrapperWidth: string;
  }
  
  export interface Breakpoints {
    lg: string;
    md: string;
    sm: string;
    xs: string;
  }
  
  export interface Colors {
    primaryColor: string;
    textColor: string;
    darkColor: string;
    bgColor: string;
    lightColor: string;
  }
  
  export const sizes: Sizes = {
    wrapperWidth: '1128px',
  };
  
  export const breakpoints: Breakpoints = {
    lg: '@media screen and (max-width: 1000px)',
    md: '@media screen and (max-width: 700px)',
    sm: '@media screen and (max-width: 500px)',
    xs: '@media screen and (max-width: 250px)',
  };
  
  export const colors: Colors = {
    primaryColor: '#086AD8',
    textColor: '#032348',
    darkColor: '#032348',
    bgColor: '#FFF9E9',
    lightColor: '#fff',
  };

  // #F3EDE6
  