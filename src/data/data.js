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
    question: "Какая страна является самой большой по площади в мире?",
    answers: [
      { text: "Китай", isCorrect: false },
      { text: "Канада", isCorrect: false },
      { text: "Россия", isCorrect: true },
      { text: "США", isCorrect: false },
    ],
  },
  {
    question: "Как называется самый твердый природный минерал?",
    answers: [
      { text: "Золото", isCorrect: false },
      { text: "Алмаз", isCorrect: true },
      { text: "Гранит", isCorrect: false },
      { text: "Железо", isCorrect: false },
    ],
  },
  {
    question: "Кто написал сказку «Золушка»?",
    answers: [
      { text: "Шарль Перро", isCorrect: true },
      { text: "Ганс Христиан Андерсен", isCorrect: false },
      { text: "Братья Гримм", isCorrect: false },
      { text: "Александр Пушкин", isCorrect: false },
    ],
  },
  {
    question: "Какая птица считается самой большой в мире?",
    answers: [
      { text: "Орел", isCorrect: false },
      { text: "Страус", isCorrect: true },
      { text: "Пингвин", isCorrect: false },
      { text: "Альбатрос", isCorrect: false },
    ],
  },
  {
    question: "Сколько материков (континентов) на планете Земля?",
    answers: [
      { text: "5", isCorrect: false },
      { text: "6", isCorrect: true },
      { text: "7", isCorrect: false },
      { text: "4", isCorrect: false },
    ],
  },
  {
    question: "Какой орган человека качает кровь по всему телу?",
    answers: [
      { text: "Легкие", isCorrect: false },
      { text: "Мозг", isCorrect: false },
      { text: "Печень", isCorrect: false },
      { text: "Сердце", isCorrect: true },
    ],
  },
  {
    question: "В каком городе находится Эйфелева башня?",
    answers: [
      { text: "Лондон", isCorrect: false },
      { text: "Рим", isCorrect: false },
      { text: "Париж", isCorrect: true },
      { text: "Берлин", isCorrect: false },
    ],
  },
  {
    question: "Какой металл является жидким при комнатной температуре?",
    answers: [
      { text: "Ртуть", isCorrect: true },
      { text: "Серебро", isCorrect: false },
      { text: "Медь", isCorrect: false },
      { text: "Алюминий", isCorrect: false },
    ],
  },
  {
    question: "Сколько цветов в классической радуге?",
    answers: [
      { text: "6", isCorrect: false },
      { text: "7", isCorrect: true },
      { text: "8", isCorrect: false },
      { text: "10", isCorrect: false },
    ],
  },
  {
    question: "Какая планета находится ближе всего к Солнцу?",
    answers: [
      { text: "Венера", isCorrect: false },
      { text: "Марс", isCorrect: false },
      { text: "Меркурий", isCorrect: true },
      { text: "Земля", isCorrect: false },
    ],
  },{
    question: "Какая самая высокая гора в мире?",
    answers: [
      { text: "Килиманджаро", isCorrect: false },
      { text: "Эльбрус", isCorrect: false },
      { text: "Эверест", isCorrect: true },
      { text: "Монблан", isCorrect: false },
    ],
  },
  {
    question: "Кто считается автором сказки 'Колобок'?",
    answers: [
      { text: "Народная сказка", isCorrect: true },
      { text: "Александр Пушкин", isCorrect: false },
      { text: "Корней Чуковский", isCorrect: false },
      { text: "Иван Крылов", isCorrect: false },
    ],
  },
  {
    question: "В какой стране зародились Олимпийские игры?",
    answers: [
      { text: "Италия", isCorrect: false },
      { text: "Египет", isCorrect: false },
      { text: "Греция", isCorrect: true },
      { text: "Китай", isCorrect: false },
    ],
  },
  {
    question: "Сколько зубов у взрослого здорового человека (в норме)?",
    answers: [
      { text: "28", isCorrect: false },
      { text: "32", isCorrect: true },
      { text: "30", isCorrect: false },
      { text: "36", isCorrect: false },
    ],
  },
  {
    question: "Какая валюта используется в Японии?",
    answers: [
      { text: "Доллар", isCorrect: false },
      { text: "Юань", isCorrect: false },
      { text: "Иена", isCorrect: true },
      { text: "Вон", isCorrect: false },
    ],
  },
  {
    question: "Как называется самый большой остров в мире?",
    answers: [
      { text: "Мадагаскар", isCorrect: false },
      { text: "Гренландия", isCorrect: true },
      { text: "Австралия", isCorrect: false },
      { text: "Исландия", isCorrect: false },
    ],
  },
  {
    question: "Из чего традиционно делают бумагу?",
    answers: [
      { text: "Из песка", isCorrect: false },
      { text: "Из нефти", isCorrect: false },
      { text: "Из древесины", isCorrect: true },
      { text: "Из пластика", isCorrect: false },
    ],
  },
  {
    question: "Кто был первым человеком на Луне?",
    answers: [
      { text: "Юрий Гагарин", isCorrect: false },
      { text: "Нил Армстронг", isCorrect: true },
      { text: "Илон Маск", isCorrect: false },
      { text: "Алексей Леонов", isCorrect: false },
    ],
  },
  {
    question: "Какой фрукт (или ягода) является основным ингредиентом для вина?",
    answers: [
      { text: "Яблоко", isCorrect: false },
      { text: "Виноград", isCorrect: true },
      { text: "Слива", isCorrect: false },
      { text: "Вишня", isCorrect: false },
    ],
  },
  {
    question: "Как называется линия, которая делит Землю на Северное и Южное полушария?",
    answers: [
      { text: "Меридиан", isCorrect: false },
      { text: "Параллель", isCorrect: false },
      { text: "Экватор", isCorrect: true },
      { text: "Горизонт", isCorrect: false },
    ],
  },{
    question: "Какое животное является самым крупным на планете?",
    answers: [
      { text: "Слон", isCorrect: false },
      { text: "Синий кит", isCorrect: true },
      { text: "Жираф", isCorrect: false },
      { text: "Белая акула", isCorrect: false },
    ],
  },
  {
    question: "Как называется столица Италии?",
    answers: [
      { text: "Венеция", isCorrect: false },
      { text: "Милан", isCorrect: false },
      { text: "Рим", isCorrect: true },
      { text: "Флоренция", isCorrect: false },
    ],
  },
  {
    question: "Какой цвет получится, если смешать синюю и желтую краску?",
    answers: [
      { text: "Зеленый", isCorrect: true },
      { text: "Фиолетовый", isCorrect: false },
      { text: "Оранжевый", isCorrect: false },
      { text: "Коричневый", isCorrect: false },
    ],
  },
  {
    question: "Из чего состоит белый гриб (его основная часть под землей)?",
    answers: [
      { text: "Корни", isCorrect: false },
      { text: "Грибница (мицелий)", isCorrect: true },
      { text: "Стебель", isCorrect: false },
      { text: "Семена", isCorrect: false },
    ],
  },
  {
    question: "Какое устройство используется для измерения температуры тела?",
    answers: [
      { text: "Барометр", isCorrect: false },
      { text: "Термометр", isCorrect: true },
      { text: "Спидометр", isCorrect: false },
      { text: "Тонометр", isCorrect: false },
    ],
  },
  {
    question: "Как называется замерзшая вода?",
    answers: [
      { text: "Пар", isCorrect: false },
      { text: "Лед", isCorrect: true },
      { text: "Роса", isCorrect: false },
      { text: "Иней", isCorrect: false },
    ],
  },
  {
    question: "Сколько колец изображено на олимпийском флаге?",
    answers: [
      { text: "3", isCorrect: false },
      { text: "4", isCorrect: false },
      { text: "5", isCorrect: true },
      { text: "6", isCorrect: false },
    ],
  },
  {
    question: "Какое основное полезное ископаемое используют для получения бензина?",
    answers: [
      { text: "Уголь", isCorrect: false },
      { text: "Природный газ", isCorrect: false },
      { text: "Нефть", isCorrect: true },
      { text: "Железная руда", isCorrect: false },
    ],
  },
  {
    question: "Кто был первым президентом США?",
    answers: [
      { text: "Авраам Линкольн", isCorrect: false },
      { text: "Джордж Вашингтон", isCorrect: true },
      { text: "Томас Джефферсон", isCorrect: false },
      { text: "Франклин Рузвельт", isCorrect: false },
    ],
  },
  {
    question: "Как называется столица Франции?",
    answers: [
      { text: "Марсель", isCorrect: false },
      { text: "Лион", isCorrect: false },
      { text: "Париж", isCorrect: true },
      { text: "Ницца", isCorrect: false },
    ],
  },{
    question: "Какое вещество составляет около 70% тела взрослого человека?",
    answers: [
      { text: "Кровь", isCorrect: false },
      { text: "Вода", isCorrect: true },
      { text: "Жир", isCorrect: false },
      { text: "Костная ткань", isCorrect: false },
    ],
  },
  {
    question: "Как называется самая большая пустыня в мире?",
    answers: [
      { text: "Гоби", isCorrect: false },
      { text: "Сахара", isCorrect: true },
      { text: "Калахари", isCorrect: false },
      { text: "Каракумы", isCorrect: false },
    ],
  },
  {
    question: "Какое растение является символом Канады и изображено на её флаге?",
    answers: [
      { text: "Дуб", isCorrect: false },
      { text: "Береза", isCorrect: false },
      { text: "Клен", isCorrect: true },
      { text: "Сосна", isCorrect: false },
    ],
  },
  {
    question: "Как в сказках называют вожака стаи в 'Книге джунглей'?",
    answers: [
      { text: "Шерхан", isCorrect: false },
      { text: "Акела", isCorrect: true },
      { text: "Балу", isCorrect: false },
      { text: "Багира", isCorrect: false },
    ],
  },{
    question: "Как называется столица Германии?",
    answers: [
      { text: "Мюнхен", isCorrect: false },
      { text: "Гамбург", isCorrect: false },
      { text: "Берлин", isCorrect: true },
      { text: "Франкфурт", isCorrect: false },
    ],
  },
  {
    question: "Сколько граней у обычного игрального кубика?",
    answers: [
      { text: "4", isCorrect: false },
      { text: "6", isCorrect: true },
      { text: "8", isCorrect: false },
      { text: "12", isCorrect: false },
    ],
  },
  {
    question: "Какое насекомое производит мёд?",
    answers: [
      { text: "Оса", isCorrect: false },
      { text: "Шмель", isCorrect: false },
      { text: "Пчела", isCorrect: true },
      { text: "Муха", isCorrect: false },
    ],
  },
  {
    question: "Как называется спутник планеты Земля?",
    answers: [
      { text: "Марс", isCorrect: false },
      { text: "Солнце", isCorrect: false },
      { text: "Луна", isCorrect: true },
      { text: "Титан", isCorrect: false },
    ],
  },
  {
    question: "В каком органе человека происходит процесс пищеварения сразу после пищевода?",
    answers: [
      { text: "Кишечник", isCorrect: false },
      { text: "Печень", isCorrect: false },
      { text: "Желудок", isCorrect: true },
      { text: "Почки", isCorrect: false },
    ],
  },{
    question: "Какой металл лучше всего проводит электрический ток?",
    answers: [
      { text: "Железо", isCorrect: false },
      { text: "Медь", isCorrect: true },
      { text: "Алюминий", isCorrect: false },
      { text: "Свинец", isCorrect: false },
    ],
  },
  {
    question: "Как называется процесс, при котором растения выделяют кислород?",
    answers: [
      { text: "Дыхание", isCorrect: false },
      { text: "Испарение", isCorrect: false },
      { text: "Фотосинтез", isCorrect: true },
      { text: "Окисление", isCorrect: false },
    ],
  },
  {
    question: "Какая страна считается родиной пиццы?",
    answers: [
      { text: "Франция", isCorrect: false },
      { text: "Италия", isCorrect: true },
      { text: "Испания", isCorrect: false },
      { text: "Греция", isCorrect: false },
    ],
  },
  {
    question: "Сколько часов в двух сутках?",
    answers: [
      { text: "24", isCorrect: false },
      { text: "36", isCorrect: false },
      { text: "48", isCorrect: true },
      { text: "50", isCorrect: false },
    ],
  },
  {
    question: "Какой материк является самым холодным на Земле?",
    answers: [
      { text: "Евразия", isCorrect: false },
      { text: "Северная Америка", isCorrect: false },
      { text: "Антарктида", isCorrect: true },
      { text: "Австралия", isCorrect: false },
    ],
  },
  {
    question: "Как называется самая большая ягода?",
    answers: [
      { text: "Дыня", isCorrect: false },
      { text: "Кавун (Арбуз)", isCorrect: true },
      { text: "Тыква", isCorrect: false },
      { text: "Ананас", isCorrect: false },
    ],
  },
  {
    question: "Какой прибор показывает стороны света?",
    answers: [
      { text: "Часы", isCorrect: false },
      { text: "Компас", isCorrect: true },
      { text: "Термометр", isCorrect: false },
      { text: "Барометр", isCorrect: false },
    ],
  },
  {
    question: "Кто написал 'Сказку о рыбаке и рыбке'?",
    answers: [
      { text: "Александр Пушкин", isCorrect: true },
      { text: "Николай Гоголь", isCorrect: false },
      { text: "Иван Крылов", isCorrect: false },
      { text: "Антон Чехов", isCorrect: false },
    ],
  },
  {
    question: "Какая птица является общепризнанным символом мира?",
    answers: [
      { text: "Орел", isCorrect: false },
      { text: "Лебедь", isCorrect: false },
      { text: "Голубь", isCorrect: true },
      { text: "Аист", isCorrect: false },
    ],
  },{
    question: "Как называется суп из свеклы в славянской кухне?",
    answers: [
      { text: "Щи", isCorrect: false },
      { text: "Борщ", isCorrect: true },
      { text: "Рассольник", isCorrect: false },
      { text: "Солянка", isCorrect: false },
    ],
  },
  {
    question: "Какое животное называют «кораблем пустыни»?",
    answers: [
      { text: "Слон", isCorrect: false },
      { text: "Верблюд", isCorrect: true },
      { text: "Осел", isCorrect: false },
      { text: "Зебра", isCorrect: false },
    ],
  },
  {
    question: "Сколько сторон у квадрата?",
    answers: [
      { text: "3", isCorrect: false },
      { text: "4", isCorrect: true },
      { text: "5", isCorrect: false },
      { text: "6", isCorrect: false },
    ],
  },
  {
    question: "Какая планета третья по счету от Солнца?",
    answers: [
      { text: "Венера", isCorrect: false },
      { text: "Марс", isCorrect: false },
      { text: "Земля", isCorrect: true },
      { text: "Сатурн", isCorrect: false },
    ],
  },
  {
    question: "Как называется металл, из которого делают большинство монет?",
    answers: [
      { text: "Золото", isCorrect: false },
      { text: "Медь", isCorrect: true },
      { text: "Ртуть", isCorrect: false },
      { text: "Натрий", isCorrect: false },
    ],
  },
  {
    question: "В какой стране находится Великая Китайская стена?",
    answers: [
      { text: "Япония", isCorrect: false },
      { text: "Индия", isCorrect: false },
      { text: "Китай", isCorrect: true },
      { text: "Корея", isCorrect: false },
    ],
  },
  {
    question: "Какое насекомое превращается из гусеницы?",
    answers: [
      { text: "Кузнечик", isCorrect: false },
      { text: "Бабочка", isCorrect: true },
      { text: "Муравей", isCorrect: false },
      { text: "Пчела", isCorrect: false },
    ],
  },
  {
    question: "Как называется столица Великобритании?",
    answers: [
      { text: "Ливерпуль", isCorrect: false },
      { text: "Манчестер", isCorrect: false },
      { text: "Лондон", isCorrect: true },
      { text: "Эдинбург", isCorrect: false },
    ],
  },
  {
    question: "Какой инструмент используют для забивания гвоздей?",
    answers: [
      { text: "Отвертка", isCorrect: false },
      { text: "Пила", isCorrect: false },
      { text: "Молоток", isCorrect: true },
      { text: "Плоскогубцы", isCorrect: false },
    ],
  },
  {
    question: "Сколько минут в одном часе?",
    answers: [
      { text: "50", isCorrect: false },
      { text: "60", isCorrect: true },
      { text: "100", isCorrect: false },
      { text: "24", isCorrect: false },
    ],
  },
  {
    question: "В каком году произошел распад СССР?",
    answers: [
      { text: "1985", isCorrect: false },
      { text: "1991", isCorrect: true },
      { text: "1993", isCorrect: false },
      { text: "2000", isCorrect: false },
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