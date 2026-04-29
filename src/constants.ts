import { Question, SBTIResult } from './types';

export const QUESTIONS: Question[] = [
  // S (Stay) vs G (Go) - 5 questions
  { id: 1, dimension: 'Frequency', text: '주말 아침, 눈을 떴을 때 가장 먼저 드는 생각은?', options: [
    { text: '집에서 배달 앱을 켜고 맛있는 걸 고른다', value: 'S' },
    { text: '오늘 날씨 좋은데? 일단 나갈 준비를 한다', value: 'G' },
  ]},
  { id: 2, dimension: 'Frequency', text: '친구가 "오늘 뭐해?"라고 물으면 나의 대답은?', options: [
    { text: '"나 오늘 집에서 좀 쉬려고..."', value: 'S' },
    { text: '"오 어디 갈까? 맛집 알아봐?"', value: 'G' },
  ]},
  { id: 3, dimension: 'Frequency', text: '택배 박스를 뜯을 때와 공항 입국장을 나갈 때, 더 설레는 건?', options: [
    { text: '집으로 온 소중한 내 택배 박스', value: 'S' },
    { text: '새로운 장소로 향하는 공항의 공기', value: 'G' },
  ]},
  { id: 4, dimension: 'Frequency', text: '한 달간의 여유 자금이 생겼을 때 나의 선택은?', options: [
    { text: '집안의 가전이나 가구를 업그레이드한다', value: 'S' },
    { text: '일단 비행기 티켓이나 숙소를 예약한다', value: 'G' },
  ]},
  { id: 5, dimension: 'Frequency', text: '나의 단골집은 주로...', options: [
    { text: '집 주변 5분 거리이거나 배달 맛집이다', value: 'S' },
    { text: '핫플레이스라면 거리가 멀어도 상관없다', value: 'G' },
  ]},

  // S (Self) vs O (Others) - 5 questions
  { id: 6, dimension: 'Target', text: '쇼핑몰 검색창에 가장 많이 입력하는 단어는?', options: [
    { text: '내가 갖고 싶은 물건의 정확한 이름', value: 'S' },
    { text: '친구 생일 선물 추천, 부모님 효도 선물', value: 'O' },
  ]},
  { id: 7, dimension: 'Target', text: '맛있는 걸 먹을 때 더 행복한 순간은?', options: [
    { text: '내가 먹고 싶었던 걸 드디어 먹을 때', value: 'S' },
    { text: '사람들에게 맛집을 소개해 주고 잘 먹는 걸 볼 때', value: 'O' },
  ]},
  { id: 8, dimension: 'Target', text: '보너스를 받았다! 가장 먼저 할 일은?', options: [
    { text: '고생한 나를 위해 위시리스트 중 하나를 결제한다', value: 'S' },
    { text: '가족이나 연인에게 맛있는 저녁을 쏜다', value: 'O' },
  ]},
  { id: 9, dimension: 'Target', text: '돈을 쓸 때 느끼는 부담감은 언제 클까?', options: [
    { text: '정작 나를 위해서는 못 쓰고 남만 챙길 때', value: 'S' },
    { text: '나 혼자 좋자고 돈을 펑펑 쓰는 것 같을 때', value: 'O' },
  ]},
  { id: 10, dimension: 'Target', text: '나의 소비는 주로...', options: [
    { text: '나의 만족도를 높이는 것에 집중되어 있다', value: 'S' },
    { text: '주변 사람들과의 관계를 유지하는 데 쓰인다', value: 'O' },
  ]},

  // Q (Quality) vs N (Quantity) - 5 questions
  { id: 11, dimension: 'Quality', text: '티셔츠 한 장을 사더라도 나의 기준은?', options: [
    { text: '수십 번 세탁해도 짱짱한 브랜드 제품', value: 'Q' },
    { text: '디자인만 괜찮으면 싼 거 여러 장이 이득', value: 'N' },
  ]},
  { id: 12, dimension: 'Quality', text: '전자제품을 살 때 중요하게 보는 것은?', options: [
    { text: '업계 최고 스펙과 완벽한 디자인', value: 'Q' },
    { text: '가격 대비 성능, 즉 가성비가 최고다', value: 'N' },
  ]},
  { id: 13, dimension: 'Quality', text: '평소 지출 철학에 가까운 것은?', options: [
    { text: '"한 번 살 때 제대로 된 걸 사자"', value: 'Q' },
    { text: '"싸고 좋은 건 많다, 발품을 팔자"', value: 'N' },
  ]},
  { id: 14, dimension: 'Quality', text: '카페에서 메뉴를 고를 때?', options: [
    { text: '비싸더라도 이 카페의 시그니처 프리미엄 메뉴', value: 'Q' },
    { text: '가장 무난하고 저렴한 오늘의 할인 메뉴', value: 'N' },
  ]},
  { id: 15, dimension: 'Quality', text: '물건을 고를 때 가장 중요한 기준은?', options: [
    { text: '신뢰할 수 있는 브랜드의 품질', value: 'Q' },
    { text: '파격적인 할인율과 저렴한 가격', value: 'N' },
  ]},

  // P (Planned) vs I (Impulsive) - 5 questions
  { id: 16, dimension: 'Planning', text: '쇼핑하러 가기 전 나의 상태는?', options: [
    { text: '메모장에 살 물건 리스트를 미리 적어둔다', value: 'P' },
    { text: '일단 돌아다녀 보다가 꽂히는 게 있으면 산다', value: 'I' },
  ]},
  { id: 17, dimension: 'Planning', text: '카드 명세서나 장부를 볼 때 나의 반응은?', options: [
    { text: '"예산 범위 내에서 잘 썼군." (안도)', value: 'P' },
    { text: '"누가 내 카드를 도용했나? 왜 이렇게 많이 나왔지?"', value: 'I' },
  ]},
  { id: 18, dimension: 'Planning', text: '"마감 임박 90% 세일!" 알림이 떴다면?', options: [
    { text: '나에게 지금 꼭 필요한 물건인지 차분히 생각한다', value: 'P' },
    { text: '빛의 속도로 클릭해서 일단 장바구니에 담는다', value: 'I' },
  ]},
  { id: 19, dimension: 'Planning', text: '마트에 가면 나의 쇼핑 카트는?', options: [
    { text: '미리 생각해 둔 필수 식재료로 가득하다', value: 'P' },
    { text: '시식 코너나 행사 상품에 홀려 구매한 것들로 가득하다', value: 'I' },
  ]},
  { id: 20, dimension: 'Planning', text: '충동구매에 대한 나의 생각은?', options: [
    { text: '계획되지 않은 지출은 최대한 지양해야 한다', value: 'P' },
    { text: '그때의 기분과 타이밍도 소비의 가치 중 하나다', value: 'I' },
  ]},
];

export const RESULTS: Record<string, SBTIResult> = {
  'SSQP': {
    type: 'SSQP',
    title: '방구석 퀄리티 마스터',
    description: '집에서 나를 위해 질 좋은 물건을 계획적으로 소비하는 당신!',
    characteristics: ['신중한 완벽주의자', '집안 공간의 가치를 중시함', '실패 없는 소비를 지향'],
    advice: '가끔은 예상치 못한 소소한 지출로 일상의 활력을 찾아보세요.',
    color: '#FF6B6B',
  },
  'SSQI': {
    type: 'SSQI',
    title: '나를 위한 럭셔리 힐러',
    description: '집에서 나를 위해 질 좋은 물건을 즉흥적으로 사며 스트레스를 푸는 스타일!',
    characteristics: ['스몰 럭셔리 애호가', '자기 보상 심리가 강함', '충동적이지만 안목은 확실함'],
    advice: '장바구니에 담아두고 하룻밤만 참아보는 습관을 길러보세요.',
    color: '#4D96FF',
  },
  'SSNP': {
    type: 'SSNP',
    title: '알뜰살뜰 집돌이/집순이',
    description: '집에서 나를 위해 가성비 좋은 물건을 꼼꼼하게 따져 사는 계획형 소비!',
    characteristics: ['최저가 검색의 달인', '리뷰 분석 전문가', '낭비를 극도로 싫어함'],
    advice: '절약도 좋지만 가끔은 자신에게 줄 수 있는 최고의 선물을 고민해보세요.',
    color: '#6BCB77',
  },
  'SSNI': {
    type: 'SSNI',
    title: '소소한 행복 만수르',
    description: '집에서 나를 위해 가성비 템들을 기분 내키는 대로 지르는 스타일!',
    characteristics: ['다이소 VIP', '택배 뜯는 재미로 삼', '저렴한 가격에 쉽게 현혹됨'],
    advice: '작은 지출이 모여 큰 산이 될 수 있으니 월별 한도를 정해보세요.',
    color: '#FFD93D',
  },
  'SOQP': {
    type: 'SOQP',
    title: '든든한 홈 파티 플래너',
    description: '집에서 남을 위해 질 좋은 것을 준비하며 보람을 느끼는 계획가!',
    characteristics: ['베풀 줄 아는 사람', '고급스러운 안목', '철저한 준비성'],
    advice: '남을 챙기는 마음만큼 본인의 지출 밸런스도 체크하세요.',
    color: '#FF9E64',
  },
  'SOQI': {
    type: 'SOQI',
    title: '통 큰 이벤트 장인',
    description: '집에서 사람들을 위해 최고급 선물을 즉흥적으로 쏘는 스타일!',
    characteristics: ['관대함의 끝판왕', '서프라이즈를 좋아함', '주변의 칭찬에 약함'],
    advice: '가끔은 실속 있는 선물로도 충분히 당신의 마음이 전달됩니다.',
    color: '#A267AC',
  },
  'SONP': {
    type: 'SONP',
    title: '가성비 선물 큐레이터',
    description: '집에서 남을 위해 실속 있고 가성비 좋은 선물을 골라주는 계획형!',
    characteristics: ['스마트한 소비자', '실용성 중시', '부담 없는 관계 지향'],
    advice: '특별한 날에는 가격보다 정서적인 가치에 집중해보세요.',
    color: '#34BEB0',
  },
  'SONI': {
    type: 'SONI',
    title: '퍼주기 좋아하는 사랑둥이',
    description: '집에서 주변 사람들에게 작고 사소한 것들을 즉흥적으로 선물하는 타입!',
    characteristics: ['다정한 성격', '나누는 즐거움을 앎', '충동적인 배려'],
    advice: '타인에 대한 과한 지출로 본인의 생활이 흔들리지 않게 주의하세요.',
    color: '#FF7CC3',
  },
  'GSQP': {
    type: 'GSQP',
    title: '럭셔리 경험 여행가',
    description: '밖으로 나가 나를 위해 최고의 품질과 경험을 계획적으로 소비하는 당신!',
    characteristics: ['하이엔드 취향', '경험 중심 사고', '자기계발에 진심'],
    advice: '휴식의 공간인 집에서도 편안함을 누릴 수 있도록 투자해보세요.',
    color: '#344D67',
  },
  'GSQI': {
    type: 'GSQI',
    title: '플렉스 전도사',
    description: '밖에서 나를 위해 최고급 경험을 즉흥적으로 즐기며 사는 스타일!',
    characteristics: ['YOLO의 표본', '트렌드 세터', '지금 이 순간이 중요함'],
    advice: '미래의 나를 위해 조금은 저축의 즐거움도 느껴보세요.',
    color: '#E0144C',
  },
  'GSNP': {
    type: 'GSNP',
    title: '갓생 사는 가성비족',
    description: '밖에서 나를 위해 가성비 좋은 활동들을 계획적으로 수행하는 타입!',
    characteristics: ['부지런한 탐험가', '정보 수집 능력 탁월', '에너지 넘침'],
    advice: '가끔은 효율보다는 여유를 즐길 수 있는 소비를 해보세요.',
    color: '#ADE792',
  },
  'GSNI': {
    type: 'GSNI',
    title: '전국구 미식 모험가',
    description: '밖에서 기분 내키는 대로 가성비 맛집이나 핫플을 찾아다니는 스타일!',
    characteristics: ['핵인싸 기질', '발 빠른 정보통', '유쾌한 성격'],
    advice: '바깥 활동만큼 내면을 채우는 시간과 소비도 필요합니다.',
    color: '#FA7070',
  },
  'GOQP': {
    type: 'GOQP',
    title: '프리미엄 사교계의 별',
    description: '밖에서 타인을 위해 질 좋은 대접을 계획적으로 준비하는 리더형!',
    characteristics: ['책임감 있는 호스트', '사회적 성공 중시', '높은 에티켓'],
    advice: '본인 스스로를 대접하는 일에도 인색하지 마세요.',
    color: '#00ABB3',
  },
  'GOQI': {
    type: 'GOQI',
    title: '골든벨 울리는 회식왕',
    description: '밖에서 즉흥적으로 지인들에게 화끈하게 한턱 쏘는 스타일!',
    characteristics: ['의리파', '분위기 메이커', '시원시원한 성격'],
    advice: '당신의 지갑이 텅 빈 후에도 곁을 지킬 사람들을 구분하세요.',
    color: '#FEBE8C',
  },
  'GONP': {
    type: 'GONP',
    title: '실속 있는 모임 기획자',
    description: '밖에서 다 같이 즐기되, 가성비 좋은 계획을 짜는 스마트한 소셜러!',
    characteristics: ['똑 부러지는 성격', '중재자 역할', '합리적인 관계'],
    advice: '가끔은 계산기에서 손을 떼고 감정에만 충실해보세요.',
    color: '#7B8BB2',
  },
  'GONI': {
    type: 'GONI',
    title: '정 넘치는 보부상',
    description: '밖에서 우연히 만난 사람들에게 소소하게 나누는 것을 즐기는 타입!',
    characteristics: ['따뜻한 인품', '우연한 만남 선호', '낙천주의자'],
    advice: '친절도 지갑 사정을 봐가며 베풀어야 오래 지속될 수 있습니다.',
    color: '#F49D1A',
  },
};
