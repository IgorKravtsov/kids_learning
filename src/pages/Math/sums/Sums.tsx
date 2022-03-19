import React, { useEffect, useState } from 'react'
import styles from './sums.module.scss'

import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'

import MenuButton from '../../../components/menuButton/MenuButton'
import { MathSums } from '../types/math.interface'
import { useSumsStyles } from './sums.styles'

import { createPlusExamples } from './utils/plus'
import { createMinusExamples } from './utils/minus'
import { createMultipleExamples } from './utils/multiple'
import { createDivideExamples } from './utils/divide'
import { LocalStorageKey } from '../../../localStorageKey'

const mathOperations = ['+', '-', '*', ':', 'все']
const mathOperations2Form = ['+', '-', 'все']
const exampleCount = 32

const Sums: React.FC = (): React.ReactElement => {
  const classes = useSumsStyles()
  const [sums, setSums] = useState<MathSums[]>([])

  const [currSumsType2Form, setCurrSumsType2Form] = useState('все')
  const [currSumsType4Form, setCurrSumsType4Form] = useState('все')

  const [depth2Form, setDepth2Form] = useState(2)
  const [depth4Form, setDepth4Form] = useState(2)

  const [nowFormDepth, setNowFormDepth] = useState<number>(0)
  const [isAnswersVisible, setIsAnswersVisible] = useState(false)
  const [nowForm, setNowForm] = useState(0)

  const createExamplesByType = (depth = 2, maxNumber = 99, type = '+'): MathSums => {
    console.log(type)

    switch (type) {
      case '+':
        return createPlusExamples(depth, maxNumber)

      case '-':
        return createMinusExamples(depth, maxNumber)

      case '*':
        return createMultipleExamples(depth, maxNumber)

      case ':':
        return createDivideExamples(depth, maxNumber)

      // case 'все':
      //   return createDivideExamples(depth, maxNumber)

      default:
        return '' as any
    }
  }

  const saveToLocalStorage = (sums: MathSums[], depth: number) => {
    localStorage.setItem(LocalStorageKey.SUMS, JSON.stringify(sums))
    localStorage.setItem(LocalStorageKey.DEPTH, depth.toString())
  }

  const createExamples = (depth = 2, maxNumber = 99, type = '+') => {
    if (depth < 2) depth = 2
    else if (depth > 10) depth = 10

    const res: MathSums[] = []
    let tmpType = type

    for (let i = 0; i < exampleCount; i++) {
      if (type === 'все') {
        const operationsLength = nowForm === 4 ? mathOperations.length : mathOperations2Form.length
        const rand = Math.floor(Math.random() * operationsLength - 1)
        console.log(`${i})` + rand)
        tmpType = mathOperations[rand]
      }
      res.push(createExamplesByType(depth, maxNumber, tmpType))
    }
    setSums(res)
  }

  const showAnswers = () => {
    if (!isAnswersVisible) {
      const answer = prompt('Введите пароль...', '123')
      if (answer === 'qwerty123') {
        setIsAnswersVisible(prevState => !prevState)
      } else {
        alert('МЕНЯ НЕ ОБМАНЕШЬ! 🤬')
      }
    } else {
      setIsAnswersVisible(false)
    }
  }

  const passed = () => {
    if (prompt('Вы уверены', 'Да')?.toLowerCase() === 'да') {
      localStorage.removeItem(LocalStorageKey.SUMS)
    }
  }

  useEffect(() => {
    const sumsFromLocalStorage = localStorage.getItem(LocalStorageKey.SUMS)
    const parsedSums: MathSums[] = sumsFromLocalStorage && JSON.parse(sumsFromLocalStorage)
    parsedSums && setSums(parsedSums)

    const depth = localStorage.getItem(LocalStorageKey.DEPTH)
    depth && setNowFormDepth(+depth)
  }, [])

  useEffect(() => {
    saveToLocalStorage(sums, nowFormDepth)
  }, [sums, nowFormDepth])

  return (
    <Container>
      <Grid container alignItems='center' className={styles.btn_container}>
        <Grid item xs={6}>
          <MenuButton
            onClick={() => {
              setNowFormDepth(depth2Form)
              createExamples(depth2Form, 50, currSumsType2Form)
              setNowForm(2)
              setIsAnswersVisible(false)
            }}
            options={mathOperations2Form}
            setCurrentOption={setCurrSumsType2Form}
          >
            Примеры 2 класс ({currSumsType2Form})
          </MenuButton>

          <Grid item xs={8} className={classes.depthLevel}>
            <TextField
              id='outlined-number'
              label='Кол-во чисел'
              type='number'
              InputProps={{ inputProps: { min: 2, max: 10 } }}
              InputLabelProps={{
                shrink: true,
              }}
              variant='standard'
              value={depth2Form}
              onChange={e => setDepth2Form(+e.target.value)}
              fullWidth
            />
          </Grid>
        </Grid>

        <Grid item xs={6}>
          <MenuButton
            onClick={() => {
              setNowFormDepth(depth4Form)
              createExamples(depth4Form, 999, currSumsType4Form)
              setNowForm(4)
              setIsAnswersVisible(false)
            }}
            options={mathOperations}
            setCurrentOption={setCurrSumsType4Form}
            className={classes.menuButton}
          >
            Примеры 4 класс ({currSumsType4Form})
          </MenuButton>

          <Grid item xs={8} className={classes.depthLevel}>
            <TextField
              id='outlined-number'
              label='Кол-во чисел'
              type='number'
              InputProps={{ inputProps: { min: 2, max: 10 } }}
              InputLabelProps={{
                shrink: true,
              }}
              variant='standard'
              value={depth4Form}
              onChange={e => setDepth4Form(+e.target.value)}
              fullWidth
            />
          </Grid>
        </Grid>

        <Grid container className={classes.sumsContainer}>
          {sums.map((sum, i) => (
            <Grid key={sum.example} item xs={(isAnswersVisible ? 5 : 3) + nowFormDepth}>
              <Typography key={sum.example} className={classes.sum}>
                {i + 1}) {sum.example}={isAnswersVisible && <span className={classes.answer}>{sum.answer}</span>}
              </Typography>
            </Grid>
          ))}
        </Grid>
        {sums.length > 0 && (
          <div style={{ marginLeft: 'auto', marginBottom: '15px' }}>
            <Button color='warning' variant='contained' onClick={showAnswers} className={classes.showAnswersBtn}>
              {isAnswersVisible ? 'Скрыть ответы' : 'Показать ответы'}
            </Button>
            <Button color='success' variant='contained' onClick={passed} style={{ marginLeft: '10px' }} className={classes.showAnswersBtn}>
              {'Пройдено'}
            </Button>
          </div>
        )}
      </Grid>
    </Container>
  )
}

export default Sums
