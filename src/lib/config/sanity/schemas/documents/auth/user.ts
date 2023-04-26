import {Password, UserCircle, ClockCountdown} from '@phosphor-icons/react'
import {defineType} from 'sanity'

import {hasAccess} from '../../../lib/helpers/access'
import {getSwatch} from '../../../lib/helpers'
import bcrypt from 'bcryptjs'
import {greenScreen} from 'svelte-highlight/styles'

export default defineType({
  name: 'user',
  title: 'User',
  icon: UserCircle,
  type: 'document',
  groups: [
    {name: 'auth', title: 'Credentials', icon: Password, default: true},
    {name: 'data', title: 'Personal data', icon: UserCircle},
    {name: 'access', title: 'Access', icon: ClockCountdown}
  ],
  fields: [
    {
      name: 'email',
      title: 'E-Mail',
      type: 'string',
      group: 'auth',
      validation: (Rule) => Rule.regex(/.+@.+\..+/, {name: 'email'})
    },
    {
      name: 'password',
      title: 'Password Input',
      type: 'string',
      group: 'auth',
      description: 'This field has to remain empty for security reasons. It is used to generate the password hash.',
      validation: (Rule) => Rule.max(0)
    },
    {
      name: 'hash',
      title: 'Password Hash',
      type: 'slug',
      group: 'auth',
      // readOnly: true,
      validation: (Rule) => Rule.required(),
      options: {
        source: 'password',
        slugify: (input) => bcrypt.hash(input, 10)
      }
    },
    {
      name: 'roles',
      title: 'Roles',
      type: 'array',
      group: 'auth',
      of: [{type: 'reference', to: [{type: 'role'}]}]
    },
    {
      name: 'firstName',
      title: 'Firstname',
      type: 'string',
      group: 'data'
    },
    {
      name: 'lastName',
      title: 'Lastname',
      type: 'string',
      group: 'data'
    },
    {
      name: 'access',
      title: 'Access',
      type: 'visibility',
      group: 'access'
    }
  ],

  preview: {
    select: {
      title: 'email',
      startDate: 'access.publishedAt',
      endDate: 'access.unpublishedAt',
      hidden: 'access.isHidden'
    },
    prepare({title, hidden, startDate, endDate}) {
      return {
        title: title,
        media: hasAccess(startDate, endDate, hidden) ? getSwatch('#4CAF50') : getSwatch('#E53357')
      }
    }
  }
})
