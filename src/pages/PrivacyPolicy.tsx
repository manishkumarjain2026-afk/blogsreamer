const PrivacyPolicy = () => {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="mb-6 text-3xl font-black text-foreground">Privacy Policy</h1>
      <p className="mb-4 text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>

      <div className="space-y-6 text-muted-foreground leading-relaxed">
        <section>
          <h2 className="mb-2 text-xl font-bold text-foreground">1. Information We Collect</h2>
          <p>We may collect personal information such as your name, email address, and browsing behavior when you visit our website. This information helps us improve your experience and deliver relevant content.</p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-bold text-foreground">2. How We Use Your Information</h2>
          <p>Your information is used to personalize content, improve our website, send newsletters (if subscribed), and analyze website traffic. We do not sell your personal data to third parties.</p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-bold text-foreground">3. Cookies</h2>
          <p>Our website uses cookies to enhance your browsing experience. Cookies are small files stored on your device that help us remember your preferences and understand how you use our site.</p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-bold text-foreground">4. Third-Party Services</h2>
          <p>We may use third-party analytics services like Google Analytics to track and analyze website usage. These services may collect information about your browsing habits.</p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-bold text-foreground">5. Data Security</h2>
          <p>We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure.</p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-bold text-foreground">6. Your Rights</h2>
          <p>You have the right to access, correct, or delete your personal data. You can also opt out of marketing communications at any time by contacting us.</p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-bold text-foreground">7. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at <span className="text-primary font-medium">privacy@blogstreamer.com</span>.</p>
        </section>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
