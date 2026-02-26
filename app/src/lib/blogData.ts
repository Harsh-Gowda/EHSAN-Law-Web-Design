export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    image: string;
    date: string;
    category: string;
    author: string;
    readTime: string;
}

export const blogPosts: BlogPost[] = [
    {
        id: 'prepare-immigration-interview',
        title: 'How to Prepare for Your Immigration Interview',
        excerpt: 'Essential tips and a comprehensive checklist to help you feel confident and prepared for your USCIS interview.',
        author: 'Ehsan Law Team',
        readTime: '8 min read',
        content: `
      <p>The immigration interview is often the final and most stressful step in the journey toward a green card or citizenship. However, with the right preparation, it can be a smooth and straightforward process.</p>
      
      <h3>1. Review Your Application</h3>
      <p>The officer will base their questions on the forms you submitted. Make sure you know exactly what you wrote on your I-485, N-400, or other applications. If there are any updates (like a new job or address), bring evidence to the interview.</p>
      
      <h3>2. Organize Your Documents</h3>
      <p>Bring original documents of everything you submitted in your initial package. Use a binder with tabs to keep things organized:
      <ul>
        <li>Passports and travel documents</li>
        <li>Birth and marriage certificates</li>
        <li>Tax returns and financial evidence</li>
        <li>Certified court dispositions (if applicable)</li>
      </ul>
      </p>

      <h3>3. Practice with Your Spouse or Sponsor</h3>
      <p>If you are applying for a marriage-based green card, the officer will look for evidence of a "bona fide" relationship. Prepare to answer questions about how you met, your daily routine, and shared milestones.</p>

      <p>Preparation is the key to confidence. At Ehsan Law, we provide mock interviews to help our clients feel fully prepared for the big day.</p>
    `,
        image: '/resource_documents.jpg',
        date: 'January 15, 2026',
        category: 'Guides',
    },
    {
        id: 'understanding-affidavit-of-support',
        title: 'Understanding the Affidavit of Support',
        excerpt: 'A detailed explanation of Form I-864, including sponsor requirements, income thresholds, and legal obligations.',
        author: 'Ehsan Law Team',
        readTime: '6 min read',
        content: `
      <p>Form I-864, the Affidavit of Support, is a legally binding contract between a sponsor and the U.S. government. It ensures that the person immigrating will not become a "public charge."</p>

      <h3>Who Must Submit?</h3>
      <p>Most family-based immigrants and some employment-based immigrants require an I-864. The petitioner is always the primary sponsor, regardless of income.</p>

      <h3>Income Requirements</h3>
      <p>The sponsor must prove that their household income is at or above 125% of the U.S. Federal Poverty Guidelines for their household size. If they don't meet this, a joint sponsor can be used.</p>

      <p>Navigating the financial requirements of sponsorship can be tricky. We recommend consulting with an attorney to ensure your package meets all criteria the first time.</p>
    `,
        image: '/resource_legal.jpg',
        date: 'January 10, 2026',
        category: 'Family Immigration',
    },
    {
        id: 'business-immigration-checklist',
        title: 'Business Immigration: A Checklist for Employers',
        excerpt: 'Key steps and documentation requirements for employers sponsoring foreign workers for temporary or permanent visas.',
        author: 'Ehsan Law Team',
        readTime: '10 min read',
        content: `
      <p>For businesses looking to hire international talent, the U.S. immigration system offers several pathways, including H-1B, L-1, and EB-2/EB-3 visas.</p>

      <h3>Sponsorship Steps</h3>
      <p>1. <strong>Labor Certification (PERM):</strong> For permanent residency, employers must first prove there are no willing and qualified U.S. workers for the position.</p>
      <p>2. <strong>I-140 Petition:</strong> Once PERM is approved, the employer files a petition with USCIS to classify the worker in the appropriate category.</p>

      <p>Compliance is critical. Mistakes in prevailing wage or recruitment can lead to audits or denials. Our team specializes in corporate immigration strategy and compliance.</p>
    `,
        image: '/resource_business.jpg',
        date: 'January 5, 2026',
        category: 'Employment',
    },
];
