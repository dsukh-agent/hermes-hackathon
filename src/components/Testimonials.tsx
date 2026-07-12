"use client";

const QUOTES = [
  {
    name: "Alex",
    role: "Former Friend of Dipesh",
    text: "Dipesh told me this would change the world. It just roasted my entire career instead.",
  },
  {
    name: "Sarah",
    role: "Rahul's Former Colleague",
    text: "Rahul built this in 8 hours and it destroyed my 8 years of personal branding.",
  },
  {
    name: "Michael",
    role: "Angel Investor",
    text: "I thought Dipesh was my friend until he dropped a Slop Bomb on my Series A announcement.",
  },
  {
    name: "Jessica",
    role: "Product Manager",
    text: "Rahul said 'try my app'. Now I'm paying a $5 de-escalation ransom to hide my own LinkedIn post.",
  },
  {
    name: "David",
    role: "Startup Founder",
    text: "Dipesh's idea of a hackathon project is literally weaponizing paranoia. It's beautiful.",
  },
  {
    name: "Emily",
    role: "Content Creator",
    text: "Rahul promised me 100% human authenticity. This app told me I'm 99% ChatGPT.",
  },
  {
    name: "Chris",
    role: "Thought Leader",
    text: "I asked Dipesh if my post was okay. He sent me a link to FU. We don't speak anymore.",
  },
  {
    name: "Amanda",
    role: "Growth Hacker",
    text: "Rahul is a genius, but this product is a direct attack on my 'thought leadership' strategy.",
  },
  {
    name: "James",
    role: "VC Analyst",
    text: "Dipesh and Rahul have successfully monetized my imposter syndrome. 10/10.",
  },
  {
    name: "Lauren",
    role: "Marketing Director",
    text: "I used to respect Dipesh. Now I just fear him and whatever this machine is.",
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
            <div className="flex flex-col border-t-border-width border-surface-variant pt-4">
              <span className="font-label-bold text-label-bold uppercase text-primary">
                {quote.name}
              </span>
              <span className="font-code-sm text-[10px] text-secondary uppercase">
                {quote.role}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
