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
	chirpys_adventure: {
		en: "Chirpy's Adventure",
		th: "การผจญภัยของ Chirpy",
		fr: "L’aventure de Chirpy",
		pl: "Przygoda Chirpy",
		pt: "A aventura de Chirpy",
		km: "ការផ្សងព្រេងរបស់ Chirpy"
	},
	game_creator: {
		en: "Game Creator",
		th: "ผู้สร้างเกม",
		fr: "Créateur de jeu",
		pl: "Twórca gry",
		pt: "Criador de Jogos",
		km: "អ្នកបង្កើតហ្គេម"
	},
	magical_mixology: {
		en: "Magical Mixology",
		th: "การผสมเวทย์มนตร์",
		fr: "Mixologie Magique",
		pl: "Magiczna Mikstura",
		pt: "Mistura Mágica",
		km: "ការលាយវេទមន្ត"
	},
	create: {
		en: "Create",
		th: "สร้าง",
		fr: "Créer",
		pl: "Utwórz",
		pt: "Criar",
		km: "បង្កើត"
	},
	play : {
		en: "Play",
		th: "เล่น",
		fr: "Jouer",
		pl: "Graj",
		pt: "Jogar",
		km: "លេង"
	},
	copy: {
		en: "Copy",
		th: "คัดลอก",
		fr: "Copier",
		pl: "Kopiuj",
		pt: "Copiar",
		km: "ចម្លង"
	},
	copied: {
		en: "Copied!",
		th: "คัดลอกแล้ว!",
		fr: "Copié !",
		pl: "Skopiowano!",
		pt: "Copiado!",
		km: "បានចម្លង!"
	},
	chirpy_instructions: {
		en: "This game always uses integers and easy fractions. Adjust the settings below and click 'Create' to generate a new game.",
		th: "เกมนี้จะใช้จำนวนเต็มและเศษส่วนง่าย ๆ เท่านั้น ปรับการตั้งค่าด้านล่างแล้วกด 'สร้าง' เพื่อสร้างเกมใหม่",
		fr: "Ce jeu utilise toujours des nombres entiers et des fractions simples. Ajustez les paramètres ci-dessous et cliquez sur 'Créer' pour générer un nouveau jeu.",
		pl: "Ta gra zawsze używa liczb całkowitych i prostych ułamków. Dostosuj ustawienia poniżej i kliknij 'Utwórz', aby wygenerować nową grę.",
		pt: "Este jogo sempre usa números inteiros e frações fáceis. Ajuste as configurações abaixo e clique em 'Criar' para gerar um novo jogo.",
		km: "ហ្គេមនេះតែងតែប្រើចំនួនគត់ និងប្រភាគងាយៗ។ កែតម្រូវការកំណត់ខាងក្រោម ហើយចុច 'បង្កើត' ដើម្បីបង្កើតហ្គេមថ្មី។"
	},
	potion_making_rounds: {
		en: "Potion Making Rounds",
		th: "รอบการปรุงยา",
		fr: "Tours de Préparation de Potions",
		pl: "Rundy Tworzenia Mikstur",
		pt: "Rodadas de Preparação de Poções",
		km: "ជុំបង្កើតថ្នាំព្យាបាល"
	},
	mixed_units: {
		en: "Mixed units (liters and milliliters)",
		th: "หน่วยผสม (ลิตรและมิลลิลิตร)",
		fr: "Unités mixtes (litres et millilitres)",
		pl: "Jednostki mieszane (litry i mililitry)",
		pt: "Unidades mistas (litros e mililitros)",
		km: "ឯកតាចម្រុះ (លីត្រ និងមីលីលីត្រ)"
	},
	difficulty: {
		en: "Difficulty",
		th: "ความยาก",
		fr: "Difficulté",
		pl: "Poziom trudności",
		pt: "Dificuldade",
		km: "កម្រិតពិបាក"
	},
	easy: {
		en: "Easy",
		th: "ง่าย",
		fr: "Facile",
		pl: "Łatwy",
		pt: "Fácil",
		km: "ងាយ"
	},
	medium: {
		en: "Medium",
		th: "ปานกลาง",
		fr: "Moyen",
		pl: "Średni",
		pt: "Médio",
		km: "មធ្យម"
	},
	hard: {
		en: "Hard",
		th: "ยาก",
		fr: "Difficile",
		pl: "Trudny",
		pt: "Difícil",
		km: "ពិបាក"
	},
	length: {
		en: "Track length",
		th: "ความยาวของเส้นทาง",
		fr: "Longueur de la piste",
		pl: "Długość trasy",
		pt: "Comprimento da pista",
		km: "ប្រវែងផ្លូវ"
	},
	multiplication: {
		en: "Multiplication",
		th: "การคูณ",
		fr: "Multiplication",
		pl: "Mnożenie",
		pt: "Multiplicação",
		km: "ការគុណ"
	},
	division: {
		en: "Division",
		th: "การหาร",
		fr: "Division",
		pl: "Dzielenie",
		pt: "Divisão",
		km: "ការចែក"
	},
	nonIntegerDivision: {
		en: "Division resulting in non-integers",
		th: "การหารที่ได้ผลลัพธ์ที่ไม่ใช่จำนวนเต็ม",
		fr: "Division donnant des résultats non entiers",
		pl: "Dzielenie dające wyniki niecałkowite",
		pt: "Divisão resultando em não inteiros",
		km: "ការចែកដែលឲ្យលទ្ធផលមិនមែនចំនួនគត់"
	},
	nonIntegerDivision: {
		en: "Division resulting in non-integers",
		th: "การหารที่ได้ผลลัพธ์ที่ไม่ใช่จำนวนเต็ม"
	},
	negDivision: {
		en: "Division with negative numbers",
		th: "การหารที่มีจำนวนลบ",
		fr: "Division avec des nombres négatifs",
		pl: "Dzielenie liczb ujemnych",
		pt: "Divisão com números negativos",
		km: "ចែកជាមួយចំនួនអវិជ្ជមាន"
	},
	new_chirpy_game: {
		en: "New Chirpy Game",
		th: "เกมเชอร์ปี้ใหม่",
		fr: "Nouveau jeu Chirpy",
		pl: "Nowa gra Chirpy",
		pt: "Novo jogo Chirpy",
		km: "ល្បែង Chirpy ថ្មី"
	},
	created_message: {
		en: 'Copy the id below to use this game in your PILA sequences and assignments.',
	}
}