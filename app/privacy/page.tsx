import type { Metadata } from "next";
import { LegalPage } from "@/components/Marketing";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Novra AI collects and processes website, customer, hotel staff, and hotel guest enquiry data.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      description="How Novra AI handles website, business customer, hotel staff, and guest enquiry data."
      updated="October 8, 2026"
    >
      <p>
        Novra AI is a brand operated by an individual entrepreneur registered in
        Georgia. This policy explains how Novra AI (&quot;we,&quot; &quot;us&quot;) processes
        personal data through this website and the Novra AI hotel enquiry and
        revenue recovery service. The operator&apos;s full registered legal name and
        legal notice details require owner confirmation before payment checkout
        is enabled.
      </p>

      <h2>1. Our roles</h2>
      <p>
        We act as a <strong>controller</strong> for data used to operate our
        website, respond to sales and support requests, manage customer
        relationships, bill customers, secure our service, and meet legal
        obligations.
      </p>
      <p>
        We generally act as a <strong>processor</strong> when a hotel customer
        uses Novra AI to process guest, prospective guest, event organizer, or
        other enquiry data on the hotel&apos;s instructions. The hotel remains the
        controller for that data. The parties will enter into a data processing
        agreement where required.
      </p>

      <h2>2. Data we collect</h2>
      <h3>Website and contact data</h3>
      <ul>
        <li>name, business email, company, role, and message content you provide;</li>
        <li>demo-booking details submitted to the external booking provider;</li>
        <li>support communications and related records; and</li>
        <li>basic technical logs such as IP address, browser information, request time, and security events that our hosting environment may generate.</li>
      </ul>

      <h3>Customer account and commercial data</h3>
      <ul>
        <li>hotel and staff contact information;</li>
        <li>contract, configuration, support, and billing records;</li>
        <li>authorized-user and access information, where applicable; and</li>
        <li>service activity needed to operate, troubleshoot, and secure the deployment.</li>
      </ul>

      <h3>Hotel enquiry data processed for customers</h3>
      <p>
        Depending on the configured workflow, enquiry content may include a
        person&apos;s name, contact details, requested stay dates, party size, room
        preferences, meeting or event details, company or group information,
        free-text message content, follow-up communications, staff assignments,
        and available booking outcome data.
      </p>
      <p>
        Customers should not configure the service to process special-category
        data, payment-card details, identity documents, or other unnecessary
        sensitive data unless the parties have expressly assessed and agreed the
        lawful need and appropriate safeguards.
      </p>

      <h2>3. Why we process data</h2>
      <ul>
        <li>to respond to enquiries and provide demos;</li>
        <li>to enter into and perform customer contracts;</li>
        <li>to configure, operate, support, and secure the software;</li>
        <li>to process hotel enquiries on a customer&apos;s documented instructions;</li>
        <li>to classify supported booking intent, identify configured information gaps, route work, and support follow-up;</li>
        <li>to maintain business, billing, security, and compliance records; and</li>
        <li>to establish, exercise, or defend legal claims and comply with law.</li>
      </ul>

      <h2>4. Legal bases</h2>
      <p>
        Where the GDPR or UK GDPR applies and we act as controller, we rely on
        performance of a contract or steps requested before a contract,
        legitimate interests in operating and securing a B2B software business,
        compliance with legal obligations, and consent where consent is the
        appropriate basis. Our legitimate interests do not override applicable
        individual rights.
      </p>
      <p>
        For hotel enquiry data processed as a processor, the hotel determines
        the legal basis and provides instructions. Hotels are responsible for
        notices, consent where required, and handling data-subject requests,
        while we provide reasonable contractual assistance.
      </p>

      <h2>5. Service providers and subprocessors</h2>
      <p>
        We may use providers for cloud hosting, AI models or APIs, email and
        communications, monitoring and security, booking, support, and payment
        processing. The public demo-booking link currently directs visitors to
        Calendly, which processes data under its own privacy terms.
      </p>
      <p>
        The specific production hosting, AI model/API providers, data locations,
        retention controls, and subprocessor list depend on the customer
        deployment and require final technical confirmation. They will be
        disclosed in the customer&apos;s data processing documentation before live
        guest data is processed. We do not claim that provider handling is
        training-free, zero-retention, or EU-only unless the applicable
        deployment contract confirms it.
      </p>

      <h2>6. International transfers</h2>
      <p>
        Novra AI is operated from Georgia, and service providers may process data
        in other countries. Where restricted personal data is transferred from
        the EEA, UK, or Switzerland to a country without an applicable adequacy
        decision, the parties will use an appropriate transfer mechanism, such
        as approved standard contractual clauses, and supplementary measures
        where required. Exact transfer mechanisms must be documented for each
        deployment.
      </p>

      <h2>7. Retention</h2>
      <p>
        We retain controller data only as long as reasonably needed for the
        purposes described above, including contract administration, support,
        security, tax, accounting, and legal obligations. Hotel enquiry data is
        retained according to the customer&apos;s documented instructions and the
        agreed retention schedule, then deleted or returned subject to legal and
        technically necessary backup retention.
      </p>
      <p>
        Final category-specific retention periods have not yet been approved and
        must be added to customer-facing documentation before production
        onboarding.
      </p>

      <h2>8. Security</h2>
      <p>
        We use reasonable technical and organizational measures appropriate to
        the nature and risk of the data, including access controls,
        least-privilege practices, environment separation where applicable,
        logging, and protected data transmission. No system is completely
        secure. We do not claim certifications, specific encryption standards,
        or guaranteed incident-prevention outcomes that have not been
        independently verified.
      </p>

      <h2>9. Cookies and analytics</h2>
      <p>
        The current public website does not intentionally deploy non-essential
        analytics or advertising cookies. Hosting infrastructure may use
        essential technical storage or logs for delivery and security. Following
        the external demo-booking link takes you to a third party that applies
        its own cookie and privacy practices. If we add non-essential analytics,
        we will update this notice and request consent where required.
      </p>

      <h2>10. Automated processing</h2>
      <p>
        The product uses AI-assisted classification and extraction to support
        hotel enquiry workflows. Hotels can configure staff review and
        escalation. Novra AI is not intended to make legal or similarly
        significant decisions about individuals solely by automated means. A
        hotel remains responsible for final booking decisions and appropriate
        human oversight.
      </p>

      <h2>11. Your rights</h2>
      <p>
        Depending on applicable law, individuals may have rights to access,
        correct, delete, restrict or object to processing, receive portable data,
        withdraw consent, and complain to a supervisory authority. These rights
        can be limited by law.
      </p>
      <p>
        For data submitted to a hotel, contact the hotel first because it is
        usually the controller. We will assist the hotel as required. For data
        controlled by Novra AI, email{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>. We may need to verify
        identity before responding.
      </p>

      <h2>12. Children</h2>
      <p>
        The website and service are offered to businesses and are not directed
        to children. Hotel customers must ensure their use of the service,
        including any processing of minor guest data, complies with applicable
        law and the agreed instructions.
      </p>

      <h2>13. Changes and contact</h2>
      <p>
        We may update this policy to reflect changes in our practices or legal
        obligations. Material changes will be communicated where required.
        Privacy questions and requests can be sent to{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>. Novra AI is operated
        by an individual entrepreneur registered in Georgia.
      </p>
    </LegalPage>
  );
}
