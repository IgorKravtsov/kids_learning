import React, { useEffect, useState } from 'react'
import styles from './sums.module.scss'

import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import MenuButton from '../../../components/menuButton/MenuButton'
import { MathSums } from '../types/math.interface'
import { useSumsStyles } from './sums.styles'
import { createPlusExamples } from './utils/plus'
import { createMinusExamples } from './utils/minus'
import { createMultipleExamples } from './utils/multiple'
import { createDivideExamples } from './utils/divide'

const mathOperations = ['+', '-', '*', ':', 'все']
const mathOperations2Form = ['+', '-', 'все']

const Sums: React.FC = (): React.ReactElement => {
  const classes = useSumsStyles()
  const [sums, setSums] = useState<MathSums[]>([])

  const [currSumsType2Form, setCurrSumsType2Form] = useState('все')
  const [currSumsType4Form, setCurrSumsType4Form] = useState('все')

  const [depth2Form, setDepth2Form] = useState(2)
  const [depth4Form, setDepth4Form] = useState(2)

  const [nowFormDepth, setNowFormDepth] = useState<number>(0)
  const [isAnswersVisible, setIsAnswersVisible] = useState(false)

  const createExamples = (depth = 2, maxNumber = 99, type = '+') => {
    if (depth < 2) depth = 2

    const res: MathSums[] = []
    switch (type) {
      case '+':
        for (let i = 0; i < 32; i++) {
          res.push(createPlusExamples(depth, maxNumber))
        }
        break

      case '-':
        for (let i = 0; i < 32; i++) {
          res.push(createMinusExamples(depth, maxNumber))
        }
        break

      case '*':
        for (let i = 0; i < 32; i++) {
          res.push(createMultipleExamples(depth, maxNumber))
        }
        break

      case '/':
        for (let i = 0; i < 32; i++) {
          res.push(createDivideExamples(depth, maxNumber))
        }
        break

      default:
        break
    }

    setSums(res)
  }

  const showAnswers = () => {
    setIsAnswersVisible(prevState => !prevState)
  }

  return (
    <Grid container alignItems='center' className={styles.btn_container}>
      <Grid item xs={6}>
        <MenuButton
          onClick={() => {
            setNowFormDepth(depth2Form)
            createExamples(depth2Form, 50, currSumsType2Form)
          }}
          options={mathOperations2Form}
          setCurrentOption={setCurrSumsType2Form}
        >
          Примеры 2 класс ({currSumsType2Form})
        </MenuButton>

        <TextField
          id='outlined-number'
          label='Сложность'
          type='number'
          InputProps={{ inputProps: { min: 2, max: 10 } }}
          InputLabelProps={{
            shrink: true,
          }}
          variant='standard'
          value={depth2Form}
          onChange={e => setDepth2Form(+e.target.value)}
        />
      </Grid>

      <Grid item xs={6}>
        <MenuButton
          onClick={() => {
            setNowFormDepth(depth4Form)
            createExamples(depth4Form, 999, currSumsType4Form)
            console.log(sums)
          }}
          options={mathOperations}
          setCurrentOption={setCurrSumsType4Form}
          className={classes.menuButton}
        >
          Примеры 4 класс ({currSumsType4Form})
        </MenuButton>

        <TextField
          id='outlined-number'
          label='Сложность'
          type='number'
          InputProps={{ inputProps: { min: 2, max: 10 } }}
          InputLabelProps={{
            shrink: true,
          }}
          variant='standard'
          value={depth4Form}
          onChange={e => setDepth4Form(+e.target.value)}
        />
      </Grid>

      <Grid container className={classes.sumsContainer}>
        {sums.map((sum, i) => (
          <Grid key={sum.example} item xs={2 + nowFormDepth}>
            <Typography key={sum.example} className={classes.sum}>
              {i + 1}) {sum.example}={isAnswersVisible && <span style={{ color: 'green' }}>{sum.answer}</span>}
            </Typography>
          </Grid>
        ))}
      </Grid>
      {sums.length > 0 && (
        <Button variant='contained' color='secondary' onClick={showAnswers}>
          {isAnswersVisible ? 'Скрыть ответы' : 'Показать ответы'}
        </Button>
      )}
    </Grid>
  )
}

export default Sums
