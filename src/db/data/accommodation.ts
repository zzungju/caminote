import { Accommodation } from '../index';

export const INITIAL_ACCOMMODATIONS: Accommodation[] = [
  // 1. 생장 피에드 포르
  { 
    id: 1, 
    destinationId: 1, 
    name_ko: "생장 공립 알베르게 (39번지)", 
    name_en: "Albergue Municipal (39 Rue de la Citadelle)", 
    location_ko: "생장 피에드 포르", 
    location_en: "Saint-Jean-Pied-de-Port", 
    price: 12, 
    bedCounts: 32, 
    contactNumber: "+33 5 59 37 05 09", 
    mail: null, 
    openTime: "14:00", 
    closeTime: "22:00", 
    operatingPeriod: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"], 
    information_ko: "순례자 사무실과 함께 운영되는 메인 공립 숙소입니다. 반드시 여기서 먼저 접수해야 합니다.", 
    information_en: "Main municipal albergue and pilgrim office. Registration is required here first." 
  },
  { 
    id: 2, 
    destinationId: 1, 
    name_ko: "생장 공립 알베르게 (55번지)", 
    name_en: "Albergue Municipal (55 Rue de la Citadelle)", 
    location_ko: "생장 피에드 포르", 
    location_en: "Saint-Jean-Pied-de-Port", 
    price: 12, 
    bedCounts: 18, 
    contactNumber: "+33 5 59 37 05 09", 
    mail: null, 
    openTime: "14:00", 
    closeTime: "22:00", 
    operatingPeriod: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"], 
    information_ko: "39번지 숙소가 만석일 경우 안내받는 공립 별관입니다.", 
    information_en: "Municipal annex provided when the main building (No. 39) is full." 
  },
  // 2. 론세스바예스
  { id: 3, destinationId: 2, name_ko: "론세스바예스 공립 알베르게", name_en: "Albergue de Roncesvalles", location_ko: "론세스바예스", location_en: "Roncesvalles", price: 14, bedCounts: 183, contactNumber: "+34 948 76 00 00", mail: "albergue@roncesvalles.es", openTime: "14:00", closeTime: "22:00", operatingPeriod: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"], information_ko: "온라인 예약 권장(albergueroncesvalles.com).", information_en: "Online booking recommended." },

  // 3. 수비리
  { id: 4, destinationId: 3, name_ko: "수비리 공립 알베르게", name_en: "Albergue Municipal de Zubiri", location_ko: "수비리", location_en: "Zubiri", price: 12, bedCounts: 44, contactNumber: "+34 948 30 43 02", mail: null, openTime: "13:00", closeTime: "22:00", operatingPeriod: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"], information_ko: "체육관 인근 위치.", information_en: "Located near the gym." },

  // 4. 팜플로나
  { id: 5, destinationId: 4, name_ko: "팜플로나 공립 (헤수스 이 마리아)", name_en: "Albergue Jesús y María", location_ko: "팜플로나", location_en: "Pamplona", price: 10, bedCounts: 112, contactNumber: "+34 948 22 26 44", mail: "alberguepamplona@aspas.es", openTime: "12:00", closeTime: "23:00", operatingPeriod: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"], information_ko: "중심가 대형 숙소. 예약 가능.", information_en: "Large central hostel. Reservations allowed." },
  { id: 6, destinationId: 4, name_ko: "팜플로나 교구 (파더본)", name_en: "Albergue Paderborn", location_ko: "팜플로나", location_en: "Pamplona", price: 12, bedCounts: 26, contactNumber: "+34 948 21 11 00", mail: null, openTime: "13:00", closeTime: "22:00", operatingPeriod: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"], information_ko: "독일 협회 운영. 매우 깨끗함.", information_en: "Run by German association. Very clean." },

  // 5. 푸엔테 라 레이나
  { id: 7, destinationId: 5, name_ko: "푸엔테 라 레이나 공립 (수도원)", name_en: "Albergue Padres Reparadores", location_ko: "푸엔테 라 레이나", location_en: "Puente la Reina", price: 8, bedCounts: 100, contactNumber: "+34 948 34 00 50", mail: null, openTime: "12:00", closeTime: "22:00", operatingPeriod: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"], information_ko: "수도원 운영 공립형.", information_en: "Monastery-run municipal style." },

  // 6. 에스테야
  { id: 8, destinationId: 6, name_ko: "에스테야 공립 알베르게", name_en: "Albergue Municipal de Estella", location_ko: "에스테야", location_en: "Estella", price: 8, bedCounts: 96, contactNumber: "+34 948 55 02 00", mail: null, openTime: "13:00", closeTime: "22:00", operatingPeriod: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"], information_ko: "선착순 입실.", information_en: "First-come, first-served." },
  { id: 9, destinationId: 6, name_ko: "에스테야 교구 (산 미구엘)", name_en: "Albergue Parroquial San Miguel", location_ko: "에스테야", location_en: "Estella", price: 7, bedCounts: 40, contactNumber: "+34 948 55 02 00", mail: null, openTime: "12:30", closeTime: "22:00", operatingPeriod: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"], information_ko: "전통적인 교구 숙소.", information_en: "Traditional parochial stay." },

  // 7. 로스 아르코스
  { id: 10, destinationId: 7, name_ko: "로스 아르코스 공립 (이사크 산티아고)", name_en: "Albergue Isaac Santiago", location_ko: "로스 아르코스", location_en: "Los Arcos", price: 7, bedCounts: 70, contactNumber: "+34 948 44 10 91", mail: null, openTime: "12:00", closeTime: "22:00", operatingPeriod: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"], information_ko: "벨기에 협회 지원.", information_en: "Supported by Belgian assoc." },

  // 8. 비아나
  { id: 11, destinationId: 8, name_ko: "비아나 공립 알베르게", name_en: "Albergue Municipal de Viana", location_ko: "비아나", location_en: "Viana", price: 8, bedCounts: 40, contactNumber: "+34 948 44 63 02", mail: null, openTime: "13:00", closeTime: "22:00", operatingPeriod: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"], information_ko: "성당 옆 위치.", information_en: "Located next to church." },

  // 9. 로그로뇨
  { id: 12, destinationId: 9, name_ko: "로그로뇨 공립 알베르게", name_en: "Albergue Municipal de Logroño", location_ko: "로그로뇨", location_en: "Logroño", price: 10, bedCounts: 60, contactNumber: "+34 941 24 56 02", mail: null, openTime: "13:00", closeTime: "22:00", operatingPeriod: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"], information_ko: "도심 광장 근처.", information_en: "Near central square." },
  { id: 13, destinationId: 9, name_ko: "로그로뇨 교구 (산티아고)", name_en: "Albergue Parroquial de Santiago", location_ko: "로그로뇨", location_en: "Logroño", price: 7, bedCounts: 20, contactNumber: null, mail: null, openTime: "12:00", closeTime: "22:00", operatingPeriod: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"], information_ko: "따뜻한 환대, 기부제 기반.", information_en: "Warm hospitality, donation-based." },

  // 10. 나헤라
  { id: 14, destinationId: 10, name_ko: "나헤라 공립 알베르게", name_en: "Albergue Municipal de Nájera", location_ko: "나헤라", location_en: "Nájera", price: 7, bedCounts: 90, contactNumber: "+34 941 36 00 41", mail: null, openTime: "13:30", closeTime: "22:00", operatingPeriod: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"], information_ko: "강변 대형 숙소.", information_en: "Large riverside hostel." },

  // 11. 산토 도밍고
  { id: 15, destinationId: 11, name_ko: "산토 도밍고 교구 알베르게", name_en: "Albergue de la Cofradía del Santo", location_ko: "산토 도밍고 데 라 칼사다", location_en: "Santo Domingo de la Calzada", price: 10, bedCounts: 200, contactNumber: "+34 941 34 33 90", mail: null, openTime: "11:00", closeTime: "22:00", operatingPeriod: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"], information_ko: "역사적인 교구 숙소.", information_en: "Historic parochial hostel." },

  // 12. 벨로라도
  { id: 16, destinationId: 12, name_ko: "벨로라도 공립 알베르게", name_en: "Albergue Municipal de Belorado", location_ko: "벨로라도", location_en: "Belorado", price: 7, bedCounts: 24, contactNumber: "+34 947 58 03 26", mail: null, openTime: "13:00", closeTime: "22:00", operatingPeriod: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"], information_ko: "작지만 아담한 공립.", information_en: "Small, cozy municipal." },

  // 14. 부르고스
  { id: 17, destinationId: 14, name_ko: "부르고스 공립 (카사 델 쿠보)", name_en: "Albergue Municipal Casa del Cubo", location_ko: "부르고스", location_en: "Burgos", price: 10, bedCounts: 150, contactNumber: "+34 947 46 09 22", mail: null, openTime: "12:00", closeTime: "23:00", operatingPeriod: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"], information_ko: "대성당 뒤편 현대식 건물.", information_en: "Modern building behind cathedral." },

  // 17. 카리온 데 로스 콘데스
  { id: 18, destinationId: 17, name_ko: "카리온 교구 (산타 마리아)", name_en: "Albergue Parroquial Santa María", location_ko: "카리온 데 로스 콘데스", location_en: "Carrión de los Condes", price: 7, bedCounts: 50, contactNumber: "+34 979 88 05 06", mail: null, openTime: "12:00", closeTime: "22:00", operatingPeriod: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"], information_ko: "수녀님들의 노래로 유명함.", information_en: "Famous for nuns' singing." },
  { id: 19, destinationId: 17, name_ko: "카리온 교구 (에스피리투 산토)", name_en: "Albergue Parroquial Espíritu Santo", location_ko: "카리온 데 로스 콘데스", location_en: "Carrión de los Condes", price: 7, bedCounts: 40, contactNumber: "+34 979 88 00 24", mail: null, openTime: "13:00", closeTime: "22:00", operatingPeriod: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"], information_ko: "차분한 분위기.", information_en: "Calm atmosphere." },

  // 18. 사아군
  { id: 20, destinationId: 18, name_ko: "사아군 공립 (클로니스)", name_en: "Albergue Municipal Cluny", location_ko: "사아군", location_en: "Sahagún", price: 8, bedCounts: 66, contactNumber: "+34 987 78 00 01", mail: null, openTime: "11:00", closeTime: "23:00", operatingPeriod: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"], information_ko: "오래된 교회 개조.", information_en: "Converted old church." },

  // 21. 레온
  { id: 21, destinationId: 21, name_ko: "레온 공립 (산타 마리아)", name_en: "Albergue Santa María del Carbajal", location_ko: "레온", location_en: "León", price: 8, bedCounts: 96, contactNumber: "+34 987 23 54 00", mail: null, openTime: "11:00", closeTime: "21:30", operatingPeriod: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"], information_ko: "베네딕트 수녀원 운영.", information_en: "Run by Benedictine nuns." },
  { id: 22, destinationId: 21, name_ko: "레온 공립 (산 프란시스코)", name_en: "Albergue San Francisco de Asís", location_ko: "레온", location_en: "León", price: 10, bedCounts: 60, contactNumber: "+34 987 21 50 60", mail: null, openTime: "11:30", closeTime: "22:00", operatingPeriod: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"], information_ko: "시설 깔끔함.", information_en: "Clean facilities." },

  // 23. 아스토르가
  { id: 23, destinationId: 23, name_ko: "아스토르가 공립 알베르게", name_en: "Albergue Siervas de María", location_ko: "아스토르가", location_en: "Astorga", price: 10, bedCounts: 156, contactNumber: "+34 987 61 85 62", mail: null, openTime: "11:00", closeTime: "22:00", operatingPeriod: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"], information_ko: "가우디 주교궁 인근.", information_en: "Near Gaudi's palace." },

  // 26. 폰페라다
  { id: 24, destinationId: 26, name_ko: "폰페라다 공립 (산 니콜라스)", name_en: "Albergue San Nicolás de Flüe", location_ko: "폰페라다", location_en: "Ponferrada", price: 10, bedCounts: 180, contactNumber: "+34 987 40 50 26", mail: null, openTime: "13:00", closeTime: "22:00", operatingPeriod: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"], information_ko: "매우 넓은 정원.", information_en: "Very large garden." },

  // 30. 사리아
  { id: 25, destinationId: 30, name_ko: "사리아 공립 알베르게", name_en: "Albergue de Sarria", location_ko: "사리아", location_en: "Sarria", price: 10, bedCounts: 40, contactNumber: "+34 982 53 05 52", mail: null, openTime: "13:00", closeTime: "22:00", operatingPeriod: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"], information_ko: "100km 지점. 선착순 치열.", information_en: "First-come, first-served." },

  // 33. 멜리데
  { id: 26, destinationId: 33, name_ko: "멜리데 공립 알베르게", name_en: "Albergue de Melide", location_ko: "멜리데", location_en: "Melide", price: 10, bedCounts: 156, contactNumber: "+34 981 50 74 46", mail: null, openTime: "13:00", closeTime: "22:00", operatingPeriod: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"], information_ko: "정부 운영 현대식 시설.", information_en: "Modern Gov-run facility." },

  // 36. 산티아고
  { id: 27, destinationId: 36, name_ko: "산티아고 세미나리오 메노르", name_en: "Albergue Seminario Menor", location_ko: "산티아고 데 콤포스텔라", location_en: "Santiago de Compostela", price: 15, bedCounts: 175, contactNumber: "+34 981 58 92 00", mail: "info@albergueseminariomenor.com", openTime: "12:00", closeTime: "23:00", operatingPeriod: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"], information_ko: "예약 추천.", information_en: "Booking recommended." },

    // 37. 피니스테레 (Finisterre)
  { 
    id: 28, // 기존 id: 27 다음 번호
    destinationId: 37, 
    name_ko: "알베르게 벨라 묵시아", 
    name_en: "Albergue Bela Muxia", 
    location_ko: "피니스테레", 
    location_en: "Finisterre", 
    price: 18, 
    bedCounts: 82, 
    contactNumber: "+34 981 74 20 41", 
    mail: "info@belamuxia.com", 
    openTime: "11:00", 
    closeTime: "22:00", 
    operatingPeriod: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"], 
    information_ko: "현대적인 시설과 바다 전망으로 유명함. 사전 예약 필수.", 
    information_en: "Famous for modern facilities and sea views. Booking is essential." 
  }
];