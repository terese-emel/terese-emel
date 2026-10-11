export type AppointmentSlot = {
  id: string;
  startsAt: string;
  practitioner: string;
};

export type CreateAppointmentRequest = {
  slotId: string;
  patientId: string;
};

export type CreateAppointmentResponse = {
  appointmentId: string;
  status: "confirmed";
};
