import type { Metadata } from "next";
import { LegalPage } from "@/components/Marketing";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy",
  description:
    "Refund and cancellation information for Novra AI recurring business software subscriptions.",
  alternates: { canonical: "/refund-policy" },
};

export default function RefundPolicyPage() {
  return (
    <LegalPage
      title="Refund & Cancellation Policy"
      description="How cancellation and refund requests are handled for Novra AI business software subscriptions."
      updated="October 8, 2026"
    >
      <p>
        This policy applies to subscriptions for the Novra AI Revenue Recovery
        System. It should be read with the applicable order form and{" "}
        <a href="/terms">Terms of Service</a>. The product is offered to business
        customers, not to consumers purchasing for personal use.
      </p>

      <h2>1. Subscription billing</h2>
      <p>
        The published primary offer is $2,500 USD per month, billed monthly,
        with a three-month initial minimum commitment and a $0 USD one-time
        setup fee. Live checkout is not currently enabled. The payment schedule,
        authorization method, and renewal terms will be shown and accepted
        before any payment is collected.
      </p>

      <h2>2. Cancelling a subscription</h2>
      <p>
        Cancellation requests must be sent from an authorized Customer contact
        to <a href={`mailto:${site.email}`}>{site.email}</a>. We will acknowledge
        receipt and confirm the effective date in writing.
      </p>
      <p>
        A cancellation request during the initial three-month commitment does
        not by itself cancel charges committed for that initial term, except
        where applicable law requires otherwise or Novra AI agrees in writing.
        The notice period and effective date for cancellation after the initial
        term remain pending final owner approval and must be stated in the
        accepted order form before billing begins.
      </p>

      <h2>3. Refund eligibility</h2>
      <p>
        Novra AI does not advertise a general money-back guarantee. A refund may
        be available where:
      </p>
      <ul>
        <li>applicable law requires it;</li>
        <li>a duplicate or incorrect charge is verified;</li>
        <li>a Merchant of Record determines a refund is required under its applicable buyer terms;</li>
        <li>the executed order form expressly creates a refund right; or</li>
        <li>Novra AI approves a refund after reviewing a documented service-delivery issue.</li>
      </ul>
      <p>
        Fees corresponding to software access, implementation, support, or
        subscription time already delivered are not automatically refundable.
        Eligibility for any unused future billing period depends on the order
        form, delivery status, applicable law, and any payment-provider rules.
      </p>

      <h2>4. How to request a refund</h2>
      <p>
        Email <a href={`mailto:${site.email}`}>{site.email}</a> with the Customer
        name, invoice or transaction reference, charge date and amount, reason
        for the request, and relevant supporting information. Do not send
        complete payment-card details by email.
      </p>

      <h2>5. Review and processing</h2>
      <p>
        We will acknowledge and assess requests reasonably promptly, but no
        specific review or bank-processing time is promised until the final
        payment provider and internal policy are approved. If a refund is
        approved, it will ordinarily be returned through the original payment
        method, subject to the provider&apos;s processing times and rules.
      </p>

      <h2>6. Merchant of Record and statutory rights</h2>
      <p>
        Paddle and Dodo Payments are not currently represented as active payment
        providers. If an approved Merchant of Record processes the purchase, its
        buyer-facing refund procedure and mandatory terms will also apply and
        will be disclosed at checkout. Nothing in this policy limits rights that
        cannot lawfully be excluded.
      </p>

      <h2>7. Charge questions</h2>
      <p>
        Contact us before initiating a payment dispute so we can investigate a
        suspected duplicate, unauthorized, or incorrect charge. This does not
        restrict any legal or cardholder right.
      </p>

      <h2>8. Policy status and contact</h2>
      <p>
        Final decisions on the post-initial-term cancellation notice, unused
        period treatment, refund-review target, and payment-provider procedure
        require owner and legal approval before checkout launch. Questions may
        be sent to <a href={`mailto:${site.email}`}>{site.email}</a>. Novra AI is
        operated by an individual entrepreneur registered in Georgia.
      </p>
    </LegalPage>
  );
}
