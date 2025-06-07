// src/utils/mockApi.ts
export const parsePortfolio = async (url: string) => {
    if (url.includes("sonuchoudhary")) {
      return {
        username: "sonu",
        firstName: "Sonu",
        lastName: "Choudhary",
        summary: "Creative video editor with experience...",
        clients: [
          {
            name: "Adobe",
            jobTitle: "",
            duration: "",
            type: "Contract",
            summary: "",
            videos: [
              "https://someurl.com/video1",
              "https://someurl.com/video2"
            ]
          }
        ]
      };
    } else {
      return {
        username: "demo",
        firstName: "Demo",
        lastName: "User",
        summary: "Creative freelancer...",
        clients: []
      };
    }
  };