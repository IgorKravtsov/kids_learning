import React, { useState } from 'react'
import styles from './sums.module.scss'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import { createPlusExamples } from './utils/generateSums'
import { Typography } from '@mui/material'

const Sums: React.FC = (): React.ReactElement => {
  const [sums, setSums] = useState<string[]>([])

  const createExamples = (depth = 2, maxNumber = 99) => {
    const res: string[] = []
    for (let i = 0; i < 30; i++) {
      res.push(createPlusExamples(depth, maxNumber))
    }

    setSums(res)
  }

  return (
    <Grid container alignItems='center' className={styles.btn_container}>
      <Button variant='contained' onClick={() => createExamples(2, 50)}>
        примеры 2 класс
      </Button>
      <Button variant='contained' onClick={() => createExamples(2, 1000)} style={{ marginLeft: '10px' }}>
        примеры 4 класс
      </Button>
      <div className={styles.sums_container}>
        {sums.map((example: string) => (
          <Typography>{example}</Typography>
        ))}
      </div>
    </Grid>
  )
}

export default Sums
