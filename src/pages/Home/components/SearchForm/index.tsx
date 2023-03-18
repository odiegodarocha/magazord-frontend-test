import { MagnifyingGlass } from 'phosphor-react'
import {
  CheckboxBlock,
  CheckboxLabel,
  CheckboxRoot,
  DropdownMenuContent,
  DropdownMenuTrigger,
  MenuBlock,
  SearchFormContainer,
} from './styles'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'

export function SearchForm() {
  return (
    <SearchFormContainer>
      <MenuBlock>
        <DropdownMenu.Root>
          <DropdownMenuTrigger>Type</DropdownMenuTrigger>
          <DropdownMenu.Portal>
            <DropdownMenuContent>
              <CheckboxBlock>
                <CheckboxRoot id="type1">
                  <Checkbox.Indicator>
                    <CheckIcon />
                  </Checkbox.Indicator>
                </CheckboxRoot>
                <CheckboxLabel htmlFor="type1">All</CheckboxLabel>
              </CheckboxBlock>
              <CheckboxBlock>
                <CheckboxRoot id="type2">
                  <Checkbox.Indicator>
                    <CheckIcon />
                  </Checkbox.Indicator>
                </CheckboxRoot>
                <CheckboxLabel htmlFor="type2">Sources</CheckboxLabel>
              </CheckboxBlock>
              <CheckboxBlock>
                <CheckboxRoot id="type3">
                  <Checkbox.Indicator>
                    <CheckIcon />
                  </Checkbox.Indicator>
                </CheckboxRoot>
                <CheckboxLabel htmlFor="type3">Forks</CheckboxLabel>
              </CheckboxBlock>
              <CheckboxBlock>
                <CheckboxRoot id="type4">
                  <Checkbox.Indicator>
                    <CheckIcon />
                  </Checkbox.Indicator>
                </CheckboxRoot>
                <CheckboxLabel htmlFor="type4">Archived</CheckboxLabel>
              </CheckboxBlock>
              <CheckboxBlock>
                <CheckboxRoot id="type5">
                  <Checkbox.Indicator>
                    <CheckIcon />
                  </Checkbox.Indicator>
                </CheckboxRoot>
                <CheckboxLabel htmlFor="type5">Mirrors</CheckboxLabel>
              </CheckboxBlock>
            </DropdownMenuContent>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>

        <DropdownMenu.Root>
          <DropdownMenuTrigger>Language</DropdownMenuTrigger>
          <DropdownMenu.Portal>
            <DropdownMenuContent>
              <CheckboxBlock>
                <CheckboxRoot id="language1">
                  <Checkbox.Indicator>
                    <CheckIcon />
                  </Checkbox.Indicator>
                </CheckboxRoot>
                <CheckboxLabel htmlFor="language1">All</CheckboxLabel>
              </CheckboxBlock>
              <CheckboxBlock>
                <CheckboxRoot id="language2">
                  <Checkbox.Indicator>
                    <CheckIcon />
                  </Checkbox.Indicator>
                </CheckboxRoot>
                <CheckboxLabel htmlFor="language2">Java</CheckboxLabel>
              </CheckboxBlock>
              <CheckboxBlock>
                <CheckboxRoot id="language3">
                  <Checkbox.Indicator>
                    <CheckIcon />
                  </Checkbox.Indicator>
                </CheckboxRoot>
                <CheckboxLabel htmlFor="language3">Typescript</CheckboxLabel>
              </CheckboxBlock>
              <CheckboxBlock>
                <CheckboxRoot id="language4">
                  <Checkbox.Indicator>
                    <CheckIcon />
                  </Checkbox.Indicator>
                </CheckboxRoot>
                <CheckboxLabel htmlFor="language4">HTML</CheckboxLabel>
              </CheckboxBlock>
              <CheckboxBlock>
                <CheckboxRoot id="language5">
                  <Checkbox.Indicator>
                    <CheckIcon />
                  </Checkbox.Indicator>
                </CheckboxRoot>
                <CheckboxLabel htmlFor="language5">CSS</CheckboxLabel>
              </CheckboxBlock>
            </DropdownMenuContent>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </MenuBlock>

      <input type="text" placeholder="Search Here" />
      <MagnifyingGlass size={26} />
    </SearchFormContainer>
  )
}
