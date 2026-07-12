"use client";

const QUOTES = [
  {
    name: "Prabhkiran Singh",
    handle: "prabhkiran-singh-a5124918",
    role: "Founder, Bewakoof",
    text: "Dipesh told me this would change the world. It just roasted my entire career instead.",
    dp: "https://ui-avatars.com/api/?name=Prabhkiran+Singh&background=c4f042&color=000&rounded=true"
  },
  {
    name: "David Sneider",
    handle: "dsneider",
    role: "Co-Founder, Lit Protocol",
    text: "I thought Dipesh was my friend until he dropped a Slop Bomb on my Series A announcement.",
    dp: "https://ui-avatars.com/api/?name=David+Sneider&background=c4f042&color=000&rounded=true"
  },
  {
    name: "Ahad Shams",
    handle: "aashams1992",
    role: "Founder, HeyOz",
    text: "Rahul built this in 8 hours and it destroyed my 8 years of personal branding.",
    dp: "https://ui-avatars.com/api/?name=Ahad+Shams&background=c4f042&color=000&rounded=true"
  },
  {
    name: "Dharmesh BA",
    handle: "dharmeshba",
    role: "Builder, Startupro",
    text: "Dipesh's idea of a hackathon project is literally weaponizing paranoia. It's beautiful.",
    dp: "https://ui-avatars.com/api/?name=Dharmesh+BA&background=c4f042&color=000&rounded=true"
  },
  {
    name: "Jason Mah",
    handle: "jason-mah",
    role: "Stealth Founder",
    text: "Rahul said 'try my app'. Now I'm paying a $5 de-escalation ransom to hide my own LinkedIn post.",
    dp: "https://ui-avatars.com/api/?name=Jason+Mah&background=c4f042&color=000&rounded=true"
  },
  {
    name: "Sumanyu Sharma",
    handle: "sumanyusharma",
    role: "Tech Lead",
    text: "I asked Dipesh if my post was okay. He sent me a link to FU. We don't speak anymore.",
    dp: "https://ui-avatars.com/api/?name=Sumanyu+Sharma&background=c4f042&color=000&rounded=true"
  },
  {
    name: "Glenn Tan",
    handle: "glenntwh",
    role: "Founder, Zavior",
    text: "Rahul promised me 100% human authenticity. This app told me I'm 99% ChatGPT.",
    dp: "https://ui-avatars.com/api/?name=Glenn+Tan&background=c4f042&color=000&rounded=true"
  },
  {
    name: "Prateek Singh",
    handle: "prateeksingh-learnapp",
    role: "Founder, LearnApp",
    text: "I used to respect Dipesh. Now I just fear him and whatever this machine is.",
    dp: "https://ui-avatars.com/api/?name=Prateek+Singh&background=c4f042&color=000&rounded=true"
  },
  {
    name: "Toi Ngee Tan, CFA",
    handle: "toingee",
    role: "Partner, Wright Partners",
    text: "Rahul is a genius, but this product is a direct attack on my 'thought leadership' strategy.",
    dp: "https://ui-avatars.com/api/?name=Toi+Ngee+Tan&background=c4f042&color=000&rounded=true"
  },
  {
    name: "Aaron Xavier",
    handle: "aaronxavier",
    role: "Engineer, Apple",
    text: "Dipesh and Rahul have successfully monetized my imposter syndrome. 10/10.",
    dp: "https://ui-avatars.com/api/?name=Aaron+Xavier&background=c4f042&color=000&rounded=true"
  }
];

export default function Testimonials() {
  return (
    <section className="border-t-border-width-heavy border-primary bg-surface-container-low p-6 md:p-12">
      <div className="mb-10">
        <h2 className="font-display-xl text-[32px] md:text-[48px] uppercase leading-none mb-2 text-primary">
          Victims_Log
        </h2>
        <p className="font-code-sm text-primary-fixed-dim uppercase tracking-widest">
          TESTIMONIALS FROM THE FRIENDS OF DIPESH & RAHUL
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {QUOTES.map((quote, i) => (
          <div key={i} className="brutalist-card bg-surface-dim border-border-width border-primary p-6 relative group hover:bg-surface-container-highest transition-colors">
            <span className="material-symbols-outlined text-primary-fixed-dim text-[32px] mb-4 opacity-50 group-hover:opacity-100 transition-opacity">
              format_quote
            </span>
            <p className="font-body-md italic text-on-surface mb-6">
              &ldquo;{quote.text}&rdquo;
            </p>
            <div className="flex items-center gap-4 border-t-border-width border-surface-variant pt-4">
              <img src={quote.dp} alt={quote.name} className="w-12 h-12 rounded-full border-border-width border-primary" />
              <div className="flex flex-col">
                <span className="font-label-bold text-label-bold uppercase text-primary">
                  {quote.name}
                </span>
                <span className="font-code-sm text-[10px] text-primary-fixed-dim lowercase">
                  @{quote.handle}
                </span>
                <span className="font-code-sm text-[10px] text-secondary uppercase mt-0.5">
                  {quote.role}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
