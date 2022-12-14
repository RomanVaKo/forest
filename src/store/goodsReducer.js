
let initialState = [
    {
        name: 'Доска обрезная',
        photo: 'доска_обрезная',
        table: {
            c_name: '',
            r_name: '',
            column: [],
            row: [],
            name: 'Цена',
            value: 'Договорная',
            flag: false,
        },
        description: '',
        category: 0,
        spec: [
            {
                name: 'Материал', value: 'Хвойные материалы'
            }
        ]
    },
    {
        name: 'Брус обрезной',
        photo: 'доска',
        table: {
            c_name: '',
            r_name: '',
            column: [],
            row: [],
            name: 'Цена',
            value: 'Договорная',
            flag: false,
        },
        description: '',
        category: 0,
        spec: [
            {
                name: 'Материал', value: 'Хвойные материалы'
            }
        ]
    },
    {
        name: 'Жалюзийная дверка',
        photo: 'жал_дверки',
        table: {
            c_name: 'Ширина',
            r_name: 'Высота',
            column: [294, 344, 394, 444, 494, 594],
            row: [467, 605, 715, 993, 850, 1015, 1205, 1406, 1505, 1805, 1995, 2013, 2490],
            value: [
                [209, 244, 280, 315, 351, 422],
                [270, 316, 362, 408, 454, 546,],
                [320, 374, 428, 483, 537, 646,],
                [444, 519, 595, 670, 746, 897,],
                [380, 444, 509, 574, 638, 767],
                [454, 531, 608, 685, 762, 916],
                [538, 630, 722, 813, 905, 1088],
                [628, 735, 842, 949, 1056, 1269],
                [673, 787, 901, 1016, 1130, 1359],
                [807, 944, 1081, 1218, 1355, 1630],
                [892, 1043, 1195, 1346, 1498, 1801],
                [900, 1053, 1206, 1359, 1512, 1817],
                [1113, 1302, 1491, 1680, 1870, 2248],
            ],
            flag: true
        },
        category: 1,
        description: 'Жалюзийные дверки используются в изготовлении мебели (в т.ч. встроенных и раздвижных шкафах) в качестве фасадов(дверок). Кроме красивого внешнего вида, они обеспечивают вентиляцию внутреннего объема мебели. Экономия пространства, которая достигается при использовании таких дверей, позволяет использовать жалюзийные дверки не только в домашних условиях, но и в офисных помещениях. Учитывается, что жалюзийные дверки обеспечивают свободную циркуляцию воздуха. Рекомендуется применять их при отделке обогревателей и батарей. Жалюзийные дверки также могут служить в качестве наружных ставен на окнах.',
        spec: [
            {
                name: 'Материал', value: 'Массив хвои'
            }
        ]
    },
    {
        name: 'Фасад глухой',
        photo: 'фасад_глухой',
        table: {
            c_name: 'Ширина',
            r_name: 'Высота',
            column: [296, 396, 496, 596],
            row: [140, 280, 570, 716, 998, 1200, 1500, 1800, 2000],
            value: [
                [91, 122, 153, 184,],
                [182, 244, 306, 367,],
                [371, 497, 622, 747,],
                [466, 624, 781, 939,],
                [650, 869, 1089, 1309,],
                [781, 1045, 1039, 1573,],
                [977, 1307, 1637, 2262,],
                [1172, 1568, 1964, 2360,],
                [1302, 1742, 2182, 2622,],
            ],
            flag: true
        },
        category: 1,
        description: 'Мебельные фасады из массива хвои - незаменимый элемент отделки для кухонной, офисной или корпусной мебели. Они отличаются высокой влагостойкостью и термостойкостью (благодаря чему полностью оправдывают их использование на кухне). Кроме того, мебельные фасады также можно использовать и в качестве декоративных накладок на металлические двери - они очень красивы, прочны и имеют разнообразную фактуру.',
        spec: [
            {
                name: 'Материал', value: 'Массив хвои'
            }
        ]
    },
    {
        name: 'Фасад стекло',
        photo: 'фасад_стекло',
        table: {
            c_name: 'Ширина',
            r_name: 'Высота',
            column: [296, 396, 496, 596],
            row: [570, 716, 998, 1200, 1500, 1800, 2000],
            value: [
                [371, 497, 622, 747,],
                [466, 624, 781, 939,],
                [650, 869, 1089, 1309,],
                [781, 1045, 1039, 1573,],
                [977, 1307, 1637, 2262,],
                [1172, 1568, 1964, 2360,],
                [1302, 1742, 2182, 2200],
            ],
            flag: true
        },
        category: 1,
        description: 'Мебельные фасады из массива хвои - незаменимый элемент отделки для кухонной, офисной или корпусной мебели. Они отличаются высокой влагостойкостью и термостойкостью (благодаря чему полностью оправдывают их использование на кухне). Кроме того, мебельные фасады также можно использовать и в качестве декоративных накладок на металлические двери - они очень красивы, прочны и имеют разнообразную фактуру.',
        spec: [
            {
                name: 'Материал', value: 'Массив хвои'
            }
        ]
    },
    {
        name: 'Фасад параллель',
        photo: 'фасад_параллель',
        table: {
            c_name: 'Ширина',
            r_name: 'Высота',
            column: [296, 396, 496],
            row: [280, 570, 716, 1200, 1500, 1800, 2000],
            value: [
                [191, 0, 319],
                [388, 519, 650],
                [487, 652, 817],
                [0, 1093, 1369],
                [0, 1366, 1711],
                [1225, 1639, 2053],
                [1362, 1822, 0],
            ],
            flag: true
        },
        category: 1,
        description: 'Мебельные фасады из массива хвои - незаменимый элемент отделки для кухонной, офисной или корпусной мебели. Они отличаются высокой влагостойкостью и термостойкостью (благодаря чему полностью оправдывают их использование на кухне). Кроме того, мебельные фасады также можно использовать и в качестве декоративных накладок на металлические двери - они очень красивы, прочны и имеют разнообразную фактуру.',
        spec: [
            {
                name: 'Материал', value: 'Массив хвои'
            }
        ]
    },

    {
        name: 'Мебельный щит категории В (18 мм)',
        photo: 'мебельный_щит_кат_В',
        table: {
            c_name: 'Ширина',
            r_name: 'Длина',
            column: [200, 300, 400, 500, 600, 700, 800],
            row: [800, 1000, 1200, 1400, 1600, 1800, 2000, 2200, 2400, 2600, 2800, 3000],
            value: [
                [184, 276, 368, 460, 552, 645, 737,],
                [230, 345, 460, 576, 691, 806, 921,],
                [276, 414, 552, 691, 829, 967, 1105,],
                [322, 483, 645, 806, 967, 1128, 1290,],
                [368, 552, 737, 921, 1105, 1290, 1474,],
                [414, 622, 829, 1036, 1244, 1451, 1658,],
                [460, 691, 921, 1152, 1382, 1612, 1843,],
                [506, 760, 1013, 1267, 1520, 1774, 2027,],
                [552, 829, 1105, 1382, 1658, 1935, 2211,],
                [599, 898, 1198, 1497, 1797, 2096, 2396,],
                [645, 967, 1290, 1612, 1935, 2257, 2580,],
                [691, 1036, 1382, 1728, 2073, 2419, 2764,],
            ],
            flag: true
        },
        category: 1,
        description: 'Мебельный щит используется для изготовления высококачественных элементов мебели для дома и офиса, детской мебели, столешниц, элементов лестниц(ступени, подступенники, тетива) подоконников и прочих элементов интерьера из натуральной древесины в строительных и отделочных работах.',
        spec: [
            {
                name: 'Материал', value: 'Массив хвои'
            },
            {
                name: 'Толщина', value: '18 мм'
            },
            {
                name: 'Сорт', value: 'A/B'
            }
        ]
    },
    {
        name: 'Мебельный щит категории В (28 мм)',
        photo: 'мебельный_щит_кат_В',
        table: {
            c_name: 'Ширина',
            r_name: 'Длина',
            column: [200, 300, 400, 500, 600, 700, 800],
            row: [800, 1000, 1200, 1400, 1600, 1800, 2000, 2200, 2400, 2600, 2800, 3000],
            value: [
                [287, 430, 573, 717, 860, 1004, 1147],
                [358, 538, 717, 896, 1075, 1254, 1434],
                [430, 645, 860, 1075, 1290, 1505, 1720],
                [502, 753, 1004, 1254, 1505, 1756, 2007],
                [573, 860, 1147, 1434, 1720, 2007, 2294],
                [645, 968, 1290, 1613, 1935, 2258, 2580],
                [717, 1075, 1434, 1792, 2150, 2509, 2867],
                [788, 1183, 1577, 1971, 2365, 2760, 3154],
                [860, 1290, 1720, 2150, 2580, 3011, 3441],
                [932, 1398, 1864, 2330, 2796, 3261, 3727],
                [1004, 1505, 2007, 2509, 3011, 3512, 4014],
                [1075, 1613, 2150, 2688, 3226, 3763, 4301],
            ],
            flag: true
        },
        category: 1,
        description: 'Мебельный щит используется для изготовления высококачественных элементов мебели для дома и офиса, детской мебели, столешниц, элементов лестниц(ступени, подступенники, тетива) подоконников и прочих элементов интерьера из натуральной древесины в строительных и отделочных работах.',
        spec: [
            {
                name: 'Материал', value: 'Массив хвои'
            },
            {
                name: 'Толщина', value: '28 мм'
            },
            {
                name: 'Сорт', value: 'A/B'
            }
        ]
    },
    {
        name: 'Мебельный щит "Экстра"',
        photo: 'мебельный_щит_экстра',
        table: {
            c_name: 'Размер',
            r_name: '',
            column: ['Цена'],
            row: ['2500х600х18', '2500х900х18'],
            value: [
                [75600],
                [75600]
            ],
            flag: true
        },
        category: 1,
        description: 'Мебельный щит используется для изготовления высококачественных элементов мебели для дома и офиса, детской мебели, столешниц, элементов лестниц(ступени, подступенники, тетива) подоконников и прочих элементов интерьера из натуральной древесины в строительных и отделочных работах.',
        spec: [
            {
                name: 'Материал', value: 'Массив хвои'
            }
        ]
    }, {
        name: 'Мебельный щит B (40 мм)',
        photo: 'Мебельный щит BB',
        table: {
            c_name: 'Ширина',
            r_name: 'Длина',
            column: [200, 300, 400, 500, 600, 700, 800],
            row: [800, 1000, 1200, 1400, 1600, 1800, 2000, 2200, 2400, 2600, 2800, 3000],
            value: [
                [410, 614, 819, 1024, 1229, 1434, 1638],
                [512, 768, 1024, 1280, 1536, 1792, 2048],
                [614, 922, 1229, 1536, 1843, 2150, 2458],
                [717, 1075, 1434, 1792, 2150, 2509, 2867],
                [819, 1229, 1638, 2048, 2458, 2867, 3277],
                [922, 1382, 1843, 2304, 2765, 3226, 3686],
                [1024, 1536, 2048, 2560, 3072, 3584, 4096],
                [1126, 1690, 2253, 2816, 3379, 3942, 4506],
                [1229, 1843, 2458, 3072, 3686, 4301, 4915],
                [1331, 1997, 2662, 3328, 3994, 4659, 5325],
                [1434, 2150, 2867, 3584, 4301, 5018, 5734],
                [1536, 2304, 3072, 3840, 4608, 5376, 6144],
            ],
            flag: true
        },
        category: 1,
        description: '',
        spec: [
            {
                name: 'Материал', value: 'Массив хвои'
            },
            {
                name: 'Толщина', value: '40 мм'
            },
            {
                name: 'Сорт', value: 'BB'
            }
        ]
    },
    {
        name: 'Ступени (40 мм, хвоя)',
        photo: 'ступени',
        table: {
            c_name: '',
            r_name: '',
            column: [],
            row: [],
            name: '1 м. куб.',
            value: 64000,
            flag: false,
        },
        category: 1,
        description: '',
        spec: [
            {
                name: 'Материал', value: 'Массив хвои'
            },
            {
                name: 'Толщина', value: '40 мм'
            },
            {
                name: 'Сорт', value: 'A/B'
            }
        ]
    },
    {
        name: 'Подоконная доска (40 мм, хвоя)',
        photo: 'доска_подоконная',
        table: {
            c_name: '',
            r_name: '',
            column: [],
            row: [],
            name: '1 м. куб.',
            value: 64000,
            flag: false,
        },
        category: 1,
        description: '',
        spec: [
            {
                name: 'Материал', value: 'Массив хвои'
            },
            {
                name: 'Толщина', value: '40 мм'
            },
            {
                name: 'Сорт', value: 'A/B'
            }
        ]
    },
    {
        name: 'Площадка лестничная (40 мм, хвоя)',
        photo: 'щит',
        table: {
            c_name: '',
            r_name: '',
            column: [],
            row: [],
            name: '1 м. куб.',
            value: 64000,
            flag: false,
        },
        category: 1,
        description: '',
        spec: [
            {
                name: 'Материал', value: 'Массив хвои'
            },
            {
                name: 'Толщина', value: '40 мм'
            },
            {
                name: 'Сорт', value: 'A/B'
            }
        ]
    },
    {
        name: 'Подступенок (18 мм, хвоя)',
        photo: 'подступенок',
        table: {
            c_name: '',
            r_name: '',
            column: [],
            row: [],
            name: '1 м. куб.',
            value: 64000,
            flag: false,
        },
        category: 1,
        description: '',
        spec: [
            {
                name: 'Материал', value: 'Массив хвои'
            },
            {
                name: 'Толщина', value: '40 мм'
            },
            {
                name: 'Сорт', value: 'A/B'
            }
        ]
    },
    {
        name: 'Лавка со спинкой',
        photo: 'лавка_спинка',
        table: {
            c_name: 'Ширина',
            r_name: 'Длина',
            column: [310],
            row: [900, 1100, 1300, 1500],
            value: [
                [1660],
                [1860],
                [2050],
                [2810]
            ],
            flag: true
        },
        category: 2,
        description: 'Лавка со спинкой',
        spec: [
            {
                name: 'Материал', value: 'Хвойные породы'
            }
        ]
    },
    {
        name: 'Лавка',
        photo: 'лавка',
        table: {
            c_name: 'Ширина',
            r_name: 'Длина',
            column: [300],
            row: [550, 900, 1100, 1300, 1500],
            value: [
                [1280],
                [1540],
                [1660],
                [1790],
                [1920]
            ],
            flag: true
        },
        category: 2,
        description: 'Лавка без спинки',
        spec: [
            {
                name: 'Материал', value: 'Хвойные породы'
            }
        ]
    },
    {
        name: 'Стол садовый',
        photo: 'стол',
        table: {
            c_name: 'Ширина',
            r_name: 'Длина',
            column: [700],
            row: [1100, 1300, 1500, 1800],
            value: [
                [3300],
                [3660],
                [4000],
                [4540]
            ],
            flag: true
        },
        category: 2,
        description: '',
        spec: [
            {
                name: 'Материал', value: 'Хвойные породы'
            }
        ]
    },
    {
        name: 'Табурет',
        photo: 'табурет',
        table: {
            c_name: 'Ширина',
            r_name: 'Длина',
            column: [350],
            row: [300],
            value: [
                [860]
            ],
            flag: true
        },
        category: 2,
        description: '',
        spec: [
            {
                name: 'Материал', value: 'Хвойные породы'
            },
            {
                name: 'Размер', value: '350*300 мм'
            }
        ]
    },
    {
        name: 'Столешница круглая',
        photo: 'столешница_круг',
        table: {
            c_name: '',
            r_name: 'Диаметр',
            column: ['Цена'],
            row: [300, 380, 600, 800, 1000],
            value: [
                [228],
                [365],
                [911],
                [1619],
                [2530]
            ],
            flag: true
        },
        category: 2,
        description: 'Деревянные столешницы используются для изготовления столов, кухонь - как при самостоятельном изготовлении мебели, так и при коммерческом использовании. Мы предлагаем к реализации столешницы из хвои любой формы - прямоугольные, круглые, овальные.',
        spec: [
            {
                name: 'Сорт', value: 'A/B'
            },
            {
                name: 'Толщина', value: '28 мм'
            }
        ]
    },
    {
        name: 'Столешница с овальными углами',
        photo: 'столешница_прямоугольник',
        table: {
            c_name: 'Длина',
            r_name: 'Ширина',
            column: [600, 700, 800],
            row: [1000, 1200, 1500, 1800],
            value: [
                [1518, 0, 0],
                [0, 2125, 0],
                [0, 2657, 3036],
                [0, 0, 3643]
            ],
            flag: true
        },
        category: 2,
        description: 'Деревянные столешницы используются для изготовления столов, кухонь - как при самостоятельном изготовлении мебели, так и при коммерческом использовании. Мы предлагаем к реализации столешницы из хвои любой формы - прямоугольные, круглые, овальные.',
        spec: [
            {
                name: 'Сорт', value: 'A/B'
            },
            {
                name: 'Толщина', value: '28 мм'
            }
        ]
    },
    {
        name: 'Столешница прямоугольная',
        photo: 'столешница_прямоуг',
        table: {
            c_name: 'Длина',
            r_name: 'Ширина',
            column: [600, 700, 800],
            row: [1000, 1200, 1400, 1500, 1800, 2000],
            value: [
                [1518, 0, 0],
                [1822, 2125, 0],
                [0, 0, 2834],
                [0, 2657, 3036],
                [0, 0, 3643],
                [0, 0, 4048]
            ],
            flag: true
        },
        category: 2,
        description: 'Деревянные столешницы используются для изготовления столов, кухонь - как при самостоятельном изготовлении мебели, так и при коммерческом использовании. Мы предлагаем к реализации столешницы из хвои любой формы - прямоугольные, круглые, овальные.',
        spec: [
            {
                name: 'Сорт', value: 'A/B'
            },
            {
                name: 'Толщина', value: '28 мм'
            }
        ]
    }, 
    {
        name: 'Опора для стола',
        photo: 'опора для стола',
        table: {
            c_name: '',
            r_name: '',
            column: [],
            row: [],
            name: 'Цена',
            value: '1520',
            flag: false,
        },
        category: 2,
        description: '',
        spec: [
            {
                name: 'Материал', value: 'Хвойные породы'
            }
        ]
    },
    {
        name: 'Двойные опоры для стола',
        photo: 'двойные опоры для стола',
        table: {
            c_name: '',
            r_name: '',
            column: [],
            row: [],
            name: 'Цена',
            value: '3040',
            flag: false,
        },
        category: 2,
        description: '',
        spec: [
            {
                name: 'Материал', value: 'Хвойные породы'
            }
        ]
    },
    {
        name: 'Стеллаж 3-х полочный из натуральной древесины',
        photo: 'стелаж 3 полочный',
        table: {
            c_name: '',
            r_name: '',
            column: [],
            row: [],
            name: 'Цена',
            value: '950',
            flag: false,
        },
        category: 2,
        description: '',
        spec: [
            {
                name: 'Материал', value: 'Хвойные породы'
            },
            {
                name: 'Размер', value: '960*750*300 мм'
            }
        ]
    },
    {
        name: 'Стеллаж 4-х полочный из натуральной древесины',
        photo: 'стелаж 4 полочный',
        table: {
            c_name: '',
            r_name: '',
            column: [],
            row: [],
            name: 'Цена',
            value: '1150',
            flag: false,
        },
        category: 2,
        description: '',
        spec: [
            {
                name: 'Материал', value: 'Хвойные породы'
            },
            {
                name: 'Размер', value: '1360*720*290 мм'
            }
        ]
    },
    {
        name: 'Пергола (Изделие №1)',
        photo: 'пергола',
        table: {
            c_name: '',
            r_name: '',
            column: [],
            row: [],
            name: 'Цена',
            value: '780',
            flag: false,
        },
        category: 3,
        description: '',
        spec: [
            {
                name: 'Материал', value: 'Хвойные породы'
            },
            {
                name: 'Размер в сборе', value: '770*180*20 мм'
            },
            {
                name: 'Расширенный размер', value: '550*1250*20 мм'
            },
            {
                name: 'Размер квадрата', value: '100*100 мм'
            }
        ]
    },
    {
        name: 'Пергола (Изделие №2)',
        photo: 'пергола',
        table: {
            c_name: '',
            r_name: '',
            column: [],
            row: [],
            name: 'Цена',
            value: '1010',
            flag: false,
        },
        category: 3,
        description: '',
        spec: [
            {
                name: 'Материал', value: 'Хвойные породы'
            },
            {
                name: 'Размер в сборе', value: '1200*180*20 мм'
            },
            {
                name: 'Расширенный размер', value: '1800*900*20 мм'
            },
            {
                name: 'Размер квадрата', value: '160*160 мм'
            }
        ]
    },
    {
        name: 'Топливные брикеты RUF',
        photo: 'брикеты',
        table: {
            c_name: '',
            r_name: '',
            column: [],
            row: [],
            name: 'Цена',
            value: '9000 руб/тонна',
            flag: false,
        },
        category: 4,
        description: '',
        spec: [
            {
                name: 'Материал', value: 'Хвойные отходы производства'
            },
        ]
    },
    {
        name: 'Топливные пеллеты (6мм)',
        photo: 'пеллеты',
        table: {
            c_name: '',
            r_name: '',
            column: [],
            row: [],
            name: 'Цена',
            value: '10200 руб/тонна',
            flag: false,
        },
        category: 4,
        description: 'Пеллеты – небольшие по размеру (диаметр 4–8 мм, длина от 0,5 до 7 см) древесные гранулы цилиндрической формы, изготавливаемые на специальном оборудовании и предназначенные, главным образом, для отопления. В западноевропейских странах пеллеты уже давно успешно используются для обогрева коттеджей, загородных резиденций. В нашей стране этот продукт стал популярным не так давно. Одно из главных преимуществ – экологичность сырья. Немаловажное достоинство и способность использовать пеллеты в автоматизированных системах: сыпучие гранулы засыпаются в специальный резервуар и подаются в котел автоматизированным способом, без какого-либо участия в этом процессе человека. Это существенный плюс перед другими видами твердого топлива: колотые дрова, уголь, брикеты, которые для поддержания процесса горения регулярно нужно подкладывать в печь вручную. Топливные гранулы хорошо удерживают тепло, а это значит, что в вашем доме или квартире всегда будет много тепла и комфортно находиться.',
        spec: [
            {
                name: 'Материал', value: 'Хвойные отходы производства'
            },
        ]
    },
    {
        name: 'Поддоны',
        photo: 'поддоны',
        table: {
            c_name: '',
            r_name: '',
            column: [],
            row: [],
            name: 'Цена',
            value: 'Договорная',
            flag: false,
        },
        description: '',
        category: 5,
        spec: [
            {
                name: 'Материал', value: 'Хвойные материалы'
            }
        ]
    },
]

let goodsReducer = (state = initialState, action) => {
    switch (action.type) {

        default: {
            return (
                [...state]
            )
        }
    }
}

export default goodsReducer