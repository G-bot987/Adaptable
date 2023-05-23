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
    <section className={styles.table}>
      <ul className={styles.table__navTabs}>
        {tableOptions?.map((table: TableOptionsInterface, index: number) => (
          <li key={index} className={styles.table__navTabs__item}>
            <button onClick={() => setShowTable(table)}>
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


