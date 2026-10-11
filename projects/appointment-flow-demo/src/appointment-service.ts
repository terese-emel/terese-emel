import type { CreateAppointmentRequest, CreateAppointmentResponse } from "./domain";

export function createAppointment(
  request: CreateAppointmentRequest,
): CreateAppointmentResponse {
  if (!request.slotId || !request.patientId) {
    throw new Error("slotId and patientId are required");
  }

  return {
    appointmentId: `appointment-${request.slotId}-${request.patientId}`,
    status: "confirmed",
  };
}
