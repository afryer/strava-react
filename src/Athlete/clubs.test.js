import React from 'react';
import Clubs from './Clubs';

const clubDetails = {
  key: 5454,
  id: 5454,
  name: 'Valley Striders',
  member_count: 500,
  profile: 'https://dgalywyr863hv.cloudfront.net/pictures/clubs/259344/5720278/1/large.jpg',
}

describe('renders as a list item', () => {

  test('renders correctly', () => {

    const listItem = (<Clubs
      key={clubDetails.id}
      id={clubDetails.id}
      name={clubDetails.name}
      member_count={clubDetails.member_count}
      profile={clubDetails.profile}
    />)

    expect(listItem.props.id).toEqual(5454)
  })

  test('string renders correctly', () => {

    const listItem = (<Clubs
       name={clubDetails.name}
    />)
    expect(listItem.props.name).toBe(clubDetails.name)
  })



})

