import React from 'react'
import { IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { useRecoilValueLoadable } from 'recoil'
import { tagsState } from './states'
import Link from 'next/link'

export const TagSearch: React.FC = () => {
  const tags = useRecoilValueLoadable(tagsState)

  switch (tags.state) {
    case 'hasValue':
      return (
        <>
          <Menu autoSelect={false}>
            <MenuButton
              as={IconButton}
              aria-label="タグ検索"
              variant="ghost"
              _active={{ backgroundColor: 'gray.800' }}
              _focus={{ backgroundColor: 'gray.800' }}
              _hover={{ backgroundColor: 'gray.700' }}
              icon={<SearchIcon />}
            ></MenuButton>
            <MenuList bgColor="gray.800" border="1px" borderColor="gray.600">
              {tags.contents.map((tag) => (
                <Link key={tag} href={`/?tag=${tag}`}>
                  <a>
                    <MenuItem>{tag}</MenuItem>
                  </a>
                </Link>
              ))}
            </MenuList>
          </Menu>
        </>
      )
    case 'loading':
      return null
    case 'hasError':
      throw tags.contents
  }
}
