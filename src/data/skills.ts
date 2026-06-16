export type SkillCategory = {
  category: string;
  items: SkillItem[];
};

export type SkillItem = {
  name: string;
  shortLabel: string;
  category: string;
  iconKey?: string;
};

export const skillCategories: SkillCategory[] = [
  {
    "category": "Data & Reporting",
    "items": [
      {
        "name": "Excel",
        "shortLabel": "Excel",
        "category": "Data & Reporting"
      }
    ]
  },
  {
    "category": "Data & Analytics",
    "items": [
      {
        "name": "Data Analysis",
        "shortLabel": "Data Analysis",
        "category": "Data & Analytics"
      },
      {
        "name": "Data Visualization",
        "shortLabel": "Data Visualization",
        "category": "Data & Analytics"
      },
      {
        "name": "Data Cleaning",
        "shortLabel": "Data Cleaning",
        "category": "Data & Analytics"
      },
      {
        "name": "Tableau",
        "shortLabel": "Tableau",
        "category": "Data & Analytics"
      }
    ]
  },
  {
    "category": "Business & Operations",
    "items": [
      {
        "name": "Microsoft Dynamics",
        "shortLabel": "Microsoft Dynamics",
        "category": "Business & Operations"
      }
    ]
  },
  {
    "category": "Programming & Data Tools",
    "items": [
      {
        "name": "Python",
        "shortLabel": "Python",
        "category": "Programming & Data Tools"
      }
    ]
  }
];

export const skillItems: SkillItem[] = skillCategories.flatMap((category) => category.items);
