import { GearSix } from 'phosphor-react'
import { defineType } from 'sanity';

export default defineType({
	name: 'settings',
	title: 'Settings',
	type: 'document',
	icon: GearSix,
	fields: [
		{
			name: 'title',
			description: 'This field is the title of your blog.',
			title: 'Title',
			type: 'string',
			initialValue: 'Blog.',
			validation: (rule) => rule.required(),
		},
	],
});
