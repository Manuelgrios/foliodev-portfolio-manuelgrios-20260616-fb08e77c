export type ExperienceItem = {
  id: string;
  title: string;
  organization: string;
  location?: string;
  dates?: string;
  description: string;
  highlights?: string[];
  technologies?: string[];
};

export const experience: ExperienceItem[] = [
  {
    "id": "data-analyst-intern-uw-bothell-advancement",
    "title": "Data Analyst Intern",
    "organization": "UW Bothell Advancement",
    "location": "",
    "dates": "July 2025 - August 2025",
    "description": "Analyzed 10,000+ alumni records to identify employer engagement opportunities and assess fundraising performance.",
    "highlights": [
      "Tools: Microsoft Dynamics, Excel, Python, Tableau Analyzed 10,000+ alumni records to identify employer engagement opportunities and assess",
      "Tools: Microsoft Dynamics, Excel, Python, Tableau"
    ],
    "technologies": [
      "Excel",
      "Python",
      "Tableau"
    ]
  }
];
