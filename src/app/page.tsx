import Header from '@/components/header'
import styles from './page.module.css'

export interface IRoute {
  path: string;
  label: string;
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


export default function Home() {
  return (
    <>
      <Header routes={routes}/>
      <main className={styles.main}>
        dashboard
      </main>
    </>
  )
}
