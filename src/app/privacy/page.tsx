import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F0620] via-[#0E1530] to-[#053B56] text-white flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="mx-auto max-w-4xl px-4 py-16">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-white/70 mb-8">
            Last updated: 11 April 2026
          </p>

          <div className="space-y-8 text-sm md:text-[15px] text-white/75 leading-relaxed bg-black/30 border border-white/10 rounded-2xl p-6 md:p-8">
            <section>
              <h2 className="text-lg font-semibold mb-2">1. Who we are</h2>
              <p>
                Attribix (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is a
                tracking and attribution platform used by e-commerce
                businesses to better understand the performance of their
                marketing. We act as a data processor for our customers and as
                a data controller for visitors to our own website.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">
                2. What data we collect
              </h2>
              <p className="mb-2">
                We collect two main types of data when you use Attribix:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  <span className="font-semibold">Account data</span> – such as
                  your name, email address, company name and billing details
                  when you create or manage an Attribix account.
                </li>
                <li>
                  <span className="font-semibold">Usage and analytics data</span>{" "}
                  – such as page views, events, conversions and campaign
                  parameters sent from your store or ad platforms to Attribix.
                  This data is used to provide attribution and reporting
                  features to you.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">
                3. How we use your data
              </h2>
              <p className="mb-2">
                We use personal data for the following purposes:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>To provide, maintain and improve the Attribix service.</li>
                <li>
                  To secure the platform, prevent abuse and troubleshoot issues.
                </li>
                <li>
                  To send important account-related information and respond to
                  your requests.
                </li>
                <li>
                  To generate anonymous, aggregated statistics that help us
                  improve product performance.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">
                3a. Google Ads and advertising platform data
              </h2>
              <p className="mb-2">
                Attribix integrates with advertising platforms including Google Ads, Meta (Facebook/Instagram), and others to provide attribution and performance reporting. In connection with these integrations:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  We access Google Ads data (including campaign performance, conversion data, and cost metrics) solely to provide attribution reporting to you as our customer. We do not use this data for any other purpose, including advertising to end users or profiling.
                </li>
                <li>
                  Google Ads data accessed via the Google Ads API is used only to display reporting within your Attribix dashboard and is not shared with any third party.
                </li>
                <li>
                  Our use of Google Ads API data complies with{" "}
                  <a href="https://developers.google.com/terms/api-services-user-data-policy" className="underline underline-offset-4 text-cyan-300 hover:text-cyan-200" target="_blank" rel="noopener noreferrer">
                    Google API Services User Data Policy
                  </a>
                  , including the Limited Use requirements.
                </li>
                <li>
                  We use Google Analytics (GA4) on our website to understand visitor behaviour. Google Analytics may use cookies to collect anonymised usage data. You can opt out via{" "}
                  <a href="https://tools.google.com/dlpage/gaoptout" className="underline underline-offset-4 text-cyan-300 hover:text-cyan-200" target="_blank" rel="noopener noreferrer">
                    Google&apos;s opt-out browser add-on
                  </a>.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">
                4. Legal basis for processing (EEA/UK)
              </h2>
              <p>
                Where GDPR applies, we process personal data based on one or
                more of the following legal bases: performance of a contract,
                legitimate interests, and your consent (for example, where a
                customer chooses to use cookies that require consent).
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">
                5. Data retention
              </h2>
              <p>
                We retain customer data for as long as your Attribix account is
                active and for a reasonable period afterwards to comply with
                legal obligations, resolve disputes and enforce our agreements.
                Customers may request deletion of account data at any time.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">
                6. Your rights
              </h2>
              <p className="mb-2">
                Depending on your location, you may have rights to:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Access a copy of personal data we hold about you.</li>
                <li>Request correction or deletion of your personal data.</li>
                <li>
                  Object to or restrict certain types of processing, or request
                  data portability.
                </li>
              </ul>
              <p className="mt-2">
                To exercise any of these rights, please contact us at{" "}
                <a
                  href="mailto:hello@attribix.app"
                  className="underline underline-offset-4 text-cyan-300 hover:text-cyan-200"
                >
                  hello@attribix.app
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">
                7. International transfers
              </h2>
              <p>
                Attribix may process data using infrastructure located in the
                EU, EEA and other countries. Where data is transferred outside
                of your jurisdiction, we use appropriate safeguards such as
                standard contractual clauses where required by law.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">
                8. Changes to this policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. When we do
                so, we will update the &quot;Last updated&quot; date above. If
                changes are material, we will provide additional notice where
                appropriate.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">9. Contact</h2>
              <p>
                If you have any questions about this Privacy Policy or how we
                handle personal data, you can reach us at{" "}
                <a
                  href="mailto:hello@attribix.app"
                  className="underline underline-offset-4 text-cyan-300 hover:text-cyan-200"
                >
                  hello@attribix.app
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
