const Terms = () => {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="mb-6 text-3xl font-black text-foreground">Terms of Service</h1>
      <p className="mb-4 text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>

      <div className="space-y-6 text-muted-foreground leading-relaxed">
        <section>
          <h2 className="mb-2 text-xl font-bold text-foreground">1. Acceptance of Terms</h2>
          <p>By accessing and using Blogstreamer, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our website.</p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-bold text-foreground">2. Use of Content</h2>
          <p>All content published on Blogstreamer is for informational and entertainment purposes only. You may not reproduce, distribute, or modify any content without prior written permission.</p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-bold text-foreground">3. User Conduct</h2>
          <p>You agree not to use our website for any unlawful purpose, to harass or harm others, to post spam or misleading content, or to attempt to gain unauthorized access to our systems.</p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-bold text-foreground">4. Intellectual Property</h2>
          <p>All content, logos, and trademarks on this website are the property of Blogstreamer or their respective owners. Unauthorized use is strictly prohibited.</p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-bold text-foreground">5. Limitation of Liability</h2>
          <p>Blogstreamer shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of the website or reliance on any content provided.</p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-bold text-foreground">6. Changes to Terms</h2>
          <p>We reserve the right to modify these terms at any time. Continued use of the website after changes constitutes acceptance of the updated terms.</p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-bold text-foreground">7. Contact</h2>
          <p>For questions about these Terms, contact us at <span className="text-primary font-medium">legal@blogstreamer.com</span>.</p>
        </section>
      </div>
    </main>
  );
};

export default Terms;
