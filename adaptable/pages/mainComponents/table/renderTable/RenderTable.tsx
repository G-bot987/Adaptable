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
        <div className={styles.backDrop}>
            <table className={styles.backDrop__table}>
                <thead className={styles.backDrop__table__colWrapper}>
                    <tr>
                        {columns.map((column) => (
                            <th className={styles.backDrop__table__colWrapper__colHeader} key={column.key}>
                                {column.value}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {appointmentType.map((row: appointmentRowInterface, index) => (
                        <React.Fragment key={index}>
                            {index + 1 === appointmentType.length ? (
                                <tr className={styles.backDrop__table__rowBtm}>
                                    <td className={`${styles.backDrop__table__rowBtm__cell} ${row.booked ? styles['backDrop__table__row__cell--booked'] : ''}`}>{row.appointment}</td>
                                    <td className={` ${!row.booked ? styles['backDrop__table__rowBtm--bookNow'] : ''}`}>{row.DateTime}</td>
                                    <td className={`${styles.backDrop__table__rowBtm__cell} ${row.booked ? styles['backDrop__table__rowBtm__cell--booked'] : ''}`}>{row.location}</td>
                                    <td className={`${styles.backDrop__table__rowBtm__cell} ${row.booked ? styles['backDrop__table__rowBtm__cell--booked'] : ''}`}>{row.Clinician}</td>
                                </tr>
                            ) : (
                                <tr className={`${styles.backDrop__table__row} ${row.booked ? styles['backDrop__table__row__cell--booked'] : ''}`}>
                                    <td className={`${styles.backDrop__table__row__cell} ${row.booked ? styles['backDrop__table__row__cell--booked'] : ''}`}>{row.appointment}</td>
                                    <td className={` ${!row.booked ? styles['backDrop__table__row--bookNow'] : styles['backDrop__table__row--booked']}`}>{row.DateTime}</td>
                                    <td className={`${styles.backDrop__table__row__cell} ${row.booked ? styles['backDrop__table__row__cell--booked'] : ''}`}>{row.location}</td>
                                    <td className={`${styles.backDrop__table__row__cell} ${row.booked ? styles['backDrop__table__row__cell--booked'] : ''}`}>{row.Clinician}</td>
                                </tr>
                            )}
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
