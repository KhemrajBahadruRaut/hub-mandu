export const metadata = {
  title: "Terms of Service | Mandu Hubs",
  description:
    "Read the Terms of Service for Mandu Hubs, fast food & street food restaurant in New Baneshwor, Kathmandu.",
  alternates: {
    canonical: "/terms-of-service",
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white py-16 px-6 md:px-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-stone-800 mb-8">
          Terms of <span className="text-[#D84315]">Service</span>
        </h1>

        <div className="prose prose-stone max-w-none text-sm text-stone-600 leading-relaxed space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-stone-800 mb-3">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using the Mandu Hubs website and services, you
              accept and agree to be bound by these Terms of Service. If you do
              not agree to these terms, please do not use our website or
              services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-stone-800 mb-3">
              2. Services
            </h2>
            <p>
              Mandu Hubs operates a fast food and street food restaurant located
              in New Baneshwor, Kathmandu. We offer dine-in services, takeaway,
              and delivery through third-party platforms such as Pathao Foods
              and Foodmandu.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-stone-800 mb-3">
              3. Orders and Payments
            </h2>
            <p>
              All menu items are subject to availability. Prices listed on our
              website and menu are in Nepalese Rupees (NPR) and may change
              without prior notice. Orders placed through third-party delivery
              platforms are subject to their respective terms and conditions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-stone-800 mb-3">
              4. Website Use
            </h2>
            <p>
              You agree to use this website for lawful purposes only. You may
              not use the website in any way that could damage, disable, or
              impair the website or interfere with any other party&apos;s use of
              the website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-stone-800 mb-3">
              5. Intellectual Property
            </h2>
            <p>
              All content on this website, including text, images, logos, and
              graphics, is the property of Mandu Hubs and is protected by
              applicable intellectual property laws. You may not reproduce,
              distribute, or create derivative works without our written
              consent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-stone-800 mb-3">
              6. Limitation of Liability
            </h2>
            <p>
              Mandu Hubs shall not be liable for any indirect, incidental, or
              consequential damages arising from the use of our website or
              services. Our total liability shall not exceed the amount paid for
              the services in question.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-stone-800 mb-3">
              7. Changes to Terms
            </h2>
            <p>
              We reserve the right to modify these Terms of Service at any time.
              Changes will be effective immediately upon posting on this
              website. Your continued use of our services constitutes acceptance
              of the modified terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-stone-800 mb-3">
              8. Contact
            </h2>
            <p>
              If you have any questions about these Terms of Service, please
              contact us at{" "}
              <a
                href="mailto:manduhubs@gmail.com"
                className="text-[#D84315] hover:underline"
              >
                manduhubs@gmail.com
              </a>{" "}
              or call us at 9808444499.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
