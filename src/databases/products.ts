import { Product } from '@/types'

import huv_fw_img from '/laser-marking-machines/uv-laser-marker/HUV-FW.png'
import huv_mw_img from '/laser-marking-machines/uv-laser-marker/HUV-MW.png'
import huv_sw_img from '/laser-marking-machines/uv-laser-marker/HUV-SW.png'
import huv_img from '/laser-marking-machines/uv-laser-marker/HUV.png'

import hfi_f from '/laser-marking-machines/fiber-laser-marker/HFI-F.png'
import hfi_m from '/laser-marking-machines/fiber-laser-marker/HFI-M.png'
import hfi_mn from '/laser-marking-machines/fiber-laser-marker/HFI-MN.png'
import hfi_s from '/laser-marking-machines/fiber-laser-marker/HFI-S.png'

import hco_fc from '/laser-marking-machines/co2-laser-marker/HCO-FC.png'
import hco_sc from '/laser-marking-machines/co2-laser-marker/HCO-SC.png'

import hfi_h20_30a from '/laser-marking-machines/portable-laser-marker/HFI_H20_30A.png'
import hfi_h20_30r from '/laser-marking-machines/portable-laser-marker/HFI_H20_30R.png'
import hfi_h20_30s from '/laser-marking-machines/portable-laser-marker/HFI_H20_30S.png'

import hcn_c80 from '/laser-cutting-machines/HCN-C80.png'

import hcl from '/laser-cleaning-machines/HCL.png'

import hdo_12 from '/laser-marking-machines/dot-marking/HDO-12.png'
import hdo_23 from '/laser-marking-machines/dot-marking/HDO-23.png'

export const products: Product[] = [
	{
		id: 'huv-integrated-fiber-laser-marking-machine',
		categoryId: 'laser-marking-machines',
		subCategoryId: 'uv-laser-marker',
		name: 'HUV Integrated Fiber Laser Marking Machine',
		description:
			'The HUV series integrated fiber laser marking machine is an intelligent model specially designed to improve production efficiency and stability, using independently developed lasers. It has higher security, stable performance, and fast processing efficiency. It meets the marking needs of high-speed and high-volume applications. It is mainly used in production date, anti-counterfeiting, and pharmaceutical and food packaging industries.',
		subDescription:
			'This model supports daily laser marking, date, barcode, QR code and other functions to meet the needs of customers in different industries.',
		features: [
			'Fast and Accurate Laser Marking',
			'Versatile and Durable Machine',
			'Cost-Effective and Eco-Friendly Solution'
		],
		imageUrl: huv_img,
		additionalImages: []
	},
	{
		id: 'huv-sw-machine-crs-laser-source',
		categoryId: 'laser-marking-machines',
		subCategoryId: 'uv-laser-marker',
		name: 'HUV-SW Machine (CRS Laser Source)',
		description:
			'The HUV-SW series ultraviolet laser marking machine of Helionyx is developed by using a 355nm ultraviolet laser. The material has a high absorption rate of ultraviolet light and has a wider range of material adaptability. Ultraviolet light focusing spot is very small, processing heat-affected zone is very small and it is more suitable for ultra-fine marking of various materials.',
		subDescription:
			'HUV-SW series ultraviolet laser marking machine is used in the high-end market of ultra-fine processing, perfect cutting and micro-processing. It is mainly used for marking and surface treatment of materials like various glass, LCD screens, textiles, thin ceramics, semiconductor wafers, IC grains, sapphire, polymer films, etc.',
		features: [
			'The output laser spot is small',
			'The laser beam is in good quality',
			'High laser frequency, faster marking speed',
			'The whole machine has stable performance'
		],
		imageUrl: huv_sw_img,
		additionalImages: []
	},
	{
		id: 'huv-mw-portable-uv-laser-marking-machine',
		categoryId: 'laser-marking-machines',
		subCategoryId: 'uv-laser-marker',
		name: 'HUV-MW Portable UV Laser Marking Machine',
		description:
			'The HUV-MW Portable UV Laser Marking Machine is the ultimate solution for accurate and portable marking. With its high beam quality and excellent spot mode, it can produce precise and permanent markings on a variety of materials. From barcodes to logos, this versatile marking machine can handle a wide range of marking needs.',
		features: [
			'High productivity',
			'Cost-effective',
			'Can be disassembled at will',
			'High quality light source',
			'High Precision Marking',
			'Portability and Versatility',
			'User-Friendly Design'
		],
		imageUrl: huv_mw_img,
		additionalImages: []
	},
	{
		id: 'huv-fw-uv-flying-laser-marking-machine-jpt-laser-source',
		categoryId: 'laser-marking-machines',
		subCategoryId: 'uv-laser-marker',
		name: 'HUV-FW UV Flying Laser Marking Machine (JPT Laser Source)',
		description:
			'The UV series HUV-FW laser marking machine is a high-speed continuous marking model designed to improve productivity. It uses JPT industrial-grade solid-state UV laser source which is with good beam quality and high reliability; The marking speed of the production line is up to 200 m/min ( Single-line 2MM-high numbers and letters), It provides high-speed and high-yield application identification requirements,it’s mainly used in production date, anti-counterfeiting, medical and food packaging industries. This model supports functions such as automatic encoding, serial number, batch number, date, barcode, two-dimensional code, automatic number skipping, etc., to meet the needs of customers in different industries.',
		subDescription:
			'UV series flying laser marking machine are widely used in various pipes, plastic films, plastic bottle caps and other materials like PPR, PVC, PE, etc. It is widely used in the production of food and beverage packaging, alcohol, dairy products, electronic components, medicine, personal care products, tobacco, chemical building materials and other fields, marking of expiration dates, batch numbers, shifts, manufacturer names and logos and other graphics and text.',
		features: [
			'Marking speed up to 200 meters per minute',
			'High-quality and reliable UV laser source',
			'Compact design and flexible configuration',
			'Flexible installation way, convenient installation position adjustment'
		],
		imageUrl: huv_fw_img,
		additionalImages: []
	},
	{
		id: 'hfi-m-fiber-laser-marker',
		categoryId: 'laser-marking-machines',
		subCategoryId: 'fiber-laser-marker',
		name: 'HFI-M Fiber Laser Marking Machine',
		description:
			'Increase your marking efficiency with the HFI-M MINI Fiber Laser Marking Machine. Achieve precise markings on a variety of materials with its advanced laser technology. Easy to use and maintain, this compact marking machine is perfect for businesses of all sizes.',
		features: [
			'100% portable',
			'Cost-effective',
			'Can be disassembled at will',
			'High quality light source',
			'Precision Marking',
			'Speed and Efficiency',
			'Easy to Use and Maintain'
		],
		imageUrl: hfi_m,
		additionalImages: []
	},
	{
		id: 'hfi-mn-portable-mini-fiber-laser-marking-machine',
		categoryId: 'laser-marking-machines',
		subCategoryId: 'fiber-laser-marker',
		name: 'HFI-MN Portable Mini Fiber Laser Marking Machine',
		description:
			'Discover the HFI-MN Portable Mini Fiber Laser Marking Machine - a compact and versatile solution for on-the-go marking applications. Achieve unmatched marking precision on a variety of materials, all while enjoying the unbeatable durability and low cost of ownership of this cutting-edge machine.',
		features: [
			'High productivity',
			'Cost-effective',
			'Can be disassembled at will',
			'High quality light source',
			'Unmatched Portability for Easy Transportation and Use',
			'Superior Marking Precision for a Wide Range of Materials',
			'Unbeatable Durability and Longevity for Low Cost of Ownership'
		],
		imageUrl: hfi_mn,
		additionalImages: []
	},
	{
		id: 'hfi-s-pulse-fiber-laser-marking-machine-jpt-laser-source',
		categoryId: 'laser-marking-machines',
		subCategoryId: 'fiber-laser-marker',
		name: 'HFI-S Pulse Fiber Laser Marking Machine (JPT Laser Source)',
		description:
			'The HFI-S series fiber laser marking machine of Helionyx is an all-round marking equipment. Because of its strong adaptability, low maintenance and no consumables during the marking process, it is often used in the metal and plastic processing industries. HFI-S Fiber series products use 1064nm wavelength laser, which is suitable for various metal materials such as iron, copper, aluminum, gold, silver, and some non-metal materials such as PC, ABS, PVC, PC+ABS. It is widely used in 3C, auto parts, electronic components, integrated circuits (PC), electrical appliances, precision equipment, hardware products, building materials, clocks and watches, jewelry, craft gifts and other industries.',
		features: ['Appearance', 'Performance', 'Control', 'Software', 'Service'],
		imageUrl: hfi_s,
		additionalImages: []
	},
	{
		id: 'hfi-f-fiber-flying-laser-marking-machine-jpt-laser-source',
		categoryId: 'laser-marking-machines',
		subCategoryId: 'fiber-laser-marker',
		name: 'HFI-F Fiber Flyinh Laser Marking Machine (JPT Laser Source)',
		description:
			'The HFI-F fiber flying laser printer is a high-speed continuous marking machine designed to improve productivity. It adopts JPT industrial-grade high-performance laser source which are with stable performance, fast processing efficiency and marking speed on the production line. It can reach high speed up to 200 meters per minute (single-line 2MM-high numbers and letters) with high-yield application identification requirements, it mainly used in production date, anti-counterfeiting, medical and food packaging industries. This model supports functions such as automatic encoding, serial number, batch number, date, barcode, two-dimensional code, automatic number skipping, etc., to meet the needs of customers in different industries. HCO-F Fiber laser online marking machine is suitable for online marking of most metal materials and some non-metallic materials with surface treatment, such as metal products, PVC, HDPE, aluminum film, rubber and plastics. It is widely used in the production of personal care products, food and beverage packaging, wine, dairy products, electronic components, chemical building materials and other fields, and the expiration date, batch number, shift, manufacturer name and logo and other graphics and text markings.',
		features: [
			'Marking speed up to 200 meters per minute',
			'Reliable and durable fiber laser source',
			'Compact design and flexible configuration',
			'Flexible installation way, convenient installation position adjustment'
		],
		imageUrl: hfi_f,
		additionalImages: []
	},
	{
		id: 'hco-fc-co2-flying-laser-marking-machine-coherent-laser-source',
		categoryId: 'laser-marking-machines',
		subCategoryId: 'co2-laser-marker',
		name: 'HCO-FC CO2 Flying Laser Marking Machine (COHERENT Laser Sorurce)',
		description:
			'The HCO-FC laser marking machine is a high-speed continuous marking model designed to improve productivity. It uses COHENRENT industrial-grade metal RF CO2 laser tube. It has good optical modes and fast processing efficiency. The marking speed of the production line is up to 200m/min ( Single-line 2MM-high numbers and letters), it provides high-speed, high-yield application identification requirements, it mainly used in production date, anti-counterfeiting, medical and food packaging industries. This model supports functions such as automatic encoding, serial number, batch number, date, barcode, two-dimensional code, automatic number skipping, etc., to meet the needs of customers in different industries.',
		subDescription:
			'The HCO-FC laser marking machine is suitable for online marking of most non-metallic materials, such as paper packaging, film packaging, coated metal, plexiglass, resin plastic, bamboo and wooden products, PVC products, etc. It is widely used in food and beverage packaging, alcohol, dairy products, clothing accessories, leather, electronic components, medicine, personal care products, tobacco, chemical building materials,production and expiration date, batch number, shift, manufacturer name and logo, etc.',
		features: [
			'Marking speed up to 200 meters per minute',
			'Reliable and durable CO2 laser source',
			'Compact design and flexible configuration',
			'Flexible installation way, convenient installation position adjustment'
		],
		imageUrl: hco_fc,
		additionalImages: []
	},
	{
		id: 'hco-sc-co2-laser-marking-machine-coherent-laser-source',
		categoryId: 'laser-marking-machines',
		subCategoryId: 'co2-laser-marker',
		name: 'HCO-SC CO2 Laser Marking Machine (COHERENT Laser Source)',
		description:
			'The HCO-SC series CO2 laser marking machine of Helionyx is a gas laser machine, which produces a wavelength of 10.6um, which belongs to the mid-infrared frequency band. The CO2 laser machine has larger power and higher electro-optical conversion efficiency. At present, it is mainly used for marking most non-metallic materials.',
		subDescription:
			'HCO-SC CO2 series products are widely used in the marking and cutting of graphics and text in clothing accessories, leather bags, food and beverage packaging, wood furniture, electronic components, handicraft processing, electrical equipment, glass and stone processing and other fields. Such as bamboo and wood products, plastic products, glass ceramics, paper packaging, label paper, leather fabrics, resin plastics, PCB boards, etc.',
		features: [
			'Use high-quality',
			'High-quality laser source components',
			'Long-term running system',
			'Integrated overall design'
		],
		imageUrl: hco_sc,
		additionalImages: []
	},
	{
		id: 'hfi-h-model-hanheld-laser-marking-machine',
		categoryId: 'laser-marking-machines',
		subCategoryId: 'portable-laser-marker',
		name: 'HFI-H Model HandHeld Laser Marking Machine',
		description:
			'Discover the ultimate solution for your marking needs with the HFI-H20 Model Handheld Laser Marking Machine. Its fiber laser technology allows for unmatched precision and speed, while its compact design and user-friendly software make it easy to use and maintain.',
		features: [
			'Long battery life, 6-8 hours working time',
			'The weight of the whole machine is 6KG, light and portable',
			'Advanced fiber optic 20W laser',
			'Playing while charging, the device can be charged while working',
			'Unmatched Precision and Speed',
			'Versatile Marking Capabilities',
			'Easy to Use and Maintain'
		],
		imageUrl: hfi_h20_30a,
		additionalImages: [hfi_h20_30r, hfi_h20_30s]
	},
	{
		id: 'hcn-c80-cnc-laser-cutting-machine',
		categoryId: 'laser-cutting-machines',
		subCategoryId: 'laser-metal-cutting-machine',
		name: 'HCN-C80 CNC Laser Cutting Machine',
		description:
			'The HUV series integrated fiber laser marking machine is an intelligent model specially designed to improve production efficiency and stability, using independently developed lasers. It has higher security, stable performance, and fast processing efficiency. It meets the marking needs of high-speed and high-volume applications. It is mainly used in production date, anti-counterfeiting, and pharmaceutical and food packaging industries. This model supports daily laser marking, date, barcode, QR code and other functions to meet the needs of customers in different industries.',
		features: [
			'Fast and Accurate Laser Marking',
			'Versatile and Durable Machine',
			'Cost-Effective and Eco-Friendly Solution'
		],
		imageUrl: hcn_c80,
		additionalImages: []
	},
	{
		id: 'hcl-laser-cleaning-machine',
		categoryId: 'laser-cleaning-machines',
		subCategoryId: 'hcl-laser-cleaning-machine',
		name: 'HCL Laser Cleaning Machine',
		description:
			'The HCL Laser Cleaning Machine is a versatile and powerful tool that revolutionizes the cleaning process. With precision and speed, it removes rust, paint, and other surface contaminants while being eco-friendly and cost-effective.',
		features: [
			'Environmental friendly',
			'Easy to handle',
			'High cleaning precision',
			'System stability',
			'Say Goodbye to Traditional Cleaning Methods',
			'Power and Precision in One Machine',
			'Experience the Future of Cleaning Technology'
		],
		imageUrl: hcl,
		additionalImages: []
	},
	{
		id: 'hdo',
		categoryId: 'dot-marking-machines',
		subCategoryId: 'hdo-marking-machine',
		name: 'HDO',
		description:
			'Industrial pneumatic marking machine can realize the long-term marking of patterns, text, letters,VIN code, serial number, date and graphics on the workpiece.',
		features: [
			'High-pressure chain steel base',
			'Inlet filter pressure regulating valve',
			'Carbide needles',
			'Computer control and the new version of WINDOWS operating system',
			'Automatically save the marked content',
			'Support multiple types of fonts'
		],
		imageUrl: hdo_12,
		additionalImages: [hdo_23]
	}
]
