const questions = [
  {
    question: "Столица Аргентины?",
    answers: [
      { text: "Буэнос-Айрес", isCorrect: true },
      { text: "Рио-де-Жанейро", isCorrect: false },
      { text: "Лима", isCorrect: false },
      { text: "Сантьяго", isCorrect: false },
    ],
  },
  {
    question: "Какая самая большая планета в Солнечной системе?",
    answers: [
      { text: "Земля", isCorrect: false },
      { text: "Юпитер", isCorrect: true },
      { text: "Сатурн", isCorrect: false },
      { text: "Марс", isCorrect: false },
    ],
  },
  {
    question: "Какое животное считается самым быстрым на суше?",
    answers: [
      { text: "Гепард", isCorrect: true },
      { text: "Лев", isCorrect: false },
      { text: "Антилопа", isCorrect: false },
      { text: "Сокол-пастух", isCorrect: false },
    ],
  },
  {
    question: "Дельфин — семейство морских млекопитающих?",
    answers: [
      { text: "Нет, это птица", isCorrect: false },
      { text: "Да, дельфин морское млекопитающее", isCorrect: true },
      { text: "Нет, дельфин просто млекопитающее", isCorrect: false },
      { text: "Нет, дельфин — рыба", isCorrect: false },
    ],
  },
  {
    question: "Световой год — это единица измерения",
    answers: [
      { text: "веса", isCorrect: false },
      { text: "расстояния", isCorrect: true },
      { text: "скорости", isCorrect: false },
      { text: "времени", isCorrect: false },
    ],
  },
  {
    question:
      "Что означает дискриминант квадратного уравнения, если он равен 0?",
    answers: [
      { text: "Два разных корня", isCorrect: false },
      { text: "Один повторяющийся корень", isCorrect: true },
      { text: "Нет корней", isCorrect: false },
      { text: "Бесконечное количество корней", isCorrect: false },
    ],
  },
  {
    question: "Какой корень уравнения x² = 121?",
    answers: [
      { text: "11", isCorrect: true },
      { text: "17", isCorrect: false },
      { text: "13", isCorrect: false },
      { text: "9", isCorrect: false },
    ],
  },
  {
    question: "Формула площади круга?",
    answers: [
      { text: "πr²", isCorrect: true },
      { text: "2πr", isCorrect: false },
      { text: "πd", isCorrect: false },
      { text: "πr", isCorrect: false },
    ],
  },
  {
    question: "Какой элемент химический символ Fe обозначает?",
    answers: [
      { text: "Фтор", isCorrect: false },
      { text: "Железо", isCorrect: true },
      { text: "Медь", isCorrect: false },
      { text: "Кислород", isCorrect: false },
    ],
  },
  {
    question: "Какой океан самый большой на Земле?",
    answers: [
      { text: "Атлантический", isCorrect: false },
      { text: "Тихий", isCorrect: true },
      { text: "Индийский", isCorrect: false },
      { text: "Северный Ледовитый", isCorrect: false },
    ],
  },
  {
    question: "Какая река самая длинная в мире?",
    answers: [
      { text: "Амазонка", isCorrect: false },
      { text: "Нил", isCorrect: true },
      { text: "Янцзы", isCorrect: false },
      { text: "Миссисипи", isCorrect: false },
    ],
  },
  {
    question:
      "Какой язык программирования используется для создания стилей на веб-страницах?",
    answers: [
      { text: "HTML", isCorrect: false },
      { text: "JavaScript", isCorrect: false },
      { text: "CSS", isCorrect: true },
      { text: "Python", isCorrect: false },
    ],
  },
  {
    question: "Какая планета известна как «Красная планета»?",
    answers: [
      { text: "Венера", isCorrect: false },
      { text: "Марс", isCorrect: true },
      { text: "Юпитер", isCorrect: false },
      { text: "Сатурн", isCorrect: false },
    ],
  },
  {
    question: "Какое вещество необходимо для дыхания человека?",
    answers: [
      { text: "Водород", isCorrect: false },
      { text: "Кислород", isCorrect: true },
      { text: "Углекислый газ", isCorrect: false },
      { text: "Азот", isCorrect: false },
    ],
  },
  {
    question: "Как называется процесс превращения жидкости в пар?",
    answers: [
      { text: "Конденсация", isCorrect: false },
      { text: "Испарение", isCorrect: true },
      { text: "Замерзание", isCorrect: false },
      { text: "Плавление", isCorrect: false },
    ],
  },
  {
    question: "Какой газ составляет основную часть земной атмосферы?",
    answers: [
      { text: "Кислород", isCorrect: false },
      { text: "Азот", isCorrect: true },
      { text: "Углекислый газ", isCorrect: false },
      { text: "Водород", isCorrect: false },
    ],
  },
  {
    question: "Сколько месяцев в году имеют 31 день?",
    answers: [
      { text: "5", isCorrect: false },
      { text: "6", isCorrect: false },
      { text: "7", isCorrect: true },
      { text: "8", isCorrect: false },
    ],
  },
  {
    question: "Как называется самая маленькая планета в Солнечной системе?",
    answers: [
      { text: "Марс", isCorrect: false },
      { text: "Плутон", isCorrect: false },
      { text: "Меркурий", isCorrect: true },
      { text: "Венера", isCorrect: false },
    ],
  },
  {
    question: "Кто изобрёл лампу накаливания?",
    answers: [
      { text: "Альберт Эйнштейн", isCorrect: false },
      { text: "Томас Эдисон", isCorrect: true },
      { text: "Никола Тесла", isCorrect: false },
      { text: "Исаак Ньютон", isCorrect: false },
    ],
  },
  {
    question: "Как называется столица Японии?",
    answers: [
      { text: "Пекин", isCorrect: false },
      { text: "Сеул", isCorrect: false },
      { text: "Токио", isCorrect: true },
      { text: "Бангкок", isCorrect: false },
    ],
  },
  {
    question: "Сколько игроков в футбольной команде на поле?",
    answers: [
      { text: "11", isCorrect: true },
      { text: "10", isCorrect: false },
      { text: "12", isCorrect: false },
      { text: "9", isCorrect: false },
    ],
  },
  {
    question: "Что является главной функцией корней у растений?",
    answers: [
      { text: "Фотосинтез", isCorrect: false },
      { text: "Поглощение воды и питательных веществ", isCorrect: true },
      { text: "Размножение", isCorrect: false },
      { text: "Хранение энергии", isCorrect: false },
    ],
  },
  {
    question: "Какое море самое солёное в мире?",
    answers: [
      { text: "Средиземное море", isCorrect: false },
      { text: "Красное море", isCorrect: false },
      { text: "Мёртвое море", isCorrect: true },
      { text: "Чёрное море", isCorrect: false },
    ],
  },
  {
    question: "В каком году началась Вторая мировая война?",
    answers: [
      { text: "1939", isCorrect: true },
      { text: "1914", isCorrect: false },
      { text: "1945", isCorrect: false },
      { text: "1929", isCorrect: false },
    ],
  },
  {
  question: 'Сколько градусов в прямом угле?',
  answers: [
    { text: '45', isCorrect: false },
    { text: '90', isCorrect: true },
    { text: '180', isCorrect: false },
    { text: '360', isCorrect: false },
  ],
},
  {
    question: "Какой химический элемент является самым распространенным во Вселенной?",
    answers: [
      { text: "Кислород", isCorrect: false },
      { text: "Водород", isCorrect: true },
      { text: "Гелий", isCorrect: false },
      { text: "Углерод", isCorrect: false },
    ],
  },
  {
    question: "В какой стране находится самое глубокое озеро в мире — Байкал?",
    answers: [
      { text: "Россия", isCorrect: true },
      { text: "Канада", isCorrect: false },
      { text: "Китай", isCorrect: false },
      { text: "США", isCorrect: false },
    ],
  },
  {
    question: "Кто из этих художников написал знаменитую картину «Мона Лиза»?",
    answers: [
      { text: "Микеланджело", isCorrect: false },
      { text: "Пабло Пикассо", isCorrect: false },
      { text: "Леонардо да Винчи", isCorrect: true },
      { text: "Винсент ван Гог", isCorrect: false },
    ],
  },
  {
    question: "Какое количество планет в Солнечной системе (согласно текущему определению МАС)?",
    answers: [
      { text: "7", isCorrect: false },
      { text: "9", isCorrect: false },
      { text: "8", isCorrect: true },
      { text: "10", isCorrect: false },
    ],
  },
  {
    question: "В каком году произошел первый полет человека в космос?",
    answers: [
      { text: "1957", isCorrect: false },
      { text: "1961", isCorrect: true },
      { text: "1969", isCorrect: false },
      { text: "1953", isCorrect: false },
    ],
  },
];
export default questions;