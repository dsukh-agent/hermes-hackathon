"use client";

const QUOTES = [
  {
    name: "Prabhkiran Singh",
    handle: "prabhkiran-singh-a5124918",
    role: "Founder, Bewakoof",
    text: "Dipesh told me this would change the world. It just roasted my entire career instead.",
    dp: "https://media.licdn.com/dms/image/v2/C5103AQGLGQpgw6Nd0A/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1581233887253?e=2147483647&v=beta&t=e8urSZyjYukO6zj0MgLgSssZUVLTvE2sqSYepL8tsBo"
  },
  {
    name: "David Sneider",
    handle: "dsneider",
    role: "Co-Founder, Lit Protocol",
    text: "I thought Dipesh was my friend until he dropped a Slop Bomb on my Series A announcement.",
    dp: "https://media.licdn.com/dms/image/v2/D5603AQEmya89TCaEcg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1690512755217?e=2147483647&v=beta&t=6C5u5XGaGgCOREa5BhBrXysnyvXR4i8p29yCJfdr4LY"
  },
  {
    name: "Ahad Shams",
    handle: "aashams1992",
    role: "Founder, HeyOz",
    text: "Rahul built this in 8 hours and it destroyed my 8 years of personal branding.",
    dp: "https://media.licdn.com/dms/image/v2/D5603AQEmdTqktrldWQ/profile-displayphoto-scale_200_200/B56ZuijhErIYAc-/0/1767958779850?e=2147483647&v=beta&t=_sYvu4oQm4ntdUQZ0Wdc8G-V3s7a0y592oGP5383Uhw"
  },
  {
    name: "Dharmesh BA",
    handle: "dharmeshba",
    role: "Builder, Startupro",
    text: "Dipesh's idea of a hackathon project is literally weaponizing paranoia. It's beautiful.",
    dp: "https://media.licdn.com/dms/image/v2/C5603AQFw1tJPx4DsZg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1641212850196?e=2147483647&v=beta&t=tOEkbYhUL5OTH38_hBu0ViEKeMB3KOF700kOeBDN1YA"
  },
  {
    name: "Jason Mah",
    handle: "jason-mah",
    role: "Stealth Founder",
    text: "Rahul said 'try my app'. I did. Now my entire LinkedIn history is a public FU score.",
    dp: "https://media.licdn.com/dms/image/v2/D5603AQEVFmJevxjrMQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1688093657936?e=2147483647&v=beta&t=sDLs7c4qL8mO1wTAw5slImNIxk7jnHDtfoWqg9_3umo"
  },
  {
    name: "Sumanyu Sharma",
    handle: "sumanyusharma",
    role: "Tech Lead",
    text: "I asked Dipesh if my post was okay. He sent me a link to FU. We don't speak anymore.",
    dp: "https://media.licdn.com/dms/image/v2/D5603AQFsM5I_yohedg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1722705276790?e=2147483647&v=beta&t=3nxtEwpko1smQIdBiHVwsF4oVKgb82BNiPWNVQNKmhM"
  },
  {
    name: "Glenn Tan",
    handle: "glenntwh",
    role: "Founder, Zavior",
    text: "Rahul promised me 100% human authenticity. This app told me I'm 99% ChatGPT.",
    dp: "https://media.licdn.com/dms/image/v2/D5603AQEO1GHQuzF9sg/profile-displayphoto-scale_200_200/B56Znqmcv5JwAY-/0/1760577581010?e=2147483647&v=beta&t=xxJZx2yEX1sXXMA1p8kGfSwXXPESD7yuMz-05U9e5u4"
  },
  {
    name: "Prateek Singh",
    handle: "prateeksingh-learnapp",
    role: "Founder, LearnApp",
    text: "I used to respect Dipesh. Now I just fear him and whatever this machine is.",
    dp: "https://media.licdn.com/dms/image/v2/D5603AQGQVnyz6n3XVA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1718279664582?e=2147483647&v=beta&t=dDPV9seMhfuiXatVf5RnAec5et8ULZH58_vwBTozkKc"
  },
  {
    name: "Toi Ngee Tan, CFA",
    handle: "toingee",
    role: "Partner, Wright Partners",
    text: "Rahul is a genius, but this product is a direct attack on my 'thought leadership' strategy.",
    dp: "https://media.licdn.com/dms/image/v2/C5103AQG_2eFWa-4Xjw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1523853178963?e=2147483647&v=beta&t=1LvbLU4KO5TjlFyTVT3PDBp41eo91t4wKslfzPgt1Iw"
  },
  {
    name: "Aaron Xavier",
    handle: "aaronxavier",
    role: "Engineer, Apple",
    text: "Dipesh and Rahul have successfully destroyed my imposter syndrome. I'm actually just a fraud. 10/10.",
    dp: "https://media.licdn.com/dms/image/v2/C5603AQE2mcAHKPqxfQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1651412370900?e=2147483647&v=beta&t=Geu-YwmcNWPH70BwgLZzxXO_cVJSiT6uQGBlCQIl51c"
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
