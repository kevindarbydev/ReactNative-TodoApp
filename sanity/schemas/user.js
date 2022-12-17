import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'user',
  title: 'User',
  type: 'document',
  fields: [
    defineField({
      name: 'email',
      type: 'string',
      title: 'Email',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'password',
      type: 'string',
      title: 'Password',
      validation: (Rule) => Rule.required().min(8).error('Must have at least 8 characters'),
    }),
  ],
})
