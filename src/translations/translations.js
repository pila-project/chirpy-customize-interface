export default function t(slug, language) {
	if (!translationMap[slug]) {
		return `no slug found ${slug}`
		console.warn('slug not found:', slug)
	} else if (!translationMap[slug][language]) {
		return `no ${language} translation found for ${slug}`
		console.warn(`no ${language} translation found for ${slug}`)
	} else {
		return translationMap[slug][language]
	}
}

const translationMap = {
	game_creator: {
		en: "Game Creator",
		th: "ผู้สร้างเกม"
	},
	chirpys_adventure: {
		en: "Chirpy's Adventure",
		th: "การผจญภัยของเชอร์ปี้"
	},
	create: {
		en: "Create",
		th: "สร้าง"
	},
	play : {
		en: "Play",
		th: "เล่น"
	},
	copy: {
		en: "Copy",
		th: "คัดลอก"
	},
	copied: {
		en: "Copied!",
		th: "คัดลอกแล้ว"
	},
	instructions_1: {
		en: "The game always uses addition and subtraction. Adjust the settings below and click 'Create' to generate a new game.",
		th: "เกมนี้จะมีการบวกและการลบอยู่ในเกมด้วยเสมอ ปรับการตั้งค่าด้านล่าง แล้วคลิก 'สร้าง' เพื่อสร้างเกมใหม่"
	},
	instructions_2: {
		en: "Copy the id below to use this game in your PILA sequences and assignments.",
		th: "คัดลอกและวางโค้ดนี้ลงในบัญชีผู้สอนของคุณหรือในเมนู ‘สร้างบทเรียนด้วยตนเอง บนหน้าเพจ PILA’ (PILA Create)"
	},
	length: {
		en: "Track length",
		th: "ความยาวของเส้นทาง"
	},
	distractors: {
		en: "Distracting wrong paths",
		th: "เส้นทางหลอกให้ไขว้เขว"
	},
	multiplication: {
		en: "Multiplication",
		th: "การคูณ"
	},
	division: {
		en: "Division",
		th: "การหาร"
	},
	nonIntegerDivision: {
		en: "Division resulting in non-integers",
		th: "การหารที่ได้ผลลัพธ์ที่ไม่ใช่จำนวนเต็ม"
	},
	negDivision: {
		en: "Division with negative numbers",
		th: "การหารที่มีจำนวนลบ"
	},
	new_chirpy_game: {
		en: "New Chirpy Game",
		th: "เกมเชอร์ปี้ใหม่"
	}
}