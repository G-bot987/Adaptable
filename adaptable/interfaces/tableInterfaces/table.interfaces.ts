export interface TableOptionsInterface {
    header: string
    tableContent?: contentInterface
}

export interface contentInterface {
    columns: columnsInterface[]
    appointmentType: appointmentRowInterface[]
}

export interface columnsInterface {
    value: string
    key: string
}

export interface appointmentRowInterface {
    key: string
    [key: string]: any;
    appointment: string
    booked: boolean
    DateTime: string
    location: string
    Clinician: string
}