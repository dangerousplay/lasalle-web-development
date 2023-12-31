import Link from "next/link";
import { w } from "windstitch";
import { TitleLabel } from "../ui/title-label";
import {
  HomeIcon,
  LightningBoltIcon,
  Pencil2Icon,
} from "@radix-ui/react-icons";

const Base = w.header(`
  sticky z-10 top-0 flex flex-col justify-between gap-4 p-6
  text-14 bg-gray-1 border-b border-gray-2

  md:flex-row md:items-stretch
`);

const Nav = w.nav(`
  flex flex-col gap-8

  md:flex-row-reverse
`);

const LinkItem = w(Link, {
  className: `
    flex items-center
    transition-opacity duration-200 ease-in-out
    hover:opacity-50
  `,
});

export function Header() {
  return (
    <Base>
      <TitleLabel
        title={<Link href="/">Doação de Sangue</Link>}
      >
      </TitleLabel>
      <Nav>
        <LinkItem href="/">
          <HomeIcon className="mr-2" /> Inicio
        </LinkItem>
        <LinkItem href="/register">
          <Pencil2Icon className="mr-2" /> Cadastro
        </LinkItem>
      </Nav>
    </Base>
  );
}
