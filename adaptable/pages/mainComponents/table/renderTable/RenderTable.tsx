import React from 'react'
import styles from './RenderTable.module.scss'

import { TableOptionsInterface, appointmentRowInterface } from '../../../../interfaces/tableInterfaces/table.interfaces'

export default function RenderTable(Props: TableOptionsInterface) {

    const { tableContent } = Props

    if (!tableContent) {
        // Handle the case when tableContent is not defined
        return null;
    }
    const { appointmentType, columns } = tableContent

    return (
        <table className={styles.table}>
            <thead className={styles.table__colWrapper}>
                <tr>
                    {columns.map((column) => (
                        <th className={styles.table__colWrapper__colHeader} key={column.key}>
                            {column.value}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {appointmentType.map((row: appointmentRowInterface, index) => (
                    <React.Fragment key={index}>
                        {index + 1 === appointmentType.length ? (
                            <tr className={styles.table__rowBtm}>
                                <td className={`${styles.table__rowBtm__cell} ${row.booked ? styles['table__row__cell--booked'] : ''}`}>{row.appointment}</td>
                                <td className={` ${!row.booked ? styles['table__rowBtm--bookNow'] : ''}`}>{row.DateTime}</td>
                                <td className={`${styles.table__rowBtm__cell} ${row.booked ? styles['table__rowBtm__cell--booked'] : ''}`}>{row.location}</td>
                                <td className={`${styles.table__rowBtm__cell} ${row.booked ? styles['table__rowBtm__cell--booked'] : ''}`}>{row.Clinician}</td>
                            </tr>
                        ) : (
                            <tr className={`${styles.table__row} ${row.booked ? styles['table__row__cell--booked'] : ''}`}>
                                <td className={`${styles.table__row__cell} ${row.booked ? styles['table__row__cell--booked'] : ''}`}>{row.appointment}</td>
                                <td className={` ${!row.booked ? styles['table__row--bookNow'] : ''}`}>{row.DateTime}</td>
                                <td className={`${styles.table__row__cell} ${row.booked ? styles['table__row__cell--booked'] : ''}`}>{row.location}</td>
                                <td className={`${styles.table__row__cell} ${row.booked ? styles['table__row__cell--booked'] : ''}`}>{row.Clinician}</td>
                            </tr>
                        )}
                    </React.Fragment>
                ))}
            </tbody>
        </table>
    );
}
