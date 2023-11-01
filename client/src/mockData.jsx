const mockUsers = [
  {
    id: 1,
    firstName: "Veronica",
    lastName: "Bobadilla",
    username: "verobobadilla",
    email: "vero_bobadilla@yahoo.com",
    password: "veronica",
  },
  {
    id: 2,
    firstName: "Mauricio",
    lastName: "De La Paz",
    username: "mauriciodlp",
    email: "mauriciodlp@gmail.com",
    password: "mauricio",
  },
  {
    id: 3,
    firstName: "Damaris",
    lastName: "De La Paz",
    username: "damarisdlp",
    email: "damarisdlp@gmail.com",
    password: "damarisdlp",
  },
];

const mockAppointments = [
  {
    id: 1,
    userId: 1, // Reference to the user with id 1 (Veronica Bobadilla)
    location: "Zona Rio",
    date: "11-15-2023",
    time: "10:20 AM",
    service: "Clinical Pedicure",
    specialist: "Person 1",
  },
  {
    id: 2,
    userId: 1, // Reference to the user with id 1 (Veronica Bobadilla)
    location: "Zona Rio",
    date: "11-20-2023",
    time: "2:20 PM",
    service: "Toenail Fungus",
    specialist: "Person 2",
  },
  {
    id: 3,
    userId: 2, // Reference to the user with id 2 (Mauricio De La Paz)
    location: "5 y 10",
    date: "11-18-2023",
    time: "11:40 AM",
    service: "Granulotomy",
    specialist: "Person 5",
  },
  // Add more appointment data as needed
];

export { mockUsers, mockAppointments };
