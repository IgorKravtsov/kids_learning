import React from 'react'
// import styles from './books.module.scss'

import Grid from '@mui/material/Grid'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'

import ArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

import math2Form from './img/math-2.jpg'
import SchoolCard from 'components/schoolCard/SchoolCard'
import { schoolBooks2Form, schoolBooks4Form } from '../../Schoolbooks/books'

const MathBooks: React.FC = (): React.ReactElement => {
  const mathBook2Form = schoolBooks2Form.find(book => book.name === 'Математика')
  const mathBook4Form = schoolBooks4Form.find(book => book.name === 'Математика')
  return (
    <Grid container spacing={2}>
      {mathBook2Form && (
        <Grid item xs={6}>
          <SchoolCard book={mathBook2Form} form={2} />
        </Grid>
      )}
      {mathBook4Form && (
        <Grid item xs={6}>
          <SchoolCard book={mathBook4Form} form={4} />
        </Grid>
      )}
    </Grid>
  )
}

export default MathBooks
