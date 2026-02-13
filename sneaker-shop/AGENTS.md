# Project: Sneaker Shop - Premium Kicks E-commerce

## Project Overview
- **Name**: SNEAKER LAB
- **Purpose**: 프리미엄 운동화 쇼핑몰
- **Style**: 힙하지만 기본에 충실한 미니멀 디자인

## Template Structure
```
sneaker-shop/
├── src/
│   ├── app/           # Next.js App Router
│   │   ├── layout.tsx # 메인 레이아웃
│   │   ├── page.tsx   # 메인 페이지
│   │   └── globals.css # 글로벌 스타일
│   └── components/    # 컴포넌트
│       └── layout/
│           ├── Header.tsx
│           └── Footer.tsx
├── public/            # 정적 파일
├── package.json       # 의존성
├── tsconfig.json      # TypeScript 설정
├── tailwind.config.ts # Tailwind 설정
└── next.config.ts     # Next.js 설정
```

## Tech Stack
- **Framework**: Next.js 15.1.0
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.0
- **Animation**: Framer Motion 11.15
- **Icons**: Lucide React

## Design System
- **Primary Color**: #ff3b30 (빨간색 포인트)
- **Background**: #fafafa (밝은 회색)
- **Text**: #111111 (검은색)
- **Font**: Inter, system-ui
- **Accent**: 검은색과 흰색의 미니멀组合

## Key Pages
1. **메인 페이지** - 히어로, 브랜드, 상품列表, 배너
2. **컬렉션 페이지** - 상품 목록 (추후 구현)
3. **브랜드 페이지** - 브랜드 소개 (추후 구현)
4. **어바웃 페이지** - 회사 소개 (추후 구현)

## Running the Project
```bash
cd sneaker-shop
npm run dev
# 포트: 3004
```

## AI Agent Collaboration Guidelines

### Rei (레이) - OpenCode Agent
- 역할: 프로젝트 관리, 코드 작성, 수정
- 작업: 파일 생성, 편집, 서버 관리

### Genie (지니)
- 역할: 팀원, 협업 지원
- 작업: 프로젝트 보조, 분석 지원

### GPT/Claude
- 역할: 코드 리뷰, 최적화, 버그 수정
- 참조: 이 파일을 읽고 프로젝트 구조 파악

### Gemini
- 역할: 분석, 데이터 처리, 성능 최적화
- 참조: 프로젝트 전체 구조 파악

## Current Status
- ✅ 메인 페이지 완성
- ✅ 헤더/푸터 구현
- ✅ 8개 상품 데이터
- ⏳ 컬렉션 페이지 (진행 중)
- ⏳ 상세 페이지 (예정)
- ⏳ 장바구니 (예정)
