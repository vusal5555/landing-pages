export interface VerticalData {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  badge: string;
  heroHeadline: string;
  painText: string;
  documentsIn: string;
  queryExample: string;
  citedAnswers: string;
  documentTypes: string;
  caseStudyBridge: string;
  cardDescription: string;
}

export const verticals: Record<string, VerticalData> = {
  compliance: {
    slug: "compliance",
    name: "GDPR & Privacy Compliance",
    metaTitle: "NovraAI for GDPR & Privacy Compliance Firms",
    metaDescription:
      "AI research assistants for outsourced DPO firms. Search GDPR articles, EDPB guidance, and internal templates with cited answers in seconds.",
    badge: "For Privacy & Compliance Firms",
    heroHeadline:
      "Your consultants spend hours searching GDPR articles and EDPB guidance for one answer. Our system finds it in seconds — with the source attached.",
    painText:
      "Every client engagement means digging through the same regulatory corpus — GDPR articles, EDPB opinions, national DPA guidance, your own templates — looking for the one paragraph that answers the question. Across 50–500 client accounts, that search time compounds into the single biggest drag on your consultants' capacity.",
    documentsIn:
      "GDPR regulatory corpus, EDPB guidance documents, national DPA decisions, your internal compliance templates, prior DPIAs, and client-specific processing records — all indexed with full metadata.",
    queryExample:
      "\"What's the EDPB stance on cross-border transfers to the US post-DPF?\" or \"Find the template we used for the Article 30 records for fintech clients.\"",
    citedAnswers:
      "Every statement links to the exact GDPR article, EDPB opinion paragraph, or internal template section. Click the citation, see the original text highlighted. If there's no verified source, the system says so.",
    documentTypes: "GDPR articles, EDPB opinions, and compliance templates",
    caseStudyBridge:
      "We built this exact system for HeyData, a German GDPR compliance-as-a-service firm. The same architecture powers every compliance vertical we deploy.",
    cardDescription:
      "Outsourced DPO firms managing 50–500 client accounts. Research across GDPR articles, EDPB guidance, and your internal templates — in seconds.",
  },
  immigration: {
    slug: "immigration",
    name: "Immigration Law",
    metaTitle: "NovraAI for Immigration Law Firms",
    metaDescription:
      "AI research assistants for boutique immigration firms. Search IRCC/USCIS guidelines and case libraries with cited answers.",
    badge: "For Immigration Law Firms",
    heroHeadline:
      "Your paralegals search IRCC bulletins and case law for hours per application. Our system surfaces the answer — with the citation — in seconds.",
    painText:
      "Every LMIA, work permit, or PR application requires cross-referencing IRCC operational bulletins, USCIS policy manuals, program-specific guidelines, and your own case precedents. With high case volumes, that research bottleneck determines how many files your firm can process per week.",
    documentsIn:
      "IRCC operational bulletins, USCIS policy manuals, NOC codes, program guidelines, your firm's case library, prior approval letters, and officer notes — all indexed by case type, date, and jurisdiction.",
    queryExample:
      "\"Find all prior LMIA approvals for this employer in the last 2 years\" or \"What's the current IRCC processing guidance for spousal open work permits?\"",
    citedAnswers:
      "Every answer links to the exact IRCC bulletin, policy manual section, or case file. Click the citation to see the original passage. No fabricated case law. No hallucinated NOC codes.",
    documentTypes: "IRCC bulletins, case files, and application records",
    caseStudyBridge:
      "We built this architecture for GDPR compliance research at HeyData. The same system handles immigration regulatory corpora — different documents, identical precision.",
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
    painText:
      "Every closing package means reviewing deeds, mortgages, liens, easements, tax records, and survey documents — often 20–50 documents per file. Your searchers flip through pages looking for encumbrances, exceptions, and chain-of-title gaps. That manual review is the bottleneck between order and policy.",
    documentsIn:
      "Recorded deeds, mortgages, lien releases, easement agreements, tax certificates, survey plats, prior title policies, and closing documents — all indexed by property, recording date, and document type.",
    queryExample:
      "\"Pull the lien history on this property for the last 10 years\" or \"Are there any unreleased mortgages on parcel 12-345-678?\"",
    citedAnswers:
      "Every answer links to the exact recorded document, book/page number, and relevant clause. Click the citation, see the original document highlighted. No missed liens. No guesswork on chain of title.",
    documentTypes: "deeds, liens, easements, and closing documents",
    caseStudyBridge:
      "We built this architecture for GDPR compliance research at HeyData. The same citation-linked system handles title document corpora with the same precision.",
    cardDescription:
      "Title companies reviewing 20–50 documents per closing. Pull deeds, liens, easements, and tax records instantly.",
  },
  customs: {
    slug: "customs",
    name: "Customs & Trade",
    metaTitle: "NovraAI for Customs Brokers & Freight Forwarders",
    metaDescription:
      "AI research assistants for customs brokers. Find the right BOL, invoice, or certificate across shipments in seconds.",
    badge: "For Customs Brokers",
    heroHeadline:
      "Your team processes 10–15 documents per shipment. Finding the right one shouldn't take longer than clearing it.",
    painText:
      "Every shipment means matching commercial invoices, bills of lading, packing lists, certificates of origin, and HS classification rulings across multiple parties and jurisdictions. When a document is missing or mismatched, the entire clearance stalls. Your team's time goes to searching, not brokering.",
    documentsIn:
      "Commercial invoices, bills of lading, packing lists, certificates of origin, HS classification rulings, customs entry forms, and carrier documents — all indexed by shipment, importer, and commodity code.",
    queryExample:
      "\"Find the certificate of origin for shipment #4521 from Shenzhen\" or \"What HS code did we use for similar polyester imports last quarter?\"",
    citedAnswers:
      "Every answer links to the exact document, shipment record, and line item. Click the citation, see the original document. No misclassified codes. No missing paperwork surprises.",
    documentTypes: "BOLs, invoices, and classification rulings",
    caseStudyBridge:
      "We built this architecture for GDPR compliance research at HeyData. The same system handles trade document corpora — different regulations, identical citation precision.",
    cardDescription:
      "Brokers processing 10–15 documents per shipment. Find the right BOL, invoice, or certificate in seconds.",
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
    painText:
      "Every engagement means sifting through client-uploaded W-2s, 1099s, K-1s, bank statements, prior returns, and supporting schedules. During peak season, your staff processes dozens of packages simultaneously — and one misfiled document means hours of backtracking.",
    documentsIn:
      "Prior-year returns, W-2s, 1099s, K-1 schedules, bank and brokerage statements, depreciation schedules, entity formation documents, and client correspondence — all indexed by client, tax year, and document type.",
    queryExample:
      "\"Find all K-1s for the Johnson Family Trust across the last 3 tax years\" or \"What depreciation method did we use for this client's rental property in 2023?\"",
    citedAnswers:
      "Every answer links to the exact document, page, and line item. Click the citation, see the original return or statement highlighted. No transposed numbers. No wrong-client documents.",
    documentTypes: "returns, K-1s, and financial statements",
    caseStudyBridge:
      "We built this architecture for GDPR compliance research at HeyData. The same system handles accounting document corpora — different filings, identical precision.",
    cardDescription:
      "CPA firms processing hundreds of client document packages during tax season. Surface the right return, K-1, or statement instantly.",
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
    painText:
      "Every loan file is a stack of income verification docs, appraisals, title reports, credit reports, and compliance disclosures — often 200+ pages. Your processors toggle between files, searching for the one document that satisfies the underwriter's condition. That search is the bottleneck between application and closing.",
    documentsIn:
      "Loan applications, income verification documents, appraisal reports, title commitments, credit reports, compliance disclosures, and underwriting conditions — all indexed by borrower, loan number, and document type.",
    queryExample:
      "\"Pull the most recent appraisal for loan #2024-1847\" or \"Has the borrower's 2023 tax return been uploaded for the Martinez file?\"",
    citedAnswers:
      "Every answer links to the exact document, page, and section in the loan file. Click the citation, see the original document highlighted. No missed conditions. No wrong-file documents.",
    documentTypes: "appraisals, income docs, and title reports",
    caseStudyBridge:
      "We built this architecture for GDPR compliance research at HeyData. The same system handles mortgage document corpora — different file types, identical precision.",
    cardDescription:
      "Brokers managing 200+ page loan files. Search income docs, appraisals, and title reports across dozens of active files.",
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
