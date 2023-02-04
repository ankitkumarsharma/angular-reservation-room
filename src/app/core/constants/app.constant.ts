import { ReservationDataModel } from "../models/app.models";

export const RESERVATION_DATA: ReservationDataModel[] = [
	{
	  "stay": {
		"arrivalDate": "2021-11-18T05:00:00.000Z",
		"departureDate": "2021-11-25T05:00:00.000Z"
	  },
	  "room": {
		"roomSize": "business-suite",
		"roomQuantity": 3
	  },
	  "firstName": "IDM",
	  "lastName": "ENG",
	  "email": "idm.test@idm.com",
	  "phone": "9999999999",
	  "addressStreet": {
		"streetName": "IDM Street",
		"streetNumber": "1234"
	  },
	  "addressLocation": {
		"zipCode": "123456",
		"state": "Arizona",
		"city": "OAKVILLE"
	  },
	  "extras": [
		"extraBreakfast",
		"extraTV",
		"extraWiFi",
		"extraParking",
		"extraBalcony"
	  ],
	  "payment": "cc",
	  "note": "idm lab test",
	  "tags": [
		"hotel",
		"booking",
		"labtest"
	  ],
	  "reminder": true,
	  "newsletter": true,
	  "confirm": false
	},
	{
	  "stay": {
		"arrivalDate": "2021-11-01T04:00:00.000Z",
		"departureDate": "2021-11-04T04:00:00.000Z"
	  },
	  "room": {
		"roomSize": "presidential-suite",
		"roomQuantity": 2
	  },
	  "firstName": "IDM",
	  "lastName": "PM",
	  "email": "idm.op@idm.com",
	  "phone": "123456789",
	  "addressStreet": {
		"streetName": "IDM",
		"streetNumber": "1234"
	  },
	  "addressLocation": {
		"zipCode": "123456",
		"state": "Arkansas",
		"city": "OAK"
	  },
	  "extras": [
		"extraParking",
		"extraBalcony"
	  ],
	  "payment": "cash",
	  "note": "lab test",
	  "tags": [
		"angular",
		"material",
		"labtest"
	  ],
	  "reminder": true,
	  "newsletter": false,
	  "confirm": true
	}
]

export const CONSTANTS = {
  phoneNoRegx:'^[+][0-9]{12}$',
  stateList: [
    {
    "key": "AN",
    "name": "Andaman and Nicobar Islands"
    },
    {
    "key": "AP",
    "name": "Andhra Pradesh"
    },
    {
    "key": "AR",
    "name": "Arunachal Pradesh"
    },
    {
    "key": "AS",
    "name": "Assam"
    },
    {
    "key": "BR",
    "name": "Bihar"
    },
    {
    "key": "CG",
    "name": "Chandigarh"
    },
    {
    "key": "CH",
    "name": "Chhattisgarh"
    },
    {
    "key": "DH",
    "name": "Dadra and Nagar Haveli"
    },
    {
    "key": "DD",
    "name": "Daman and Diu"
    },
    {
    "key": "DL",
    "name": "Delhi"
    },
    {
    "key": "GA",
    "name": "Goa"
    },
    {
    "key": "GJ",
    "name": "Gujarat"
    },
    {
    "key": "HR",
    "name": "Haryana"
    },
    {
    "key": "HP",
    "name": "Himachal Pradesh"
    },
    {
    "key": "JK",
    "name": "Jammu and Kashmir"
    },
    {
    "key": "JH",
    "name": "Jharkhand"
    },
    {
    "key": "KA",
    "name": "Karnataka"
    },
    {
    "key": "KL",
    "name": "Kerala"
    },
    {
    "key": "LD",
    "name": "Lakshadweep"
    },
    {
    "key": "MP",
    "name": "Madhya Pradesh"
    },
    {
    "key": "MH",
    "name": "Maharashtra"
    },
    {
    "key": "MN",
    "name": "Manipur"
    },
    {
    "key": "ML",
    "name": "Meghalaya"
    },
    {
    "key": "MZ",
    "name": "Mizoram"
    },
    {
    "key": "NL",
    "name": "Nagaland"
    },
    {
    "key": "OR",
    "name": "Odisha"
    },
    {
    "key": "PY",
    "name": "Puducherry"
    },
    {
    "key": "PB",
    "name": "Punjab"
    },
    {
    "key": "RJ",
    "name": "Rajasthan"
    },
    {
    "key": "SK",
    "name": "Sikkim"
    },
    {
    "key": "TN",
    "name": "Tamil Nadu"
    },
    {
    "key": "TS",
    "name": "Telangana"
    },
    {
    "key": "TR",
    "name": "Tripura"
    },
    {
    "key": "UP",
    "name": "Uttar Pradesh"
    },
    {
    "key": "UK",
    "name": "Uttarakhand"
    },
    {
    "key": "WB",
    "name": "West Bengal"
    }
    ],
    extraList: [
      "extraBreakfast",
      "extraTV",
      "extraWiFi",
      "extraParking",
      "extraBalcony"
      ],
    tags: [
      "hotel",
      "booking",
      "payment",
      "room",
      "staff",
      "angular"
    ]
}
