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

        {
            header: 'Documents', tableContent: {
                columns: [
                    { value: 'Appointment type', key: 'appointment' },
                    { value: 'Date & Time', key: 'DateTime' },
                    { value: 'Location', key: 'location' },
                    { value: 'Clinician', key: 'Clinician' }
                ],
                appointmentType: [
                    {
                        key: '1',
                        appointment: 'Document 1',
                        booked: true,
                        DateTime: 'Document 1 DateTime',
                        location: 'Document 1 Location',
                        Clinician: 'Document 1 Clinician'
                    },
                    {
                        key: '2',
                        appointment: 'Document 2',
                        booked: true,
                        DateTime: 'Document 2 DateTime',
                        location: 'Document 2 Location',
                        Clinician: 'Document 2 Clinician'
                    },
                    {
                        key: '3',
                        appointment: 'Document 3',
                        booked: false,
                        DateTime: 'Document 3 DateTime',
                        location: 'Document 3 Location',
                        Clinician: 'Document 3 Clinician'
                    }
                ]
            }
        },

        {
            header: 'Billing',

            tableContent: {
                columns: [
                    { value: 'Appointment type', key: 'appointment' },
                    { value: 'Date & Time', key: 'DateTime' },
                    { value: 'Location', key: 'location' },
                    { value: 'Clinician', key: 'Clinician' }
                ],
                appointmentType: [
                    {
                        key: '1',
                        appointment: 'Billing item 1',
                        booked: false,
                        DateTime: 'Billing item 1 DateTime',
                        location: 'Billing item 1 Location',
                        Clinician: 'Billing item 1 Clinician'
                    },
                    {
                        key: '2',
                        appointment: 'Billing item 2',
                        booked: false,
                        DateTime: 'Billing item 2 DateTime',
                        location: 'billing item 2 locatoin',
                        Clinician: 'billing item 2 clinician',
                    }

                ]
            }
        }
    ]
}