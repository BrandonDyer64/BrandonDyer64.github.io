import React, { Component } from 'react'

import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import DisplayCard from '../components/DisplayCard'
import projects from '../projects'

const projectCards = projects.map(project => {
  return <DisplayCard project={project} />
})

export default () => {
  return (
    <div
      style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
    >
      {projectCards}
    </div>
  )
}
