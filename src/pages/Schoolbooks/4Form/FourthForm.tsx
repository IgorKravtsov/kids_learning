import React from 'react'

import Grid from '@mui/material/Grid'

import SchoolCard from 'components/schoolCard/SchoolCard'
import { getWindowDimensions } from 'util/hooks'
import { schoolBooks4Form } from '../books'
import { getXsGrid } from '../common'

const FourthForm: React.FC = (): React.ReactElement => {
  const { screenWidth } = getWindowDimensions()

  return (
    <Grid container spacing={2} component={'ul'} style={{ paddingLeft: 0, paddingTop: '30px' }}>
      {schoolBooks4Form.map(book => (
        <Grid component={'li'} item xs={getXsGrid(screenWidth)} key={book.path}>
          <SchoolCard form={4} book={book} />
        </Grid>
      ))}
    </Grid>
  )
}

export default FourthForm
