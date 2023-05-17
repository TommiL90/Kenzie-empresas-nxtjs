import styles from "./styles.module.scss";
import Container from "../Container";
import Link from "next/link";

export interface IRoute {
  path: string;
  label: string;
}

export interface HeaderProps {
  routes: IRoute[];
}

const Header = ({ routes }: HeaderProps): JSX.Element => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.div}>
          <h3>Kenzie Empresas</h3>
          <nav className={styles.nav}>
            {routes.map((route: IRoute, index: number) => (
              <Link key={index} href={route.path}>
                {route.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
