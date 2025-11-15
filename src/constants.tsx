import { Blog, BlogCategory, Skill } from './types';

export const SKILLS: Skill[] = [
  { name: 'Program Management – Agile', percentage: 90 },
  { name: 'Data Driven Decision Making', percentage: 85 },
  { name: 'Stakeholder Management', percentage: 90 },
  { name: 'Product Strategy', percentage: 85 },
];

export const BLOGS: Blog[] = [
  {
    id: 'tech-1',
    title: 'The Future of Platform Engineering',
    date: 'October 26, 2023',
    category: BlogCategory.Tech,
    image: 'https://picsum.photos/seed/tech1/600/400',
    excerpt: 'Exploring the trends and tools shaping the future of platform engineering and DevOps.',
    content: `
      <p>Platform engineering is rapidly evolving from a niche discipline to a core component of modern software development. In this post, we delve into what's driving this change, from the rise of cloud-native technologies to the increasing demand for developer self-service.</p>
      <h3 class="text-xl font-bold mt-4 mb-2">Key Trends to Watch</h3>
      <ul>
        <li>Internal Developer Platforms (IDPs)</li>
        <li>GitOps and Declarative APIs</li>
        <li>AI-assisted Development and Operations</li>
        <li>Focus on Developer Experience (DevEx)</li>
      </ul>
      <p class="mt-4">As organizations scale, providing a seamless and efficient path from code to production is no longer a luxury—it's a necessity. Platform engineering teams are at the heart of this transformation, building the golden paths that empower developers to ship code faster and more reliably.</p>
    `
  },
  {
    id: 'business-1',
    title: 'Strategic Alignment: Connecting OKRs to Daily Tasks',
    date: 'September 15, 2023',
    category: BlogCategory.Business,
    image: 'https://picsum.photos/seed/biz1/600/400',
    excerpt: 'A practical guide on how to bridge the gap between high-level objectives and the work your team does every day.',
    content: `
      <p>Objectives and Key Results (OKRs) are a powerful framework for setting ambitious goals, but they often fail when they aren't connected to the daily realities of work. True strategic alignment requires a clear line of sight from a company-wide objective down to an individual's tasks.</p>
      <h3 class="text-xl font-bold mt-4 mb-2">Creating the Connection</h3>
      <ol>
        <li><strong>Cascade with Context:</strong> Don't just assign OKRs. Explain the "why" behind them and how team objectives contribute to the bigger picture.</li>
        <li><strong>Regular Check-ins:</strong> Use weekly or bi-weekly meetings to discuss progress, not just report on it. Are we working on the right things?</li>
        <li><strong>Visualize the Links:</strong> Use tools to map dependencies and show how different pieces of work roll up to a key result.</li>
      </ol>
      <p class="mt-4">When every team member understands how their work moves the needle, you unlock a new level of motivation and focus. It transforms "what am I doing?" into "why does it matter?".</p>
    `
  },
  {
    id: 'travel-1',
    title: 'Mountain Trails: A Lesson in Resilience',
    date: 'August 02, 2023',
    category: BlogCategory.Travel,
    image: 'https://picsum.photos/seed/travel1/600/400',
    excerpt: 'What hiking in the Himalayas taught me about project management and perseverance.',
    content: `
      <p>There's a raw honesty to mountain trails. They don't care about your title or your quarterly goals. They demand respect, preparation, and the will to put one foot in front of the other, especially when you're tired. It struck me how similar this is to navigating a complex, long-term project.</p>
      <h3 class="text-xl font-bold mt-4 mb-2">Parallels Between Hiking and TPM</h3>
      <ul>
        <li><strong>Planning is Everything:</strong> You don't start a multi-day trek without a map, supplies, and a plan for contingencies. The same goes for a project roadmap.</li>
        <li><strong>Pacing is Key:</strong> Sprinting up the first incline will leave you exhausted. Sustainable progress is about finding a rhythm you can maintain.</li>
        <li><strong>The Summit Isn't the Only View:</strong> Sometimes, the most beautiful moments are found on the journey, not just at the destination. Celebrate the small wins along the way.</li>
      </ul>
    `
  },
  {
    id: 'tech-2',
    title: 'Data-Driven Decisions in Product Management',
    date: 'July 21, 2023',
    category: BlogCategory.Tech,
    image: 'https://picsum.photos/seed/tech2/600/400',
    excerpt: 'Moving beyond gut feelings to make informed product choices using data.',
    content: `
      <p>In today's competitive landscape, relying solely on intuition is a recipe for disaster. Data-driven product management is about leveraging quantitative and qualitative data to guide every stage of the product lifecycle, from discovery to optimization.</p>
      <h3 class="text-xl font-bold mt-4 mb-2">A Framework for Data-Informed Decisions</h3>
      <ul>
        <li><strong>Define Your North Star Metric:</strong> What single metric best captures the core value your product delivers?</li>
        <li><strong>Instrument Everything:</strong> You can't measure what you don't track. Ensure you have robust analytics in place.</li>
        <li><strong>Combine Quantitative and Qualitative:</strong> Numbers tell you what is happening, but user interviews and feedback tell you why.</li>
        <li><strong>A/B Test Your Assumptions:</strong> Don't guess. Test hypotheses with controlled experiments to find what truly works.</li>
      </ul>
    `
  },
   {
    id: 'business-2',
    title: 'The Art of Stakeholder Management',
    date: 'June 10, 2023',
    category: BlogCategory.Business,
    image: 'https://picsum.photos/seed/biz2/600/400',
    excerpt: 'Strategies for effective communication and alignment across diverse teams and leadership.',
    content: `
      <p>Effective stakeholder management is the secret sauce of successful program managers. It's about building relationships, fostering trust, and ensuring everyone is moving in the same direction. This is easier said than done, especially in large, cross-functional organizations.</p>
      <h3 class="text-xl font-bold mt-4 mb-2">Core Principles</h3>
      <ul>
        <li><strong>Identify and Map:</strong> Know who your stakeholders are and understand their level of interest and influence.</li>
        <li><strong>Communicate Proactively:</strong> Don't wait for them to ask. Provide regular, clear, and concise updates tailored to your audience.</li>
        <li><strong>Listen Actively:</strong> Understand their concerns, priorities, and constraints. Empathy is a powerful tool.</li>
        <li><strong>Manage Expectations:</strong> Be transparent about risks, challenges, and timelines. Under-promise and over-deliver.</li>
      </ul>
    `
  },
   {
    id: 'travel-2',
    title: 'Lessons from the Road: What Solo Travel Teaches You',
    date: 'May 05, 2023',
    category: BlogCategory.Travel,
    image: 'https://picsum.photos/seed/travel2/600/400',
    excerpt: 'Beyond the Instagram posts, solo travel is a masterclass in self-reliance and problem-solving.',
    content: `
      <p>Traveling alone forces you out of your comfort zone in a way nothing else can. Every decision, from where to sleep to how to navigate a foreign city, is yours alone. It's an incredible incubator for personal growth.</p>
      <h3 class="text-xl font-bold mt-4 mb-2">Key Takeaways</h3>
      <ul>
        <li><strong>Adaptability:</strong> When a train is cancelled or a hostel is overbooked, you learn to pivot quickly and find a new solution.</li>
        <li><strong>Confidence:</strong> Successfully navigating challenges on your own builds a deep sense of self-trust.</li>
        <li><strong>Perspective:</strong> Seeing how others live provides invaluable perspective on your own life and priorities.</li>
        <li><strong>The Kindness of Strangers:</strong> You quickly learn that the world is more helpful and welcoming than you might think.</li>
      </ul>
    `
  }
];

export const SocialIcons = {
  linkedin: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-5 w-5" fill="currentColor">
      <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
    </svg>
  ),
  twitter: (
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-5 w-5" fill="currentColor">
      <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
    </svg>
  ),
  instagram: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-5 w-5" fill="currentColor">
       <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
    </svg>
  ),
  youtube: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="h-5 w-5" fill="currentColor">
      <path d="M549.7 124.1c-6.281-23.65-24.79-42.28-48.28-48.6C458.8 64 288 64 288 64S117.2 64 74.63 75.49c-23.5 6.322-42 24.95-48.28 48.6-11.41 42.87-11.41 132.3-11.41 132.3s0 89.44 11.41 132.3c6.281 23.65 24.79 41.5 48.28 47.82C117.2 448 288 448 288 448s170.8 0 213.4-11.49c23.5-6.321 42-24.17 48.28-47.82 11.41-42.87 11.41-132.3 11.41-132.3s0-89.44-11.41-132.3zm-317.5 213.5V175.2l142.7 81.21-142.7 81.2z"></path>
    </svg>
  )
};