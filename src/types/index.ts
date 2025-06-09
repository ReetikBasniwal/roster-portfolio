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
  title: string;
  summary?: string;
  contributionSummary?: string;
  profileImage?: string;
  location?: string;
  email?: string;
  username?: string;
}

export interface Employer {
  id: string;
  name: string;
  jobTitle: string;
  employmentType?: "full-time" | "contract" | "freelance" | "internship";
  contributionSummary?: string;
  videos: Video[];
  startTime?: string;
  endTime?: string;
}

export interface Video {
  id: string;
  title: string;
  url: string;
  thumbnail?: string;
  description?: string;
  employerId?: string;
}
