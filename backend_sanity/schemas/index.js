// Then import schema types from any plugins that might expose them
import abouts from './abouts'
import brands from './brands'
import contact from './contact'
import experiences from './experiences'
import skills from './skills'
import testimonials from './testimonials'
import workExperience from './workExperience'
import works from './works'

// Then we give our schema to the builder and provide the result to Sanity
export const schemaTypes = [
  abouts,
  brands,
  contact,
  experiences,
  skills,
  testimonials,
  workExperience,
  works,
]
