"use client"
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { ICompany, ISector } from "@/app/page";

interface IEnterprisesSection {
  sectors: ISector[];
  companies: ICompany[];
}

const EnterprisesSection = ({ sectors, companies }: IEnterprisesSection) => {
  const [list, setList] = useState<ICompany[]>([...companies]);
  console.log(list);

  useEffect(() => {}, []);

  return (
    <section className={styles.section}>
      <select name="sectors" id="sectors" className={styles.select}>
        <option value="">Seleccionar Setor</option>
        {sectors.map((sector: ISector) => (
          <option value={sector.id} key={sector.id}>
            {sector.name}
          </option>
        ))}
      </select>
      <div>
        <h2>Lista de Empresas</h2>
        <ul>
          {list.map((company: ICompany) => (
            <li key={company.id}>
              <h4>{company.name}</h4>
              <p>{company.category_id}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default EnterprisesSection;
