import { Box } from '@chakra-ui/layout'
import React from 'react'

export type PaperProps = {
  children: React.ReactNode
}
export const Paper: React.FC<PaperProps> = ({ children }) => {
  return (
    <Box
      boxShadow="rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px"
      p={2}
    >
      {children}
    </Box>
  )
}
