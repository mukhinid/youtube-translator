interface Languages {
  [key: string]: string;
}

const languages: Languages = {
  'Абхазский': 'ab',
  'Азербайджанский': 'az',
  'Аймара': 'ay',
  'Албанский': 'sq',
  'Амхарский': 'am',
  'Английский': 'en',
  'Английский (Великобритания)': 'en-GB',
  'Английский (Индия)': 'en-IN',
  'Английский (Ирландия)': 'en-IE',
  'Английский (Канада)': 'en-CA',
  'Английский (Соединенные Штаты)': 'en-US',
  'Арабский': 'ar',
  'Арамейский': 'arc',
  'Армянский': 'hy',
  'Ассамский': 'as',
  'Афарский': 'aa',
  'Африкаанс': 'af',
  'Баскский': 'eu',
  'Башкирский': 'ba',
  'Белорусский': 'be',
  'Бенгальский': 'bn',
  'Бирманский': 'my',
  'Бислама': 'bi',
  'Болгарский': 'bg',
  'Боснийский': 'bs',
  'Бретонский': 'br',
  'Бходжпури': 'bh',
  'Валлийский': 'cy',
  'Венгерский': 'hu',
  'Волапюк': 'vo',
  'Волоф': 'wo',
  'Вьетнамский': 'vi',
  'Гаитянский': 'ht',
  'Галисийский': 'gl',
  'Гренландский': 'kl',
  'Греческий': 'el',
  'Грузинский': 'ka',
  'Гуарани': 'gn',
  'Гуджарати': 'gu',
  'Гэльский': 'gd',
  'Датский': 'da',
  'Дзонг-кэ': 'dz',
  'Западнофризский': 'fy',
  'Зулу': 'zu',
  'Иврит': 'iw',
  'Игбо': 'ig',
  'Идиш': 'yi',
  'Индонезийский': 'id',
  'Интерлингва': 'ia',
  'Интерлингве': 'ie',
  'Инуктитут': 'iu',
  'Инупиак': 'ik',
  'Ирландский': 'ga',
  'Исландский': 'is',
  'Испанский': 'es',
  'Испанский (Испания)': 'es-ES',
  'Испанский (Латинская Америка)': 'es-419',
  'Испанский (Мексика)': 'es-MX',
  'Испанский (Соединенные Штаты)': 'es-US',
  'Итальянский': 'it',
  'Йоруба': 'yo',
  'Казахский': 'kk',
  'Каннада': 'kn',
  'Кантонский': 'yue',
  'Кантонский (Гонконг)': 'yue-HK',
  'Каталанский': 'ca',
  'Кашмири': 'ks',
  'Кечуа': 'qu',
  'Киньяруанда': 'rw',
  'Киргизский': 'ky',
  'Китайский': 'zh',
  'Китайский (Гонконг)': 'zh-HK',
  'Китайский (Китай)': 'zh-CN',
  'Китайский (Сингапур)': 'zh-SG',
  'Китайский (Тайвань)': 'zh-TW',
  'Китайский (традиционная китайская)': 'zh-Hant',
  'Китайский (упрощенная китайская)': 'zh-Hans',
  'Клингонский': 'tlh',
  'Корейский': 'ko',
  'Корсиканский': 'co',
  'Коса': 'xh',
  'Курдский': 'ku',
  'Кхмерский': 'km',
  'Лаосский': 'lo',
  'Латинский': 'la',
  'Латышский': 'lv',
  'Лингала': 'ln',
  'Литовский': 'lt',
  'Люксембургский': 'lb',
  'Македонский': 'mk',
  'Малагасийский': 'mg',
  'Малайский': 'ms',
  'Малаялам': 'ml',
  'Мальтийский': 'mt',
  'Манипурский': 'mni',
  'Маори': 'mi',
  'Маратхи': 'mr',
  'Масаи': 'mas',
  'Мизо': 'lus',
  'Миньнань': 'nan',
  'Миньнань (Тайвань)': 'nan-TW',
  'Монгольский': 'mn',
  'Навахо': 'nv',
  'Науру': 'na',
  'Немецкий': 'de',
  'Немецкий (Австрия)': 'de-AT',
  'Немецкий (Германия)': 'de-DE',
  'Немецкий (Швейцария)': 'de-CH',
  'Непальский': 'ne',
  'Нидерландский': 'nl',
  'Нидерландский (Бельгия)': 'nl-BE',
  'Нидерландский (Нидерланды)': 'nl-NL',
  'Норвежский': 'no',
  'Окситанский': 'oc',
  'Ория': 'or',
  'Оромо': 'om',
  'Панджаби': 'pa',
  'Персидский': 'fa',
  'Персидский (Афганистан)': 'fa-AF',
  'Персидский (Иран)': 'fa-IR',
  'Польский': 'pl',
  'Португальский': 'pt',
  'Португальский (Бразилия)': 'pt-BR',
  'Португальский (Португалия)': 'pt-PT',
  'Пушту': 'ps',
  'Романшский': 'rm',
  'Румынский': 'ro',
  'Румынский (Молдова)': 'mo',
  'Рунди': 'rn',
  'Русский': 'ru',
  'Русский (латиница)': 'ru-Latn',
  'Самоанский': 'sm',
  'Санго': 'sg',
  'Санскрит': 'sa',
  'Сардинский': 'sc',
  'Свази': 'ss',
  'Сербский': 'sr',
  'Сербский (кириллица)': 'sr-Cyrl',
  'Сербский (латиница)': 'sr-Latn',
  'Сербскохорватский': 'sh',
  'Сингальский': 'si',
  'Синдхи': 'sd',
  'Сицилийский': 'scn',
  'Словацкий': 'sk',
  'Словенский': 'sl',
  'Сомали': 'so',
  'Суахили': 'sw',
  'Сунданский': 'su',
  'Тагалог': 'tl',
  'Таджикский': 'tg',
  'Тайский': 'th',
  'Тамильский': 'ta',
  'Татарский': 'tt',
  'Тви': 'tw',
  'Телугу': 'te',
  'Тибетский': 'bo',
  'Тигринья': 'ti',
  'Ток-писин': 'tpi',
  'Тонганский': 'to',
  'Тсвана': 'tn',
  'Тсонга': 'ts',
  'Турецкий': 'tr',
  'Туркменский': 'tk',
  'Узбекский': 'uz',
  'Украинский': 'uk',
  'Урду': 'ur',
  'Фарерский': 'fo',
  'Фиджи': 'fj',
  'Филиппинский': 'fil',
  'Финский': 'fi',
  'Французский': 'fr',
  'Французский (Бельгия)': 'fr-BE',
  'Французский (Канада)': 'fr-CA',
  'Французский (Франция)': 'fr-FR',
  'Французский (Швейцария)': 'fr-CH',
  'Фулах': 'ff',
  'Хакка': 'hak',
  'Хакка (Тайвань)': 'hak-TW',
  'Хауса': 'ha',
  'Хинди': 'hi',
  'Хинди (латиница)': 'hi-Latn',
  'Хиримоту': 'ho',
  'Хорватский': 'hr',
  'Чероки': 'chr',
  'Чешский': 'cs',
  'Чоктавский': 'cho',
  'Шведский': 'sv',
  'Шона': 'sn',
  'Эсперанто': 'eo',
  'Эстонский': 'et',
  'Южный сото': 'st',
  'Яванский': 'jv',
  'Японский': 'ja',
  'Ase': 'ase',
  'Sdp': 'sdp',
  'Vro': 'vro'
}

export function getCode(lang: string): string {
  if ((<Object>languages).hasOwnProperty(lang)) {
    return languages[lang];
  }
  return '';
}
