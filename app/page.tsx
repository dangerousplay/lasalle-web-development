import { w } from "windstitch";

const Base = w.div(`
  grid grid-cols-1 gap-4 p-6 text-14
  md:grid-cols-1
  xl:grid-cols-1
  2xl:grid-cols-1
`);

const PageTitle = w.h1(`font-bold text-24 text-red-10`)

const Title = w.h1(`font-bold text-24 text-blue-10`)

const Ul = w.ul(`list-disc`)
const Ol = w.ol(`list-decimal`)

const Section = w.section(`space-y-2`)

const A = w.a(`text-blue-10`)


const Td = w.td(`border-2`)
const Th = w.th(`border-2`)



export default function Home() {
  return (
    <>
      <Base>

        <Section>
          <div className={"flex-row flex space-x-4 items-center"}>
            <img className={"w-32"} src={"https://hospitalbrasilia.com.br/en/blog/PublishingImages/Doa%C3%A7%C3%A3o%20de%20sangue%20-%20horizontal%20maior.png"} alt={'image'}/>
            <PageTitle>Doação de sangue: requisitos, quem pode doar e vantagens.</PageTitle>
          </div>

          <p className={'pt-3'}>
            Doar sangue é um processo fácil, rápido, seguro e solidário. A doação
            de sangue ocorre quando uma pessoa voluntariamente vai a um centro especializado e disponibiliza seu
            sangue para ser usado em transfusões ou outras situações clínicas
          </p>
        </Section>

        <Section>
          <Title>
            A classificação de doadores e receptores de sangue é
          </Title>

          <table className={'border-2'}>
            <thead>
            <tr>
              <Th>Tipo sanguíneo</Th>
              <Th>Doa para</Th>
              <Th>Recebe de</Th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <Td>O+</Td>
              <Td>Todos os tipos de fator Rh+</Td>
              <Td>O+ e O-</Td>
            </tr>

            <tr>
              <Td>O-</Td>
              <Td>Todos os tipos</Td>
              <Td>O-</Td>
            </tr>

            <tr>
              <Td>A+</Td>
              <Td>A+, AB+</Td>
              <Td>O+, O-, A+, A-</Td>
            </tr>

            <tr>
              <Td>A-</Td>
              <Td>A+, A-, AB+, AB-</Td>
              <Td>A- e O-</Td>
            </tr>

            <tr>
              <Td>B+</Td>
              <Td>B+, AB+</Td>
              <Td>O+, O-, B+, B-</Td>
            </tr>

            <tr>
              <Td>B-</Td>
              <Td>B+, B-, AB+, AB-</Td>
              <Td>B- e O-</Td>
            </tr>

            <tr>
              <Td>AB+</Td>
              <Td>AB+</Td>
              <Td>Todos os tipos</Td>
            </tr>

            <tr>
              <Td>AB-</Td>
              <Td>AB+ e AB-</Td>
              <Td>Todos os tipos Rh-</Td>
            </tr>
            </tbody>
          </table>
        </Section>

        <Section>
          <Title>Importância da doação de sangue</Title>

          <p>A falta do estoque de sangue em um hospital pode levar ao cancelamento de cirurgias e de
            procedimentos. Um exemplo é o paciente que faz quimioterapia, já que, caso não receba o suporte de
            transfusão, poderá não resistir ao tratamento.</p>

          <p>
            <strong>Saiba mais:</strong> <A href="https://www.minhavida.com.br/materias/materia-8522">entenda como seu corpo reage após doar sangue</A>
          </p>
        </Section>

        <Section>

        </Section>


        <Title>Quem não pode doar sangue?</Title>

        <p>No hemocentro, os principais impeditivos para doar sangue são:</p>

        <Ul>
          <li>Ter idade inferior a 16 anos ou superior a 69 anos.</li>
          <li>Ter peso inferior a 50 kg.</li>
          <li>Estar com anemia no teste realizado imediatamente antes da doação.</li>
          <li>Estar com hipertensão ou hipotensão arterial no momento da doação.</li>
          <li>Estar com aumento ou diminuição dos batimentos cardíacos no momento da doação.</li>
          <li>Estar com febre no dia da doação.</li>
          <li>Levar uma criança menor de 13 anos para o hemocentro e sem a presença de outro adulto que possa acompanhá-la após a doação.</li>
        </Ul>

        <Title>Etapas da doação de sangue</Title>

        <p>O doador passa pelas seguintes etapas para doar sangue:</p>

        <Ol>
          <li>
            <strong>Cadastro</strong>: Cadastro do candidato à doação com a apresentação de documento oficial com foto
          </li>
          <li>
            <strong>Pré-triagem</strong>: Verificação dos sinais vitais (pressão arterial, temperatura e batimentos cardíacos), peso
            e teste de anemia.
          </li>
          <li>
            <strong>Triagem clínica</strong>: Entrevista individual e sigilosa onde serão avaliados os antecedentes e o estado atual
            de saúde do candidato à doação para determinar se a coleta poderá trazer riscos para ele ou para o
            receptor.
          </li>
          <li>
            <strong>Coleta de sangue</strong>: Coleta de aproximadamente 450ml de sangue e amostras para a realização dos
            testes laboratoriais.
          </li>
          <li>
            <strong>Alimentação</strong>: Após a doação de sangue o doador receberá um lanche. É recomendável que o doador
            permaneça no mínimo 15 minutos no hemocentro e beba bastante líquido durante o dia.
          </li>
        </Ol>

        <Title>Hemocentros do Brasil</Title>

        <p>A Fundação Pró-Sangue disponibiliza uma lista com todos os hemocentros do Brasil. Para saber qual é o
          centro de coleta mais próximo de você, <A href="http://redome.inca.gov.br/campanhas/hemocentros-do-brasil">confira o site da organização</A>.</p>

        <Title className="title">Referências</Title>

        <Ul>
          <li>Sandra Camargo Montebello, hematologista - CRM 41809/SP</li>
          <li>Cinthya Duran, biomédica.</li>
          <li>Fundação Pró-Sangue. Disponível em: <A href="http://www.prosangue.sp.gov.br/artigos/requisitos_basicos_para_doacao.html">http://www.prosangue.sp.gov.br/artigos/requisitos_basicos_para_doacao.html</A></li>
          <li>Secretaria da Saúde. Disponível em: <A href="http://www.saude.rs.gov.br/doacao-de-sangue">http://www.saude.rs.gov.br/doacao-de-sangue</A></li>
        </Ul>


        {/*<section className="col-span-full">*/}
        {/*  <TitleLabel title="Features">of this template</TitleLabel>*/}
        {/*</section>*/}
        {/*<section>*/}
        {/*  <TitleLabel title="tl;dr">*/}
        {/*    <Link href="/">*/}
        {/*      This is a template to get you started with Next.js 13, RSC (React*/}
        {/*      Server Components), Windstitch (Tailwind CSS in React), and*/}
        {/*      Turbopack. It uses colaction to organize your code (see{" "}*/}
        {/*      <code>/modules</code>) and uses as much new features from Next.js*/}
        {/*      13 as possible.*/}
        {/*    </Link>*/}
        {/*  </TitleLabel>*/}
        {/*</section>*/}
        {/*<section>*/}
        {/*  <TitleLabel*/}
        {/*    title={*/}
        {/*      <>*/}
        {/*        Next.js 13*/}
        {/*        <br />*/}
        {/*        with <code>/app</code>*/}
        {/*      </>*/}
        {/*    }*/}
        {/*  >*/}
        {/*    <Link*/}
        {/*      href="https://beta.nextjs.org/docs/getting-started"*/}
        {/*      target="_blank"*/}
        {/*    >*/}
        {/*      Next.js 13 introduces a new <code>/app</code> directory that is*/}
        {/*      intended to contain all routes as well as meta data, layout*/}
        {/*      definitions, and other colocated files. This is a great way to*/}
        {/*      organize your application and is a big improvement over the*/}
        {/*      previous approach.*/}
        {/*    </Link>*/}
        {/*  </TitleLabel>*/}
        {/*</section>*/}
        {/*<section>*/}
        {/*  <TitleLabel*/}
        {/*    title={*/}
        {/*      <>*/}
        {/*        Revalidation of*/}
        {/*        <br />*/}
        {/*        React Components*/}
        {/*      </>*/}
        {/*    }*/}
        {/*  >*/}
        {/*    <Link*/}
        {/*      href="https://nextjs.org/blog/next-13#data-fetching"*/}
        {/*      target="_blank"*/}
        {/*    >*/}
        {/*      With Next.js 13, you can now revalidate React (Server) components*/}
        {/*      by simply adding a<code>revalidate</code> property as 2nd argument*/}
        {/*      to the <code>fetch</code> function inside the RSC.*/}
        {/*    </Link>*/}
        {/*  </TitleLabel>*/}
        {/*</section>*/}
        {/*<section>*/}
        {/*  <TitleLabel*/}
        {/*    title={*/}
        {/*      <>*/}
        {/*        Windstitch*/}
        {/*        <br />*/}
        {/*        for Tailwind*/}
        {/*      </>*/}
        {/*    }*/}
        {/*  >*/}
        {/*    <Link href="https://windstitch.vercel.app/" target="_blank">*/}
        {/*      Windstitch is a library that allows you to use Tailwind classes in*/}
        {/*      your React components. It replaces the need for a CSS-in-JS*/}
        {/*      library like Emotion or Styled Components and{" "}*/}
        {/*      <strong>is compatible with RSC</strong>. Windstitch has a*/}
        {/*      styled-like API and supports polymorphic components.*/}
        {/*    </Link>*/}
        {/*  </TitleLabel>*/}
        {/*</section>*/}
        {/*<section>*/}
        {/*  <TitleLabel*/}
        {/*    title={*/}
        {/*      <>*/}
        {/*        Radix UI*/}
        {/*        <br />*/}
        {/*        Colors*/}
        {/*      </>*/}
        {/*    }*/}
        {/*  >*/}
        {/*    <Link href="https://github.com/brattonross/windy-radix-palette">*/}
        {/*      The color palette designed by Radix UI is a great selection to use*/}
        {/*      in your project. Radix made sure they are accessible when combined*/}
        {/*      and also has a guide what colors to use together. To integrate*/}
        {/*      Radix UI Colors with Tailwind, I added{" "}*/}
        {/*      <code>windy-radix-palette</code> to this template.*/}
        {/*    </Link>*/}
        {/*  </TitleLabel>*/}
        {/*</section>*/}
        {/*<section>*/}
        {/*  <TitleLabel*/}
        {/*    title={*/}
        {/*      <>*/}
        {/*        Windstitch*/}
        {/*        <br />& VS Code*/}
        {/*      </>*/}
        {/*    }*/}
        {/*  >*/}
        {/*    To improve the DX of Windstitch, this template also includes a*/}
        {/*    custom VS Code <code>settings.json</code> file. This extension*/}
        {/*    allows you to use Tailwind classes in your CSS-in-JS files and*/}
        {/*    provides autocompletion for them. It is not perfect yet, but it is*/}
        {/*    still a great improvement over the default experience.*/}
        {/*  </TitleLabel>*/}
        {/*</section>*/}
        {/*<section>*/}
        {/*  <TitleLabel title="Turbopack">*/}
        {/*    <Link*/}
        {/*      href="https://turbo.build/pack/docs/features/css"*/}
        {/*      target="_blank"*/}
        {/*    >*/}
        {/*      Turbopack is a build tool developed by Vercel that is written in*/}
        {/*      Rust. It replaces the need for a bundler like Webpack or Parcel*/}
        {/*      and <strong>is extremely fast</strong>. You should therefore*/}
        {/*      notice a significant improvement in your build times.*/}
        {/*    </Link>*/}
        {/*  </TitleLabel>*/}
        {/*</section>*/}
        {/*<section>*/}
        {/*  <TitleLabel title="TypeScript 5">*/}
        {/*    <Link*/}
        {/*      href="https://devblogs.microsoft.com/typescript/announcing-typescript-5-0/"*/}
        {/*      target="_blank"*/}
        {/*    >*/}
        {/*      This template also uses TypeScript 5. TypeScript 5 introduces*/}
        {/*      performance improvements, new features (like the{" "}*/}
        {/*      <code>satisfies</code>-operator), and bug fixes.*/}
        {/*    </Link>*/}
        {/*  </TitleLabel>*/}
        {/*</section>*/}
        {/*<section>*/}
        {/*  <TitleLabel*/}
        {/*    title={*/}
        {/*      <>*/}
        {/*        Demo by*/}
        {/*        <br />*/}
        {/*        Pts.js*/}
        {/*      </>*/}
        {/*    }*/}
        {/*  >*/}
        {/*    <Link href="https://ptsjs.org/" target="_blank">*/}
        {/*      Pts.js is a library for creative coding in JavaScript and powers*/}
        {/*      the playful animation in the hero section of this page. Feel free*/}
        {/*      to remove it if you do not need it. But I highly recommend you to*/}
        {/*      check it out.*/}
        {/*    </Link>*/}
        {/*  </TitleLabel>*/}
        {/*</section>*/}
        {/*<section>*/}
        {/*  <TitleLabel title="Radix Colors">*/}
        {/*    <Link href="https://www.radix-ui.com/colors" target="_blank">*/}
        {/*      Radix UI Colors is a library that provides a set of accessible*/}
        {/*      colors that work well together. It is used to define the color*/}
        {/*      palette of this template, including support for dark mode.*/}
        {/*    </Link>*/}
        {/*  </TitleLabel>*/}
        {/*</section>*/}
      </Base>
    </>
  );
}
