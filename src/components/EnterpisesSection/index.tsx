"use client"
import styles from "./styles.module.scss";
import { ICompany, ISector } from "@/app/page";

interface IEnterprisesSection {
  sectors: ISector[];
  companies: ICompany[];
}


const EnterprisesSection = ({sectors, companies}: IEnterprisesSection) => {
  
  return (
    <section className={styles.section}>
      <select name="sectors" id="sectors" className={styles.select}>
        <option value="">Seleccionar Setor</option>
        {sectors.map((sector: ISector) => (
            <option value={sector.id} key={sector.id}>{sector.name}</option>
            )
        )}
      </select>
    </section>
  );
};

export default EnterprisesSection;
