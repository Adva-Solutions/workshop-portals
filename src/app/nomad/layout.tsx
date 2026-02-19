import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { nomadPortal } from "@/data/nomad";

export default function NomadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Nav clientName={nomadPortal.client.name} slug={nomadPortal.client.slug} />
      {children}
      <Footer clientName={nomadPortal.client.name} />
    </>
  );
}
