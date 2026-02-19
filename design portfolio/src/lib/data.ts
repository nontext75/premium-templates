export interface Project {
    id: string;
    title: string;
    category: string;
    year: string;
    thumbnail: string;
    description: string;
    overview: string;
    challenge: string;
    result: string;
}

export interface JournalEntry {
    id: string;
    title: string;
    category: string;
    image: string;
    excerpt: string;
    content?: string; // Optional full content for the detail page
    date: string;
}

export const projects: Project[] = [
    {
        id: '1',
        title: 'Lumina Mobile App',
        category: 'UI/UX Design',
        year: '2024',
        thumbnail: 'https://images.unsplash.com/photo-1616469829581-73993eb86b02?auto=format&fit=crop&q=80&w=1200',
        description: 'A wellness and meditation app focused on minimalist interaction and calming aesthetics.',
        overview: 'Lumina was born from the need for a truly distraction-free meditation experience. In a world of cluttered health apps, we chose radical simplicity.',
        challenge: 'How to maintain utility while removing 80% of traditional UI elements? The challenge was creating an intuitive navigation system that felt invisible.',
        result: 'A gesture-based interface that increased user retention by 40% and resulted in a clean, immersive experience that won multiple design awards.'
    },
    {
        id: '2',
        title: 'Aether Dashboard',
        category: 'Product Design',
        year: '2023',
        thumbnail: 'https://images.unsplash.com/photo-1551288049-bbdac8a28a80?auto=format&fit=crop&q=80&w=1200',
        description: 'An enterprise-scale data visualization platform for climate researchers.',
        overview: 'Aether translates complex climate data into actionable insights through high-fidelity visual storytelling.',
        challenge: 'Visualizing multi-dimensional datasets without overwhelming the user. We needed a system that scales from tablet to wall-sized monitors.',
        result: 'A modular design system that allows analysts to customize their view while maintaining data integrity and visual hierarchy.'
    },
    {
        id: '3',
        title: 'Onyx E-Commerce',
        category: 'Interaction',
        year: '2023',
        thumbnail: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1200',
        description: 'Redefining the premium shopping experience through cinematic interactions.',
        overview: 'Onyx is a luxury fashion marketplace that prioritizes the object through high-end digital craftsmanship.',
        challenge: 'Merging the speed of a modern web app with the slow, deliberate feeling of a luxury physical store.',
        result: 'Custom-built Page transitions and webGL interactions that elevated the brand perception and increased AOV by 25%.'
    },
    {
        id: '4',
        title: 'Nomad Design System',
        category: 'System Design',
        year: '2024',
        thumbnail: 'https://images.unsplash.com/photo-1587440871875-191322ee64b0?auto=format&fit=crop&q=80&w=1200',
        description: 'A comprehensive design language for distributed teams.',
        overview: 'Nomad provides the building blocks for cross-platform consistency in an era of rapid iteration.',
        challenge: 'Building a system that is flexible enough for creative expression but rigid enough for technical stability.',
        result: 'A multi-modal system adopted by 50+ product squads, reducing design debt by 60%.'
    }
];

export const journalEntries: JournalEntry[] = [
    {
        id: 'the-future-of-form',
        title: "THE FUTURE OF FORM",
        category: "THOUGHTS // 01",
        image: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=1200",
        excerpt: "Exploring how digital interfaces are evolving beyond flat design into more organic, tactile experiences that resonate with human touch.",
        date: "Oct 12, 2024",
        content: "As we move further into the digital age, the screen is no longer just a window; it's a canvas for tactile interaction. The future of form is not about removing depth, but about reintroducing it in a way that feels native to the glass. We are seeing a shift towards 'organic interfaces'—systems that react, breathe, and move with the user's intent. <br/><br/> This is not skeuomorphism returning; it is something entirely new. It is about physics, momentum, and the weight of digital objects. When you touch a digital element, it should acknowledge your presence, not just with a state change, but with a physical reaction."
    },
    {
        id: 'minimalism-as-strategy',
        title: "MINIMALISM AS STRATEGY",
        category: "PROCESS // 02",
        image: "https://images.unsplash.com/photo-1551288049-bbdac8a28a80?q=80&w=1200",
        excerpt: "In a world of information overload, the most powerful design choice is often the one you choose to leave out.",
        date: "Sep 28, 2024",
        content: "Minimalism is often misunderstood as an aesthetic choice. In reality, it is a strategic one. Every element we add to a screen increases cognitive load. Every color, every line, every animation asks for the user's attention. <br/><br/> True minimalism is the art of reduction until only the essential remains. It is about respect for the user's time and focus. When we strip away the decorative, we are forced to make the content shine. Typography becomes the hero. Whitespace becomes the structure. The result is not emptiness, but clarity."
    },
    {
        id: 'emotional-utility',
        title: "EMOTIONAL UTILITY",
        category: "RESEARCH // 03",
        image: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?q=80&w=1200",
        excerpt: "A deep dive into how micro-animations and purposeful motion can build long-term trust and brand affinity.",
        date: "Aug 15, 2024",
        content: "Utility is the baseline. If a product doesn't work, it fails. But if it *only* works, it is forgettable. Emotional utility is the layer above function. It is the feeling of delight when a button clicks in a satisfying way. It is the reassurance of a smooth transition between states. <br/><br/> Micro-animations are the body language of software. They communicate status, provide feedback, and guide the user's attention. But more importantly, they humanize the machine. They tell the user that this software was built with care, and by extension, that the user is cared for."
    }
];

export const designerInfo = {
    name: 'REI',
    role: 'UI/UX Designer',
    tagline: 'Design beyond the ordinary',
    location: 'Seoul, KR',
    philosophy: 'We are not just designers; we are architects of experience.',
    contact: {
        email: 'master@nontext.com',
        instagram: '@rei_ux',
        linkedin: 'rei-designer'
    },
    nav: [
        { name: 'Works', href: '/shop' },
        { name: 'Manifesto', href: '/about' },
        { name: 'Journal', href: '/stories' }
    ]
};

export const siteConfig = {
    name: designerInfo.name,
    tagline: designerInfo.tagline,
    nav: designerInfo.nav
};
