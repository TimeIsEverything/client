import React from 'react'
import PropTypes from 'prop-types'

import Center from '../styles/Center.js'
import Grid from '../styles/Grid.js'
import GridTitle from '../styles/GridTitle.js'
import Task from '../styles/Task.js'

const StartView = () =>
  <Center style={{minHeight: '100vh'}}>
    <Grid>
      <GridTitle>What is your next task?</GridTitle>
      <Task>Study</Task>
      <Task>Programming</Task>
      <Task>Eat</Task>
      <Task>Sleep</Task>
      <Task>Physical exercise</Task>
      <Task>Break</Task>
      <Task>Time management</Task>
    </Grid>
  </Center>

StartView.propTypes = {}

export default StartView
