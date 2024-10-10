import { Site } from '../types'

export const sampleSites: Site[] = [
  {
    id: 1,
    name: "AI Art Gallery",
    description: "A showcase of AI-generated artwork from various models and styles.",
    longDescription: "Our AI Art Gallery is a cutting-edge platform that brings together the most impressive AI-generated artworks from around the world. We use advanced machine learning algorithms to curate a diverse collection of pieces, ranging from abstract compositions to hyper-realistic portraits. Visitors can explore different AI art styles, learn about the technologies behind each piece, and even purchase prints of their favorite works.",
    url: "https://example.com/ai-art-gallery",
    imageUrl: "https://source.unsplash.com/random/800x600?ai,art",
    upvotes: 42,
    aiTools: ["DALL-E", "Midjourney", "Stable Diffusion"],
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
    submitterInfo: "@aiartlover",
    addedBy: {
      name: "Sarah Johnson",
      avatar: "https://i.pravatar.cc/150?u=sarah.johnson@example.com"
    },
    isOwnSite: true,
    tags: ["art", "AI", "gallery"],
    category: "entertainment"
  },
  {
    id: 2,
    name: "ChatGPT Playground",
    description: "An interactive platform to experiment with OpenAI's ChatGPT model.",
    longDescription: "Our ChatGPT Playground offers a user-friendly interface for anyone to explore the capabilities of OpenAI's powerful language model. Users can engage in conversations, ask questions, and even challenge the AI with complex tasks. The platform includes various pre-set scenarios and customizable parameters, allowing users to fine-tune the AI's responses and observe how different inputs affect the output.",
    url: "https://example.com/chatgpt-playground",
    imageUrl: "https://source.unsplash.com/random/800x600?chat,ai",
    upvotes: 38,
    aiTools: ["GPT-3", "GPT-4", "OpenAI API"],
    createdAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000), // 10 days ago
    submitterInfo: "@chatgptfan",
    addedBy: {
      name: "Alex Chen",
      avatar: "https://i.pravatar.cc/150?u=alex.chen@example.com"
    },
    isOwnSite: false,
    tags: ["chatbot", "AI", "language model"],
    category: "education"
  },
  {
    id: 3,
    name: "AI Music Composer",
    description: "Create unique musical compositions using advanced AI algorithms.",
    longDescription: "Our AI Music Composer is a revolutionary tool that allows anyone to create original music using cutting-edge artificial intelligence. By leveraging deep learning models trained on vast datasets of musical compositions, our platform can generate melodies, harmonies, and complete arrangements in various genres. Users can input parameters such as mood, tempo, and instrumentation to guide the AI's creative process, resulting in unique and emotionally resonant musical pieces.",
    url: "https://example.com/ai-music-composer",
    imageUrl: "https://source.unsplash.com/random/800x600?music,technology",
    upvotes: 31,
    aiTools: ["Magenta", "MuseNet", "AIVA"],
    createdAt: new Date(Date.now() - 25 * 24 * 60 * 60 * 1000), // 25 days ago
    submitterInfo: "@musicai",
    addedBy: {
      name: "Emily Rodriguez",
      avatar: "https://i.pravatar.cc/150?u=emily.rodriguez@example.com"
    },
    isOwnSite: true,
    tags: ["music", "AI", "composer"],
    category: "entertainment"
  },
  {
    id: 4,
    name: "AI Travel Planner",
    description: "Plan your perfect trip with personalized recommendations from AI.",
    longDescription: "Our AI Travel Planner revolutionizes the way you plan your vacations. By analyzing your preferences, budget, and travel history, our advanced AI algorithms create tailored itineraries that match your unique style. The platform considers factors such as local events, weather patterns, and real-time availability to suggest the best accommodations, activities, and dining options. With continuous learning from user feedback, our AI Travel Planner gets smarter with each trip planned.",
    url: "https://example.com/ai-travel-planner",
    imageUrl: "https://source.unsplash.com/random/800x600?travel,map",
    upvotes: 27,
    aiTools: ["TensorFlow", "Natural Language Processing", "Recommendation Systems"],
    createdAt: new Date(Date.now() - 40 * 24 * 60 * 60 * 1000), // 40 days ago
    submitterInfo: "@travelsmart",
    addedBy: {
      name: "Michael Brown",
      avatar: "https://i.pravatar.cc/150?u=michael.brown@example.com"
    },
    isOwnSite: false,
    tags: ["travel", "AI", "planner"],
    category: "lifestyle"
  },
  {
    id: 5,
    name: "AI Fitness Coach",
    description: "Get personalized workout plans and nutrition advice from an AI coach.",
    longDescription: "Our AI Fitness Coach provides a comprehensive, personalized approach to health and wellness. Using machine learning algorithms, the platform analyzes your physical attributes, fitness goals, and lifestyle factors to create customized workout routines and meal plans. The AI coach adapts in real-time based on your progress, adjusting recommendations to optimize your fitness journey. With features like form analysis through computer vision and motivational support through natural language processing, our AI Fitness Coach offers a truly intelligent personal training experience.",
    url: "https://example.com/ai-fitness-coach",
    imageUrl: "https://source.unsplash.com/random/800x600?fitness,technology",
    upvotes: 23,
    aiTools: ["Computer Vision", "Natural Language Processing", "Machine Learning"],
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000), // 5 days ago
    submitterInfo: "@fitai",
    addedBy: {
      name: "Olivia Taylor",
      avatar: "https://i.pravatar.cc/150?u=olivia.taylor@example.com"
    },
    isOwnSite: true,
    tags: ["fitness", "AI", "health"],
    category: "health"
  },
  {
    id: 6,
    name: "AI Story Generator",
    description: "Create unique short stories with the help of AI-powered prompts and plot generation.",
    longDescription: "Our AI Story Generator is a powerful tool for writers, educators, and creative enthusiasts. Leveraging advanced natural language processing and machine learning techniques, the platform can generate unique story premises, develop complex characters, and even assist in plotting entire narratives. Users can input specific themes, genres, or writing styles, and the AI will provide tailored suggestions and creative elements to inspire and enhance the storytelling process. Whether you're looking to overcome writer's block or explore new creative directions, our AI Story Generator is your ultimate writing companion.",
    url: "https://example.com/ai-story-generator",
    imageUrl: "https://source.unsplash.com/random/800x600?book,writing",
    upvotes: 19,
    aiTools: ["GPT-3", "BERT", "Narrative Generation Algorithms"],
    createdAt: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000), // 15 days ago
    submitterInfo: "@storyai",
    addedBy: {
      name: "David Lee",
      avatar: "https://i.pravatar.cc/150?u=david.lee@example.com"
    },
    isOwnSite: false,
    tags: ["writing", "AI", "storytelling"],
    category: "education"
  }
]