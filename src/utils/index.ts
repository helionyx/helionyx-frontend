export const formatEclipse = (str: string, limit = 100) => {
	return `${str.slice(0, limit)}...`
}
