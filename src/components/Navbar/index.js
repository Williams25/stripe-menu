import { useContext } from 'react'

import { Container, DropdownStyles } from './styles'
import { DropdownOption, DropdownProvider } from '../Dropdown'
import { Developers, Company, Products } from '../Content'

const Navbar = props => {
  return (
    <DropdownProvider>
      <DropdownStyles>
        <Container>
          <ul>
            <li>
              <DropdownOption
                name="Produtos"
                content={() => <Products />}
              />
            </li>
            <li>
              <DropdownOption
                name="Desenvolvedores"
                content={() => <Developers />}
              />
            </li>
            <li>
              <DropdownOption
                name="Empresas"
                content={() => <Company />}
              />
            </li>
          </ul>
        </Container>
      </DropdownStyles>
    </DropdownProvider>
  )
}

export default Navbar;