import Link from "../src/components/Link";
import Head from "next/head";

export async function getStaticProps() {
  const FAQ_API_URL =
    "https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json";

  const faq = await fetch(FAQ_API_URL)
    .then((respostaDoServidor) => {
      return respostaDoServidor.json();
    })
    .then((resposta) => {
      return resposta;
    });

  return {
    props: { faq },
  };
}

export default function FAQPage({ faq }) {
  return (
    <div>
       <Head>
        <title>
          {" "}
          Faq - Prometech Labs
        </title>
      </Head>
      <h1>Página de perguntas FAQ</h1>
      <Link href={"/"}>Ir para a Home Page</Link>
      <ul>
        {faq.map(({ answer, question }) => (
          <li key={question}>
            <article>
              <h2>{question}</h2>
              <p>{answer}</p>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
