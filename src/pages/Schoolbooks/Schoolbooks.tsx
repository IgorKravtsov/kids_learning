import React, { useMemo } from 'react'

import { Link, Outlet } from 'react-router-dom'

import Container from '@mui/material/Container'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'

import { MenuItem, subjects } from '../../subjects'
import { RouteNames } from '../../routes'

const Schoolbooks: React.FC = (): React.ReactElement => {
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  const booksMenuItems = useMemo(() => subjects.find(subject => subject.link === RouteNames.SCHOOL_BOOKS)?.items, [subjects])

  return (
    <Container>
      <Tabs value={value} onChange={handleChange} aria-label='math menu' /*className={styles.tabs}*/>
        {booksMenuItems &&
          booksMenuItems.map(({ name, icon, id, link }: MenuItem) => <Tab key={id} label={name} component={Link} to={link} icon={icon} />)}
      </Tabs>

      <Outlet />
    </Container>
  )
}

export default Schoolbooks
