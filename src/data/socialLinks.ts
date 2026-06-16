export type SocialLink = {
  key: "email" | "linkedin" | "github" | "leetcode" | "portfolio";
  label: string;
  value: string;
  href: string;
  iconKey: "mail" | "linkedin" | "github" | "code" | "external";
  external?: boolean;
};

export const socialLinks: SocialLink[] = [
  {
    "key": "email",
    "label": "Email",
    "value": "james.chen8668@gmail.com",
    "href": "mailto:james.chen8668@gmail.com",
    "iconKey": "mail"
  },
  {
    "key": "linkedin",
    "label": "LinkedIn",
    "value": "jameschen8668",
    "href": "https://www.linkedin.com/in/jameschen8668",
    "iconKey": "linkedin",
    "external": true
  }
];
