export interface Portfolio {
  id: string;
  url: string;
  extractedData: ExtractedPortfolioData;
  createdAt: string;
  updatedAt: string;
}

export interface ExtractedPortfolioData {
  basicInfo: BasicInfo;
  employers: Employer[];
  videos: Video[];
}

export interface BasicInfo {
  firstName: string;
  lastName: string;
  summary?: string;
  profileImage?: string;
  location?: string;
  email?: string;
  username: string;
  title?: string;
}

export interface Employer {
  id: string;
  name: string;
  jobTitle: string;
  employmentType?: "Full-time" | "Contract" | "Freelance" | "Internship";
  summary?: string;
  videos: Video[];
}

export interface Video {
  id: string;
  title: string;
  url: string;
  thumbnail?: string;
  description?: string;
  employerId?: string;
}
