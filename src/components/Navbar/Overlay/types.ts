export interface IOverlay {
  data: {
    footer: {
      addressLink: string;
      location: string;
      zipCode: string;
      urls: {
        linkedInUrl: string;
        instagramUrl: string;
        facebookUrl: string;
      };
    };
    navBar: {
      navigation: {
        meny: {
          headline: string;
          home: {
            text: string;
            link: string;
          };
          about: {
            text: string;
            link: string;
          };
          team: {
            text: string;
            link: string;
          };
        };
        contact: {
          headline: string;
        };
        socials: {
          headline: string;
          links: [string];
          link: {
            linkedin: string;
            instagram: string;
            facebook: string;
          };
        };
      };
    };
  };
}
