import React from 'react'
import Header from './mainComponents/Header/Header'
import SelectTable from './mainComponents/table/SelectTable'
import { tableData } from '../data/tableData'
import { headerData } from '../data/headerData'


export default function App() {
    return (
        <>
            <Header {...{ headerData }} />
            <SelectTable {...tableData} />
        </>
    )
}