import { TouristSpot } from '../index';

export const INITIAL_TOURIST_SPOTS: TouristSpot[] = [
  // --- 1. 생장 피에드 포르 (Saint-Jean-Pied-de-Port) ---
  { 
    id: 1, 
    destinationId: 1, 
    name_ko: "산티아고 문", 
    name_en: "Porte Saint-Jacques", 
    location: "Rue de la Citadelle, 64220 Saint-Jean-Pied-de-Port", 
    description_ko: "유네스코 세계문화유산이자 프랑스길의 상징적인 시작점입니다.", 
    description_en: "A UNESCO World Heritage gate and the symbolic starting point." 
  },
  { 
    id: 2, 
    destinationId: 1, 
    name_ko: "시타델 요새", 
    name_en: "Citadelle", 
    location: "Rue de la Citadelle, 64220 Saint-Jean-Pied-de-Port", 
    description_ko: "마을 꼭대기에서 피레네 산맥의 파노라마 뷰를 감상할 수 있는 요새입니다.", 
    description_en: "A hilltop fortress offering panoramic views of the Pyrenees." 
  },
  { 
    id: 3, 
    destinationId: 1, 
    name_ko: "노트르담 다리", 
    name_en: "Pont Notre-Dame", 
    location: "Rue de la France, 64220 Saint-Jean-Pied-de-Port", 
    description_ko: "니브 강 위로 흐르는 중세의 낭만적인 돌다리입니다.", 
    description_en: "A romantic medieval bridge over the Nive River." 
  },

  // --- 2. 론세스바예스 (Roncesvalles) ---
  { 
    id: 4, 
    destinationId: 2, 
    name_ko: "산타 마리아 왕립 성당", 
    name_en: "Real Colegiata de Santa María", 
    location: "Calle Única, s/n, 31650 Roncesvalles", 
    description_ko: "매일 저녁 순례자 축복 미사가 열리는 프랑스 고딕 양식의 성당입니다.", 
    description_en: "Famous for its daily evening Pilgrim's Blessing." 
  },

  // --- 3. 수비리 (Zubiri) ---
  { 
    id: 6, 
    destinationId: 3, 
    name_ko: "분노의 다리", 
    name_en: "Puente de la Rabia", 
    location: "Calle del Puente, 31630 Zubiri", 
    description_ko: "광견병을 치료한다는 전설이 깃든 아르가 강의 중세 다리입니다.", 
    description_en: "A medieval bridge famous for the legend of curing rabies." 
  },

  // --- 4. 팜플로나 (Pamplona) ---
  { 
    id: 7, 
    destinationId: 4, 
    name_ko: "팜플로나 대성당", 
    name_en: "Pamplona Cathedral", 
    location: "Calle Dormitalería, s/n, 31001 Pamplona", 
    description_ko: "신고전주의 외관 속에 숨겨진 화려한 고딕 양식 회랑이 아름다운 성당입니다.", 
    description_en: "Known for its beautiful Gothic cloisters and Neoclassical facade." 
  },
  { 
    id: 8, 
    destinationId: 4, 
    name_ko: "카스티요 광장", 
    name_en: "Plaza del Castillo", 
    location: "Plaza del Castillo, 31001 Pamplona", 
    description_ko: "헤밍웨이의 단골 카페가 있는 팜플로나의 심장부입니다.", 
    description_en: "The heart of Pamplona, famously loved by Ernest Hemingway." 
  },

  // --- 5. 푸엔테 라 레이나 (Puente la Reina) ---
  { 
    id: 10, 
    destinationId: 5, 
    name_ko: "로마네스크 교량", 
    name_en: "Puente Románico", 
    location: "Calle Mayor, 31100 Puente la Reina", 
    description_ko: "프랑스길에서 가장 아름다운 다리 중 하나로 '왕비의 다리'라는 뜻입니다.", 
    description_en: "One of the most beautiful Romanesque bridges on the Camino." 
  },

  // --- 6. 에스테야 (Estella) ---
  { 
    id: 12, 
    destinationId: 6, 
    name_ko: "이라체 와인 샘", 
    name_en: "Bodegas Irache Wine Fountain", 
    location: "Monasterio de Irache, 31240 Ayegui", 
    description_ko: "순례자들에게 와인을 무료로 제공하는 유명한 장소입니다.", 
    description_en: "A famous fountain offering free wine to pilgrims." 
  },

  // --- 9. 로그로뇨 (Logroño) ---
  { 
    id: 16, 
    destinationId: 9, 
    name_ko: "라우렐 거리", 
    name_en: "Calle del Laurel", 
    location: "Calle del Laurel, 26001 Logroño", 
    description_ko: "수많은 타파스 바가 밀집한 로그로뇨의 대표적인 미식 거리입니다.", 
    description_en: "The most famous street for tapas and Rioja wine." 
  },

  // --- 11. 산토 도밍고 (Santo Domingo de la Calzada) ---
  { 
    id: 19, 
    destinationId: 11, 
    name_ko: "닭의 기적 대성당", 
    name_en: "Cathedral of Santo Domingo", 
    location: "Plaza del Santo, 3, 26240 Santo Domingo de la Calzada", 
    description_ko: "기적을 기리기 위해 실제 닭을 성당 내부에 기르고 있습니다.", 
    description_en: "Known for keeping live chickens inside to honor a miracle." 
  },

  // --- 14. 부르고스 (Burgos) ---
  { 
    id: 22, 
    destinationId: 14, 
    name_ko: "부르고스 대성당", 
    name_en: "Burgos Cathedral", 
    location: "Plaza de Santa María, s/n, 09003 Burgos", 
    description_ko: "유네스코 고딕 건축의 정수로 엘 시드의 묘가 있는 웅장한 곳입니다.", 
    description_en: "A UNESCO Gothic masterpiece and burial site of El Cid." 
  },

  // --- 17. 카리온 데 로스 콘데스 (Carrión de los Condes) ---
  { 
    id: 26, 
    destinationId: 17, 
    name_ko: "산타 마리아 성당", 
    name_en: "Church of Santa María", 
    location: "Calle Santa María, 1, 34120 Carrión de los Condes", 
    description_ko: "수녀님들이 순례자를 위해 불러주는 노래로 유명한 성당입니다.", 
    description_en: "Famous for the welcoming songs performed by the nuns." 
  },

  // --- 21. 레온 (León) ---
  { 
    id: 30, 
    destinationId: 21, 
    name_ko: "레온 대성당", 
    name_en: "León Cathedral", 
    location: "Plaza Regla, s/n, 24003 León", 
    description_ko: "화려한 스테인드글라스가 빛을 뿜어내 '빛의 성당'으로 불립니다.", 
    description_en: "Known as the 'House of Light' for its stained glass." 
  },
  { 
    id: 31, 
    destinationId: 21, 
    name_ko: "까사 보티네스", 
    name_en: "Casa Botines", 
    location: "Plaza de San Marcelo, 5, 24002 León", 
    description_ko: "가우디가 설계한 몇 안 되는 카탈루냐 외부 건축물입니다.", 
    description_en: "A neo-Gothic building designed by Antoni Gaudí." 
  },

  // --- 23. 아스토르가 (Astorga) ---
  { 
    id: 34, 
    destinationId: 23, 
    name_ko: "가우디 주교궁", 
    name_en: "Episcopal Palace", 
    location: "Plaza Eduardo de Castro, s/n, 24700 Astorga", 
    description_ko: "가우디의 천재성이 돋보이는 동화 같은 외관의 성입니다.", 
    description_en: "A fairytale palace designed by Antoni Gaudí." 
  },

  // --- 26. 폰페라다 (Ponferrada) ---
  { 
    id: 38, 
    destinationId: 26, 
    name_ko: "템플 기사단 성", 
    name_en: "Templar Castle", 
    location: "Avenida del Castillo, s/n, 24401 Ponferrada", 
    description_ko: "순례자 보호를 위해 템플 기사단이 지은 거대 요세입니다.", 
    description_en: "A massive fortress built by the Knights Templar." 
  },

  // --- 30. 사리아 (Sarria) ---
  { 
    id: 44, 
    destinationId: 30, 
    name_ko: "마요르 거리와 전망대", 
    name_en: "Rúa Maior", 
    location: "Rúa Maior, 27600 Sarria", 
    description_ko: "순례자들이 가장 많이 붐비는 사리아 구시가지의 중심 거리입니다.", 
    description_en: "The lively main street of the Sarria old town." 
  },

  // --- 33. 멜리데 (Melide) ---
  { 
    id: 47, 
    destinationId: 33, 
    name_ko: "뽈뽀 맛집 에세키엘", 
    name_en: "Pulpería Ezequiel", 
    location: "Rúa Cantón San Roque, 48, 15800 Melide", 
    description_ko: "갈리시아 전통 문어 요리를 맛볼 수 있는 최고의 성지입니다.", 
    description_en: "The most famous place for Galician-style octopus." 
  },

  // --- 36. 산티아고 (Santiago de Compostela) ---
  { 
    id: 50, 
    destinationId: 36, 
    name_ko: "산티아고 대성당", 
    name_en: "Santiago Cathedral", 
    location: "Praza do Obradoiro, s/n, 15704 Santiago de Compostela", 
    description_ko: "순례의 마침표이자 야고보 성인의 무덤이 있는 장엄한 성소입니다.", 
    description_en: "The grand goal of the pilgrimage and St. James' tomb." 
  },
  { 
    id: 53, 
    destinationId: 36, 
    name_ko: "환희의 언덕 (몬테 도 고조)", 
    name_en: "Monte del Gozo", 
    location: "Carretera de San Marcos, s/n, 15820 Santiago de Compostela", 
    description_ko: "산티아고 대성당의 첨탑이 처음으로 보이기 시작하는 기쁨의 언덕입니다.", 
    description_en: "The hill where pilgrims first catch sight of the Cathedral." 
  },

  // --- 37. 피니스테레 (Finisterre) ---
  { 
    id: 54, 
    destinationId: 37, 
    name_ko: "0km 이정표와 등대", 
    name_en: "Faro de Fisterra", 
    location: "Carretera del Faro, s/n, 15155 Fisterra", 
    description_ko: "순례길의 진짜 끝을 상징하는 0km 지점과 대서양을 밝히는 등대입니다.", 
    description_en: "The iconic 0km milestone and the lighthouse at the end of the world." 
  }
];