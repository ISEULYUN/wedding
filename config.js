/**
 * Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: true,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "김희범",
    nameEn: "Groom",
    father: "김창환",
    mother: "이옥순",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "윤이슬",
    nameEn: "Bride",
    father: "윤오규",
    mother: "전인숙",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2027-04-11",
    time: "10:30",
    venue: "더빈컨밴션",
    hall: "파티오 하우스 1층",
    address: "청주시 흥덕구 강내면 학천길5",
    tel: "043-238-2222",
    mapLinks: {
      kakao: "https://place.map.kakao.com/19093453",
      naver: "https://naver.me/GUwiajyE"
    }
  },

  // ── 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content: "서로에게 가장 든든한 짝꿍이 되어\n평생을 함께 걸어가고자 합니다.\n\n따뜻한 마음으로 \n저희의 첫걸음을 빛내주세요."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "살랑이는 봄바람처럼 \n따뜻한 설렘을 안고,\n\n평생을 함께할 두 사람이 영원한 사랑을 시작합니다."
  },

  // ── 오시는 길 ──
  // (mapLinks는 wedding 객체 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "김희범", bank: "국민은행", number: "000-000-000000" },
      { role: "아버지", name: "김창환", bank: "신한은행", number: "000-000-000000" },
      { role: "어머니", name: "이옥순", bank: "우리은행", number: "000-000-000000" }
    ],
    bride: [
      { role: "신부", name: "윤이슬", bank: "신한은행", number: "110-260-558234" },
      { role: "아버지", name: "윤오규", bank: "신한은행", number: "000-000-000000" },
      { role: "어머니", name: "전인숙", bank: "우리은행", number: "000-000-000000" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "김희범 ♥ 윤이슬 결혼합니다",
    description: "2027년 04월 11일, 소중한 분들을 초대합니다."
  }
};
