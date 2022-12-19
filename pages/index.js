import Link from "../src/components/Link";
import LinkEstilizado from "../src/components/Link/linkEstilizado";

export default function HomePage() {
  return (
    <div>
      <LinkEstilizado>Alura Cases</LinkEstilizado>
      <Link href="/faq">Ir para página do FAQ</Link>
    </div>
  );
}
