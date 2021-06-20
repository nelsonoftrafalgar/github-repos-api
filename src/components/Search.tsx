import { breakpoints, mediaQueries } from 'styles/responsive'

import Col from 'styles/Col'
import Row from 'styles/Row'
import { dictionary } from 'dictionary'
import styled from 'styled-components'
import { useStore } from 'store/Store'
import { vars } from 'styles/vars'

const Wrapper = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;
`

const Input = styled.input`
	border-radius: 2px;
	border: 1px solid ${vars.input_grey};
	width: 200px;
	height: 30px;
	color: ${vars.secondary_font_color};
	box-shadow: ${vars.box_shadow};
	margin-right: 10px;
	padding-left: 5px;
	${mediaQueries.up(breakpoints.md)} {
		margin-right: 30px;
	}
`

const Select = styled.select`
	border-radius: 2px;
	border: 1px solid ${vars.input_grey};
	width: 200px;
	height: 30px;
	color: ${vars.secondary_font_color};
	box-shadow: ${vars.box_shadow};
	margin-right: 10px;
	${mediaQueries.up(breakpoints.md)} {
		margin-right: 30px;
	}
`

const Button = styled.button`
	background-color: ${vars.button_color};
	color: ${vars.light_font_color};
	padding: 7px;

	&:hover {
		cursor: pointer;
		opacity: 0.7;
	}
`

const Search = () => {
	const { search, setSearch, filter, setFilter, languages } = useStore()
	const selectValue = filter || dictionary.selectLanguage

	return (
		<Row>
			<Col md={6} mt={30}>
				<Wrapper>
					<Input
						type='text'
						placeholder={dictionary.search}
						value={search}
						onChange={(e) => setSearch(e.currentTarget.value)}
						data-testid='search-input'
					/>
					<Button data-testid='clear-search-button' onClick={() => setSearch('')}>
						{dictionary.clearSearch}
					</Button>
				</Wrapper>
			</Col>
			<Col md={6} mt={30}>
				<Wrapper>
					<Select
						data-testid='filter-select'
						value={selectValue}
						onChange={(e) => setFilter(e.currentTarget.value)}
					>
						<option aria-selected={false} value={selectValue} disabled={true}>
							{selectValue}
						</option>
						{languages.map((lang) => (
							<option aria-selected={false} value={lang} key={lang}>
								{lang}
							</option>
						))}
					</Select>
					<Button data-testid='clear-filter-button' onClick={() => setFilter('')}>
						{dictionary.clearFilters}
					</Button>
				</Wrapper>
			</Col>
		</Row>
	)
}

export default Search
