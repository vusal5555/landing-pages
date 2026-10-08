import type { Metadata } from "next";
import { LegalPage } from "@/components/Marketing";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms governing business customer access to the Novra AI hotel enquiry and revenue recovery system.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      description="Terms governing access to and use of the Novra AI hotel enquiry and revenue recovery system."
      updated="October 8, 2026"
    >
      <p>
        These Terms of Service (&quot;Terms&quot;) apply between the business customer
        identified in an order form (&quot;Customer&quot;) and the individual entrepreneur
        registered in Georgia who operates under the Novra AI brand
        (&quot;Novra AI,&quot; &quot;we,&quot; or &quot;us&quot;). The operator&apos;s full registered legal
        name and registration details must be inserted in the executed order form
        and confirmed in this policy before checkout is activated.
      </p>
      <p>
        By signing an order form or using the service, Customer agrees to these
        Terms and the applicable order form. If they conflict, the order form
        controls for that purchase.
      </p>

      <h2>1. The service</h2>
      <p>
        Novra AI provides configured software for processing hotel enquiries,
        identifying supported booking intent, checking for configured
        information, coordinating follow-up and routing workflows, and
        supporting review of unresolved booking opportunities. The service works
        alongside hotel reservation and sales teams.
      </p>
      <p>
        The exact enquiry sources, integrations, workflow actions, reporting
        method, and staff controls are stated in the order form or implementation
        scope. Unless expressly stated, the service does not guarantee inventory,
        pricing, booking confirmation, enquiry conversion, recovered revenue, or
        compatibility with every third-party system.
      </p>

      <h2>2. Business customer eligibility</h2>
      <p>
        The service is offered to hotels, hotel groups, and other hospitality
        businesses. The person accepting these Terms confirms that they are at
        least 18 and authorized to bind the Customer. The offer is not directed
        to consumers purchasing for personal use.
      </p>

      <h2>3. Orders, access, and delivery</h2>
      <p>
        Service begins on the start date in the order form. Delivery may include
        source configuration, workflow setup, testing, and access to the
        configured production workflow. Customer access may be provided through
        connected operational systems rather than a standalone self-service
        dashboard. Implementation timing depends on Customer providing the
        required access, instructions, content, and approvals.
      </p>

      <h2>4. Subscription, pricing, and billing</h2>
      <p>
        The published primary offer is <strong>$2,500 USD per month</strong>,
        billed monthly, with an initial minimum commitment of three months and a
        one-time setup fee of <strong>$0 USD</strong>. Taxes, if applicable, and
        any separately agreed out-of-scope work are handled as stated in the
        order form or checkout.
      </p>
      <p>
        Novra AI does not currently operate a live checkout. Before payment is
        collected, the order form must state the payment method, invoice or
        automatic-charge schedule, renewal treatment after the initial term,
        cancellation notice, and any agreed third-party usage costs.
      </p>

      <h2>5. Recurring payment authorization</h2>
      <p>
        Where Customer expressly selects automatic recurring payment, Customer
        authorizes the identified payment provider to charge the agreed payment
        method on the schedule shown at checkout or in the order form until the
        subscription ends under those terms. Novra AI will not rely on this
        authorization until a payment provider is approved, clearly identified,
        and the Customer has affirmatively accepted the recurring terms.
      </p>

      <h2>6. Initial commitment, renewal, and cancellation</h2>
      <p>
        The initial minimum commitment is three months. A cancellation request
        during that period does not by itself remove amounts committed for the
        initial term, except where required by applicable law or expressly agreed
        in writing.
      </p>
      <p>
        Renewal after the initial term and the post-term cancellation notice
        period remain subject to final owner approval. These details must be
        included in the accepted order form before payment is collected. Requests
        may be sent to <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>

      <h2>7. Customer responsibilities</h2>
      <p>Customer is responsible for:</p>
      <ul>
        <li>lawfully obtaining and providing all data, instructions, and access required for the service;</li>
        <li>giving required notices and establishing a lawful basis for processing guest and employee data;</li>
        <li>reviewing outputs and maintaining appropriate human oversight for guest communications and booking decisions;</li>
        <li>keeping credentials secure and promptly reporting suspected unauthorized access;</li>
        <li>ensuring its staff use the service in accordance with these Terms and applicable law; and</li>
        <li>maintaining accurate inventory, rates, policies, and operational instructions in systems under its control.</li>
      </ul>

      <h2>8. Acceptable use</h2>
      <p>
        Customer must not use the service to violate law or third-party rights,
        send unlawful or deceptive communications, introduce malicious code,
        bypass security controls, interfere with the service, attempt
        unauthorized access, reverse engineer protected portions except where
        law expressly permits, or process data outside the agreed scope.
      </p>

      <h2>9. Data protection and confidentiality</h2>
      <p>
        Each party will protect the other party&apos;s non-public business,
        technical, and personal information using reasonable measures and use it
        only to perform the agreement. When Novra AI processes personal data on
        Customer&apos;s behalf, the parties will enter into a data processing
        agreement where required. Our <a href="/privacy">Privacy Policy</a>{" "}
        explains our controller and processor roles at a high level.
      </p>

      <h2>10. Intellectual property</h2>
      <p>
        Novra AI and its licensors retain rights in the software, models,
        workflow technology, documentation, and pre-existing materials. Customer
        retains rights in its data, brand assets, instructions, and other
        Customer-provided materials. Customer receives a limited,
        non-exclusive, non-transferable right to use the service during the
        subscription term for its internal business operations.
      </p>
      <p>
        No source-code ownership or assignment is included unless an order form
        expressly says so.
      </p>

      <h2>11. Third-party services and integrations</h2>
      <p>
        The service may rely on approved cloud hosting, AI model or API
        providers, email or messaging services, and Customer systems. Third-party
        services remain subject to their own terms and may change or become
        unavailable. Novra AI is responsible for its configuration of supported
        integrations, but not for failures caused solely by a third-party service
        outside its reasonable control.
      </p>

      <h2>12. Service availability and changes</h2>
      <p>
        Novra AI will use reasonable efforts to operate and support the agreed
        service. No specific uptime, response-time, recovery-time, or service
        credit commitment applies unless stated in the order form. Maintenance,
        security issues, third-party outages, or events beyond reasonable control
        may affect availability.
      </p>

      <h2>13. Disclaimers</h2>
      <p>
        AI-assisted outputs can be incomplete or incorrect and require
        appropriate human oversight. The service is provided for operational
        support and is not a guarantee of booking, revenue, or business results.
        To the extent permitted by law, implied warranties are excluded except
        where expressly stated in an order form.
      </p>

      <h2>14. Liability</h2>
      <p>
        Neither party is liable for indirect, incidental, special,
        consequential, or punitive damages, or lost profits, revenue, goodwill,
        or data, to the extent such exclusion is permitted by law. Any aggregate
        liability cap and exclusions from that cap require legal review and must
        be stated in the executed order form; these Terms do not create an
        unreviewed numerical cap.
      </p>

      <h2>15. Suspension and termination</h2>
      <p>
        Novra AI may suspend access reasonably necessary to address a security
        risk, unlawful use, material breach, or overdue undisputed payment after
        appropriate notice where practicable. Either party may terminate for an
        uncured material breach under the procedure stated in the order form.
        On termination, access ends and each party will handle data as required
        by the agreement, data processing terms, and applicable law.
      </p>

      <h2>16. Merchant of Record</h2>
      <p>
        Paddle and Dodo Payments are not currently represented as active payment
        providers for Novra AI. If an approved Merchant of Record is used, it
        will be identified at checkout as the seller and payment processor for
        the transaction, and its applicable buyer terms, refund procedures, tax
        handling, and billing disclosures will be incorporated or linked before
        launch. Paddle Buyer Terms will be appended or referenced if Paddle is
        selected and requires them for the relevant sales channel.
      </p>

      <h2>17. Governing law and disputes</h2>
      <p>
        Unless mandatory law or an accepted order form requires otherwise, these
        Terms are governed by the laws of Georgia. The dispute forum and process
        require legal review and will be specified in the executed order form.
      </p>

      <h2>18. Changes</h2>
      <p>
        We may update these Terms prospectively. Material changes affecting an
        active subscription will be communicated through the contact details on
        file and will not retroactively remove accrued rights.
      </p>

      <h2>19. Contact</h2>
      <p>
        Novra AI is operated by an individual entrepreneur registered in
        Georgia. Contract and legal notices may be sent to{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>. The operator&apos;s full
        registered legal name, registration details, and legal notice address
        still require owner confirmation before checkout launch.
      </p>
    </LegalPage>
  );
}
