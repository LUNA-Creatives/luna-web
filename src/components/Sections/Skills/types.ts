export interface ISkills {
  skills: {
    heading: string;
    data: Value[];
  };
}

export type Value = {
  value: {
    icons: {
      techIcons: Icon[];
      helperIcons: Icon[];
      designIcons: Icon[];
    };
  };
};

export type Icon = {
  url: string;
};
