#!/bin/bash

set -e

FROM_TIMESTAMP=$(date +%F)
TO_TIMESTAMP=$(date +%F -d "+1 day")

QUERY="SELECT surname, first_name, birthday, start_date_time
FROM appointment,booking,timeslot
WHERE booking.appointment_id = appointment.id
AND appointment.time_slot_id = timeslot.id
AND timeslot.start_date_time >= '${FROM_TIMESTAMP}'
AND timeslot.start_date_time < '${TO_TIMESTAMP}';"

echo "$QUERY" | psql termine postgres

# WHERE appointment.booked='t'
