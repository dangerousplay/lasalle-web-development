import { fetchGithubRepos } from "@/modules/submission/fetchers/github-repos";
import { w } from "windstitch";

const Base = w.div(`
  flex flex-col gap-8 p-6 overflow-x-auto
`);

type Props = any;

export default async function RegisterPage(props: Props) {
  const { params } = props;

  const name = params.slug;
  const res = name ? await fetchGithubRepos(name) : undefined;

  return (
    <Base>

    </Base>
  );
}
