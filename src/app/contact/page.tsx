export default function ContactPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-6">
        📬 Contact Us
      </h1>

      <div className="prose">
        <p>
          Have a question, suggestion, or spotted an error? We&apos;d love to hear
          from you! Here are the best ways to get in touch with our team.
        </p>

        <h2>📧 Email</h2>
        <p>
          For general inquiries, feedback, or to report errors in our guides,
          please email us at:
        </p>
        <p>
          <strong>contact@paraliveswiki.wiki</strong>
        </p>

        <h2>💬 Community</h2>
        <p>
          Join our community discussions and connect with other Paralives
          players:
        </p>
        <ul>
          <li>
            <strong>Reddit:</strong> r/ParalivesGuide
          </li>
          <li>
            <strong>Discord:</strong> Paralives Guide Community
          </li>
          <li>
            <strong>Twitter:</strong> @ParalivesGuide
          </li>
        </ul>

        <h2>📝 Contribute</h2>
        <p>
          Interested in contributing to our guides? We&apos;re always looking for
          knowledgeable players to help improve our content. Here&apos;s how you can
          contribute:
        </p>
        <ul>
          <li>Share your tips and strategies</li>
          <li>Report errors or outdated information</li>
          <li>Suggest new guide topics</li>
          <li>Help translate content</li>
          <li>Create screenshots or videos</li>
        </ul>

        <h2>🐛 Report an Issue</h2>
        <p>
          Found an error in one of our guides? Please let us know by emailing{" "}
          <strong>contact@paraliveswiki.wiki</strong> with:
        </p>
        <ul>
          <li>The page URL where you found the error</li>
          <li>A description of the issue</li>
          <li>The correct information (if you know it)</li>
        </ul>

        <h2>⏰ Response Time</h2>
        <p>
          We typically respond to emails within 24-48 hours. For urgent matters,
          please reach out through our social media channels.
        </p>
      </div>
    </section>
  );
}
