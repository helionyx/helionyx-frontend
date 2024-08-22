import { Product } from '@/types'

import huv_fw_img from '@/assets/laser-marking-machines/uv-laser-marker/HUV-FW.png'
import huv_mw_img from '@/assets/laser-marking-machines/uv-laser-marker/HUV-MW.png'
import huv_sw_img from '@/assets/laser-marking-machines/uv-laser-marker/HUV-SW.png'
import huv_img from '@/assets/laser-marking-machines/uv-laser-marker/HUV.png'

import hfi_f from '@/assets/laser-marking-machines/fiber-laser-marker/HFI-F.png'
import hfi_m from '@/assets/laser-marking-machines/fiber-laser-marker/HFI-M.png'
import hfi_mn from '@/assets/laser-marking-machines/fiber-laser-marker/HFI-MN.png'
import hfi_s from '@/assets/laser-marking-machines/fiber-laser-marker/HFI-S.png'

import hco_fc from '@/assets/laser-marking-machines/co2-laser-marker/HCO-FC.png'
import hco_sc from '@/assets/laser-marking-machines/co2-laser-marker/HCO-SC.png'

import hfi_h20_30a from '@/assets/laser-marking-machines/portable-laser-marker/HFI_H20_30A.png'
import hfi_h20_30r from '@/assets/laser-marking-machines/portable-laser-marker/HFI_H20_30R.png'
import hfi_h20_30s from '@/assets/laser-marking-machines/portable-laser-marker/HFI_H20_30S.png'

import hcn_c80 from '@/assets/laser-cutting-machines/HCN-C80.png'

import hcl from '@/assets/laser-cleaning-machines/HCL.png'

import hdo_12 from '@/assets/laser-marking-machines/dot-marking/HDO-12.png'
import hdo_23 from '@/assets/laser-marking-machines/dot-marking/HDO-23.png'

export const products: Product[] = [
	{
		id: 'huv-integrated-fiber-laser-marking-machine',
		categoryId: 'laser-marking-machines',
		subCategoryId: 'uv-laser-marker',
		nameKey: 'products.huv-integrated-fiber-laser-marking-machine.name',
		descriptionKey: 'products.huv-integrated-fiber-laser-marking-machine.description',
		subDescriptionKey: 'products.huv-integrated-fiber-laser-marking-machine.subDescription',
		featuresKey: 'products.huv-integrated-fiber-laser-marking-machine.features',
		imageUrl: huv_img,
		additionalImages: []
	},
	{
		id: 'huv-sw-machine-crs-laser-source',
		categoryId: 'laser-marking-machines',
		subCategoryId: 'uv-laser-marker',
		nameKey: 'products.huv-sw-machine-crs-laser-source.name',
		descriptionKey: 'products.huv-sw-machine-crs-laser-source.description',
		subDescriptionKey: 'products.huv-sw-machine-crs-laser-source.subDescription',
		featuresKey: 'products.huv-sw-machine-crs-laser-source.features',
		imageUrl: huv_sw_img,
		additionalImages: []
	},
	{
		id: 'huv-mw-portable-uv-laser-marking-machine',
		categoryId: 'laser-marking-machines',
		subCategoryId: 'uv-laser-marker',
		nameKey: 'products.huv-mw-portable-uv-laser-marking-machine.name',
		descriptionKey: 'products.huv-mw-portable-uv-laser-marking-machine.description',
		featuresKey: 'products.huv-mw-portable-uv-laser-marking-machine.features',
		imageUrl: huv_mw_img,
		additionalImages: []
	},
	{
		id: 'huv-fw-uv-flying-laser-marking-machine-jpt-laser-source',
		categoryId: 'laser-marking-machines',
		subCategoryId: 'uv-laser-marker',
		nameKey: 'products.huv-fw-uv-flying-laser-marking-machine-jpt-laser-source.name',
		descriptionKey: 'products.huv-fw-uv-flying-laser-marking-machine-jpt-laser-source.description',
		subDescriptionKey: 'products.huv-fw-uv-flying-laser-marking-machine-jpt-laser-source.subDescription',
		featuresKey: 'products.huv-fw-uv-flying-laser-marking-machine-jpt-laser-source.features',
		imageUrl: huv_fw_img,
		additionalImages: []
	},
	{
		id: 'hfi-m-fiber-laser-marker',
		categoryId: 'laser-marking-machines',
		subCategoryId: 'fiber-laser-marker',
		nameKey: 'products.hfi-m-fiber-laser-marker.name',
		descriptionKey: 'products.hfi-m-fiber-laser-marker.description',
		featuresKey: 'products.hfi-m-fiber-laser-marker.features',
		imageUrl: hfi_m,
		additionalImages: []
	},
	{
		id: 'hfi-mn-portable-mini-fiber-laser-marking-machine',
		categoryId: 'laser-marking-machines',
		subCategoryId: 'fiber-laser-marker',
		nameKey: 'products.hfi-mn-portable-mini-fiber-laser-marking-machine.name',
		descriptionKey: 'products.hfi-mn-portable-mini-fiber-laser-marking-machine.description',
		featuresKey: 'products.hfi-mn-portable-mini-fiber-laser-marking-machine.features',
		imageUrl: hfi_mn,
		additionalImages: []
	},
	{
		id: 'hfi-s-pulse-fiber-laser-marking-machine-jpt-laser-source',
		categoryId: 'laser-marking-machines',
		subCategoryId: 'fiber-laser-marker',
		nameKey: 'products.hfi-s-pulse-fiber-laser-marking-machine-jpt-laser-source.name',
		descriptionKey: 'products.hfi-s-pulse-fiber-laser-marking-machine-jpt-laser-source.description',
		featuresKey: 'products.hfi-s-pulse-fiber-laser-marking-machine-jpt-laser-source.features',
		imageUrl: hfi_s,
		additionalImages: []
	},
	{
		id: 'hfi-f-fiber-flying-laser-marking-machine-jpt-laser-source',
		categoryId: 'laser-marking-machines',
		subCategoryId: 'fiber-laser-marker',
		nameKey: 'products.hfi-f-fiber-flying-laser-marking-machine-jpt-laser-source.name',
		descriptionKey: 'products.hfi-f-fiber-flying-laser-marking-machine-jpt-laser-source.description',
		featuresKey: 'products.hfi-f-fiber-flying-laser-marking-machine-jpt-laser-source.features',
		imageUrl: hfi_f,
		additionalImages: []
	},
	{
		id: 'hco-fc-co2-flying-laser-marking-machine-coherent-laser-source',
		categoryId: 'laser-marking-machines',
		subCategoryId: 'co2-laser-marker',
		nameKey: 'products.hco-fc-co2-flying-laser-marking-machine-coherent-laser-source.name',
		descriptionKey: 'products.hco-fc-co2-flying-laser-marking-machine-coherent-laser-source.description',
		subDescriptionKey: 'products.hco-fc-co2-flying-laser-marking-machine-coherent-laser-source.subDescription',
		featuresKey: 'products.hco-fc-co2-flying-laser-marking-machine-coherent-laser-source.features',
		imageUrl: hco_fc,
		additionalImages: []
	},
	{
		id: 'hco-sc-co2-laser-marking-machine-coherent-laser-source',
		categoryId: 'laser-marking-machines',
		subCategoryId: 'co2-laser-marker',
		nameKey: 'products.hco-sc-co2-laser-marking-machine-coherent-laser-source.name',
		descriptionKey: 'products.hco-sc-co2-laser-marking-machine-coherent-laser-source.description',
		subDescriptionKey: 'products.hco-sc-co2-laser-marking-machine-coherent-laser-source.subDescription',
		featuresKey: 'products.hco-sc-co2-laser-marking-machine-coherent-laser-source.features',
		imageUrl: hco_sc,
		additionalImages: []
	},
	{
		id: 'hfi-h-model-hanheld-laser-marking-machine',
		categoryId: 'laser-marking-machines',
		subCategoryId: 'portable-laser-marker',
		nameKey: 'products.hfi-h-model-hanheld-laser-marking-machine.name',
		descriptionKey: 'products.hfi-h-model-hanheld-laser-marking-machine.description',
		featuresKey: 'products.hfi-h-model-hanheld-laser-marking-machine.features',
		imageUrl: hfi_h20_30a,
		additionalImages: [hfi_h20_30r, hfi_h20_30s]
	},
	{
		id: 'hcn-c80-cnc-laser-cutting-machine',
		categoryId: 'laser-cutting-machines',
		subCategoryId: 'laser-metal-cutting-machine',
		nameKey: 'products.hcn-c80-cnc-laser-cutting-machine.name',
		descriptionKey: 'products.hcn-c80-cnc-laser-cutting-machine.description',
		featuresKey: 'products.hcn-c80-cnc-laser-cutting-machine.features',
		imageUrl: hcn_c80,
		additionalImages: []
	},
	{
		id: 'hcl-laser-cleaning-machine',
		categoryId: 'laser-cleaning-machines',
		subCategoryId: 'hcl-laser-cleaning-machine',
		nameKey: 'products.hcl-laser-cleaning-machine.name',
		descriptionKey: 'products.hcl-laser-cleaning-machine.description',
		featuresKey: 'products.hcl-laser-cleaning-machine.features',
		imageUrl: hcl,
		additionalImages: []
	},
	{
		id: 'hdo',
		categoryId: 'dot-marking-machines',
		subCategoryId: 'hdo-marking-machine',
		nameKey: 'products.hdo.name',
		descriptionKey: 'products.hdo.description',
		featuresKey: 'products.hdo.features',
		imageUrl: hdo_12,
		additionalImages: [hdo_23]
	}
]
