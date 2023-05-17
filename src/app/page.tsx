import Header from "@/components/Header";
import styles from "./styles.module.scss";
import Container from "@/components/Container";
import Image from "next/image";
import bg from "@/../public/assets/Rectangle_init.svg";
import EnterprisesSection from "@/components/EnterpisesSection";
import { requestCompanies, requestSectors } from "@/services/api";

export interface IRoute {
  path: string;
  label: string;
}
export interface ISector {
  id: string;
  name: string;
}
export interface ICompany {
  id: string;
  name: string;
  description: string;
  category_id: string;
}

const routes: IRoute[] = [
  {
    path: "/login",
    label: "Login",
  },
  {
    path: "/register",
    label: "Cadastro",
  },
];

export default async function Home() {
  const sectors: ISector[] = await requestSectors();
  const companies: ICompany[] = await requestCompanies();
  return (
    <>
      <Header routes={routes} />
      <main className={styles.main}>
        <Container>
          <div className={styles.sections}>
            <Image src={bg} alt="background" width={550} />
            <EnterprisesSection sectors={sectors} companies={companies} />
          </div>
        </Container>
      </main>
    </>
  );
}
