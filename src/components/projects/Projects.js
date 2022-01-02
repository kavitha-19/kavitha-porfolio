import React, { useState, useEffect } from 'react'
import './Projects.css'
import { Fade } from 'react-reveal'
import ApolloClient, { gql } from 'apollo-boost'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import { featured_projects } from '../../data/featured_projects.json'
import Project from '../project/Project'
import Section from '../section/Section'
import FeaturedProject from '../featuredProject/FeaturedProject'

const useStyles = makeStyles((theme) => ({
  moreProjects: {
    '&': {
      margin: '20px auto',
      backgroundColor: '#39b175',
      boxShadow: 'none',
      '&:hover': {
        backgroundColor: '#0be779',
        boxShadow: 'none',
      },
    },
    '& > *': {
      color: 'white',
      padding: 4,
      fontSize: '15px',
      fontWeight: '600',
    },
  },
}))



// const Projects = () => {
//   const [githubProjects, setGithubProjects] = useState([])
//   const [loadProjectsError, setLoadProjectsError] = useState(null)

//   const classes = useStyles()

//   useEffect(() => {
//     getProjects()
//   }, [])

  // const getProjects = async () => {
  //   try {
  //     const queryResult = await client.query({
  //       query,
  //     })
  //     setGithubProjects(queryResult.data.user)
  //     setLoadProjectsError(false)
  //   } catch (error) {
  //     console.log(error)
  //     setLoadProjectsError(true)
  //   }
  // }

  
const Projects = () => {

return(
  <Section title={'Projects'}>
    {

featured_projects.map((data)=>{

  return( 
    <Project project={data} type={'github'} />
  )


})
    }
    
  </Section>
)



}

export default Projects
