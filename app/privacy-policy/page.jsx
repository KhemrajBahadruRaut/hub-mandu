export const metadata = {
  title: "Privacy Policy | Mandu Hubs",
  description:
    "Read the Privacy Policy for Mandu Hubs, fast food & street food restaurant in New Baneshwor, Kathmandu. Learn how we handle your personal information.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white py-16 px-6 md:px-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-stone-800 mb-8">
          Privacy <span className="text-[#D84315]">Policy</span>
        </h1>

        <div className="prose prose-stone max-w-none text-sm text-stone-600 leading-relaxed space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-stone-800 mb-3">
              1. Information We Collect
            </h2>
            <p>
              When you use our website or services, we may collect personal
              information such as your name, email address, phone number, and
              any messages you send through our contact form. We also collect
              information submitted through job applications on our careers
              page.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-stone-800 mb-3">
              2. How We Use Your Information
            </h2>
            <p>We use your personal information to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Respond to your enquiries and messages</li>
              <li>Process job applications</li>
              <li>Improve our website and services</li>
              <li>Send you relevant updates about Mandu Hubs (with your consent)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-stone-800 mb-3">
              3. Data Protection
            </h2>
            <p>
              We take reasonable measures to protect your personal information
              from unauthorised access, use, or disclosure. However, no method
              of transmission over the Internet is 100% secure, and we cannot
              guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-stone-800 mb-3">
              4. Cookies
            </h2>
            <p>
              Our website may use cookies to enhance your browsing experience.
              Cookies are small files stored on your device that help us
              understand how you interact with our website. You can choose to
              disable cookies in your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-stone-800 mb-3">
              5. Third-Party Services
            </h2>
            <p>
              We may use third-party services such as Pathao Foods and
              Foodmandu for delivery. When you use these services, your
              information is subject to their respective privacy policies. We
              are not responsible for the privacy practices of third-party
              platforms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-stone-800 mb-3">
              6. Your Rights
            </h2>
            <p>
              You have the right to access, correct, or request deletion of your
              personal information. To exercise these rights, please contact us
              using the details below.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-stone-800 mb-3">
              7. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page with an updated effective date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-stone-800 mb-3">
              8. Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy, please
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
