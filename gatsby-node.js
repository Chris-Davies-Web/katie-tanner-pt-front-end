/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"
const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
// Will create pages for WordPress pages (route : /{slug})
// Will create pages for WordPress posts (route : /post/{slug})
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    // The “graphql” function allows us to run arbitrary
    // queries against the local WordPress graphql schema. Think of
    // it like the site has a built-in database constructed
    // from the fetched data that you can run queries against.

    // ==== PAGES (WORDPRESS NATIVE) ====
    graphql(
      `
        {
          allWordpressPage {
            edges {
              node {
                id
                slug
                status
                template
                title
                content
                template
                featured_media {
                  source_url
                }
              }
            }
          }
        }
      `
    )
      .then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        // Create Page pages.
        const pageTemplate = path.resolve("./src/templates/page.js")
        // We want to create a detailed page for each
        // page node. We'll just use the WordPress Slug for the slug.
        // The Page ID is prefixed with 'PAGE_'
        _.each(result.data.allWordpressPage.edges, edge => {
          // Gatsby uses Redux to manage its internal state.
          // Plugins and sites can use functions like "createPage"
          // to interact with Gatsby.

          createPage({
            // Each page is required to have a `path` as well
            // as a template component. The `context` is
            // optional but is often necessary so the template
            // can query data specific to each page.
            path: `/${edge.node.slug}/`,
            component: slash(pageTemplate),
            context: edge.node,
          })
        })
        resolve()
      })
      // ==== END PAGES ====

      // ==== POSTS (WORDPRESS NATIVE AND ACF) ====
      .then(() => {
        graphql(
          `
            {
              allWordpressPost {
                edges {
                  node {
                    id
                    title
                    slug
                    excerpt
                    content
                  }
                }
              }
            }
          `
        ).then(result => {
          if (result.errors) {
            console.log(result.errors)
            reject(result.errors)
          }
          const postTemplate = path.resolve("./src/templates/post.js")
          // We want to create a detailed page for each
          // post node. We'll just use the WordPress Slug for the slug.
          // The Post ID is prefixed with 'POST_'
          _.each(result.data.allWordpressPost.edges, edge => {
            createPage({
              path: `/post/${edge.node.slug}/`,
              component: slash(postTemplate),
              context: edge.node,
            })
          })
          resolve()
        })
      })
      // ==== END POSTS ====
      // ==== WORKOUTS AND NUTRITION LIST ====
      .then(() => {
        graphql(
          `
            {
              allWordpressWpWorkout {
                edges {
                  node {
                    id
                    title
                    excerpt
                    path
                    featured_media {
                      alt_text
                      source_url
                    }
                  }
                }
              }
              allWordpressWpNutrition {
                edges {
                  node {
                    id
                    title
                    excerpt
                    path
                    featured_media {
                      alt_text
                      source_url
                    }
                  }
                }
              }
              allWordpressWpTestimonial {
                edges {
                  node {
                    id
                    title
                    excerpt
                    path
                    acf {
                      client_name
                      general_image {
                        alt_text
                        source_url
                      }
                      before_image {
                        alt_text
                        source_url
                      }
                      testimonial_quote
                      after_image {
                        alt_text
                        source_url
                      }
                    }
                  }
                }
              }
            }
          `
        ).then(result => {
          if (result.errors) {
            console.log(result.errors)
            reject(result.errors)
          }
          const workoutListTemplate = path.resolve(
            "./src/templates/workoutList.js"
          )
          const nutritionListTemplate = path.resolve(
            "./src/templates/nutritionList.js"
          )
          const testimonialListTemplate = path.resolve(
            "./src/templates/testimonialList.js"
          )
          // We want to create a detailed page for each
          // post node. We'll just use the WordPress Slug for the slug.
          // The Post ID is prefixed with 'POST_'
          //   _.each(result.data.allWordpressWpWorkout.edges, edge => {
          const postsPerPage = 5
          const numberOfWorkoutPages = Math.ceil(
            result.data.allWordpressWpWorkout.edges.length / postsPerPage
          )
          const numberOfNutritionPages = Math.ceil(
            result.data.allWordpressWpNutrition.edges.length / postsPerPage
          )
          const numberOfTestimonialPages = Math.ceil(
            result.data.allWordpressWpTestimonial.edges.length / postsPerPage
          )

          // Setup Pagination for workouts
          Array.from({
            length: numberOfWorkoutPages,
          }).forEach((page, index) => {
            createPage({
              path: index === 0 ? `/workouts/` : `/workouts/${index + 1}`,
              component: slash(workoutListTemplate),
              context: {
                posts: result.data.allWordpressWpWorkout.edges.slice(
                  index * postsPerPage,
                  index * postsPerPage + postsPerPage
                ),
                numberOfPages: numberOfWorkoutPages,
                currentPage: index + 1,
              },
            })
          })

          // Setup Pagination for nutrition
          Array.from({ length: numberOfNutritionPages }).forEach(
            (page, index) => {
              createPage({
                path: index === 0 ? `/nutrition/` : `/nutrition/${index + 1}`,
                component: slash(nutritionListTemplate),
                context: {
                  posts: result.data.allWordpressWpNutrition.edges.slice(
                    index * postsPerPage,
                    index * postsPerPage + postsPerPage
                  ),
                  numberOfPages: numberOfNutritionPages,
                  currentPage: index + 1,
                },
              })
            }
          )

          // Setup Pagination for testimonials
          Array.from({ length: numberOfTestimonialPages }).forEach(
            (page, index) => {
              createPage({
                path:
                  index === 0 ? `/testimonials/` : `/testimonials/${index + 1}`,
                component: slash(testimonialListTemplate),
                context: {
                  posts: result.data.allWordpressWpTestimonial.edges.slice(
                    index * postsPerPage,
                    index * postsPerPage + postsPerPage
                  ),
                  numberOfPages: numberOfTestimonialPages,
                  currentPage: index + 1,
                },
              })
            }
          )

          resolve()
        })
      })
      // ==== END WORKOUTS LIST ====

      // ==== WORKOUTS (WORDPRESS NATIVE AND ACF) ====
      .then(() => {
        graphql(
          `
            {
              allWordpressWpWorkout {
                edges {
                  node {
                    id
                    title
                    content
                    slug
                    featured_media {
                      source_url
                    }
                  }
                }
              }
            }
          `
        ).then(result => {
          if (result.errors) {
            console.log(result.errors)
            reject(result.errors)
          }
          const workoutTemplate = path.resolve("./src/templates/workout.js")
          // We want to create a detailed page for each
          // post node. We'll just use the WordPress Slug for the slug.
          // The Post ID is prefixed with 'POST_'
          _.each(result.data.allWordpressWpWorkout.edges, edge => {
            createPage({
              path: `/workout/${edge.node.slug}/`,
              component: slash(workoutTemplate),
              context: edge.node,
            })
          })
          resolve()
        })
      })
      // ==== END WORKOUTS ====

      // ==== NUTRITION (WORDPRESS NATIVE AND ACF) ====
      .then(() => {
        graphql(
          `
            {
              allWordpressWpNutrition {
                edges {
                  node {
                    id
                    title
                    content
                    slug
                    featured_media {
                      source_url
                    }
                  }
                }
              }
            }
          `
        ).then(result => {
          if (result.errors) {
            console.log(result.errors)
            reject(result.errors)
          }
          const nutritionTemplate = path.resolve("./src/templates/nutrition.js")
          // We want to create a detailed page for each
          // post node. We'll just use the WordPress Slug for the slug.
          // The Post ID is prefixed with 'POST_'
          _.each(result.data.allWordpressWpNutrition.edges, edge => {
            createPage({
              path: `/nutrition/${edge.node.slug}/`,
              component: slash(nutritionTemplate),
              context: edge.node,
            })
          })
          resolve()
        })
      })
    // ==== END WORKOUTS ====
  })
}
