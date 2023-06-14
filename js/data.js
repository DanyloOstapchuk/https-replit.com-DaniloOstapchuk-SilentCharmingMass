const user = {
  name: "Данило",
  surname: "Остапчук",
  userPhoto: "my photo.jpg",
  qrQode: "qr-code.svg",
  dreams: [
    { src: "my car.jpg", alt: "Авто моєї мрії" },
    { src: "my house.jpg", alt: "Домівка моєї мрії" },
    { src: "my computer.jpg", alt: "робоче місце моєї мрії" },
  ],
};

// arr це середня місячна платня по рокам
const arr = [
  100,
  300,
  500,
  1000,
  2000,
  2000,
  2800,
  3000,
  3000,
  4000,
  7000,
  10000,
];

const necessaryExpenses = 800;

const todo = [
  { month: "Червень", skill: "JavaScript" },
  { month: "Липень", skill: "Java" },
  { month: "Серпень", skill: "Терпіння" },
  { month: "Вересень", skill: "Вивченя англійської мови" },
  { month: "Жовтень", skill: "Стресо стійкість" },
  { month: "Листопад", skill: "Емоційний інтелект" },
  { month: "Грудень", skill: "Креативність" },
  { month: "Січень", skill: "найманя робітників" },
  { month: "Лютий", skill: "Працювати над маркетингом" },
  { month: "Березень", skill: "Особистий бренд" },
  { month: "Квітень", skill: "Економіка" },
  { month: "Травень", skill: "Публічні виступи" },
];

export { user, arr, necessaryExpenses, todo };
