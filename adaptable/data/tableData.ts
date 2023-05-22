export const tableData = {
    tableOptions: [
        {
            header: 'Appointments',
            tableContent: {
                columns: ['Appointment type', 'Date & Time', 'Location', 'Clinician'],
                appointmentType: [
                    { appointment: 'Initial clinical interview', booked: true, DateTime: '25 Feb 22, 9:00am', location: 'Online', Clinician: 'Dr.Lisa Williams' },
                    { appointment: 'ADOS-2', booked: false, DateTime: 'Book now', location: 'TBC', Clinician: 'TBC' },
                    { appointment: 'School observation', booked: false, DateTime: 'Book now', location: 'TBC', Clinician: 'TBC' },
                    { appointment: 'QB test', booked: false, DateTime: 'Book now', location: 'TBC', Clinician: 'TBC' },
                    { appointment: 'Feedback', booked: false, DateTime: 'Book now', location: 'Online', Clinician: 'TBC' }
                ],
            }
        },

        { header: 'Documents' },

        { header: 'Billing' }

    ]
}