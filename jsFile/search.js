let token = localStorage.getItem("token");
if (token) {
  document.getElementById("profile").style.display = "initial";
  document.getElementById("text").innerText = token;
  document.getElementById("text").style.color = "rgb(239, 189, 7)";
  document.getElementById("L_name").style.display = "none";
  document.getElementById("S_name").style.display = "none";
}else {
  window.location.href="login.html"
}

let data = [
  {
    id: 1,
    name: "John Doe",
    city: "Delhi",
    email: "john.doe@example.com",
    jobrole: "Engineer",
    mobileNo: "1234567890",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    name: "Jane Smith",
    city: "Delhi",
    email: "jane.smith@example.com",
    jobrole: "Doctor",
    mobileNo: "9876543210",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
  },
  {
    id: 3,
    name: "Alice Williams",
    city: "Delhi",
    email: "alice.williams@example.com",
    jobrole: "Teacher ",
    mobileNo: "4567891230",
    description:
      "Inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    id: 4,
    name: "David Brown",
    city: "Delhi",
    email: "david.brown@example.com",
    jobrole: "Designer",
    mobileNo: "7891234560",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
  },
  {
    id: 5,
    name: "Emily Johnson",
    city: "Delhi",
    email: "emily.johnson@example.com",
    jobrole: "Architect",
    mobileNo: "2345678901",
    description:
      "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus.",
  },
  {
    id: 6,
    name: "Michael Davis",
    city: "Delhi",
    email: "michael.davis@example.com",
    jobrole: "Writer",
    mobileNo: "8901234567",
    description:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
  },
  {
    id: 7,
    name: "John Doe",
    city: "Delhi",
    email: "john.doe@example.com",
    jobrole: "Nurse",
    mobileNo: "1234567890",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 8,
    name: "Jane Smith",
    city: "Delhi",
    email: "jane.smith@example.com",
    jobrole: "Teacher",
    mobileNo: "9876543210",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
  },
  {
    id: 9,
    name: "Alice Williams",
    city: "Delhi",
    email: "alice.williams@example.com",
    jobrole: "Lawyer",
    mobileNo: "4567891230",
    description:
      "Inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    id: 10,
    name: "David Brown",
    city: "Delhi",
    email: "david.brown@example.com",
    jobrole: "Chef",
    mobileNo: "7891234560",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
  },
  {
    id: 11,
    name: "Emily Johnson",
    city: "Delhi",
    email: "emily.johnson@example.com",
    jobrole: "Musician",
    mobileNo: "2345678901",
    description:
      "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus.",
  },
  {
    id: 12,
    name: "John Doe",
    city: "Delhi",
    email: "john.doe@example.com",
    jobrole: "Engineer",
    mobileNo: "1234567890",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 13,
    name: "Jane Smith",
    city: "Delhi",
    email: "jane.smith@example.com",
    jobrole: "Doctor",
    mobileNo: "9876543210",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
  },
  {
    id: 14,
    name: "Alice Williams",
    city: "Delhi",
    email: "alice.williams@example.com",
    jobrole: "Teacher ",
    mobileNo: "4567891230",
    description:
      "Inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    id: 15,
    name: "David Brown",
    city: "Delhi",
    email: "david.brown@example.com",
    jobrole: "Designer",
    mobileNo: "7891234560",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
  },
  {
    id: 16,
    name: "Emily Johnson",
    city: "Delhi",
    email: "emily.johnson@example.com",
    jobrole: "Architect",
    mobileNo: "2345678901",
    description:
      "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus.",
  },
  {
    id: 17,
    name: "Michael Davis",
    city: "Delhi",
    email: "michael.davis@example.com",
    jobrole: "Writer",
    mobileNo: "8901234567",
    description:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
  },
  {
    id: 18,
    name: "John Doe",
    city: "Delhi",
    email: "john.doe@example.com",
    jobrole: "Nurse",
    mobileNo: "1234567890",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 19,
    name: "Jane Smith",
    city: "Delhi",
    email: "jane.smith@example.com",
    jobrole: "Teacher",
    mobileNo: "9876543210",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
  },
  {
    id: 20,
    name: "Alice Williams",
    city: "Delhi",
    email: "alice.williams@example.com",
    jobrole: "Lawyer",
    mobileNo: "4567891230",
    description:
      "Inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    id: 21,
    name: "David Brown",
    city: "Delhi",
    email: "david.brown@example.com",
    jobrole: "Chef",
    mobileNo: "7891234560",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
  },
  {
    id: 22,
    name: "Emily Johnson",
    city: "Delhi",
    email: "emily.johnson@example.com",
    jobrole: "Musician",
    mobileNo: "2345678901",
    description:
      "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus.",
  },
  {
    id: 23,
    name: "John Doe",
    city: "Mumbai",
    email: "john.doe@example.com",
    jobrole: "Engineer",
    mobileNo: "1234567890",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 24,
    name: "Jane Smith",
    city: "Mumbai",
    email: "jane.smith@example.com",
    jobrole: "Doctor",
    mobileNo: "9876543210",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
  },
  {
    id: 25,
    name: "Alice Williams",
    city: "Mumbai",
    email: "alice.williams@example.com",
    jobrole: "Teacher ",
    mobileNo: "4567891230",
    description:
      "Inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    id: 26,
    name: "David Brown",
    city: "Mumbai",
    email: "david.brown@example.com",
    jobrole: "Designer",
    mobileNo: "7891234560",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
  },
  {
    id: 27,
    name: "Emily Johnson",
    city: "Mumbai",
    email: "emily.johnson@example.com",
    jobrole: "Architect",
    mobileNo: "2345678901",
    description:
      "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus.",
  },
  {
    id: 28,
    name: "Michael Davis",
    city: "Mumbai",
    email: "michael.davis@example.com",
    jobrole: "Writer",
    mobileNo: "8901234567",
    description:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
  },
  {
    id: 29,
    name: "John Doe",
    city: "Mumbai",
    email: "john.doe@example.com",
    jobrole: "Nurse",
    mobileNo: "1234567890",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 30,
    name: "Jane Smith",
    city: "Mumbai",
    email: "jane.smith@example.com",
    jobrole: "Teacher",
    mobileNo: "9876543210",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
  },
  {
    id: 31,
    name: "Alice Williams",
    city: "Mumbai",
    email: "alice.williams@example.com",
    jobrole: "Lawyer",
    mobileNo: "4567891230",
    description:
      "Inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    id: 32,
    name: "David Brown",
    city: "Mumbai",
    email: "david.brown@example.com",
    jobrole: "Chef",
    mobileNo: "7891234560",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
  },
  {
    id: 33,
    name: "Emily Johnson",
    city: "Mumbai",
    email: "emily.johnson@example.com",
    jobrole: "Musician",
    mobileNo: "2345678901",
    description:
      "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus.",
  },
  {
    id: 34,
    name: "John Doe",
    city: "Mumbai",
    email: "john.doe@example.com",
    jobrole: "Engineer",
    mobileNo: "1234567890",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 35,
    name: "Jane Smith",
    city: "Mumbai",
    email: "jane.smith@example.com",
    jobrole: "Doctor",
    mobileNo: "9876543210",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
  },
  {
    id: 36,
    name: "Alice Williams",
    city: "Mumbai",
    email: "alice.williams@example.com",
    jobrole: "Teacher ",
    mobileNo: "4567891230",
    description:
      "Inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    id: 37,
    name: "David Brown",
    city: "Mumbai",
    email: "david.brown@example.com",
    jobrole: "Designer",
    mobileNo: "7891234560",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
  },
  {
    id: 38,
    name: "Emily Johnson",
    city: "Mumbai",
    email: "emily.johnson@example.com",
    jobrole: "Architect",
    mobileNo: "2345678901",
    description:
      "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus.",
  },
  {
    id: 39,
    name: "Michael Davis",
    city: "Mumbai",
    email: "michael.davis@example.com",
    jobrole: "Writer",
    mobileNo: "8901234567",
    description:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
  },
  {
    id: 40,
    name: "John Doe",
    city: "Mumbai",
    email: "john.doe@example.com",
    jobrole: "Nurse",
    mobileNo: "1234567890",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 41,
    name: "Jane Smith",
    city: "Mumbai",
    email: "jane.smith@example.com",
    jobrole: "Teacher",
    mobileNo: "9876543210",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
  },
  {
    id: 42,
    name: "Alice Williams",
    city: "Mumbai",
    email: "alice.williams@example.com",
    jobrole: "Lawyer",
    mobileNo: "4567891230",
    description:
      "Inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    id: 43,
    name: "David Brown",
    city: "Mumbai",
    email: "david.brown@example.com",
    jobrole: "Chef",
    mobileNo: "7891234560",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
  },
  {
    id: 44,
    name: "Emily Johnson",
    city: "Mumbai",
    email: "emily.johnson@example.com",
    jobrole: "Musician",
    mobileNo: "2345678901",
    description:
      "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus.",
  },
  {
    id: 45,
    name: "John Doe",
    city: "Kolkata",
    email: "john.doe@example.com",
    jobrole: "Engineer",
    mobileNo: "1234567890",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 46,
    name: "Jane Smith",
    city: "Kolkata",
    email: "jane.smith@example.com",
    jobrole: "Doctor",
    mobileNo: "9876543210",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
  },
  {
    id: 47,
    name: "Alice Williams",
    city: "Kolkata",
    email: "alice.williams@example.com",
    jobrole: "Teacher ",
    mobileNo: "4567891230",
    description:
      "Inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    id: 48,
    name: "David Brown",
    city: "Kolkata",
    email: "david.brown@example.com",
    jobrole: "Designer",
    mobileNo: "7891234560",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
  },
  {
    id: 49,
    name: "Emily Johnson",
    city: "Kolkata",
    email: "emily.johnson@example.com",
    jobrole: "Architect",
    mobileNo: "2345678901",
    description:
      "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus.",
  },
  {
    id: 50,
    name: "Michael Davis",
    city: "Kolkata",
    email: "michael.davis@example.com",
    jobrole: "Writer",
    mobileNo: "8901234567",
    description:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
  },
  {
    id: 51,
    name: "John Doe",
    city: "Kolkata",
    email: "john.doe@example.com",
    jobrole: "Nurse",
    mobileNo: "1234567890",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 52,
    name: "Jane Smith",
    city: "Kolkata",
    email: "jane.smith@example.com",
    jobrole: "Teacher",
    mobileNo: "9876543210",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
  },
  {
    id: 53,
    name: "Alice Williams",
    city: "Kolkata",
    email: "alice.williams@example.com",
    jobrole: "Lawyer",
    mobileNo: "4567891230",
    description:
      "Inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    id: 54,
    name: "David Brown",
    city: "Kolkata",
    email: "david.brown@example.com",
    jobrole: "Chef",
    mobileNo: "7891234560",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
  },
  {
    id: 55,
    name: "Emily Johnson",
    city: "Kolkata",
    email: "emily.johnson@example.com",
    jobrole: "Musician",
    mobileNo: "2345678901",
    description:
      "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus.",
  },
  {
    id: 56,
    name: "John Doe",
    city: "Kolkata",
    email: "john.doe@example.com",
    jobrole: "Engineer",
    mobileNo: "1234567890",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 57,
    name: "Jane Smith",
    city: "Kolkata",
    email: "jane.smith@example.com",
    jobrole: "Doctor",
    mobileNo: "9876543210",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
  },
  {
    id: 58,
    name: "Alice Williams",
    city: "Kolkata",
    email: "alice.williams@example.com",
    jobrole: "Teacher ",
    mobileNo: "4567891230",
    description:
      "Inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    id: 59,
    name: "David Brown",
    city: "Kolkata",
    email: "david.brown@example.com",
    jobrole: "Designer",
    mobileNo: "7891234560",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
  },
  {
    id: 60,
    name: "Emily Johnson",
    city: "Kolkata",
    email: "emily.johnson@example.com",
    jobrole: "Architect",
    mobileNo: "2345678901",
    description:
      "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus.",
  },
  {
    id: 61,
    name: "Michael Davis",
    city: "Kolkata",
    email: "michael.davis@example.com",
    jobrole: "Writer",
    mobileNo: "8901234567",
    description:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
  },
  {
    id: 62,
    name: "John Doe",
    city: "Kolkata",
    email: "john.doe@example.com",
    jobrole: "Nurse",
    mobileNo: "1234567890",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 63,
    name: "Jane Smith",
    city: "Kolkata",
    email: "jane.smith@example.com",
    jobrole: "Teacher",
    mobileNo: "9876543210",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
  },
  {
    id: 64,
    name: "Alice Williams",
    city: "Kolkata",
    email: "alice.williams@example.com",
    jobrole: "Lawyer",
    mobileNo: "4567891230",
    description:
      "Inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    id: 65,
    name: "David Brown",
    city: "Kolkata",
    email: "david.brown@example.com",
    jobrole: "Chef",
    mobileNo: "7891234560",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
  },
  {
    id: 66,
    name: "Emily Johnson",
    city: "Kolkata",
    email: "emily.johnson@example.com",
    jobrole: "Musician",
    mobileNo: "2345678901",
    description:
      "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus.",
  },
  {
    id: 67,
    name: "John Doe",
    city: "Chennai",
    email: "john.doe@example.com",
    jobrole: "Engineer",
    mobileNo: "1234567890",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 68,
    name: "Jane Smith",
    city: "Chennai",
    email: "jane.smith@example.com",
    jobrole: "Doctor",
    mobileNo: "9876543210",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
  },
  {
    id: 69,
    name: "Alice Williams",
    city: "Chennai",
    email: "alice.williams@example.com",
    jobrole: "Teacher ",
    mobileNo: "4567891230",
    description:
      "Inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    id: 70,
    name: "David Brown",
    city: "Chennai",
    email: "david.brown@example.com",
    jobrole: "Designer",
    mobileNo: "7891234560",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
  },
  {
    id: 71,
    name: "Emily Johnson",
    city: "Chennai",
    email: "emily.johnson@example.com",
    jobrole: "Architect",
    mobileNo: "2345678901",
    description:
      "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus.",
  },
  {
    id: 72,
    name: "Michael Davis",
    city: "Chennai",
    email: "michael.davis@example.com",
    jobrole: "Writer",
    mobileNo: "8901234567",
    description:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
  },
  {
    id: 73,
    name: "John Doe",
    city: "Chennai",
    email: "john.doe@example.com",
    jobrole: "Nurse",
    mobileNo: "1234567890",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 74,
    name: "Jane Smith",
    city: "Chennai",
    email: "jane.smith@example.com",
    jobrole: "Teacher",
    mobileNo: "9876543210",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
  },
  {
    id: 75,
    name: "Alice Williams",
    city: "Chennai",
    email: "alice.williams@example.com",
    jobrole: "Lawyer",
    mobileNo: "4567891230",
    description:
      "Inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    id: 76,
    name: "David Brown",
    city: "Chennai",
    email: "david.brown@example.com",
    jobrole: "Chef",
    mobileNo: "7891234560",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
  },
  {
    id: 77,
    name: "Emily Johnson",
    city: "Chennai",
    email: "emily.johnson@example.com",
    jobrole: "Musician",
    mobileNo: "2345678901",
    description:
      "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus.",
  },
  {
    id: 78,
    name: "John Doe",
    city: "Chennai",
    email: "john.doe@example.com",
    jobrole: "Engineer",
    mobileNo: "1234567890",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 79,
    name: "Jane Smith",
    city: "Chennai",
    email: "jane.smith@example.com",
    jobrole: "Doctor",
    mobileNo: "9876543210",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
  },
  {
    id: 80,
    name: "Alice Williams",
    city: "Chennai",
    email: "alice.williams@example.com",
    jobrole: "Teacher ",
    mobileNo: "4567891230",
    description:
      "Inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    id: 81,
    name: "David Brown",
    city: "Chennai",
    email: "david.brown@example.com",
    jobrole: "Designer",
    mobileNo: "7891234560",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
  },
  {
    id: 82,
    name: "Emily Johnson",
    city: "Chennai",
    email: "emily.johnson@example.com",
    jobrole: "Architect",
    mobileNo: "2345678901",
    description:
      "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus.",
  },
  {
    id: 83,
    name: "Michael Davis",
    city: "Chennai",
    email: "michael.davis@example.com",
    jobrole: "Writer",
    mobileNo: "8901234567",
    description:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
  },
  {
    id: 84,
    name: "John Doe",
    city: "Chennai",
    email: "john.doe@example.com",
    jobrole: "Nurse",
    mobileNo: "1234567890",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 85,
    name: "Jane Smith",
    city: "Chennai",
    email: "jane.smith@example.com",
    jobrole: "Teacher",
    mobileNo: "9876543210",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
  },
  {
    id: 86,
    name: "Alice Williams",
    city: "Chennai",
    email: "alice.williams@example.com",
    jobrole: "Lawyer",
    mobileNo: "4567891230",
    description:
      "Inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    id: 87,
    name: "David Brown",
    city: "Chennai",
    email: "david.brown@example.com",
    jobrole: "Chef",
    mobileNo: "7891234560",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
  },
  {
    id: 88,
    name: "Emily Johnson",
    city: "Chennai",
    email: "emily.johnson@example.com",
    jobrole: "Musician",
    mobileNo: "2345678901",
    description:
      "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus.",
  },
  {
    id: 89,
    name: "John Doe",
    city: "Bengaluru",
    email: "john.doe@example.com",
    jobrole: "Engineer",
    mobileNo: "1234567890",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 90,
    name: "Jane Smith",
    city: "Bengaluru",
    email: "jane.smith@example.com",
    jobrole: "Doctor",
    mobileNo: "9876543210",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
  },
  {
    id: 91,
    name: "Alice Williams",
    city: "Bengaluru",
    email: "alice.williams@example.com",
    jobrole: "Teacher ",
    mobileNo: "4567891230",
    description:
      "Inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    id: 92,
    name: "David Brown",
    city: "Bengaluru",
    email: "david.brown@example.com",
    jobrole: "Designer",
    mobileNo: "7891234560",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
  },
  {
    id: 93,
    name: "Emily Johnson",
    city: "Bengaluru",
    email: "emily.johnson@example.com",
    jobrole: "Architect",
    mobileNo: "2345678901",
    description:
      "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus.",
  },
  {
    id: 94,
    name: "Michael Davis",
    city: "Bengaluru",
    email: "michael.davis@example.com",
    jobrole: "Writer",
    mobileNo: "8901234567",
    description:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
  },
  {
    id: 95,
    name: "John Doe",
    city: "Bengaluru",
    email: "john.doe@example.com",
    jobrole: "Nurse",
    mobileNo: "1234567890",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 96,
    name: "Jane Smith",
    city: "Bengaluru",
    email: "jane.smith@example.com",
    jobrole: "Teacher",
    mobileNo: "9876543210",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
  },
  {
    id: 97,
    name: "Alice Williams",
    city: "Bengaluru",
    email: "alice.williams@example.com",
    jobrole: "Lawyer",
    mobileNo: "4567891230",
    description:
      "Inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    id: 98,
    name: "David Brown",
    city: "Bengaluru",
    email: "david.brown@example.com",
    jobrole: "Chef",
    mobileNo: "7891234560",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
  },
  {
    id: 99,
    name: "Emily Johnson",
    city: "Bengaluru",
    email: "emily.johnson@example.com",
    jobrole: "Musician",
    mobileNo: "2345678901",
    description:
      "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus.",
  },
  {
    id: 100,
    name: "John Doe",
    city: "Bengaluru",
    email: "john.doe@example.com",
    jobrole: "Engineer",
    mobileNo: "1234567890",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 101,
    name: "Jane Smith",
    city: "Bengaluru",
    email: "jane.smith@example.com",
    jobrole: "Doctor",
    mobileNo: "9876543210",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
  },
  {
    id: 102,
    name: "Alice Williams",
    city: "Bengaluru",
    email: "alice.williams@example.com",
    jobrole: "Teacher ",
    mobileNo: "4567891230",
    description:
      "Inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    id: 103,
    name: "David Brown",
    city: "Bengaluru",
    email: "david.brown@example.com",
    jobrole: "Designer",
    mobileNo: "7891234560",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
  },
  {
    id: 104,
    name: "Emily Johnson",
    city: "Bengaluru",
    email: "emily.johnson@example.com",
    jobrole: "Architect",
    mobileNo: "2345678901",
    description:
      "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus.",
  },
  {
    id: 105,
    name: "Michael Davis",
    city: "Bengaluru",
    email: "michael.davis@example.com",
    jobrole: "Writer",
    mobileNo: "8901234567",
    description:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
  },
  {
    id: 106,
    name: "John Doe",
    city: "Bengaluru",
    email: "john.doe@example.com",
    jobrole: "Nurse",
    mobileNo: "1234567890",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 107,
    name: "Jane Smith",
    city: "Bengaluru",
    email: "jane.smith@example.com",
    jobrole: "Teacher",
    mobileNo: "9876543210",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
  },
  {
    id: 108,
    name: "Alice Williams",
    city: "Bengaluru",
    email: "alice.williams@example.com",
    jobrole: "Lawyer",
    mobileNo: "4567891230",
    description:
      "Inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    id: 109,
    name: "David Brown",
    city: "Bengaluru",
    email: "david.brown@example.com",
    jobrole: "Chef",
    mobileNo: "7891234560",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
  },
  {
    id: 110,
    name: "Emily Johnson",
    city: "Bengaluru",
    email: "emily.johnson@example.com",
    jobrole: "Musician",
    mobileNo: "2345678901",
    description:
      "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus.",
  },
  {
    id: 111,
    name: "John Doe",
    city: "Hyderabad",
    email: "john.doe@example.com",
    jobrole: "Engineer",
    mobileNo: "1234567890",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 112,
    name: "Jane Smith",
    city: "Hyderabad",
    email: "jane.smith@example.com",
    jobrole: "Doctor",
    mobileNo: "9876543210",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
  },
  {
    id: 113,
    name: "Alice Williams",
    city: "Hyderabad",
    email: "alice.williams@example.com",
    jobrole: "Teacher ",
    mobileNo: "4567891230",
    description:
      "Inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    id: 114,
    name: "David Brown",
    city: "Hyderabad",
    email: "david.brown@example.com",
    jobrole: "Designer",
    mobileNo: "7891234560",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
  },
  {
    id: 115,
    name: "Emily Johnson",
    city: "Hyderabad",
    email: "emily.johnson@example.com",
    jobrole: "Architect",
    mobileNo: "2345678901",
    description:
      "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus.",
  },
  {
    id: 116,
    name: "Michael Davis",
    city: "Hyderabad",
    email: "michael.davis@example.com",
    jobrole: "Writer",
    mobileNo: "8901234567",
    description:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
  },
  {
    id: 117,
    name: "John Doe",
    city: "Hyderabad",
    email: "john.doe@example.com",
    jobrole: "Nurse",
    mobileNo: "1234567890",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 118,
    name: "Jane Smith",
    city: "Hyderabad",
    email: "jane.smith@example.com",
    jobrole: "Teacher",
    mobileNo: "9876543210",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
  },
  {
    id: 119,
    name: "Alice Williams",
    city: "Hyderabad",
    email: "alice.williams@example.com",
    jobrole: "Lawyer",
    mobileNo: "4567891230",
    description:
      "Inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    id: 120,
    name: "David Brown",
    city: "Hyderabad",
    email: "david.brown@example.com",
    jobrole: "Chef",
    mobileNo: "7891234560",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
  },
  {
    id: 121,
    name: "Emily Johnson",
    city: "Hyderabad",
    email: "emily.johnson@example.com",
    jobrole: "Musician",
    mobileNo: "2345678901",
    description:
      "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus.",
  },
  {
    id: 123,
    name: "John Doe",
    city: "Hyderabad",
    email: "john.doe@example.com",
    jobrole: "Engineer",
    mobileNo: "1234567890",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 124,
    name: "Jane Smith",
    city: "Hyderabad",
    email: "jane.smith@example.com",
    jobrole: "Doctor",
    mobileNo: "9876543210",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
  },
  {
    id: 125,
    name: "Alice Williams",
    city: "Hyderabad",
    email: "alice.williams@example.com",
    jobrole: "Teacher ",
    mobileNo: "4567891230",
    description:
      "Inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    id: 126,
    name: "David Brown",
    city: "Hyderabad",
    email: "david.brown@example.com",
    jobrole: "Designer",
    mobileNo: "7891234560",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
  },
  {
    id: 127,
    name: "Emily Johnson",
    city: "Hyderabad",
    email: "emily.johnson@example.com",
    jobrole: "Architect",
    mobileNo: "2345678901",
    description:
      "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus.",
  },
  {
    id: 128,
    name: "Michael Davis",
    city: "Hyderabad",
    email: "michael.davis@example.com",
    jobrole: "Writer",
    mobileNo: "8901234567",
    description:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
  },
  {
    id: 129,
    name: "John Doe",
    city: "Hyderabad",
    email: "john.doe@example.com",
    jobrole: "Nurse",
    mobileNo: "1234567890",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 130,
    name: "Jane Smith",
    city: "Hyderabad",
    email: "jane.smith@example.com",
    jobrole: "Teacher",
    mobileNo: "9876543210",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
  },
  {
    id: 131,
    name: "Alice Williams",
    city: "Hyderabad",
    email: "alice.williams@example.com",
    jobrole: "Lawyer",
    mobileNo: "4567891230",
    description:
      "Inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    id: 132,
    name: "David Brown",
    city: "Hyderabad",
    email: "david.brown@example.com",
    jobrole: "Chef",
    mobileNo: "7891234560",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
  },
  {
    id: 133,
    name: "Emily Johnson",
    city: "Hyderabad",
    email: "emily.johnson@example.com",
    jobrole: "Musician",
    mobileNo: "2345678901",
    description:
      "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus.",
  },
  {
    id: 134,
    name: "John Doe",
    city: "Ahmedabad",
    email: "john.doe@example.com",
    jobrole: "Engineer",
    mobileNo: "1234567890",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 135,
    name: "Jane Smith",
    city: "Ahmedabad",
    email: "jane.smith@example.com",
    jobrole: "Doctor",
    mobileNo: "9876543210",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
  },
  {
    id: 136,
    name: "Alice Williams",
    city: "Ahmedabad",
    email: "alice.williams@example.com",
    jobrole: "Teacher ",
    mobileNo: "4567891230",
    description:
      "Inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    id: 137,
    name: "David Brown",
    city: "Ahmedabad",
    email: "david.brown@example.com",
    jobrole: "Designer",
    mobileNo: "7891234560",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
  },
  {
    id: 138,
    name: "Emily Johnson",
    city: "Ahmedabad",
    email: "emily.johnson@example.com",
    jobrole: "Architect",
    mobileNo: "2345678901",
    description:
      "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus.",
  },
  {
    id: 139,
    name: "Michael Davis",
    city: "Ahmedabad",
    email: "michael.davis@example.com",
    jobrole: "Writer",
    mobileNo: "8901234567",
    description:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
  },
  {
    id: 140,
    name: "John Doe",
    city: "Ahmedabad",
    email: "john.doe@example.com",
    jobrole: "Nurse",
    mobileNo: "1234567890",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 141,
    name: "Jane Smith",
    city: "Ahmedabad",
    email: "jane.smith@example.com",
    jobrole: "Teacher",
    mobileNo: "9876543210",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
  },
  {
    id: 142,
    name: "Alice Williams",
    city: "Ahmedabad",
    email: "alice.williams@example.com",
    jobrole: "Lawyer",
    mobileNo: "4567891230",
    description:
      "Inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    id: 143,
    name: "David Brown",
    city: "Ahmedabad",
    email: "david.brown@example.com",
    jobrole: "Chef",
    mobileNo: "7891234560",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
  },
  {
    id: 144,
    name: "Emily Johnson",
    city: "Ahmedabad",
    email: "emily.johnson@example.com",
    jobrole: "Musician",
    mobileNo: "2345678901",
    description:
      "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus.",
  },
  {
    id: 145,
    name: "John Doe",
    city: "Ahmedabad",
    email: "john.doe@example.com",
    jobrole: "Engineer",
    mobileNo: "1234567890",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 146,
    name: "Jane Smith",
    city: "Ahmedabad",
    email: "jane.smith@example.com",
    jobrole: "Doctor",
    mobileNo: "9876543210",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
  },
  {
    id: 147,
    name: "Alice Williams",
    city: "Ahmedabad",
    email: "alice.williams@example.com",
    jobrole: "Teacher ",
    mobileNo: "4567891230",
    description:
      "Inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    id: 148,
    name: "David Brown",
    city: "Ahmedabad",
    email: "david.brown@example.com",
    jobrole: "Designer",
    mobileNo: "7891234560",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
  },
  {
    id: 149,
    name: "Emily Johnson",
    city: "Ahmedabad",
    email: "emily.johnson@example.com",
    jobrole: "Architect",
    mobileNo: "2345678901",
    description:
      "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus.",
  },
  {
    id: 150,
    name: "Michael Davis",
    city: "Ahmedabad",
    email: "michael.davis@example.com",
    jobrole: "Writer",
    mobileNo: "8901234567",
    description:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
  },
  {
    id: 151,
    name: "John Doe",
    city: "Ahmedabad",
    email: "john.doe@example.com",
    jobrole: "Nurse",
    mobileNo: "1234567890",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 152,
    name: "Jane Smith",
    city: "Ahmedabad",
    email: "jane.smith@example.com",
    jobrole: "Teacher",
    mobileNo: "9876543210",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
  },
  {
    id: 153,
    name: "Alice Williams",
    city: "Ahmedabad",
    email: "alice.williams@example.com",
    jobrole: "Lawyer",
    mobileNo: "4567891230",
    description:
      "Inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    id: 154,
    name: "David Brown",
    city: "Ahmedabad",
    email: "david.brown@example.com",
    jobrole: "Chef",
    mobileNo: "7891234560",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
  },
  {
    id: 155,
    name: "Emily Johnson",
    city: "Ahmedabad",
    email: "emily.johnson@example.com",
    jobrole: "Musician",
    mobileNo: "2345678901",
    description:
      "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus.",
  },
  {
    id: 156,
    name: "John Doe",
    city: "Pune",
    email: "john.doe@example.com",
    jobrole: "Engineer",
    mobileNo: "1234567890",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 157,
    name: "Jane Smith",
    city: "Pune",
    email: "jane.smith@example.com",
    jobrole: "Doctor",
    mobileNo: "9876543210",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
  },
  {
    id: 158,
    name: "Alice Williams",
    city: "Pune",
    email: "alice.williams@example.com",
    jobrole: "Teacher ",
    mobileNo: "4567891230",
    description:
      "Inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    id: 159,
    name: "David Brown",
    city: "Pune",
    email: "david.brown@example.com",
    jobrole: "Designer",
    mobileNo: "7891234560",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
  },
  {
    id: 160,
    name: "Emily Johnson",
    city: "Pune",
    email: "emily.johnson@example.com",
    jobrole: "Architect",
    mobileNo: "2345678901",
    description:
      "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus.",
  },
  {
    id: 161,
    name: "Michael Davis",
    city: "Pune",
    email: "michael.davis@example.com",
    jobrole: "Writer",
    mobileNo: "8901234567",
    description:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
  },
  {
    id: 161,
    name: "John Doe",
    city: "Pune",
    email: "john.doe@example.com",
    jobrole: "Nurse",
    mobileNo: "1234567890",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 162,
    name: "Jane Smith",
    city: "Pune",
    email: "jane.smith@example.com",
    jobrole: "Teacher",
    mobileNo: "9876543210",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
  },
  {
    id: 163,
    name: "Alice Williams",
    city: "Pune",
    email: "alice.williams@example.com",
    jobrole: "Lawyer",
    mobileNo: "4567891230",
    description:
      "Inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    id: 164,
    name: "David Brown",
    city: "Pune",
    email: "david.brown@example.com",
    jobrole: "Chef",
    mobileNo: "7891234560",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
  },
  {
    id: 165,
    name: "Emily Johnson",
    city: "Pune",
    email: "emily.johnson@example.com",
    jobrole: "Musician",
    mobileNo: "2345678901",
    description:
      "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus.",
  },
  {
    id: 166,
    name: "John Doe",
    city: "Pune",
    email: "john.doe@example.com",
    jobrole: "Engineer",
    mobileNo: "1234567890",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 167,
    name: "Jane Smith",
    city: "Pune",
    email: "jane.smith@example.com",
    jobrole: "Doctor",
    mobileNo: "9876543210",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
  },
  {
    id: 168,
    name: "Alice Williams",
    city: "Pune",
    email: "alice.williams@example.com",
    jobrole: "Teacher ",
    mobileNo: "4567891230",
    description:
      "Inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    id: 169,
    name: "David Brown",
    city: "Pune",
    email: "david.brown@example.com",
    jobrole: "Designer",
    mobileNo: "7891234560",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
  },
  {
    id: 170,
    name: "Emily Johnson",
    city: "Pune",
    email: "emily.johnson@example.com",
    jobrole: "Architect",
    mobileNo: "2345678901",
    description:
      "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus.",
  },
  {
    id: 171,
    name: "Michael Davis",
    city: "Pune",
    email: "michael.davis@example.com",
    jobrole: "Writer",
    mobileNo: "8901234567",
    description:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
  },
  {
    id: 172,
    name: "John Doe",
    city: "Pune",
    email: "john.doe@example.com",
    jobrole: "Nurse",
    mobileNo: "1234567890",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 173,
    name: "Jane Smith",
    city: "Pune",
    email: "jane.smith@example.com",
    jobrole: "Teacher",
    mobileNo: "9876543210",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
  },
  {
    id: 174,
    name: "Alice Williams",
    city: "Pune",
    email: "alice.williams@example.com",
    jobrole: "Lawyer",
    mobileNo: "4567891230",
    description:
      "Inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    id: 175,
    name: "David Brown",
    city: "Pune",
    email: "david.brown@example.com",
    jobrole: "Chef",
    mobileNo: "7891234560",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
  },
  {
    id: 176,
    name: "Emily Johnson",
    city: "Pune",
    email: "emily.johnson@example.com",
    jobrole: "Musician",
    mobileNo: "2345678901",
    description:
      "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus.",
  },
  {
    id: 177,
    name: "John Doe",
    city: "Jaipur",
    email: "john.doe@example.com",
    jobrole: "Engineer",
    mobileNo: "1234567890",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 178,
    name: "Jane Smith",
    city: "Jaipur",
    email: "jane.smith@example.com",
    jobrole: "Doctor",
    mobileNo: "9876543210",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
  },
  {
    id: 179,
    name: "Alice Williams",
    city: "Jaipur",
    email: "alice.williams@example.com",
    jobrole: "Teacher ",
    mobileNo: "4567891230",
    description:
      "Inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    id: 180,
    name: "David Brown",
    city: "Jaipur",
    email: "david.brown@example.com",
    jobrole: "Designer",
    mobileNo: "7891234560",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
  },
  {
    id: 181,
    name: "Emily Johnson",
    city: "Jaipur",
    email: "emily.johnson@example.com",
    jobrole: "Architect",
    mobileNo: "2345678901",
    description:
      "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus.",
  },
  {
    id: 182,
    name: "Michael Davis",
    city: "Jaipur",
    email: "michael.davis@example.com",
    jobrole: "Writer",
    mobileNo: "8901234567",
    description:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
  },
  {
    id: 183,
    name: "John Doe",
    city: "Jaipur",
    email: "john.doe@example.com",
    jobrole: "Nurse",
    mobileNo: "1234567890",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 184,
    name: "Jane Smith",
    city: "Jaipur",
    email: "jane.smith@example.com",
    jobrole: "Teacher",
    mobileNo: "9876543210",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
  },
  {
    id: 185,
    name: "Alice Williams",
    city: "Jaipur",
    email: "alice.williams@example.com",
    jobrole: "Lawyer",
    mobileNo: "4567891230",
    description:
      "Inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    id: 186,
    name: "David Brown",
    city: "Jaipur",
    email: "david.brown@example.com",
    jobrole: "Chef",
    mobileNo: "7891234560",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
  },
  {
    id: 187,
    name: "Emily Johnson",
    city: "Jaipur",
    email: "emily.johnson@example.com",
    jobrole: "Musician",
    mobileNo: "2345678901",
    description:
      "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus.",
  },
  {
    id: 188,
    name: "John Doe",
    city: "Jaipur",
    email: "john.doe@example.com",
    jobrole: "Engineer",
    mobileNo: "1234567890",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 189,
    name: "Jane Smith",
    city: "Jaipur",
    email: "jane.smith@example.com",
    jobrole: "Doctor",
    mobileNo: "9876543210",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
  },
  {
    id: 190,
    name: "Alice Williams",
    city: "Jaipur",
    email: "alice.williams@example.com",
    jobrole: "Teacher ",
    mobileNo: "4567891230",
    description:
      "Inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    id: 191,
    name: "David Brown",
    city: "Jaipur",
    email: "david.brown@example.com",
    jobrole: "Designer",
    mobileNo: "7891234560",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
  },
  {
    id: 192,
    name: "Emily Johnson",
    city: "Jaipur",
    email: "emily.johnson@example.com",
    jobrole: "Architect",
    mobileNo: "2345678901",
    description:
      "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus.",
  },
  {
    id: 193,
    name: "Michael Davis",
    city: "Jaipur",
    email: "michael.davis@example.com",
    jobrole: "Writer",
    mobileNo: "8901234567",
    description:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
  },
  {
    id: 194,
    name: "John Doe",
    city: "Jaipur",
    email: "john.doe@example.com",
    jobrole: "Nurse",
    mobileNo: "1234567890",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 195,
    name: "Jane Smith",
    city: "Jaipur",
    email: "jane.smith@example.com",
    jobrole: "Teacher",
    mobileNo: "9876543210",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
  },
  {
    id: 196,
    name: "Alice Williams",
    city: "Jaipur",
    email: "alice.williams@example.com",
    jobrole: "Lawyer",
    mobileNo: "4567891230",
    description:
      "Inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    id: 197,
    name: "David Brown",
    city: "Jaipur",
    email: "david.brown@example.com",
    jobrole: "Chef",
    mobileNo: "7891234560",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
  },
  {
    id: 198,
    name: "Emily Johnson",
    city: "Jaipur",
    email: "emily.johnson@example.com",
    jobrole: "Musician",
    mobileNo: "2345678901",
    description:
      "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus.",
  },
];

let search = document.getElementById("find");
search.addEventListener("click", Search);

function Search() {
  let key = document.getElementById("keyword").value;
  let city = document.getElementById("city").value;
  let filter = [];
  if (key && city) {
    filter = [];
    filter = data.filter((a) => a.city == city && a.jobrole == key);
   display(filter);
  } else if (key) {
    filter = [];
    filter = data.filter((a) => a.jobrole == key);
    display(filter);
  } else if (city) {
    filter = [];
    filter = data.filter((a) => a.city == city);
    display(filter);
  }else{
    display(data)
  }
}
window.onload=OnLoadfunc;
function OnLoadfunc(){
  let {key,city}=JSON.parse(localStorage.getItem("search"));
  if (key && city) {
    filter = [];
    filter = data.filter((a) => a.city == city && a.jobrole == key);
   display(filter);
  } else if (key) {
    filter = [];
    filter = data.filter((a) => a.jobrole == key);
    display(filter);
  } else if (city) {
    filter = [];
    filter = data.filter((a) => a.city == city);
    display(filter);
  }else{
    display(data)
  }
}
function display(Data) {
  let User = JSON.parse(localStorage.getItem("search")) || [];
  let parent = document.getElementById("student_data");
  parent.innerHTML = null;
if(Data.length==0){
  let warning=document.createElement("h2");
  warning.setAttribute("id","warning");
  warning.innerText="Data Not found !";
  parent.append(warning);
  return ;
}
  Data.map((el) => {
    let cantaner = document.createElement("div");
    cantaner.setAttribute("id","cantaner")
    let left = document.createElement("div");
    left.setAttribute("id","left")
    let right = document.createElement("div");
    right.setAttribute("id","right")
    let img = document.createElement("img");
    img.src = "https://imgv3.fotor.com/images/blog-cover-image/10-profile-picture-ideas-to-make-you-stand-out.jpg";
    let name = document.createElement("h2");
    name.innerText = `Name: ${el.name}`;
    let email = document.createElement("h3");
    email.innerText = `Email: ${el.email}`;
    let job = document.createElement("h2");
    job.innerText = `Title: ${el.jobrole}`;
    let city = document.createElement("h3");
    city.innerText = `City: ${el.city}`;
    let mobileNo = document.createElement("h3");
    mobileNo.innerText = `MobileNo: ${el.mobileNo}`;
    let description = document.createElement("p");
    description.innerText = `Profile: ${el.description}`;
    let button=document.createElement("button");
    button.innerText="HIRE"
    left.append(img,name);
    right.append(job,email,city,mobileNo,description,button);
    cantaner.append(left,right);
    parent.append(cantaner)
  });
}
