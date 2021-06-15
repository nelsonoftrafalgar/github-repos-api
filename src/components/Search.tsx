import { useEffect, useRef, useState } from 'react'

import { Container } from 'styles/shared'
import styled from 'styled-components'
import { useStore } from 'store/Store'
import { vars } from 'styles/vars'

const Wrapper = styled.div`
	margin-right: 30px;
`

const Input = styled('input')<{ withPadding?: boolean }>`
	border-radius: 2px;
	border: 1px solid ${vars.input_grey};
	width: 200px;
	height: 30px;
	color: #000;
	font-family: ${vars.basic_font};
	box-shadow: ${vars.box_shadow};

	${({ withPadding }) => withPadding && 'padding-left: 5px;'}
`

const Button = styled.button`
	background-color: ${vars.button_color};
	color: #fff;
	padding: 7px 10px;
	font-family: ${vars.basic_font};

	&:hover {
		cursor: pointer;
		opacity: 0.7;
	}
`

const Search = () => {
	const { getRepos, filter, setFilter, languages } = useStore()
	const [search, setSearch] = useState<string>('')
	const initialRender = useRef(true)

	useEffect(() => {
		if (!initialRender.current) getRepos({ variables: { search } })
		initialRender.current = false
	}, [search, getRepos])

	const selectValue = filter || 'Select language'

	return (
		<Container>
			<Wrapper>
				<Input
					withPadding={true}
					type='text'
					placeholder='Search'
					value={search}
					onChange={(e) => setSearch(e.currentTarget.value)}
				/>
			</Wrapper>
			<Wrapper>
				<Button onClick={() => setSearch('')}>Clear search</Button>
			</Wrapper>
			<Wrapper>
				<Input
					data-testid='filter-select'
					as='select'
					value={selectValue}
					onChange={(e: any) => setFilter(e.currentTarget.value)}
				>
					<option aria-selected={false} value={selectValue} disabled={true}>
						{selectValue}
					</option>
					{languages.map((lang) => (
						<option aria-selected={false} value={lang} key={lang}>
							{lang}
						</option>
					))}
				</Input>
			</Wrapper>
			<Wrapper>
				<Button onClick={() => setFilter('')}>Clear filters</Button>
			</Wrapper>
		</Container>
	)
}

export default Search
