"use client";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { ICompany, ISector } from "@/app/page";

interface IEnterprisesSection {
  sectors: ISector[];
  companies: ICompany[];
}

const EnterprisesSection = ({ sectors, companies }: IEnterprisesSection) => {
  const [selectedSector, setSelectedSector] = useState<string>("");
  const [list, setList] = useState<ICompany[]>([...companies]);

  useEffect(() => {
    if (selectedSector !== "") {
      const filteredList = companies.filter(
        (company) => company.category_id === selectedSector
      );
      setList(filteredList);
    } else {
      setList([...companies]);
    }
  }, [selectedSector, companies]);

  const handleSectorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSector(event.target.value);
  };

  return (
    <section className={styles.section}>
      <select
        name="sectors"
        id="sectors"
        className={styles.select}
        onChange={handleSectorChange}
      >
        <option value="">Seleccionar Sector</option>
        {sectors.map((sector: ISector) => (
          <option value={sector.id} key={sector.id}>
            {sector.name}
          </option>
        ))}
      </select>
      <div className={styles.enterprisesSection}>
        <h2>Lista de Empresas</h2>
        <ul>
          {list.map((company: ICompany) => {
            const category: ISector | undefined = sectors.find(
              (sector) => sector.id === company.category_id
            );
            return (
              <li key={company.id} className={styles.card}>
                <h3>{company.name}</h3>
                <p>{category ? category.name : ""}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default EnterprisesSection;
