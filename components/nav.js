import React from 'react'
import { Flex, Link, Button, Icon} from '@chakra-ui/core'

const links = [
  { href: 'https://github.com/vercel/next.js', label: 'GitHub' },
  { href: 'https://nextjs.org/docs', label: 'Docs' },
]
const NavLink = ({ children, ...props }) => (
  <Link px={2} color="blue" {...props}>
    {children}
  </Link>
);

export default function Nav() {
  return (
    <Flex as="nav"
      px={2}
      py={3}
      zIndex="50"
      bg="gray.100"
      align="center"
      justify="between"
      position="sticky" 
      w="100%"
      top="0"
    >
      <Flex 
        px={4}
        mx="auto"
        align="center"
        justify="between"
      >
        <Flex
          w="100%"
          position="relative"
          justify="start"
        >
          <Link>
            <a href="">
              JesusLoves.jp
            </a>
          </Link>
          <Button>
            <Icon name="check-circle" size="24px" />
          </Button>
        </Flex>
        <Flex>

            
        </Flex>
      </Flex>
    </Flex>
  )
}