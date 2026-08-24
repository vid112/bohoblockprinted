import type { Metadata } from "next";
import { PageHero, PUBLIC_IMAGES } from "@/components/marketing/PublicPage";

export const metadata: Metadata = {
  title: "Return & Refund Policy",
  description: "Returns, refunds, exchanges, cancellations, and international order guidance for Boho Block Printed customers.",
  alternates: { canonical: "/returns" },
};

const sections = [
  { title: "1. Returns", paragraphs: ["We accept eligible returns within 30 days of delivery.", "To be eligible for a return:"], bullets: ["The item must be unused and unworn.", "The item must be in its original condition.", "The item must not have been washed, altered, or damaged after delivery.", "The return request must be made within 30 days of delivery.", "You must contact us before sending any item back."], after: "Please do not send a return without contacting us first. We will provide the appropriate return instructions." },
  { title: "2. Return Shipping", paragraphs: ["For returns due to change of mind, incorrect size selection, or personal preference, the buyer is responsible for the return shipping costs.", "If an item is damaged, defective, incorrect, or significantly different from the product description, please contact us before returning it.", "After reviewing the issue, we may provide a replacement or refund where appropriate."] },
  { title: "3. Damaged, Defective or Incorrect Items", paragraphs: ["Please inspect your order when it arrives.", "Please contact us within 7 days of delivery and provide clear photographs of the item and packaging if your item:"], bullets: ["Arrives damaged.", "Has a manufacturing defect.", "Is the wrong item.", "Is significantly different from the product description."], after: "We will review the issue and work with you to provide an appropriate solution, which may include a replacement or refund." },
  { title: "4. Refunds", paragraphs: ["Once your returned item is received and inspected, we will notify you whether your refund has been approved.", "If approved, the refund will be issued to the original payment method.", "Please note that your bank or payment provider may require additional processing time before the refund appears in your account."] },
  { title: "5. Items That Cannot Be Returned", paragraphs: ["We may not accept returns for:"], bullets: ["Personalized or custom-made items.", "Items that have been worn, washed, altered, or damaged after delivery.", "Items returned without prior approval.", "Items returned after the applicable return period."], after: "Nothing in this section limits any mandatory consumer rights that apply under applicable law." },
  { title: "6. Exchanges", paragraphs: ["If you would like to exchange an eligible item for another size or item, please contact us within 30 days of delivery.", "Exchanges are subject to product availability.", "If the requested replacement is unavailable, we may offer a refund instead."] },
  { title: "7. International Orders & Customs Charges", paragraphs: ["For international orders, the buyer may be responsible for customs duties, import taxes, VAT, brokerage fees, or other charges imposed by the destination country, unless applicable law requires otherwise.", "Customs charges are imposed by the destination country's authorities and are outside the control of Boho Block Printed.", "If a customer refuses or fails to accept an international package because of unpaid customs charges, this may affect eligibility for a refund, subject to applicable law."] },
  { title: "8. Late or Lost Packages", paragraphs: ["If your order has not arrived within the expected delivery period, please contact us so that we can investigate the shipment with the shipping carrier.", "If a package is confirmed as lost in transit, we will work with the customer and shipping carrier to determine an appropriate resolution, subject to the carrier's investigation and applicable law."] },
  { title: "9. Order Cancellation", paragraphs: ["Customers may request to cancel their order within 2 hours of placing the order.", "Cancellation requests must be submitted within this 2-hour period.", "After 2 hours, orders cannot be cancelled, as the order may have already entered processing, production, packaging, or shipping preparation.", "Therefore, we strongly recommend contacting us as soon as possible if you need to cancel your order.", "If a cancellation request is received within 2 hours and is successfully approved, the eligible refund will be issued to the original payment method."] },
  { title: "10. EU & UK Customers", paragraphs: ["Customers in the European Union and United Kingdom may have additional rights under applicable consumer protection laws, including statutory cancellation or withdrawal rights.", "Nothing in this policy is intended to remove, restrict, or limit any consumer rights that cannot legally be excluded under applicable law.", "Where applicable law provides a customer with rights that differ from this policy, the applicable law will prevail."] },
  { title: "11. How to Request a Return or Refund", paragraphs: ["To request a return, refund, exchange, or report a problem with your order, please contact us with:"], bullets: ["Your order number.", "Your name.", "The reason for your request.", "Clear photographs, where applicable.", "Any other information reasonably required to investigate the issue."], after: "Please do not send an item back without contacting us first. Unauthorized returns may delay the processing of your request." },
  { title: "12. Contact Us", paragraphs: ["If you have any questions about our Return & Refund Policy, returns, exchanges, refunds, or cancellations, please contact us through the contact information provided on our website."] },
];

export default function ReturnsPage() {
  return <>
    <PageHero title="Return & Refund Policy" description="At Boho Block Printed, we want you to be happy with your purchase. If you are not completely satisfied with your order, please contact us and we will do our best to resolve the issue." image={PUBLIC_IMAGES.returnsCare} primaryHref="/contact" primaryLabel="Contact Us" secondaryHref="/faq" secondaryLabel="Read FAQs" />
    <section className="bg-[#eef4f0] py-16 lg:py-24"><div className="container-app max-w-4xl">
      <div className="space-y-5">{sections.map((section) => <section key={section.title} className="rounded-xl bg-white p-6 shadow-sm sm:p-8">
        <h2 className="font-display text-2xl font-bold text-stone-950">{section.title}</h2>
        <div className="mt-4 space-y-3 text-sm leading-7 text-stone-700">{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          {section.bullets ? <ul className="list-disc space-y-1 pl-6">{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul> : null}
          {section.after ? <p>{section.after}</p> : null}
        </div>
      </section>)}</div>
      <div className="mt-8 rounded-xl bg-[#173f4f] p-7 text-white"><p className="font-display text-2xl font-bold">Boho Block Printed</p><p className="mt-2 text-sm text-white/75">Hand Block Printed Cotton Apparel &amp; Boho Wear</p></div>
    </div></section>
  </>;
}
