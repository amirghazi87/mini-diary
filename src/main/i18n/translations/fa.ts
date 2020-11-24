import { Translations } from "../../../shared/types";

const translationsFa: Translations = {
	// Menu (defined by macOS)
	"about-app": "درباره {appName}",
	"bring-all-to-front": "جلو آوردن همه",
	close: "بستن",
	copy: "رونوشت",
	cut: "بریدن",
	edit: "ویرایش",
	file: "پرونده",
	help: "کمک",
	"hide-app": "مخفی کردن {appName}",
	"hide-others": "مخفی کردن بقیه",
	minimize: "",
	paste: "الصاق",
	preferences: "تنظیمات",
	"quit-app": "خروج از {appName}",
	redo: "Redo",
	"select-all": "انتخاب همه",
	"show-all": "نشان دادن همه",
	speech: "صحبت",
	"start-speaking": "شروع صحبت کردن",
	"stop-speaking": "متوقف کردن صحبت",
	undo: "برگشت",
	view: "دیدن",
	window: "پنجره",
	zoom: "بزرگ کردن",

	// Menu (app-specific)
	export: "گرفتن خروجی",
	"export-to-format": "خروجی به {format}",
	"go-to-date": "برو به تاریخ",
	"go-to-today": "برو به امروز",
	import: "وارد کردن",
	"import-from-format": "وارد کردن از {format}",
	license: "مجوز"
	"lock-diary": "قفل دفترچه",
	"next-day": "روز بعد",
	"next-month": "ماه بعد",
	"previous-day": "روز قبل",
	"previous-month": "ماه قبل",
	"privacy-policy": "سیاست حفظ حریم خصوصی",
	statistics: "آمار",
	website: "وب سایت",

	// Weekdays
	sunday: "یک شنبه",
	monday: "دو شنبه",
	tuesday: "سه شنبه",
	wednesday: "چهار شنبه",
	thursday: "پنج شنبه",
	friday: "جمعه",
	saturday: "شنبه",

	// Theme
	dark: "تیره",
	light: "روشن",
	theme: "پوسته",

	// Calendar
	today: "امروز",

	// Editor
	"add-a-title": "اضافه کردن یک عنوان",
	bold: "ضخیم",
	bullets: "نقطه‌ها",
	italic: "مورب",
	list: "لیست",
	"write-something": "یه چیزی بنویس",

	// Search
	clear: "پاک کردن",
	"no-results": "بدون نتیجه",
	"no-title": "بدون عنوان",
	search: "پیدا کردن",

	// Preferences
	"allow-future-entries": "در آینده ورودی‌ها رو مجاز کن",
	auto: "خودکار",
	"diary-entries": "ورودی های دفترچه",
	"enable-spellcheck": "بررسی تلفظ",
	"first-day-of-week": "روز اول هفته",
	"hide-titles": "مخفی کردن عنوان‌ها",
	no: "اشتباه",
	ok: "درست",
	"reset-diary": "بازنشانی دفترچه",
	"reset-diary-confirm": "بله، من مطمئنم",
	"reset-diary-msg":
		"از بازنشانی دفترچه خودتون مطمئنید؟ این عمل قابل بازگشت نیست. همه محتوا پاک می‌شود.",

	// Password and directory
	"change-directory": "تغییر دیکشنری",
	"change-password": "تغییر رمز عبور",
	"choose-password": "لطفا یک رمز عبور برای دفترچه انتخاب کنید.",
	"decryption-error": "خطا هنگام رمزگشایی کردن فایل دفترچه",
	"diary-file": "فایل دفترچه",
	"file-exists": "یک فایل دیگر در همین نشانی وجود دارد",
	"move-error-msg": "خطایی هنگام جابجایی پرونده رخ داد",
	"move-error-title": "خطای جابجایی",
	"move-file": "جابجا کردن فایل",
	"new-password": "رمز عبور جدید",
	password: "رمز عبور",
	"passwords-no-match": "رمز عبور هم خوانی ندارد",
	"repeat-new-password": "تکرار رمز عبور جدید",
	"repeat-password": "تکرار رمز عبور",
	"select-directory": "انتخاب دیکشنری",
	"set-password": "انتخاب رمز عبور",
	unlock: "بازکردن قفل",
	"wrong-password": "رمز عبور اشتباه",

	// Statistics
	"total-entries": "total entries",
	"entries-per-week": "entries per week",
	"streak-best": "entries in a row (record streak)",
	"streak-current": "entries in a row (current streak)",
	"total-words": "مجموع کلمات",
	"words-per-entry": "words per entry",

	// Import
	"import-error-msg": "An error occurred during the import",
	"import-error-title": "خطای وارد کردن",
	"import-instructions-day-one":
		"Open the Day One app and export your diary under File → Export → {format}. Unzip the created file. Select the resulting {format} file in the next step to import it into {appName}.",
	"import-instructions-jrnl":
		"To export your jrnl diary, run {command}. Select the created JSON file in the next step to import it into {appName}.",
	"import-instructions-mini-diary":
		"You can import your data from a previous {appName} JSON export or from another JSON file that is formatted the same way.",
	"start-import": "شروع وارد کردن",

	// Export
	"export-error-msg": "خطایی هنگام خروجی گرفتن به وجود آمد",
	"export-error-title": "خطای خروجی",

	// Other
	loading: "در حال بارگذاری",
};

export default translationsFa;
