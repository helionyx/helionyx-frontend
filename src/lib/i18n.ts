import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import enModelsTranslations from '../locales/en/models.json'
import enPagesDotMarking from '../locales/en/pages/dot-mark.json'
import enPagesLaserCleaning from '../locales/en/pages/laser-cleaning.json'
import enPagesLaserCutting from '../locales/en/pages/laser-cutting.json'
import enPagesLaserMarking from '../locales/en/pages/laser-mark.json'
import enProductTranslations from '../locales/en/products.json'
import enTranslations from '../locales/en/translation.json'
import thModelsTranslations from '../locales/th/models.json'
import thPagesDotMarking from '../locales/th/pages/dot-mark.json'
import thPagesLaserCleaning from '../locales/th/pages/laser-cleaning.json'
import thPagesLaserCutting from '../locales/th/pages/laser-cutting.json'
import thPagesLaserMarking from '../locales/th/pages/laser-mark.json'
import thProductTranslations from '../locales/th/products.json'
import thTranslations from '../locales/th/translation.json'

i18n.use(initReactI18next).init({
	resources: {
		en: {
			translation: {
				...enTranslations,
				...enProductTranslations,
				...enModelsTranslations,
				...enPagesLaserMarking,
				...enPagesLaserCutting,
				...enPagesLaserCleaning,
				...enPagesDotMarking
			}
		},
		th: {
			translation: {
				...thTranslations,
				...thProductTranslations,
				...thModelsTranslations,
				...thPagesLaserMarking,
				...thPagesLaserCutting,
				...thPagesLaserCleaning,
				...thPagesDotMarking
			}
		}
	},
	lng: 'en', // Default language
	fallbackLng: 'en',
	interpolation: {
		escapeValue: false
	}
})

export default i18n
