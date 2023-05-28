import React, { useEffect, useState } from 'react'
import styles from './SelectTable.module.scss';
import RenderTable from './renderTable/RenderTable';
import { TableOptionsInterface } from '../../../interfaces/tableInterfaces/table.interfaces';

interface TableDataInterface {
  tableOptions: TableOptionsInterface[]
}

export default function SelectTable(Props: TableDataInterface) {
  const { tableOptions } = Props


  const [showTable, setShowTable] = useState({});
  const [navSelected, setNavSelected] = useState('Appointments')


  const checkShowTable = (
    object: object
  ): object is TableOptionsInterface => {
    return (
      object !== null &&
      typeof object === 'object' &&
      'header' in object &&
      'tableContent' in object
    );
  };


  useEffect(() => { }, [showTable])

  return (
    <section className={styles.tableSection}>
      <ul className={styles.tableSection__navTabs}>
        {tableOptions?.map((table: TableOptionsInterface, index: number) => (
          <li key={index} className={styles.tableSection__navTabs__item}>
            <button onClick={() => { setShowTable(table), setNavSelected(`${table.header}`) }} className={`${styles.tableSection__navTabs__item__btn}  ${navSelected === table.header ? styles['tableSection__navTabs__item__btn--selected'] : styles['tableSection__navTabs__item__btn--hover']}`}>
              {table.header}
            </button>
          </li>
        ))}
      </ul>
      {checkShowTable(showTable) &&
        <RenderTable {...showTable} />
      }
    </section>
  )
}


