const About = () => {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="mb-6 text-3xl font-black text-foreground">About Us</h1>

      <div className="space-y-6 text-muted-foreground leading-relaxed">
        <section>
          <h2 className="mb-2 text-xl font-bold text-foreground">Who We Are</h2>
          <p>Blogstreamer is a modern blogging platform dedicated to bringing you the most engaging, insightful, and entertaining content from across the internet. We believe in the power of stories to inform, inspire, and connect people.</p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-bold text-foreground">Our Mission</h2>
          <p>Our mission is to create a space where readers can discover fresh perspectives on technology, lifestyle, health, travel, and trending topics. We strive to deliver high-quality content that is both informative and enjoyable to read.</p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-bold text-foreground">What We Cover</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-foreground">Tech:</strong> Latest gadgets, AI trends, and digital innovations</li>
            <li><strong className="text-foreground">Life Hacks:</strong> Practical tips to make your life easier</li>
            <li><strong className="text-foreground">Travel:</strong> Hidden gems and budget travel guides</li>
            <li><strong className="text-foreground">Health & Wellness:</strong> Mental health, fitness, and well-being</li>
            <li><strong className="text-foreground">Celebrity Drama:</strong> Entertainment news and pop culture</li>
            <li><strong className="text-foreground">Shocking Stories:</strong> Mind-blowing facts and real stories</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-bold text-foreground">Our Team</h2>
          <p>We are a passionate team of writers, editors, and tech enthusiasts who love sharing knowledge. Each article is carefully crafted to ensure accuracy and readability.</p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-bold text-foreground">Contact Us</h2>
          <p>Have a story idea or want to collaborate? Reach out to us at <span className="text-primary font-medium">hello@blogstreamer.com</span>.</p>
        </section>
      </div>
    </main>
  );
};

export default About;
