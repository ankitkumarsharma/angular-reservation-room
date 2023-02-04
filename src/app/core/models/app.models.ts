export interface ReservationDataModel {
  stay: StayDateModel;
  room: RoomAllocationModel;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  addressStreet: AddressStreetModel;
  addressLocation: AddressLocationModel;
  extras: string[];
  payment: string;
  note: string;
  tags: string[];
  reminder: boolean;
  newsletter: boolean;
  confirm: boolean;
}
export interface StayDateModel {
  arrivalDate: string;
  departureDate: string;
}
export interface RoomAllocationModel {
  roomSize: string;
  roomQuantity: number;
}
export interface AddressStreetModel {
  streetName: string;
  streetNumber: string;
}
export interface AddressLocationModel {
  zipCode: string;
  state: string;
  city: string;
}
