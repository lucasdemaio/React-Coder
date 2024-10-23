const products = [
    {
      id: "MOE14",
      name: "Moto E14 4G",
      description: "Pantalla HD+ de 6.6”. Hasta 4 GB de memoria RAM con RAM Boost2 y almacenamiento de 64 GB4 expandible hasta 1 TB",
      price: 178000,
      stock: 20,
      image: "/img/celulares/moto-e14.png",
      category: "celulares"
    },
    {
        id: "XIRE13",
        name: "Xiaomi Redmi 13C",
        description: "Pantalla increíble para una visualización inmersiva de 6,74. Alta frecuencia de actualización de 90Hz. Batería grande de 5000mAh",
        price: 329999,
        stock: 15,
        image: "/img/celulares/xiaomi-redmi-13c.png",
        category: "celulares"
      },
      {
        id: "SAMGA15",
        name: "SAMSUNG Galaxy A15",
        description: "Pantalla súper vívida y brillante. 4GB RAM. Pantalla 6.5” ",
        price: 330000,
        stock: 25,
        image: "/img/celulares/sam-galaxy-a15.png",
        category: "celulares"
      },
      {
        id: "SAMGA55",
        name: "SAMSUNG Galaxy A55",
        description: "50 MP de colores y detalles vibrantes. Camara frontal 32MP. Pantalla 6.6”",
        price: 829999,
        stock: 25,
        image: "/img/celulares/sam-galaxy-a55.png",
        category: "celulares"
      },
      {
        id: "TCL40NTX",
        name: "TCL NTXPAPER 40",
        description: "Pantalla NXTPAPER y sonido estéreo. Camara frontal 32MP. Pantalla 6.6”. 8GB RAM",
        price: 360000,
        stock: 8,
        image: "/img/celulares/tcl-40ntxpaper.png",
        category: "celulares"
      },
      {
        id: "XIREA3",
        name: "Xiaomi Redmi A3",
        description: "Pantalla Dot Drop de 6,71”. Huella dactilar lateral o la cara con IA para desbloquear fácilmente su teléfono. Batería ultragrande de 5000 mAh",
        price: 250000,
        stock: 18,
        image: "/img/celulares/xiaomi-redmi-a3.png",
        category: "celulares"
      },
      {
        id: "bgsm32",
        name: "BHG SmartTV 32",
        description: "Bluetooth 5.0 / Control remoto por voz / Acceso rápido a APPS / Chromecast built-in / Dolby Audio / Asistente Hey Google. Con base (Ancho: 719 mm x Alto: 461 mm x Profundidad: 185 mm) / Sin base (Ancho: 719 mm x Alto: 417 mm x Profundidad: 87 mm)",
        price: 289000,
        stock: 34,
        image: "/img/tv/bghsmart32.jpg",
        category: "televisores"
      },
      {
        id: "nbx43",
        name: "Noblex Smart 43",
        description: "Pantalla Plana. Chromecast Built-In / Google Play / Dolby / HDR / Sonido Surround / Android 11. Con Base (Alto: 60,3 cm x Ancho: 95,5 cm x Profundidad: 20,5 cm) / Sin Base (Alto: 55,8 cm x Ancho: 95,5 cm x Profundidad: 8.5 cm)",
        price: 433899,
        stock: 22,
        image: "/img/tv/noblexsmart43.jpg",
        category: "televisores"
      },
      {
        id: "phsmart32",
        name: "Philips Smart 32",
        description: "Pantalla Plana. 1366 x 768. Control por voz. El Asistente de Google / Imagen nítida. Visualización dinámica / Dolby Audio para una verdadera experiencia de audio / Mejora de la imagen HDR10, HLG (Hybrid Log Gamma) y Pixel Plus HD. 	Con base (Ancho: 717 mm x Altura: 454 mm x Profundidad: 176 mm) / Sin base (Ancho: 717 mm x Altura: 435 mm x Profundidad: 89 mm)",
        price: 314999,
        stock: 18,
        image: "/img/tv/phsmart32.jpg",
        category: "televisores"
      },
      {
        id: "rcasmart32",
        name: "RCA Smart 32",
        description: "Pantalla Plana. 1366 x 768. Google Assistant / Bluetooth / HDR / Chromecast Integrado / Google Play / Micro Dimming / Dolby Digital / Salida de Audio Digital / Sonido MTS (ESTEREO/MONO/SAP). Con base: (Ancho: 71,5 cm x Alto: 46,8 cm x Profundidad: 18,0 cm) / Sin base: (Ancho: 71,5 cm x Alto: 42,1 cm x Profundidad: 8 cm)",
        price: 294999,
        stock: 23,
        image: "/img/tv/rcasmart32.jpg",
        category: "televisores"
      },
      {
        id: "samsmart65",
        name: "SAMSUNG Smart 65",
        description: "4K Ultra HD. Dynamic Crystal Color / Tonos realistas / Diseño elegante y delgado / Procesador Crystal 4K / Smart Hub / Motion Xcelerator / HDR. 	Con soporte (Ancho: 1450.9 mm x Alto: 869.6 x Profundidad: 281.8 mm) / Sin soporte (Ancho: 1450.9 x Alto: 831.9 mm x Profundidad: 25.7 mm)",
        price: 1229000,
        stock: 18,
        image: "/img/tv/samsmart65.jpg",
        category: "televisores"
      },
      {
        id: "cafoste",
        name: "Cafetera Oster Expresso",
        description: "	Acero Inoxidable y Negro. Sistema de calentamiento con tecnología Thermoblock / Dos bombas que permite preparar espresso y espumar leche al mismo tiempo / Molinillo cónico de muelas con dosificación automática y tecnología antiestática",
        price: 1429000,
        stock: 10,
        image: "/img/electro/cafeteraoster.jpg",
        category: "electrodomesticos"
      },
      {
        id: "cafpeab",
        name: "Cafetera Peabody",
        description: "Acero Inoxidable. Cuerpo con exterior de acero inoxidable • Recipiente colector extraíble para fácil limpieza • Diseño moderno y minimalista • La regulación de la molienda depende del tiempo de funcionamiento",
        price: 429000,
        stock: 12,
        image: "/img/electro/cafeterapeabody.jpg",
        category: "electrodomesticos"
      },
      {
        id: "freUltra",
        name: "Freidora Aire Ultracomb",
        description: "Celeste con Inox. 3 litros de capacidad / Regulador de temperatura de 80-200ºC / Cestillo con capacidad para 0,6 kg de papas / Base antideslizante / Control digital por pantalla táctil / Temporizador / 8 programas predefinidos / Alarma acústica de fin de cocción",
        price: 87000,
        stock: 12,
        image: "/img/electro/freidoraaire.jpg",
        category: "electrodomesticos"
      },
      {
        id: "plansmlif",
        name: "Plancha SmartLife",
        description: "Base antiadherente: Ideal para que se deslice bien y sea resistente / Temperatura regulable: permite planchar gran variedad de telas, utilizando desde temperatura baja para telas sintéticas hasta temperaturas altas cuando se debe planchar algodón o lino",
        price: 58999,
        stock: 34,
        image: "/img/electro/planchasmartlife.jpg",
        category: "electrodomesticos"
      },
      {
        id: "tostUl3",
        name: "Tostadora UltraComb",
        description: "Cuerpo frío al tacto / Auto regulable para 2 fetas de pan lactal / 7 niveles de tostado / Botones para cancelar con señal luminosa / Bandeja inferior removible para limpieza de las migas / Guarda cables",
        price: 37999,
        stock: 36,
        image: "/img/electro/tostadoraultracomb.jpg",
        category: "electrodomesticos"
      },
      {
        id: "dell3520",
        name: "Notebook 15.6 Dell Inspiron 3520",
        description: "Intel Core i3-1215U. 8 Gb. 256Gb SSD. Windows 11",
        price: 1100000,
        stock: 25,
        image: "/img/computacion/dellinspi3520.jpg",
        category: "computacion"
      },
      {
        id: "lenide3",
        name: "Notebook 15.6 Lenovo IdeaPad 3",
        description: "Intel Core i7-1165G7 11ª Generación. 8 Gb. 256Gb SSD. Windows 11",
        price: 1400000,
        stock: 23,
        image: "/img/computacion/lenoIdeaPad3.jpg",
        category: "computacion"
      },
      {
        id: "lenidepa",
        name: "Notebook 15.6 Lenovo IdeaPad Gaming 3",
        description: "AMD Ryzen 7 5800H 3.2G. 16 Gb. 512Gb SSD. NVIDIA GeForce GTX 1650 4GB. Windows 11",
        price: 1999000,
        stock: 19,
        image: "/img/computacion/lenoIdeaPad.jpg",
        category: "computacion"
      },
      {
        id: "sambo3",
        name: "Notebook 15.6 Samsung Galaxy Book3",
        description: "Intel Core i3-1315U. 8 Gb. 256Gb SSD. Windows 11",
        price: 1480000,
        stock: 15,
        image: "/img/computacion/samgalBook3.jpg",
        category: "computacion"
      },
  ]

  const getProducts = () => {
    return new Promise((resolve, reject) => {
      setTimeout( ()=>{
        resolve(products)
      }, 1000 )
    })
  }
  
  export { getProducts }