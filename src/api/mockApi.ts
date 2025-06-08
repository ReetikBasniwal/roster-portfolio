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
        videos: [
          {
            id: 'v1',
            title: 'Brand Campaign Video',
            url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            thumbnail: 'https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=600',
            description: 'A dynamic brand campaign video showcasing product features'
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
        videos: [
          {
            id: 'v3',
            title: 'Product Demo Video',
            url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            thumbnail: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600',
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
      summary: 'Professional video editor specializing in documentary and commercial content with expertise in storytelling and post-production.',
      profileImage: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      location: 'Los Angeles, CA',
      email: 'dellin@example.com',
      username: 'dellinzhang'
    },
    employers: [
      {
        id: '3',
        name: 'Documentary Films Inc',
        jobTitle: 'Videographer',
        videos: [
          {
            id: 'v4',
            title: 'Environmental Documentary',
            url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            thumbnail: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=600',
            description: 'Award-winning environmental documentary about climate change'
          }
        ]
      },
      {
        id: '4',
        name: 'Commercial Productions',
        jobTitle: 'Photographer',
        videos: [
          {
            id: 'v5',
            title: 'TV Commercial',
            url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            thumbnail: 'https://images.pexels.com/photos/3862365/pexels-photo-3862365.jpeg?auto=compress&cs=tinysrgb&w=600',
            description: 'High-impact television commercial for major brand'
          },
          {
            id: 'v6',
            title: 'Corporate Video',
            url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            thumbnail: 'https://images.pexels.com/photos/3584994/pexels-photo-3584994.jpeg?auto=compress&cs=tinysrgb&w=600',
            description: 'Professional corporate video for annual report'
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