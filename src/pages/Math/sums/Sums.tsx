import React, { useEffect, useState } from 'react'

import styles from './sums.module.scss'
import Grid from '@mui/material/Grid'
import { createPlusExamples } from './utils/generateSums'
import { Typography } from '@mui/material'
import MenuButton from '../../../components/menuButton/MenuButton'

const buttonOptions = ['+', '-', 'x', ':']

const Sums: React.FC = (): React.ReactElement => {
  const [sums, setSums] = useState<string[]>([])
  const [currSumsType2Form, setCurrSumsType2Form] = useState('+')
  const [currSumsType4Form, setCurrSumsType4Form] = useState('+')

  const createExamples = (depth = 2, maxNumber = 99) => {
    const res: string[] = []
    for (let i = 0; i < 30; i++) {
      res.push(createPlusExamples(depth, maxNumber))
    }

    setSums(res)
  }

  return (
    <Grid container alignItems='center' className={styles.btn_container}>
      <MenuButton onClick={() => createExamples(2, 50)} options={buttonOptions} setCurrentOption={setCurrSumsType2Form}>
        Примеры 2 класс ({currSumsType2Form})
      </MenuButton>

      <MenuButton
        onClick={() => createExamples(2, 50)}
        options={buttonOptions}
        setCurrentOption={setCurrSumsType4Form}
        style={{ marginLeft: '10px' }}
      >
        Примеры 4 класс ({currSumsType4Form})
      </MenuButton>

      <div className={styles.sums_container}>
        {sums.map((example: string) => (
          <Typography>{example}</Typography>
        ))}
      </div>
    </Grid>
  )
}

export default Sums
