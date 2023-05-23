export interface TableOptionsInterface {
    header: string
    tableContent?: contentInterface
}

export interface contentInterface {
    columns: string[]
    appointmentType: appointmentRowInterface[]
}

export interface appointmentRowInterface {
    appointment: string
    booked: boolean
    DateTime: string
    location: string
    Clinician: string
}