import React from 'react'

import Grid from '@mui/material/Grid'

import SchoolCard from '../../../components/schoolCard/SchoolCard'
import { schoolBooks } from '../books'

const SecondForm: React.FC = (): React.ReactElement => {
  return (
    <Grid container spacing={2} component={'ul'} style={{ paddingLeft: 0, paddingTop: '30px' }}>
      {schoolBooks.map(book => (
        <Grid component={'li'} item xs={4} key={book.path}>
          <SchoolCard book={book} />
        </Grid>
      ))}
    </Grid>
  )
}

export default SecondForm
