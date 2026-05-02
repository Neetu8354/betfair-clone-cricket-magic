import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BottomNav } from "@/components/BottomNav";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Seo, breadcrumbJsonLd, orgJsonLd } from "@/components/seo/Seo";
import { MessageCircle, Mail, Send, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { SITE } from "@/lib/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const Contact = () => {
  const [sent, setSent] = useState(false);

  const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Betfair365 Cricket Hub",
    url: "https://betfairvip.live/contact",
    description: "Get in touch with the Betfair365 editorial team for cricket coverage, partnerships, corrections or community questions.",
    publisher: orgJsonLd,
  };

  const orgContactJsonLd = {
    ...orgJsonLd,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        availableLanguage: ["English", "Hindi"],
        url: SITE.whatsapp,
      },
      {
        "@type": "ContactPoint",
        contactType: "editorial",
        availableLanguage: ["English"],
        email: "editors@betfairvip.live",
      },
    ],
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    toast({ title: "Message received", description: "Our editors will reply within 1–2 working days." });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen bg-background pb-16 lg:pb-0">
      <Seo
        title="Contact Betfair365 — Cricket Editorial, Partnerships & Support"
        description="Contact the Betfair365 Cricket Hub team for editorial pitches, partnerships, corrections or community help. WhatsApp support available 7 days a week."
        canonical="/contact"
        keywords="contact betfair, cricket blog contact, cricket editorial pitch, betfair support, cricket community help"
        jsonLd={[
          orgContactJsonLd,
          contactJsonLd,
          breadcrumbJsonLd([
            { name: "Home", url: "/" },
            { name: "Contact", url: "/contact" },
          ]),
        ]}
      />
      <Header />
      <main className="container py-10">
        <Breadcrumbs items={[{ label: "Contact" }]} className="mb-6" />

        <header className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">Talk to the Betfair365 team</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Editorial pitches, partnership ideas, corrections, or just a great cricket take — we read everything.
          </p>
        </header>

        <section className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-3">
          {[
            { icon: MessageCircle, title: "WhatsApp community", text: "Fastest way to reach us. Match-day chatter, predictions and live support.", href: SITE.whatsapp, cta: "Open WhatsApp" },
            { icon: Mail, title: "Editorial desk", text: "Pitches, corrections and partnership enquiries.", href: "mailto:editors@betfairvip.live", cta: "editors@betfairvip.live" },
            { icon: Clock, title: "Response time", text: "WhatsApp: same day. Email: within 1–2 working days, IST business hours." },
          ].map((c) => (
            <div key={c.title} className="rounded-xl border border-border bg-card p-6">
              <c.icon className="h-6 w-6 text-gold" />
              <h2 className="mt-3 text-lg font-bold">{c.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{c.text}</p>
              {c.href && (
                <a href={c.href} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-sm font-semibold text-gold underline-offset-4 hover:underline">
                  {c.cta}
                </a>
              )}
            </div>
          ))}
        </section>

        <section className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-5">
          <form onSubmit={handleSubmit} className="md:col-span-3 space-y-4 rounded-2xl border border-border bg-card p-6">
            <h2 className="text-xl font-bold">Send a message</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" required placeholder="Your name" className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" required placeholder="you@example.com" className="mt-1.5" />
              </div>
            </div>
            <div>
              <Label htmlFor="topic">Topic</Label>
              <Input id="topic" name="topic" placeholder="Editorial pitch, partnership, correction…" className="mt-1.5" />
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" required rows={6} placeholder="Tell us what's on your mind." className="mt-1.5" />
            </div>
            <Button type="submit" variant="hero" className="w-full sm:w-auto">
              <Send className="h-4 w-4" /> {sent ? "Sent — send another?" : "Send message"}
            </Button>
            <p className="text-xs text-muted-foreground">
              By messaging us you agree we may reply by email. We never share your details.
            </p>
          </form>

          <aside className="md:col-span-2 space-y-4">
            <div className="rounded-2xl border border-border bg-card p-6">
              <MapPin className="h-5 w-5 text-gold" />
              <h3 className="mt-2 font-bold">Based in India</h3>
              <p className="mt-1 text-sm text-muted-foreground">Editorial team operates remote across IST hours.</p>
            </div>
            <div className="rounded-2xl border border-gold/40 bg-gold/5 p-6">
              <h3 className="font-bold">New here?</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Start with our <Link to="/about" className="text-gold underline-offset-4 hover:underline">About page</Link>,
                browse the <Link to="/blog" className="text-gold underline-offset-4 hover:underline">cricket blog</Link>, or
                jump into the <Link to="/blog/fan-predictions-strategy-guide" className="text-gold underline-offset-4 hover:underline">predictions strategy guide</Link>.
              </p>
            </div>
          </aside>
        </section>
      </main>
      <Footer />
      <BottomNav />
      <WhatsAppButton />
    </div>
  );
};

export default Contact;
