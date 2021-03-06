import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import HeroSection from "../components/HeroSection"
import WorkSection from "../components/WorkSection"
import WritingSection from "../components/WritingSection"
import { graphql } from "gatsby"

const Home = ({ data }) => (
    <Layout>
      <SEO title="Design Portfolio" description="Product Design Portfolio and Blog" />
        <HeroSection data={data.hero.edges} />
        <WorkSection content={data.work.edges} projects={data.projects.edges} />
        <WritingSection content={data.writing.edges} articles={data.posts.edges} />
    </Layout>
)

export default Home

// GraphQL queries 

export const query = graphql`
  { 

    hero: allMdx (filter: { fileAbsolutePath: { regex: "/content/heroSection/" } })
    {
      edges {
        node {
          frontmatter {
            greeting
            name
            role
            location
          }
        }
      }
    }

    work: allMdx (filter: { fileAbsolutePath: { regex: "/content/workSection/" } })
    {
      edges {
        node {
          body
          frontmatter {
            title
          }
        }
      }
    }

    writing: allMdx (filter: { fileAbsolutePath: { regex: "/content/writingSection/" } })
    {
      edges {
        node {
          body
          frontmatter {
            title
          }
        }
      }
    }

    posts: allMdx (filter: { fileAbsolutePath: { regex: "/content/posts/" } }, sort: {order: DESC, fields: frontmatter___date})
      {
        edges {
          node {
            fields {
              slug
              }
            frontmatter {
              title
              company
              description
              link
              cardImage {
                publicURL
              }
            }
          }
        }
      }

      projects: allMdx (filter: { fileAbsolutePath: { regex: "/content/projects/" } }, sort: {order: DESC, fields: frontmatter___date})
      {
        edges {
          node {
            fields {
              slug
              }
            frontmatter {
              title
              company
              description
              cardImage {
                publicURL
              }
            }
          }
        }
      }

  }
`