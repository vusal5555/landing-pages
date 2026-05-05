export interface VerticalData {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;

  // Above the fold
  badge: string;
  heroHeadline: string;
  heroSubheadline: string;
  ctaButtonText: string;
  trustBadges: string[];
  caseStudyCompactMetric: string;
  techCredibilityLine: string;

  // Pain section (PAS)
  painProblemHeader: string;
  painProblemBody: string[];
  painAgitateHeader: string;
  painAgitateBody: string[];
  painAgitateAlternatives: { name: string; failure: string }[];
  painSolveHeader: string;
  painSolveBody: string[];

  // Value props
  valueProps: {
    header: string;
    feature: string;
    description: string;
    emotionalPayoff: string;
  }[];

  // Case study
  caseStudyCompany: string;
  caseStudyDescription: string;
  caseStudyBefore: string[];
  caseStudyAfter: string[];
  caseStudyBuilt: string;

  // Technical credibility
  techSteps: string[];

  // Deliverables
  deliverables: { name: string; description: string }[];

  // Pricing comparison
  pricingAlternatives: {
    name: string;
    cost: string;
    details: string[];
  }[];
  pricingOurs: {
    cost: string;
    details: string[];
  };

  // FAQ
  faqs: { question: string; answer: string }[];

  // Guarantee
  guaranteeText: string;

  // Final CTA
  finalCtaHeader: string;
  finalCtaSubtext: string;
  documentTypes: string;

  // Legacy fields for backward compat
  painText: string;
  documentsIn: string;
  queryExample: string;
  citedAnswers: string;
  caseStudyBridge: string;
  cardDescription: string;
}

export const verticals: Record<string, VerticalData> = {
  compliance: {
    slug: "compliance",
    name: "GDPR & Privacy Compliance",
    metaTitle: "NovraAI for GDPR & Privacy Compliance Firms",
    metaDescription:
      "AI research assistants for outsourced DPO firms. Search GDPR articles, EDPB guidance, and internal templates with cited answers in seconds. $5,000 build + $800/month.",

    badge: "Founding Cohort — 3 of 5 Slots Remaining",
    heroHeadline:
      "Get your consultants 2,000 billable hours back this year. Without hiring, without enterprise AI, without changing how your team works.",
    heroSubheadline:
      "A custom RAG research system, deployed on your firm's documents, with cited answers in 8 seconds. Built for GDPR consultancies with 10-80 staff who are tired of paying senior people to do ctrl+F.",
    ctaButtonText: "Book Your 15-Minute Strategy Call",
    trustBadges: [
      "2 build slots per month. 3 left in founding cohort.",
      "Working Build Guarantee: working system by day 28 or full refund.",
      "Built by the engineer who shipped HeyData's research system.",
    ],
    caseStudyCompactMetric:
      "Research time reduced from 20-40 minutes per query to 8 seconds. Same team, higher caseload, zero new hires.",
    techCredibilityLine:
      "FastAPI + Supabase pgvector + OpenAI embeddings. Production stack, not a prototype.",

    painProblemHeader: "Your senior consultant is doing ctrl+F right now.",
    painProblemBody: [
      "It's 2 PM on a Tuesday. One of your senior consultants, billing at €180/hour, is sitting in front of a 600-page PDF of EDPB guidance. They're scrolling. Looking for one paragraph about legitimate interest assessments for B2B data processing.",
      "They'll find it in 14 minutes. They'll do that six more times today.",
      "Meanwhile, your associate is stuck on a client DPA review because they can't remember which internal template handles joint controllership. They send a Slack message: \"Does anyone remember which article covers this?\" Nobody replies for two hours. They start from scratch.",
    ],
    painAgitateHeader: "The math your firm doesn't want to look at.",
    painAgitateBody: [
      "Four consultants. Two hours a day each spent searching documents. That's conservative.",
      "8 hours/day across the team. 40 hours/week. 2,000 hours/year.",
      "At your blended billable rate, that's €40,000 to €100,000 per year of capacity that generates zero client revenue.",
      "And here's the part that hurts more: half of those searches are for questions your firm has already answered. Last year. Last month. Last Tuesday. The answer exists in your own files. Your team just can't find it fast enough, so they redo the work.",
    ],
    painAgitateAlternatives: [
      {
        name: "Hire another paralegal",
        failure:
          "They search at human speed too. $65K-$90K/year to add another searcher, not to fix searching.",
      },
      {
        name: "Give everyone ChatGPT",
        failure:
          "It hallucinates citations. Your partners will not let fabricated EDPB references near a client deliverable.",
      },
      {
        name: "Deploy a knowledge management system",
        failure:
          "The last KMS a vendor sold you took 6 months to deploy. Half your team never logged in.",
      },
    ],
    painSolveHeader: "8-second cited answers from your actual documents.",
    painSolveBody: [
      "What if your team could ask a question, in plain English, the way they'd ask the senior partner, and get an answer in 8 seconds?",
      "Not a summary. Not a chatbot guess. The actual paragraph. From the actual EDPB opinion. From your actual internal template. Every time. With a one-click link to the source.",
      "That 14-minute search becomes a 30-second confirmation. The senior consultant stops being your team's search engine. The associate stops being afraid to ask.",
      "The work doesn't get faster. The work that doesn't need to happen disappears.",
    ],

    valueProps: [
      {
        header: "Proof Before You Pay",
        feature: "Diagnostic Demo (Week 0)",
        description:
          "I take 50-100 of your actual documents and run the pipeline on them. 48 hours later, you get a recorded video showing real questions answered with real citations from your real documents. If retrieval quality isn't there, we don't move forward. Zero dollars spent.",
        emotionalPayoff:
          "You'll know exactly what you're buying before you write the check.",
      },
      {
        header: "Hand Over a Folder, Get Back a System",
        feature: "Document Onboarding Concierge (Weeks 1-2)",
        description:
          "PDFs, Word docs, scanned files, email exports. Whatever shape your knowledge is in. I OCR, chunk semantically, validate retrieval, and load into your vector database. Five document types in the base build. Your team doesn't lift a finger.",
        emotionalPayoff:
          "Your messy document library becomes a searchable knowledge system without anyone on your team doing anything.",
      },
      {
        header: "Answers That Can't Hallucinate",
        feature: "Retrieval Engine (Weeks 2-3)",
        description:
          "Custom RAG pipeline tuned to your corpus. Semantic chunking, hybrid retrieval, reranking, citation extraction. Every answer comes with a source paragraph and a one-click link. The system cannot return an answer without a source.",
        emotionalPayoff:
          "Your partners can trust it because every answer is verifiable in one click. No fabricated article numbers, ever.",
      },
      {
        header: "Looks Like Your Firm Built It",
        feature: "Branded Search Interface (Week 3)",
        description:
          "Clean, branded chat interface. Search bar, conversation history, citation panel, source preview. Hosted at research.yourfirm.com or embedded in your existing tools.",
        emotionalPayoff:
          "When partners see the interface, it looks like a proprietary tool your firm invested in, not a generic AI chatbot.",
      },
      {
        header: "Your Team Actually Uses It",
        feature: "Team Training (Week 4)",
        description:
          "90-minute live session. How to phrase queries, validate citations, spot edge cases. Recorded for new hires. Plus a Slack channel with direct access to me for the first 60 days.",
        emotionalPayoff:
          "No adoption risk. Your team isn't left with a tool and a PDF manual. They're trained, supported, and have a direct line to the builder.",
      },
      {
        header: "Stays Accurate Without You Thinking About It",
        feature: "Monthly Refresh ($800/month)",
        description:
          "New EDPB opinions. New national DPA guidance. New internal templates. Monthly corpus refresh, retrieval retuning, quality drift patching. Plus uptime monitoring and four hours of system tuning.",
        emotionalPayoff:
          "You don't manage it. You don't assign someone to keep the AI updated. It just works, month after month.",
      },
      {
        header: "No Vendor Lock-In. Ever.",
        feature: "Source Code Ownership",
        description:
          "Full source code. Deployment documentation. Runs on your infrastructure or mine. If you ever want to take it in-house, the handover is designed into the engagement from day one.",
        emotionalPayoff:
          "The decision to stay is always a choice, never a constraint. The code is yours. The data is yours.",
      },
      {
        header: "The Working Build Guarantee",
        feature: "Performance Guarantee",
        description:
          "If by day 28 you don't have a working research system answering questions on your documents with cited sources, I refund every dollar. You keep the source code delivered up to that point.",
        emotionalPayoff:
          "The worst case scenario is you get your money back and keep the code. There is no scenario where you're empty-handed.",
      },
    ],

    caseStudyCompany: "HeyData",
    caseStudyDescription:
      "German GDPR compliance-as-a-service firm. Hundreds of client accounts across the EU.",
    caseStudyBefore: [
      "A single client query ('Does this processing activity require a DPIA under Article 35?') took a senior consultant 20-40 minutes to research with proper citations",
      "Consultants searched across GDPR text, EDPB guidance, national DPA rulings, and internal templates manually",
      "Repeat questions consumed hours every week because answers weren't findable in the firm's own files",
    ],
    caseStudyAfter: [
      "Same question, same precision, 8 seconds",
      "Consultant validates the citation in one click, sends the client answer",
      "Team handles a higher caseload with the same headcount",
      "System runs on their infrastructure. They own it. We maintain it.",
    ],
    caseStudyBuilt:
      "RAG-powered research system over the full GDPR regulatory corpus, EDPB guidance documents, national DPA rulings, and internal compliance templates. FastAPI backend, Supabase/pgvector, OpenAI embeddings, citation-linked retrieval.",

    techSteps: [
      "Your question gets converted into a semantic search query",
      "The system searches your indexed document corpus (not the internet, not a general model)",
      "A reranker scores the top results for relevance",
      "The citation builder extracts the exact paragraph and document reference",
      "The answer is assembled only from retrieved text, never from the model's training data",
    ],

    deliverables: [
      {
        name: "Production RAG System",
        description:
          "FastAPI backend, Supabase/pgvector, citation-linked retrieval. Deployed and running.",
      },
      {
        name: "Full Corpus Indexed",
        description:
          "GDPR articles, EDPB opinions, national DPA guidance, your internal templates. Five document types.",
      },
      {
        name: "Branded Search Interface",
        description:
          "Hosted at research.yourfirm.com. Search bar, citation panel, source preview. Your branding.",
      },
      {
        name: "Source Code + Docs",
        description:
          "Full repository. Everything needed to self-host or hand off to another engineer.",
      },
      {
        name: "Team Training Recording",
        description:
          "90-minute session. How to query, validate, and trust the system.",
      },
      {
        name: "60-Day Slack Support",
        description:
          "Direct access to the builder. Same-day responses on questions, bugs, feature requests.",
      },
    ],

    pricingAlternatives: [
      {
        name: "Hire a Paralegal",
        cost: "$65K - $90K/year",
        details: [
          "Searches at human speed",
          "40 hours/week cap + vacation",
          "6 months to learn your templates",
          "Doesn't fix the problem, adds another searcher",
        ],
      },
      {
        name: "Enterprise Legal AI",
        cost: "$80K - $200K/year",
        details: [
          "Generic across all law",
          "Doesn't know your templates",
          "Doesn't know your case history",
          "Locks your data in their system",
          "6-month enterprise sales cycle",
        ],
      },
    ],
    pricingOurs: {
      cost: "$5,000 + $800/mo",
      details: [
        "8-second cited answers from YOUR docs",
        "Knows your templates from day 1",
        "You own the source code",
        "Deployed in 30 days",
        "Zero hallucination risk",
      ],
    },

    faqs: [
      {
        question: "Will this actually work on my specific regulatory corpus?",
        answer:
          "Probably yes, but you don't have to take my word for it. The Diagnostic Demo runs on your actual documents before you spend a dollar. I take 50-100 of your files, run the pipeline, and send you a recorded video showing real questions answered with real citations. If retrieval quality isn't there, we both find out in 48 hours and don't move forward. Zero risk.",
      },
      {
        question:
          "What if it hallucinates and my consultants cite something fabricated to a client?",
        answer:
          "The system cannot return an answer without a source paragraph and a citation link. It's not a generative chatbot pretending to be a researcher. It's a retrieval system that surfaces the exact text from your documents. Your consultants validate the citation in one click. They're never reading AI-generated regulatory advice. They're reading your documents, found faster.",
      },
      {
        question: "My team isn't technical. Will they actually use this?",
        answer:
          "If your team can use Google, they can use this. The interface is a search bar. Type a question, get a cited answer, click to verify. The 90-minute training session covers query phrasing and citation validation. The $800 monthly retainer means your team never touches infrastructure, updates, or maintenance.",
      },
      {
        question: "Is this just another vendor lock-in situation?",
        answer:
          "No. You get the source code. You get deployment documentation. The system runs on your infrastructure or mine, your choice. If you ever want to take it in-house, the handover is designed into the engagement from day one. I'm selling you a system you own, not a subscription you can't escape.",
      },
      {
        question:
          "Our documents are messy. Half are scanned, some are in Word, some are email exports.",
        answer:
          "That's what the Document Onboarding Concierge handles. I OCR scanned files, parse Word documents, extract from email exports, and chunk everything semantically. Five document types are covered in the base build. You hand over a folder however messy it is. I hand back a working indexed corpus.",
      },
      {
        question: "What if my team won't adopt it?",
        answer:
          "Three safeguards. The interface is a search bar, not a new workflow. The 90-minute training is designed for your team's actual use cases. And the 60-day Slack support means any team member can ask 'can it do this?' and get an answer same-day. If adoption isn't working, I'll know within two weeks and we adjust.",
      },
      {
        question:
          "What about new EDPB opinions and regulatory updates? The guidance changes constantly.",
        answer:
          "That's what the $800/month retainer covers. Monthly corpus refresh with new EDPB opinions, national DPA guidance, and any new internal templates your team creates. Retrieval quality gets retuned. Your system stays current without anyone on your team thinking about it.",
      },
    ],

    guaranteeText:
      "If by day 28 you don't have a working research system answering questions on your own documents with cited sources, I refund every dollar of the build fee. And you keep the source code I've delivered up to that point. I take the risk. You don't.",

    finalCtaHeader:
      "Every week without this system, your team spends another 40 hours scrolling through documents. 40 hours that don't bill. 40 hours your competitors who deployed this are spending on actual client work.",
    finalCtaSubtext:
      "2 build slots per month. Founding pricing ($5,000 build + $800/month) for the first 5 clients only.",
    documentTypes: "GDPR articles, EDPB opinions, and compliance templates",

    // Legacy compat
    painText:
      "Every client engagement means digging through the same regulatory corpus — GDPR articles, EDPB opinions, national DPA guidance, your own templates — looking for the one paragraph that answers the question. Across 50-500 client accounts, that search time compounds into the single biggest drag on your consultants' capacity.",
    documentsIn:
      "GDPR regulatory corpus, EDPB guidance documents, national DPA decisions, your internal compliance templates, prior DPIAs, and client-specific processing records.",
    queryExample:
      "\"What's the EDPB stance on cross-border transfers to the US post-DPF?\" or \"Find the template we used for the Article 30 records for fintech clients.\"",
    citedAnswers:
      "Every statement links to the exact GDPR article, EDPB opinion paragraph, or internal template section. Click the citation, see the original text highlighted.",
    caseStudyBridge:
      "We built this exact system for HeyData, a German GDPR compliance-as-a-service firm. The same architecture powers every compliance vertical we deploy.",
    cardDescription:
      "Outsourced DPO firms managing 50-500 client accounts. Research across GDPR articles, EDPB guidance, and your internal templates, in seconds.",
  },
  immigration: {
    slug: "immigration",
    name: "Immigration Law",
    metaTitle: "NovraAI for Immigration Law Firms",
    metaDescription:
      "AI research assistants for boutique immigration firms. Search IRCC/USCIS guidelines and case libraries with cited answers.",
    badge: "For Immigration Law Firms",
    heroHeadline:
      "Your paralegals search IRCC bulletins and case law for hours per application. Our system surfaces the answer, with the citation, in seconds.",
    heroSubheadline:
      "A custom RAG research system deployed on your firm's documents. Cited answers in 8 seconds. Built for immigration boutiques with 5-30 lawyers.",
    ctaButtonText: "Book Your 15-Minute Strategy Call",
    trustBadges: [
      "2 build slots per month. 3 left in founding cohort.",
      "Working Build Guarantee: working system by day 28 or full refund.",
      "Built by the engineer who shipped HeyData's research system.",
    ],
    caseStudyCompactMetric:
      "Research time reduced from 20-40 minutes per query to 8 seconds at HeyData (GDPR). Same architecture, your documents.",
    techCredibilityLine:
      "FastAPI + Supabase pgvector + OpenAI embeddings. Production stack, not a prototype.",
    painProblemHeader:
      "Your paralegal is scrolling through an 800-page IRCC manual right now.",
    painProblemBody: [
      "They're looking for one paragraph that satisfies a condition on an LMIA file. They'll find it in 14 minutes. They'll do that six more times today.",
      "Meanwhile, another team member is assembling background for a work permit and can't remember which operational bulletin covers the exemption they need.",
      "They ask the senior lawyer. The senior lawyer is in a hearing. The file waits.",
    ],
    painAgitateHeader: "The math your firm doesn't want to look at.",
    painAgitateBody: [
      "Three paralegals. Two hours a day each spent searching documents. Conservative estimate.",
      "6 hours/day across the team. 30 hours/week. 1,500+ hours/year.",
      "At your blended rate, that's $40,000 to $80,000 per year of capacity that doesn't bill.",
      "Half of those searches are for questions your firm has already answered on a previous file. The answer exists somewhere. Your team just can't find it fast enough.",
    ],
    painAgitateAlternatives: [
      {
        name: "Hire another paralegal",
        failure:
          "They search at human speed too. $55K-$75K/year to add another searcher.",
      },
      {
        name: "Give everyone ChatGPT",
        failure:
          "It hallucinates case references. You cannot cite a fabricated IRCC bulletin to an officer.",
      },
      {
        name: "Buy enterprise legal AI",
        failure:
          "$80K-$200K/year. Designed for BigLaw litigation. Doesn't know IRCC operational manuals.",
      },
    ],
    painSolveHeader: "8-second cited answers from your actual documents.",
    painSolveBody: [
      "Your paralegal types a question. 8 seconds later, the exact IRCC bulletin, the specific paragraph, and the relevant section from your firm's own case files appear.",
      "They validate the citation in one click. They assemble the application. They move to the next file.",
      "That 14-minute search becomes a 30-second confirmation.",
      "The work that doesn't need to happen disappears.",
    ],
    valueProps: [
      {
        header: "Proof Before You Pay",
        feature: "Diagnostic Demo (Week 0)",
        description:
          "I take 50-100 of your actual documents and run the pipeline. 48 hours later, you see real questions answered with real citations from your IRCC manuals and case files.",
        emotionalPayoff:
          "You'll know exactly what you're buying before you write the check.",
      },
      {
        header: "Hand Over a Folder, Get Back a System",
        feature: "Document Onboarding Concierge (Weeks 1-2)",
        description:
          "IRCC manuals, program delivery instructions, past case files, officer notes. Whatever shape your documents are in. I OCR, chunk, validate, and load.",
        emotionalPayoff:
          "Your document library becomes searchable without your team doing anything.",
      },
      {
        header: "Answers That Can't Hallucinate",
        feature: "Retrieval Engine (Weeks 2-3)",
        description:
          "Custom RAG pipeline on your corpus. Every answer comes with a source paragraph and a one-click link. Cannot return an answer without a source.",
        emotionalPayoff:
          "No fabricated IRCC bulletin numbers. No hallucinated NOC codes. Every answer is verifiable.",
      },
      {
        header: "Looks Like Your Firm Built It",
        feature: "Branded Search Interface (Week 3)",
        description:
          "Clean interface. Search bar, citation panel, source preview. Hosted at research.yourfirm.com or embedded in your tools.",
        emotionalPayoff:
          "Your team sees a professional research tool, not a generic AI chatbot.",
      },
      {
        header: "Your Team Actually Uses It",
        feature: "Team Training (Week 4)",
        description:
          "90-minute live session. Query phrasing, citation validation, edge cases. Recorded for new hires. 60-day Slack support.",
        emotionalPayoff:
          "No adoption risk. Trained, supported, direct line to the builder.",
      },
      {
        header: "Stays Accurate Without You Thinking About It",
        feature: "Monthly Refresh ($800/month)",
        description:
          "New IRCC bulletins. New program delivery instructions. Monthly corpus refresh, retrieval retuning, quality patching.",
        emotionalPayoff:
          "You don't assign someone to keep the AI updated. It just works.",
      },
      {
        header: "No Vendor Lock-In. Ever.",
        feature: "Source Code Ownership",
        description:
          "Full source code, deployment docs, runs on your infrastructure. Handover is designed into the engagement.",
        emotionalPayoff:
          "The code is yours. The data is yours. The decision to stay is always a choice.",
      },
      {
        header: "The Working Build Guarantee",
        feature: "Performance Guarantee",
        description:
          "Working system by day 28 or full refund. You keep the source code delivered up to that point.",
        emotionalPayoff:
          "Worst case: money back plus code. No scenario where you're empty-handed.",
      },
    ],
    caseStudyCompany: "HeyData",
    caseStudyDescription:
      "German GDPR compliance-as-a-service firm. Hundreds of client accounts across the EU.",
    caseStudyBefore: [
      "Senior consultants spent 20-40 minutes per query researching with proper citations",
      "Manual search across regulatory text, guidance docs, and internal templates",
      "Repeat questions consumed hours weekly",
    ],
    caseStudyAfter: [
      "Same question, same precision, 8 seconds",
      "Higher caseload with the same headcount",
      "System runs on their infrastructure, they own it",
    ],
    caseStudyBuilt:
      "RAG-powered research system over GDPR regulatory corpus. Same architecture adapts to IRCC operational manuals and your case files.",
    techSteps: [
      "Your question gets converted into a semantic search query",
      "The system searches your indexed document corpus only",
      "A reranker scores the top results for relevance",
      "The citation builder extracts the exact paragraph",
      "The answer is assembled only from retrieved text",
    ],
    deliverables: [
      {
        name: "Production RAG System",
        description: "FastAPI backend, Supabase/pgvector, citation-linked retrieval.",
      },
      {
        name: "Full Corpus Indexed",
        description:
          "IRCC manuals, program instructions, your case files. Five document types.",
      },
      {
        name: "Branded Search Interface",
        description: "Your branding. Search bar, citation panel, source preview.",
      },
      {
        name: "Source Code + Docs",
        description: "Full repository. Self-host or hand off anytime.",
      },
      {
        name: "Team Training Recording",
        description: "90-minute session. Query, validate, trust.",
      },
      {
        name: "60-Day Slack Support",
        description: "Direct access. Same-day responses.",
      },
    ],
    pricingAlternatives: [
      {
        name: "Hire a Paralegal",
        cost: "$55K - $75K/year",
        details: [
          "Searches at human speed",
          "40 hours/week cap",
          "Months to learn your case files",
        ],
      },
      {
        name: "Enterprise Legal AI",
        cost: "$80K - $200K/year",
        details: [
          "Built for BigLaw litigation",
          "Doesn't know IRCC manuals",
          "Locks your data in their system",
        ],
      },
    ],
    pricingOurs: {
      cost: "$5,000 + $800/mo",
      details: [
        "8-second cited answers from YOUR docs",
        "Knows your case files from day 1",
        "You own the source code",
        "Deployed in 30 days",
      ],
    },
    faqs: [
      {
        question: "Will this work on IRCC operational manuals and my case files?",
        answer:
          "The Diagnostic Demo runs on your actual documents before you spend a dollar. 48 hours, real questions, real citations. If it doesn't work, we don't move forward.",
      },
      {
        question: "What if it hallucinates a case reference?",
        answer:
          "The system cannot return an answer without a source paragraph and citation link. It retrieves, it doesn't generate. You cannot get a fabricated IRCC bulletin number.",
      },
      {
        question: "My paralegals aren't technical.",
        answer:
          "The interface is a search bar. If they can use Google, they can use this. 90-minute training included.",
      },
      {
        question: "Is this vendor lock-in?",
        answer:
          "You get source code and deployment docs. Run it on your infrastructure. Take it in-house anytime.",
      },
      {
        question: "Our documents are messy and inconsistent.",
        answer:
          "Document Onboarding Concierge handles OCR, parsing, and semantic chunking. Hand over a folder, get back a working corpus.",
      },
      {
        question: "What if my team won't adopt it?",
        answer:
          "Search bar interface, live training, 60-day Slack support. If adoption stalls, I know within two weeks and we adjust.",
      },
      {
        question: "What about new IRCC bulletins and policy changes?",
        answer:
          "Monthly corpus refresh is built into the $800/month retainer. Your system stays current automatically.",
      },
    ],
    guaranteeText:
      "If by day 28 you don't have a working research system answering questions on your own documents with cited sources, I refund every dollar of the build fee. You keep the source code. I take the risk.",
    finalCtaHeader:
      "Every week without this system, your team spends another 30+ hours searching documents. Hours that don't bill. Hours your competitors are spending on actual case work.",
    finalCtaSubtext:
      "2 build slots per month. Founding pricing ($5,000 build + $800/month) for the first 5 clients only.",
    documentTypes: "IRCC bulletins, case files, and application records",
    painText:
      "Every LMIA, work permit, or PR application requires cross-referencing IRCC operational bulletins, program-specific guidelines, and your own case precedents.",
    documentsIn:
      "IRCC operational bulletins, USCIS policy manuals, NOC codes, program guidelines, your firm's case library.",
    queryExample:
      "\"Find all prior LMIA approvals for this employer in the last 2 years\" or \"What's the current IRCC processing guidance for spousal open work permits?\"",
    citedAnswers:
      "Every answer links to the exact IRCC bulletin, policy manual section, or case file. No fabricated case law. No hallucinated NOC codes.",
    caseStudyBridge:
      "We built this architecture for GDPR compliance research at HeyData. The same system handles immigration regulatory corpora.",
    cardDescription:
      "Boutique firms handling high case volumes. Search IRCC/USCIS guidelines and your case library with cited answers.",
  },
  title: {
    slug: "title",
    name: "Title & Escrow",
    metaTitle: "NovraAI for Title Companies",
    metaDescription:
      "AI research assistants for title companies. Pull deeds, liens, easements, and tax records from closing packages instantly.",
    badge: "For Title Companies",
    heroHeadline:
      "Your title searchers review 30 documents per closing. What if they could search all of them in seconds?",
    heroSubheadline:
      "A custom RAG research system for title companies. Cited answers from deeds, liens, and closing packages in seconds.",
    ctaButtonText: "Book Your 15-Minute Strategy Call",
    trustBadges: [
      "2 build slots per month.",
      "Working Build Guarantee.",
      "Built by the engineer who shipped HeyData's system.",
    ],
    caseStudyCompactMetric: "Research time: 20-40 min → 8 seconds (HeyData case study).",
    techCredibilityLine: "FastAPI + Supabase pgvector + OpenAI. Production stack.",
    painProblemHeader: "Your searchers are flipping through pages right now.",
    painProblemBody: [
      "Every closing package: deeds, mortgages, liens, easements, tax records, survey documents. Often 20-50 documents per file.",
      "Your searchers flip through pages looking for encumbrances, exceptions, and chain-of-title gaps.",
      "That manual review is the bottleneck between order and policy.",
    ],
    painAgitateHeader: "The search time compounds.",
    painAgitateBody: [
      "Multiple closings per day. 30+ documents per closing. Hours spent finding one encumbrance.",
      "Miss a lien, it's a claim. Miss an easement, it's a lawsuit.",
    ],
    painAgitateAlternatives: [
      { name: "Hire more searchers", failure: "Same human speed, same cost." },
      { name: "Generic AI tools", failure: "Can't read recorded documents reliably." },
    ],
    painSolveHeader: "Cited answers from your closing packages in seconds.",
    painSolveBody: [
      "Type a question about any property. Get the exact document, page, and clause.",
      "One click to verify. No missed liens. No guesswork on chain of title.",
    ],
    valueProps: [
      { header: "Proof Before You Pay", feature: "Diagnostic Demo", description: "See it on your docs first.", emotionalPayoff: "Know what you're buying." },
      { header: "Hand Over a Folder", feature: "Document Onboarding", description: "We ingest your closing packages.", emotionalPayoff: "No work from your team." },
      { header: "Can't Hallucinate", feature: "Retrieval Engine", description: "Citation-required output.", emotionalPayoff: "Trust every answer." },
      { header: "Your Branding", feature: "Search Interface", description: "Branded for your company.", emotionalPayoff: "Looks like you built it." },
      { header: "Team Training", feature: "Live Session", description: "90 minutes + recording.", emotionalPayoff: "Adoption guaranteed." },
      { header: "Stays Current", feature: "Monthly Refresh", description: "New documents added monthly.", emotionalPayoff: "Always up to date." },
      { header: "You Own It", feature: "Source Code", description: "Full repo delivered.", emotionalPayoff: "No lock-in." },
      { header: "Guaranteed", feature: "Working Build Guarantee", description: "Working by day 28 or refund.", emotionalPayoff: "Zero risk." },
    ],
    caseStudyCompany: "HeyData",
    caseStudyDescription: "German GDPR compliance firm. Same architecture, different documents.",
    caseStudyBefore: ["20-40 min per research query", "Manual search across documents"],
    caseStudyAfter: ["8 seconds per query", "Higher throughput, same team"],
    caseStudyBuilt: "RAG system. Same architecture handles title documents.",
    techSteps: ["Semantic search", "Corpus-only retrieval", "Reranking", "Citation extraction", "Source-linked answers"],
    deliverables: [
      { name: "RAG System", description: "Production deployment." },
      { name: "Corpus Indexed", description: "Your closing documents." },
      { name: "Interface", description: "Branded search." },
      { name: "Source Code", description: "Full repo." },
      { name: "Training", description: "90-min session." },
      { name: "Support", description: "60-day Slack." },
    ],
    pricingAlternatives: [
      { name: "More Searchers", cost: "$50K-$70K/year", details: ["Human speed"] },
      { name: "Enterprise AI", cost: "$80K+/year", details: ["Generic, not title-specific"] },
    ],
    pricingOurs: { cost: "$5,000 + $800/mo", details: ["Your documents", "30 days", "You own it"] },
    faqs: [
      { question: "Works on recorded documents?", answer: "Yes. OCR handles scanned recordings." },
      { question: "Hallucination risk?", answer: "Zero. Citation-required output only." },
    ],
    guaranteeText: "Working system by day 28 or full refund. You keep the code.",
    finalCtaHeader: "Every week without this system, your team spends hours searching closing packages manually.",
    finalCtaSubtext: "2 build slots per month. Founding pricing for the first 5 clients.",
    documentTypes: "deeds, liens, easements, and closing documents",
    painText: "Every closing package means reviewing deeds, mortgages, liens, easements, tax records, and survey documents.",
    documentsIn: "Recorded deeds, mortgages, lien releases, easement agreements, tax certificates.",
    queryExample: "\"Pull the lien history on this property for the last 10 years\"",
    citedAnswers: "Every answer links to the exact recorded document, book/page number, and relevant clause.",
    caseStudyBridge: "Same architecture as HeyData. Different documents, identical precision.",
    cardDescription: "Title companies reviewing 20-50 documents per closing.",
  },
  customs: {
    slug: "customs",
    name: "Customs & Trade",
    metaTitle: "NovraAI for Customs Brokers & Freight Forwarders",
    metaDescription:
      "AI research assistants for customs brokers. Find the right BOL, invoice, or certificate across shipments in seconds.",
    badge: "For Customs Brokers",
    heroHeadline:
      "Your team processes 10-15 documents per shipment. Finding the right one shouldn't take longer than clearing it.",
    heroSubheadline: "Cited answers from your trade documents in seconds. Built for customs brokers.",
    ctaButtonText: "Book Your 15-Minute Strategy Call",
    trustBadges: ["2 build slots per month.", "Working Build Guarantee.", "Production stack."],
    caseStudyCompactMetric: "20-40 min → 8 seconds (HeyData reference).",
    techCredibilityLine: "FastAPI + Supabase pgvector + OpenAI.",
    painProblemHeader: "Your team is searching, not brokering.",
    painProblemBody: ["Every shipment: matching invoices, BOLs, packing lists, certificates, HS rulings across parties."],
    painAgitateHeader: "Missing documents stall clearance.",
    painAgitateBody: ["A mismatched document means delays, penalties, unhappy clients."],
    painAgitateAlternatives: [{ name: "Manual search", failure: "Time-consuming and error-prone." }],
    painSolveHeader: "Find any document across any shipment in seconds.",
    painSolveBody: ["Type a question. Get the exact document. One click to verify."],
    valueProps: [
      { header: "Proof First", feature: "Diagnostic Demo", description: "See it on your docs.", emotionalPayoff: "No risk." },
      { header: "We Ingest", feature: "Onboarding", description: "All your trade docs.", emotionalPayoff: "No effort." },
      { header: "Can't Hallucinate", feature: "Retrieval Engine", description: "Citation-required.", emotionalPayoff: "Trust it." },
      { header: "Your Brand", feature: "Interface", description: "Branded search.", emotionalPayoff: "Professional." },
      { header: "Training", feature: "Team Session", description: "90 minutes.", emotionalPayoff: "Adoption." },
      { header: "Stays Current", feature: "Monthly Refresh", description: "New shipments added.", emotionalPayoff: "Always fresh." },
      { header: "You Own It", feature: "Source Code", description: "Full repo.", emotionalPayoff: "No lock-in." },
      { header: "Guaranteed", feature: "Guarantee", description: "Day 28 or refund.", emotionalPayoff: "Zero risk." },
    ],
    caseStudyCompany: "HeyData",
    caseStudyDescription: "Same architecture, different documents.",
    caseStudyBefore: ["20-40 min per query"],
    caseStudyAfter: ["8 seconds per query"],
    caseStudyBuilt: "RAG system adapted for trade documents.",
    techSteps: ["Semantic search", "Corpus retrieval", "Reranking", "Citations", "Source links"],
    deliverables: [
      { name: "RAG System", description: "Production." },
      { name: "Corpus", description: "Your trade docs." },
      { name: "Interface", description: "Branded." },
      { name: "Code", description: "Full repo." },
      { name: "Training", description: "90 min." },
      { name: "Support", description: "60 days." },
    ],
    pricingAlternatives: [
      { name: "More Staff", cost: "$50K+/year", details: ["Human speed"] },
      { name: "Enterprise Tools", cost: "$80K+/year", details: ["Generic"] },
    ],
    pricingOurs: { cost: "$5,000 + $800/mo", details: ["Your docs", "30 days", "Owned"] },
    faqs: [{ question: "Works on BOLs and invoices?", answer: "Yes. All document types supported." }],
    guaranteeText: "Working system by day 28 or full refund.",
    finalCtaHeader: "Stop losing time to document search.",
    finalCtaSubtext: "Founding pricing for the first 5 clients.",
    documentTypes: "BOLs, invoices, and classification rulings",
    painText: "Every shipment means matching documents across multiple parties and jurisdictions.",
    documentsIn: "Commercial invoices, bills of lading, packing lists, certificates of origin.",
    queryExample: "\"Find the certificate of origin for shipment #4521 from Shenzhen\"",
    citedAnswers: "Every answer links to the exact document, shipment record, and line item.",
    caseStudyBridge: "Same architecture as HeyData. Different regulations, identical precision.",
    cardDescription: "Brokers processing 10-15 documents per shipment.",
  },
  accounting: {
    slug: "accounting",
    name: "Accounting & Tax",
    metaTitle: "NovraAI for CPA Firms",
    metaDescription:
      "AI research assistants for small CPA firms. Surface the right return, K-1, or statement from hundreds of client document packages instantly.",
    badge: "For CPA Firms",
    heroHeadline:
      "Tax season means hundreds of client document packages. Your team shouldn't spend more time finding documents than reviewing them.",
    heroSubheadline: "Cited answers from your client packages in seconds. Built for CPA firms.",
    ctaButtonText: "Book Your 15-Minute Strategy Call",
    trustBadges: ["2 build slots per month.", "Working Build Guarantee.", "Production stack."],
    caseStudyCompactMetric: "20-40 min → 8 seconds (HeyData reference).",
    techCredibilityLine: "FastAPI + Supabase pgvector + OpenAI.",
    painProblemHeader: "One misfiled document means hours of backtracking.",
    painProblemBody: ["Peak season: dozens of packages simultaneously. W-2s, 1099s, K-1s, statements."],
    painAgitateHeader: "Finding documents takes longer than reviewing them.",
    painAgitateBody: ["Hours lost to searching during the busiest weeks of the year."],
    painAgitateAlternatives: [{ name: "More staff", failure: "Seasonal, expensive, slow to train." }],
    painSolveHeader: "Find any document across any client package in seconds.",
    painSolveBody: ["Type a question. Get the exact document, page, and line item."],
    valueProps: [
      { header: "Proof First", feature: "Diagnostic Demo", description: "See it on your docs.", emotionalPayoff: "No risk." },
      { header: "We Ingest", feature: "Onboarding", description: "All your client packages.", emotionalPayoff: "No effort." },
      { header: "Can't Hallucinate", feature: "Retrieval Engine", description: "Citation-required.", emotionalPayoff: "Trust it." },
      { header: "Your Brand", feature: "Interface", description: "Branded search.", emotionalPayoff: "Professional." },
      { header: "Training", feature: "Team Session", description: "90 minutes.", emotionalPayoff: "Adoption." },
      { header: "Stays Current", feature: "Monthly Refresh", description: "New packages added.", emotionalPayoff: "Always fresh." },
      { header: "You Own It", feature: "Source Code", description: "Full repo.", emotionalPayoff: "No lock-in." },
      { header: "Guaranteed", feature: "Guarantee", description: "Day 28 or refund.", emotionalPayoff: "Zero risk." },
    ],
    caseStudyCompany: "HeyData",
    caseStudyDescription: "Same architecture, different documents.",
    caseStudyBefore: ["20-40 min per query"],
    caseStudyAfter: ["8 seconds per query"],
    caseStudyBuilt: "RAG system adapted for accounting documents.",
    techSteps: ["Semantic search", "Corpus retrieval", "Reranking", "Citations", "Source links"],
    deliverables: [
      { name: "RAG System", description: "Production." },
      { name: "Corpus", description: "Your packages." },
      { name: "Interface", description: "Branded." },
      { name: "Code", description: "Full repo." },
      { name: "Training", description: "90 min." },
      { name: "Support", description: "60 days." },
    ],
    pricingAlternatives: [
      { name: "Seasonal Staff", cost: "$40K+/season", details: ["Slow to train"] },
      { name: "Enterprise Tools", cost: "$60K+/year", details: ["Generic"] },
    ],
    pricingOurs: { cost: "$5,000 + $800/mo", details: ["Your docs", "30 days", "Owned"] },
    faqs: [{ question: "Works during tax season volume?", answer: "Yes. Handles thousands of documents." }],
    guaranteeText: "Working system by day 28 or full refund.",
    finalCtaHeader: "Stop losing billable hours to document search.",
    finalCtaSubtext: "Founding pricing for the first 5 clients.",
    documentTypes: "returns, K-1s, and financial statements",
    painText: "Every engagement means sifting through client-uploaded W-2s, 1099s, K-1s, bank statements, and prior returns.",
    documentsIn: "Prior-year returns, W-2s, 1099s, K-1 schedules, bank statements, depreciation schedules.",
    queryExample: "\"Find all K-1s for the Johnson Family Trust across the last 3 tax years\"",
    citedAnswers: "Every answer links to the exact document, page, and line item.",
    caseStudyBridge: "Same architecture as HeyData. Different filings, identical precision.",
    cardDescription: "CPA firms processing hundreds of client document packages.",
  },
  mortgage: {
    slug: "mortgage",
    name: "Mortgage & Lending",
    metaTitle: "NovraAI for Mortgage Brokers",
    metaDescription:
      "AI research assistants for mortgage brokers. Search income docs, appraisals, and title reports across dozens of active loan files.",
    badge: "For Mortgage Brokers",
    heroHeadline:
      "Your processors manage 200+ page loan files. What if they could search every document across every active file in seconds?",
    heroSubheadline: "Cited answers from your loan files in seconds. Built for mortgage brokers.",
    ctaButtonText: "Book Your 15-Minute Strategy Call",
    trustBadges: ["2 build slots per month.", "Working Build Guarantee.", "Production stack."],
    caseStudyCompactMetric: "20-40 min → 8 seconds (HeyData reference).",
    techCredibilityLine: "FastAPI + Supabase pgvector + OpenAI.",
    painProblemHeader: "The search is the bottleneck between application and closing.",
    painProblemBody: ["200+ pages per loan file. Income docs, appraisals, title reports, credit reports, disclosures."],
    painAgitateHeader: "Every search delays closing.",
    painAgitateBody: ["Processors toggle between files searching for one document that satisfies an underwriter condition."],
    painAgitateAlternatives: [{ name: "More processors", failure: "Same speed, higher cost." }],
    painSolveHeader: "Search every document across every active file in seconds.",
    painSolveBody: ["Type a question. Get the exact document, page, and section."],
    valueProps: [
      { header: "Proof First", feature: "Diagnostic Demo", description: "See it on your files.", emotionalPayoff: "No risk." },
      { header: "We Ingest", feature: "Onboarding", description: "All your loan files.", emotionalPayoff: "No effort." },
      { header: "Can't Hallucinate", feature: "Retrieval Engine", description: "Citation-required.", emotionalPayoff: "Trust it." },
      { header: "Your Brand", feature: "Interface", description: "Branded search.", emotionalPayoff: "Professional." },
      { header: "Training", feature: "Team Session", description: "90 minutes.", emotionalPayoff: "Adoption." },
      { header: "Stays Current", feature: "Monthly Refresh", description: "New files added.", emotionalPayoff: "Always fresh." },
      { header: "You Own It", feature: "Source Code", description: "Full repo.", emotionalPayoff: "No lock-in." },
      { header: "Guaranteed", feature: "Guarantee", description: "Day 28 or refund.", emotionalPayoff: "Zero risk." },
    ],
    caseStudyCompany: "HeyData",
    caseStudyDescription: "Same architecture, different documents.",
    caseStudyBefore: ["20-40 min per query"],
    caseStudyAfter: ["8 seconds per query"],
    caseStudyBuilt: "RAG system adapted for mortgage documents.",
    techSteps: ["Semantic search", "Corpus retrieval", "Reranking", "Citations", "Source links"],
    deliverables: [
      { name: "RAG System", description: "Production." },
      { name: "Corpus", description: "Your loan files." },
      { name: "Interface", description: "Branded." },
      { name: "Code", description: "Full repo." },
      { name: "Training", description: "90 min." },
      { name: "Support", description: "60 days." },
    ],
    pricingAlternatives: [
      { name: "More Processors", cost: "$50K+/year", details: ["Same speed"] },
      { name: "Enterprise Tools", cost: "$80K+/year", details: ["Generic"] },
    ],
    pricingOurs: { cost: "$5,000 + $800/mo", details: ["Your files", "30 days", "Owned"] },
    faqs: [{ question: "Works on all loan file types?", answer: "Yes. All standard document types supported." }],
    guaranteeText: "Working system by day 28 or full refund.",
    finalCtaHeader: "Stop losing days to document search.",
    finalCtaSubtext: "Founding pricing for the first 5 clients.",
    documentTypes: "appraisals, income docs, and title reports",
    painText: "Every loan file is a stack of income verification docs, appraisals, title reports, credit reports, and disclosures.",
    documentsIn: "Loan applications, income docs, appraisals, title commitments, credit reports.",
    queryExample: "\"Pull the most recent appraisal for loan #2024-1847\"",
    citedAnswers: "Every answer links to the exact document, page, and section in the loan file.",
    caseStudyBridge: "Same architecture as HeyData. Different file types, identical precision.",
    cardDescription: "Brokers managing 200+ page loan files.",
  },
};

export const verticalOrder = [
  "compliance",
  "immigration",
  "title",
  "customs",
  "accounting",
  "mortgage",
] as const;
