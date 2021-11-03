import { Box } from '@chakra-ui/layout'
import React from 'react'

export type PaperProps = {
  children: React.ReactNode
}
export const Paper: React.FC<PaperProps> = ({ children }) => {
  return (
    <Box p={2} border="1px" borderColor="gray.600" borderRadius={4}>
      {children}
    </Box>
  )
}
