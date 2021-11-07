import React, { ComponentProps } from 'react'

import { Story, Meta } from '@storybook/react'

import { ArticleCard } from './ArticleCard'

export default {
  title: 'domain/article/ArticleCard',
  component: ArticleCard,
} as Meta

const Template: Story<ComponentProps<typeof ArticleCard>> = (args) => <ArticleCard {...args} />

export const FirstStory = Template.bind({})
FirstStory.args = {
  id: 'id',
  title: 'title',
  createdAt: new Date('2021-10-10'),
}
