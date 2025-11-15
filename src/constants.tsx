import React from 'react';
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
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  ),
  twitter: (
     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.616l-5.21-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25h6.732l4.61 6.033L18.244 2.25zM17.083 19.77h1.832L7.084 4.126H5.117l11.966 15.644z"/>
    </svg>
  ),
  instagram: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
       <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.058 1.644-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.44-1.441-1.44z"/>
    </svg>
  ),
  youtube: (
     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
       <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
    </svg>
  ),
  mail: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/>
    </svg>
  ),
};