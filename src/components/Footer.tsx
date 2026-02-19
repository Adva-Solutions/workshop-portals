interface FooterProps {
  clientName: string;
}

export function Footer({ clientName }: FooterProps) {
  return (
    <footer className="mt-12 border-t border-black/6 py-10 text-center">
      <p className="text-xs text-gray-mid">
        Prepared by <span className="font-semibold text-black">Adva Solutions</span>{" "}
        for <span className="font-semibold text-black">{clientName}</span>
      </p>
    </footer>
  );
}
