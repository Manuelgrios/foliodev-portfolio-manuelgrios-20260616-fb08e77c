export type CtaLink = {
  label: string;
  href: string;
};

export type Profile = {
  name: string;
  headline: string;
  subtitle: string;
  school: string;
  degrees: string[];
  location: string;
  email: string;
  bio: string;
  shortBio: string;
  focusAreas: string[];
  hero: {
    eyebrow: string;
    headline: string[];
    highlightedHeadline: string;
    body: string;
    primaryCta: CtaLink;
    secondaryCta: CtaLink;
    image: { src: string; alt: string };
  };
  sections: {
    about: { eyebrow: string; heading: string; body: string[]; infoGroups: Array<{ iconKey: "education" | "code" | "chart"; label: string; lines: string[] }>; enjoyHeading: string; enjoyItems: string[] };
    projects: { eyebrow: string; heading: string; indexHeading: string; description: string; viewAllLabel: string };
    experience: { eyebrow: string; heading: string };
    skills: { eyebrow: string; heading: string; description?: string };
    contact: { eyebrow: string; heading: string; pageHeading: string; body: string };
  };
};

export const profile: Profile = {
  "name": "James Chen",
  "headline": "Data Analyst portfolio",
  "subtitle": "Data Visualization at University of Washington Bothell",
  "school": "University of Washington Bothell",
  "degrees": [
    "B.A."
  ],
  "location": "Seattle, Washington, United States",
  "email": "james.chen8668@gmail.com",
  "bio": "Data Visualization student at UW Bothell focused on data analytics and visual reporting.\n\nBased in Seattle, Washington, James is a Data Visualization student at UW Bothell focused on data cleaning, visual reporting, and data analysis.",
  "shortBio": "Data Visualization student at UW Bothell focused on data analytics and visual reporting.",
  "focusAreas": [
    "Alumni data analysis",
    "Data cleaning",
    "Visual reporting",
    "Excel and Tableau reporting",
    "CRM and fundraising data systems"
  ],
  "hero": {
    "eyebrow": "Data Visualization · UW Bothell",
    "headline": [
      "Data Analyst"
    ],
    "highlightedHeadline": "Data Visualization Analyst",
    "body": "Data Visualization student at UW Bothell focused on data analytics and visual reporting.",
    "primaryCta": {
      "label": "View Skills",
      "href": "/#skills"
    },
    "secondaryCta": {
      "label": "Contact Me",
      "href": "/#contact"
    },
    "image": {
      "src": "",
      "alt": ""
    }
  },
  "sections": {
    "about": {
      "eyebrow": "About Me",
      "heading": "Hi there, my name is James.",
      "body": [
        "Based in Seattle, Washington, James is a Data Visualization student at UW Bothell focused on data cleaning, visual reporting, and data analysis.",
        "Based in Seattle, Washington, at UW Bothell Advancement, James analyzed 10,000+ alumni records to identify employer engagement opportunities and assess fundraising performance. Tools: Microsoft Dynamics, Excel, Python, Tableau Analyzed 10,000+ alumni records to identify employer engagement"
      ],
      "infoGroups": [
        {
          "iconKey": "education",
          "label": "Education",
          "lines": [
            "B.A. Data Visualization",
            "UW Bothell · Expected 2026"
          ]
        },
        {
          "iconKey": "code",
          "label": "Role Focus",
          "lines": [
            "Data Analyst",
            "Data Visualization Analyst"
          ]
        },
        {
          "iconKey": "chart",
          "label": "Experience Focus",
          "lines": [
            "Data Analyst Intern",
            "UW Bothell Advancement",
            "10,000+ alumni records"
          ]
        }
      ],
      "enjoyHeading": "What I focus on",
      "enjoyItems": [
        "Alumni data analysis",
        "Data cleaning",
        "Visual reporting",
        "Excel and Tableau reporting",
        "CRM and fundraising data systems"
      ]
    },
    "projects": {
      "eyebrow": "Projects",
      "heading": "Things I've Built",
      "indexHeading": "Project index",
      "description": "Selected real projects focused on technical decisions, outcomes, and practical experience.",
      "viewAllLabel": "View All Projects"
    },
    "experience": {
      "eyebrow": "Experience",
      "heading": "Where I've Worked"
    },
    "skills": {
      "eyebrow": "Skills",
      "heading": "Skills I Work With",
      "description": "Source-backed skills and tools grouped by the work they support."
    },
    "contact": {
      "eyebrow": "Contact",
      "heading": "Let's Connect",
      "pageHeading": "Get in touch",
      "body": "Open to Data Analyst, Data Visualization Analyst opportunities."
    }
  }
};
