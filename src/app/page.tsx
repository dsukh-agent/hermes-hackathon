import AppShell from "@/components/AppShell";
import InputTerminal from "@/components/InputTerminal";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <AppShell active="analyze">
      <div className="flex flex-col min-h-full">
        <InputTerminal />
        <Testimonials />
      </div>
    </AppShell>
  );
}
