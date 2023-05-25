export const tableData = {
    tableOptions: [
        {
            header: 'Appointments',
            tableContent: {
                columns: [{ value: 'Appointment type', key: 'appointment' }, { value: 'Date & Time', key: 'DateTime' }, { value: 'Location', key: 'location' }, { value: 'Clinician', key: 'Clinician' }],
                appointmentType: [
                    { key: '1', appointment: 'Initial clinical interview', booked: true, DateTime: '25 Feb 22, 9:00am', location: 'Online', Clinician: 'Dr.Lisa Williams' },
                    { key: '2', appointment: 'ADOS-2', booked: false, DateTime: 'Book now', location: 'TBC', Clinician: 'TBC' },
                    { key: '3', appointment: 'School observation', booked: false, DateTime: 'Book now', location: 'TBC', Clinician: 'TBC' },
                    { key: '4', appointment: 'QB test', booked: false, DateTime: 'Book now', location: 'TBC', Clinician: 'TBC' },
                    { key: '5', appointment: 'Feedback', booked: false, DateTime: 'Book now', location: 'Online', Clinician: 'TBC' }
                ],
            }
        },

        { header: 'Documents' },

        { header: 'Billing' }

    ]
}