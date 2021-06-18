export const breakpoints = {
	xs: '0px',
	sm: '576px',
	md: '768px',
	lg: '992px',
	xl: '1200px',
}

export const mediaQueries = {
	up: (breakpoint: string) => `@media screen and (min-width: ${breakpoint})`,
	down: (breakpoint: string) => `@media screen and (max-width: ${breakpoint})`,
}
