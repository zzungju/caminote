import { TouristSpot } from '../index';

export const INITIAL_TOURIST_SPOTS: TouristSpot[] = [
  // --- 1. 생장 피에드 포르 (Saint-Jean-Pied-de-Port) ---
  { id: 1, destinationId: 1, name_ko: "산티아고 문", name_en: "Porte Saint-Jacques", location_ko: "생장 피에드 포르", location_en: "Saint-Jean-Pied-de-Port", description_ko: "유네스코 세계문화유산이자 프랑스길의 상징적인 시작점입니다.", description_en: "A UNESCO World Heritage gate and the symbolic starting point." },
  { id: 2, destinationId: 1, name_ko: "시타델 요새", name_en: "Citadelle", location_ko: "생장 피에드 포르", location_en: "Saint-Jean-Pied-de-Port", description_ko: "마을 꼭대기에서 피레네 산맥의 파노라마 뷰를 감상할 수 있는 요새입니다.", description_en: "A hilltop fortress offering panoramic views of the Pyrenees." },
  { id: 3, destinationId: 1, name_ko: "노트르담 다리", name_en: "Pont Notre-Dame", location_ko: "생장 피에드 포르", location_en: "Saint-Jean-Pied-de-Port", description_ko: "니브 강 위로 흐르는 중세의 낭만적인 돌다리입니다.", description_en: "A romantic medieval bridge over the Nive River." },

  // --- 2. 론세스바예스 (Roncesvalles) ---
  { id: 4, destinationId: 2, name_ko: "산타 마리아 왕립 성당", name_en: "Real Colegiata de Santa María", location_ko: "론세스바예스", location_en: "Roncesvalles", description_ko: "매일 저녁 순례자 축복 미사가 열리는 프랑스 고딕 양식의 성당입니다.", description_en: "Famous for its daily evening Pilgrim's Blessing." },
  { id: 5, destinationId: 2, name_ko: "산티아고 소성당", name_en: "Capilla de Santiago", location_ko: "론세스바예스", location_en: "Roncesvalles", description_ko: "13세기에 지어진 작고 소박한 고딕 양식의 순례자 성당입니다.", description_en: "A small 13th-century Gothic chapel for pilgrims." },

  // --- 3. 수비리 (Zubiri) ---
  { id: 6, destinationId: 3, name_ko: "분노의 다리", name_en: "Puente de la Rabia", location_ko: "수비리", location_en: "Zubiri", description_ko: "광견병을 치료한다는 전설이 깃든 아르가 강의 중세 다리입니다.", description_en: "A medieval bridge famous for the legend of curing rabies." },

  // --- 4. 팜플로나 (Pamplona) ---
  { id: 7, destinationId: 4, name_ko: "팜플로나 대성당", name_en: "Pamplona Cathedral", location_ko: "팜플로나", location_en: "Pamplona", description_ko: "신고전주의 외관 속에 숨겨진 화려한 고딕 양식 회랑이 아름다운 성당입니다.", description_en: "Known for its beautiful Gothic cloisters and Neoclassical facade." },
  { id: 8, destinationId: 4, name_ko: "카스티요 광장", name_en: "Plaza del Castillo", location_ko: "팜플로나", location_en: "Pamplona", description_ko: "헤밍웨이의 단골 카페가 있는 팜플로나의 심장부입니다.", description_en: "The heart of Pamplona, famously loved by Ernest Hemingway." },
  { id: 9, destinationId: 4, name_ko: "팜플로나 시청", name_en: "Ayuntamiento de Pamplona", location_ko: "팜플로나", location_en: "Pamplona", description_ko: "산 페르민 축제의 시작을 알리는 장소로 외벽 조각이 화려합니다.", description_en: "The site where the San Fermín festival officially begins." },

  // --- 5. 푸엔테 라 레이나 (Puente la Reina) ---
  { id: 10, destinationId: 5, name_ko: "로마네스크 교량", name_en: "Puente Románico", location_ko: "푸엔테 라 레이나", location_en: "Puente la Reina", description_ko: "프랑스길에서 가장 아름다운 다리 중 하나로 '왕비의 다리'라는 뜻입니다.", description_en: "One of the most beautiful Romanesque bridges on the Camino." },
  { id: 11, destinationId: 5, name_ko: "산티아고 성당", name_en: "Iglesia de Santiago", location_ko: "푸엔테 라 레이나", location_en: "Puente la Reina", description_ko: "무데하르 양식의 영향을 받은 독특한 정문 조각을 볼 수 있습니다.", description_en: "Features a unique portal with Mudéjar influence." },

  // --- 6. 에스테야 (Estella) ---
  { id: 12, destinationId: 6, name_ko: "이라체 와인 샘", name_en: "Bodegas Irache Wine Fountain", location_ko: "에스테야", location_en: "Estella", description_ko: "순례자들에게 와인을 무료로 제공하는 유명한 장소입니다.", description_en: "A famous fountain offering free wine to pilgrims." },
  { id: 13, destinationId: 6, name_ko: "산 페드로 데 라 루아 성당", name_en: "San Pedro de la Rúa", location_ko: "에스테야", location_en: "Estella", description_ko: "가파른 계단 위에 위치한 12세기의 유서 깊은 성당입니다.", description_en: "A historic 12th-century church located atop steep stairs." },

  // --- 7. 로스 아르코스 (Los Arcos) ---
  { id: 14, destinationId: 7, name_ko: "산타 마리아 성당", name_en: "Iglesia de Santa María", location_ko: "로스 아르코스", location_en: "Los Arcos", description_ko: "화려한 황금빛 바로크 양식 제단이 압권인 성당입니다.", description_en: "Famous for its magnificent golden Baroque altarpiece." },

  // --- 8. 비아나 (Viana) ---
  { id: 15, destinationId: 8, name_ko: "체사레 보르자의 묘", name_en: "Tomb of Cesare Borgia", location_ko: "비아나", location_en: "Viana", description_ko: "이탈리아 르네상스의 풍운아 체사레 보르자가 잠든 성당 앞 광장입니다.", description_en: "The burial site of the infamous Renaissance figure Cesare Borgia." },

  // --- 9. 로그로뇨 (Logroño) ---
  { id: 16, destinationId: 9, name_ko: "라우렐 거리", name_en: "Calle del Laurel", location_ko: "로그로뇨", location_en: "Logroño", description_ko: "수많은 타파스 바가 밀집한 로그로뇨의 대표적인 미식 거리입니다.", description_en: "The most famous street for tapas and Rioja wine." },
  { id: 17, destinationId: 9, name_ko: "산타 마리아 데 라 레돈다 대성당", name_en: "Co-cathedral of Logroño", location_ko: "로그로뇨", location_en: "Logroño", description_ko: "쌍둥이 탑과 미켈란젤로의 회화가 있는 로그로뇨의 랜드마크입니다.", description_en: "Landmark cathedral with twin towers and fine art." },

  // --- 10. 나헤라 (Nájera) ---
  { id: 18, destinationId: 10, name_ko: "산타 마리아 라 레알 수도원", name_en: "Monasterio de Santa María la Real", location_ko: "나헤라", location_en: "Nájera", description_ko: "나바라 왕국의 왕들이 잠든 판테온이 있는 역사적인 수도원입니다.", description_en: "Royal pantheon of the Kings of Navarre." },

  // --- 11. 산토 도밍고 (Santo Domingo de la Calzada) ---
  { id: 19, destinationId: 11, name_ko: "닭의 기적 대성당", name_en: "Cathedral of Santo Domingo", location_ko: "산토 도밍고", location_en: "Santo Domingo de la Calzada", description_ko: "기적을 기리기 위해 실제 닭을 성당 내부에 기르고 있습니다.", description_en: "Known for keeping live chickens inside to honor a miracle." },

  // --- 12. 벨로라도 (Belorado) ---
  { id: 20, destinationId: 12, name_ko: "산타 마리아 성당", name_en: "Church of Santa María", location_ko: "벨로라도", location_en: "Belorado", description_ko: "절벽 아래 포근하게 자리 잡은 중세 성당입니다.", description_en: "A charming church situated at the foot of a cliff." },

  // --- 13. 산후안 데 오르테가 (San Juan de Ortega) ---
  { id: 21, destinationId: 13, name_ko: "빛의 기적 수도원", name_en: "Monastery of San Juan de Ortega", location_ko: "산후안 데 오르테가", location_en: "San Juan de Ortega", description_ko: "춘분과 추분에 조각상이 빛나는 신비로운 현상으로 유명합니다.", description_en: "Famous for the 'Miracle of Light' during equinoxes." },

  // --- 14. 부르고스 (Burgos) ---
  { id: 22, destinationId: 14, name_ko: "부르고스 대성당", name_en: "Burgos Cathedral", location_ko: "부르고스", location_en: "Burgos", description_ko: "유네스코 고딕 건축의 정수로 엘 시드의 묘가 있는 웅장한 곳입니다.", description_en: "A UNESCO Gothic masterpiece and burial site of El Cid." },
  { id: 23, destinationId: 14, name_ko: "산타 마리아 문", name_en: "Arco de Santa María", location_ko: "부르고스", location_en: "Burgos", description_ko: "과거 도시로 들어오는 화려한 주 출입문이었습니다.", description_en: "The historic ornate main gate of the city." },

  // --- 15. 온타나스 (Hontanas) ---
  { id: 24, destinationId: 15, name_ko: "숨겨진 마을 풍경", name_en: "Hidden Valley", location_ko: "온타나스", location_en: "Hontanas", description_ko: "메세타 언덕 아래 예기치 않게 나타나는 평화로운 마을 전경입니다.", description_en: "The peaceful sight of the village hidden in the Meseta valley." },

  // --- 16. 보아디야 (Boadilla del Camino) ---
  { id: 25, destinationId: 16, name_ko: "사법권의 기둥", name_en: "Rollo Jurisdiccional", location_ko: "보아디야 델 카미노", location_en: "Boadilla del Camino", description_ko: "정교한 고딕 장식이 돋보이는 15세기 사법 상징 기둥입니다.", description_en: "An ornate 15th-century Gothic jurisdictional pillar." },

  // --- 17. 카리온 데 로스 콘데스 (Carrión de los Condes) ---
  { id: 26, destinationId: 17, name_ko: "산타 마리아 성당", name_en: "Church of Santa María", location_ko: "카리온", location_en: "Carrión de los Condes", description_ko: "수녀님들이 순례자를 위해 불러주는 노래로 유명한 성당입니다.", description_en: "Famous for the welcoming songs performed by the nuns." },

  // --- 18. 사아군 (Sahagún) ---
  { id: 27, destinationId: 18, name_ko: "무데하르 양식 성당", name_en: "Mudéjar Architecture", location_ko: "사아군", location_en: "Sahagún", description_ko: "붉은 벽돌을 사용한 독특한 이슬람-기독교 혼합 건축물들이 많습니다.", description_en: "Distinctive brick Mudéjar-style churches." },

  // --- 19. 엘 부르고 라네로 (El Burgo Ranero) ---
  { id: 28, destinationId: 19, name_ko: "메세타 가로수길", name_en: "Meseta Path", location_ko: "엘 부르고 라네로", location_en: "El Burgo Ranero", description_ko: "지평선 끝까지 이어지는 순례길 특유의 가로수 풍경이 압권입니다.", description_en: "The iconic tree-lined path of the Meseta." },

  // --- 20. 만시야 (Mansilla de las Mulas) ---
  { id: 29, destinationId: 20, name_ko: "중세 성벽", name_en: "Medieval City Walls", location_ko: "만시야", location_en: "Mansilla de las Mulas", description_ko: "마을을 보호하기 위해 세워진 견고한 12세기 성벽이 보존되어 있습니다.", description_en: "Well-preserved 12th-century defensive walls." },

  // --- 21. 레온 (León) ---
  { id: 30, destinationId: 21, name_ko: "레온 대성당", name_en: "León Cathedral", location_ko: "레온", location_en: "León", description_ko: "화려한 스테인드글라스가 빛을 뿜어내 '빛의 성당'으로 불립니다.", description_en: "Known as the 'House of Light' for its stained glass." },
  { id: 31, destinationId: 21, name_ko: "까사 보티네스", name_en: "Casa Botines", location_ko: "레온", location_en: "León", description_ko: "가우디가 설계한 몇 안 되는 카탈루냐 외부 건축물입니다.", description_en: "A neo-Gothic building designed by Antoni Gaudí." },
  { id: 32, destinationId: 21, name_ko: "산 이시도로 바실리카", name_en: "Basilica of San Isidoro", location_ko: "레온", location_en: "León", description_ko: "로마네스크 미술의 걸작인 천장화와 왕실 묘역이 있습니다.", description_en: "Site of the Royal Pantheon and Romanesque frescoes." },

  // --- 22. 비야당고스 (Villadangos del Páramo) ---
  { id: 33, destinationId: 22, name_ko: "기사 산티아고상", name_en: "Santiago Matamoros", location_ko: "비야당고스", location_en: "Villadangos del Páramo", description_ko: "성당 내부의 역동적인 기사 모습의 산티아고 성인상이 명물입니다.", description_en: "Famous statue of St. James as a knight." },

  // --- 23. 아스토르가 (Astorga) ---
  { id: 34, destinationId: 23, name_ko: "가우디 주교궁", name_en: "Episcopal Palace", location_ko: "아스토르가", location_en: "Astorga", description_ko: "가우디의 천재성이 돋보이는 동화 같은 외관의 성입니다.", description_en: "A fairytale palace designed by Antoni Gaudí." },
  { id: 35, destinationId: 23, name_ko: "아스토르가 대성당", name_en: "Astorga Cathedral", location_ko: "아스토르가", location_en: "Astorga", description_ko: "고딕, 르네상스, 바로크 양식이 조화롭게 섞인 독특한 성당입니다.", description_en: "A unique blend of Gothic, Renaissance, and Baroque styles." },

  // --- 24. 라바날 델 카미노 (Rabanal del Camino) ---
  { id: 36, destinationId: 24, name_ko: "그레고리안 찬트", name_en: "Gregorian Chants", location_ko: "라바날", location_en: "Rabanal del Camino", description_ko: "수도사들이 매일 저녁 부르는 신비롭고 평화로운 노래입니다.", description_en: "Experience the monks' evening Gregorian chants." },

  // --- 25. 몰리나세카 (Molinaseca) ---
  { id: 37, destinationId: 25, name_ko: "로마교와 메르루아 강", name_en: "Roman Bridge", location_ko: "몰리나세카", location_en: "Molinaseca", description_ko: "여름철 순례자들이 발을 담그며 쉬어가는 아름다운 다리입니다.", description_en: "A beautiful bridge and popular resting spot by the river." },

  // --- 26. 폰페라다 (Ponferrada) ---
  { id: 38, destinationId: 26, name_ko: "템플 기사단 성", name_en: "Templar Castle", location_ko: "폰페라다", location_en: "Ponferrada", description_ko: "순례자 보호를 위해 템플 기사단이 지은 거대 요세입니다.", description_en: "A massive fortress built by the Knights Templar." },
  { id: 39, destinationId: 26, name_ko: "시계탑", name_en: "Torre del Reloj", location_ko: "폰페라다", location_en: "Ponferrada", description_ko: "마을 구시가지의 입구를 지키고 있는 유서 깊은 시계탑입니다.", description_en: "A historic clock tower in the old town entrance." },

  // --- 27. 비야프랑카 (Villafranca del Bierzo) ---
  { id: 40, destinationId: 27, name_ko: "용서의 문", name_en: "Puerta del Perdón", location_ko: "비야프랑카", location_en: "Villafranca del Bierzo", description_ko: "산티아고까지 못 가는 아픈 순례자들에게 면죄부를 주던 성문입니다.", description_en: "A sacred gate offering indulgence for the sick." },

  // --- 28. 오 세브레이로 (O Cebreiro) ---
  { id: 41, destinationId: 28, name_ko: "전통 가옥 팔로사", name_en: "Pallozas", location_ko: "오 세브레이로", location_en: "O Cebreiro", description_ko: "갈리시아 산간 지역의 독특한 원형 돌집들을 볼 수 있습니다.", description_en: "Traditional round stone houses with thatched roofs." },
  { id: 42, destinationId: 28, name_ko: "기적의 성배 성당", name_en: "Church of Santa María", location_ko: "오 세브레이로", location_en: "O Cebreiro", description_ko: "성배의 기적이 일어난 곳으로 유명한 고풍스러운 성당입니다.", description_en: "Famous for a medieval Eucharistic miracle." },

  // --- 29. 트리아카스텔라 (Triacastela) ---
  { id: 43, destinationId: 29, name_ko: "천년 밤나무", name_en: "Ancient Chestnut Tree", location_ko: "트리아카스텔라", location_en: "Triacastela", description_ko: "수백 년의 세월을 견뎌온 거대한 밤나무가 신비로움을 더합니다.", description_en: "A massive, centuries-old chestnut tree." },

  // --- 30. 사리아 (Sarria) ---
  { id: 44, destinationId: 30, name_ko: "마요르 거리와 전망대", name_en: "Rúa Maior", location_ko: "사리아", location_en: "Sarria", description_ko: "순례자들이 가장 많이 붐비는 사리아 구시가지의 중심 거리입니다.", description_en: "The lively main street of the Sarria old town." },

  // --- 31. 포르토마린 (Portomarín) ---
  { id: 45, destinationId: 31, name_ko: "요새형 산 니콜라스 성당", name_en: "Church of San Nicolás", location_ko: "포르토마린", location_en: "Portomarín", description_ko: "수몰을 피해 벽돌을 하나씩 옮겨 다시 세운 요새 같은 성당입니다.", description_en: "A fortress-church relocated from the submerged town." },

  // --- 32. 팔라스 데 레이 (Palas de Rei) ---
  { id: 46, destinationId: 32, name_ko: "산 티르소 성당", name_en: "Church of San Tirso", location_ko: "팔라스 데 레이", location_en: "Palas de Rei", description_ko: "로마네스크 양식의 정문이 아름다운 소박한 시골 성당입니다.", description_en: "A simple church with a beautiful Romanesque portal." },

  // --- 33. 멜리데 (Melide) ---
  { id: 47, destinationId: 33, name_ko: "뽈뽀 맛집 에세키엘", name_en: "Pulpería Ezequiel", location_ko: "멜리데", location_en: "Melide", description_ko: "갈리시아 전통 문어 요리를 맛볼 수 있는 최고의 성지입니다.", description_en: "The most famous place for Galician-style octopus." },

  // --- 34. 아르수아 (Arzúa) ---
  { id: 48, destinationId: 34, name_ko: "치즈 박물관", name_en: "Cheese Museum", location_ko: "아르수아", location_en: "Arzúa", description_ko: "지역 특산물인 부드러운 아르수아 치즈의 역사를 배울 수 있습니다.", description_en: "Learn about the famous local Arzúa-Ulloa cheese." },

  // --- 35. 오 페드루소 (O Pedrouzo) ---
  { id: 49, destinationId: 35, name_ko: "유칼립투스 숲", name_en: "Eucalyptus Forests", location_ko: "오 페드루소", location_en: "O Pedrouzo", description_ko: "산티아고 입성 전 마지막으로 지나는 향긋한 숲길입니다.", description_en: "Fragrant forests on the final stretch to Santiago." },

  // --- 36. 산티아고 (Santiago de Compostela) ---
  { id: 50, destinationId: 36, name_ko: "산티아고 대성당", name_en: "Santiago Cathedral", location_ko: "산티아고", location_en: "Santiago de Compostela", description_ko: "순례의 마침표이자 야고보 성인의 무덤이 있는 장엄한 성소입니다.", description_en: "The grand goal of the pilgrimage and St. James' tomb." },
  { id: 51, destinationId: 36, name_ko: "오브라도이로 광장", name_en: "Praza do Obradoiro", location_ko: "산티아고", location_en: "Santiago de Compostela", description_ko: "도착한 모든 순례자가 감동을 나누는 대성당 앞 광장입니다.", description_en: "The famous grand square in front of the Cathedral." },
  { id: 52, destinationId: 36, name_ko: "알라메다 공원", name_en: "Alameda Park", location_ko: "산티아고", location_en: "Santiago de Compostela", description_ko: "멀리서 대성당의 두 첨탑을 한눈에 담을 수 있는 최고의 조망지입니다.", description_en: "Park offering iconic views of the Cathedral towers." },
  { id: 53, destinationId: 36, name_ko: "환희의 언덕 (몬테 도 고조)", name_en: "Monte del Gozo", location_ko: "산티아고", location_en: "Santiago de Compostela", description_ko: "산티아고 대성당의 첨탑이 처음으로 보이기 시작하는 기쁨의 언덕입니다.", description_en: "The hill where pilgrims first catch sight of the Cathedral." },

];