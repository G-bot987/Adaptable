import React, { useState } from 'react'
import { Table } from '@nextui-org/react';
import styles from './SelectTable.module.scss';
import RenderTable from './renderTable/RenderTable';

interface TableDataInterface {
  tableOptions: TableOptionsInterface[]
}

interface TableOptionsInterface {
  header: string
  tableContent?: contentInterface

}

interface contentInterface {
  columns: string[]
  appointmentType: appointmentRowInterface[]

}

interface appointmentRowInterface {
  appointment: string
  booked: boolean
  DateTime: string
  location: string
  Clinician: string
}


export default function SelectTable(Props: TableDataInterface) {
  const { tableOptions } = Props

  console.log(tableOptions)

  const [show, setShow] = useState(false);

  return (
    <section className={styles.table}>
      <ul>

        {tableOptions?.map((table: TableOptionsInterface, index: number) => (
          <li key={index}>
            <button>
              {table.header}
            </button>
          </li>
        ))}
      </ul>
      <RenderTable />
    </section>
  )
}


