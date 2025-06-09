import { ExtractedPortfolioData, Portfolio } from "@/types"


// Mock data for different portfolio types
const mockPortfolioData: Record<string, ExtractedPortfolioData> = {
  'sonuchoudhary.my.canva.site': {
    basicInfo: {
      firstName: 'Sonu',
      lastName: 'Choudhary',
      summary: 'Creative video editor and motion graphics designer with 5+ years of experience creating compelling visual content for brands and agencies.',
      profileImage: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      location: 'Mumbai, India',
      email: 'sonu@example.com',
      username: 'sonuchoudhary',
      title:'Video Editor'
    },
    employers: [
      {
        id: '1',
        name: 'Creative Agency XYZ',
        jobTitle: 'Video Editor',
        employmentType: 'full-time',
        startTime: '2023-12-31T00:00:00Z',
        endTime: '2024-03-20T00:00:00Z',
        contributionSummary: 'Led video production for major brands, resulting in 40% increase in engagement. Specialized in creating viral social media content.',
        videos: [
          {
            id: 'v1',
            title: 'Mayuri addmission video',
            url: 'https://youtu.be/B6yRSDWiou4?si=ss1TFJoivx9m2jlM',
            thumbnail: 'https://img.youtube.com/vi/B6yRSDWiou4/0.jpg',
            description: 'Engaging social media video content for Instagram and TikTok'
          },
          {
            id: 'v2',
            title: 'Social Media Content',
            url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            thumbnail: 'https://images.pexels.com/photos/3584994/pexels-photo-3584994.jpeg?auto=compress&cs=tinysrgb&w=600',
            description: 'Engaging social media video content for Instagram and TikTok'
          }
        ]
      },
      {
        id: '2',
        name: 'Tech Startup ABC',
        jobTitle: 'Video Editor',
        employmentType: 'freelance',
        videos: [
          {
            id: 'v4',
            title: 'Starbucks CEO will take a jet to the office',
            url: 'https://www.youtube.com/shorts/HRhQodUrmtM',
            thumbnail: 'https://img.youtube.com/vi/HRhQodUrmtM/0.jpg',
            description: 'Comprehensive product demonstration and tutorial'
          }
        ]
      }
    ],
    videos: []
  },
  'dellinzhang.com': {
    basicInfo: {
      firstName: 'Dellin',
      lastName: 'Zhang',
      title: 'Editor',
      summary: 'Professional video editor specializing in documentary and commercial content with expertise in storytelling and post-production.',
      profileImage: 'https://dellinzhang.com/wp-content/uploads/2023/09/dell-personal-35mm-1024x692.jpeg',
      location: 'Los Angeles, CA',
      email: 'dellin@example.com',
      username: 'dellinzhang'
    },
    employers: [
      {
        id: '4',
        name: 'Commercial Productions',
        jobTitle: 'Editor, Director, Producer, Writer',
        contributionSummary: 'Directed and edited award-winning documentaries. Pioneered new editing techniques that improved production efficiency by 30%.',
        employmentType: 'freelance',
        videos: [
          {
            id: 'v5',
            title: 'A short film',
            url: 'https://www.youtube.com/watch?v=OapL6NwG2UM',
            thumbnail: 'https://img.youtube.com/vi/OapL6NwG2UM/0.jpg',
            description: 'High-impact television commercial for major brand'
          },
          {
            id: 'v6',
            title: 'Paranoid Android',
            url: 'https://youtu.be/BXI4Q412SNg?si=SWyddmFW1tfrZdt2',
            thumbnail: 'https://img.youtube.com/vi/BXI4Q412SNg/0.jpg',
            description: 'Professional corporate video for annual report'
          },
          {
            id: 'v7',
            title: 'scenes from spain',
            url: 'https://youtu.be/MZmZMIRQNZk?si=8D4_GLENiPqFM3NV',
            thumbnail: 'https://img.youtube.com/vi/MZmZMIRQNZk/0.jpg',
            description: "playing catchup in the new year; thinking back on October's trip. I share this experience in hopes of deglamorizing travel while maintaining its core values (for me): empathy, fun, & growth. enjoy these cozy vignettes I found along the way"
          }
        ]
      },
      {
        id: '3',
        name: 'Documentary Films Inc',
        jobTitle: 'Videographer',
        employmentType: 'full-time',
        videos: [
          {
            id: 'v4',
            title: 'Environmental Documentary',
            url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            thumbnail: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=600',
            description: 'Award-winning environmental documentary about climate change'
          }
        ]
      }
    ],
    videos: []
  }
}

export async function extractPortfolioData(url: string): Promise<ExtractedPortfolioData> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 2000))
  
  // Extract domain from URL
  const domain = new URL(url).hostname.replace('www.', '')
  
  // Return mock data based on domain or default data
  if (mockPortfolioData[domain]) {
    return mockPortfolioData[domain]
  }
  
  // Default mock data for unknown domains
  return {
    basicInfo: {
      firstName: 'John',
      lastName: 'Doe',
      summary: 'Creative professional with expertise in visual content creation and digital media.',
      profileImage: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
      location: 'New York, NY',
      email: 'john@example.com',
      username: 'johndoe',
      title: 'Video Editor',
    },
    employers: [
      {
        id: '5',
        name: 'Generic Creative Agency',
        jobTitle: 'Thumbnail Designer',
        startTime: '2023-12-31T00:00:00Z',
        endTime: '2024-03-20T00:00:00Z',
        contributionSummary: 'Delivered high-quality video content for multiple clients, maintaining 95% client satisfaction rate.',
        videos: [
          {
            id: 'v7',
            title: 'Sample Project',
            url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            thumbnail: 'https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=600',
            description: 'Sample creative project showcasing skills and expertise'
          }
        ]
      }
    ],
    videos: []
  }
}

export async function createPortfolio(url: string): Promise<Portfolio> {
  const extractedData = await extractPortfolioData(url)
  
  return {
    id: Math.random().toString(36).substr(2, 9),
    url,
    extractedData,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
}

export async function updatePortfolio(portfolioId: string, updates: Partial<ExtractedPortfolioData>): Promise<Portfolio> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  // In a real app, this would update the portfolio in the database
  // For now, we'll just return a mock updated portfolio
  return {
    id: portfolioId,
    url: 'https://example.com',
    extractedData: updates as ExtractedPortfolioData,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
}