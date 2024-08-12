import React from 'react'
import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious
} from '@/components/ui/pagination'

interface PaginationSectionProps {
	currentPage: number
	totalPages: number
	onPageChange: (page: number) => void
}

const PaginationSection: React.FC<PaginationSectionProps> = ({ currentPage, totalPages, onPageChange }) => {
	return (
		<div className='flex justify-end'>
			<Pagination>
				<PaginationContent>
					<PaginationItem>
						<PaginationPrevious
							href='#'
							onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
							className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
						/>
					</PaginationItem>
					{[...Array(totalPages)].map((_, index) => (
						<PaginationItem key={index}>
							<PaginationLink href='#' isActive={currentPage === index + 1} onClick={() => onPageChange(index + 1)}>
								{index + 1}
							</PaginationLink>
						</PaginationItem>
					))}
					<PaginationItem>
						<PaginationNext
							href='#'
							onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
							className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
						/>
					</PaginationItem>
				</PaginationContent>
			</Pagination>
		</div>
	)
}

export default PaginationSection
