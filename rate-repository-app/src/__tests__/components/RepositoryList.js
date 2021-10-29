import React from 'react';
import { render } from '@testing-library/react-native';

import RepositoryListContainer from '../../components/RepositoryList/RepositoryListContainer';


describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    it('renders repository information correctly', () => {
      const repositories = {
        totalCount: 8,
        pageInfo: {
          hasNextPage: true,
          endCursor:
            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
        },
        edges: [
          {
            node: {
              id: 'jaredpalmer.formik',
              fullName: 'jaredpalmer/formik',
              description: 'Build forms in React, without the tears',
              language: 'TypeScript',
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars2.githubusercontent.com/u/4060187?v=4',
            },
            cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          {
            node: {
              id: 'async-library.react-async',
              fullName: 'async-library/react-async',
              description: 'Flexible promise-based React data loader',
              language: 'JavaScript',
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars1.githubusercontent.com/u/54310907?v=4',
            },
            cursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          },
        ],
      };
      // Add your test code here
      const { debug, getAllByTestId } = render(<RepositoryListContainer repositories={repositories} />);
      const avatar = getAllByTestId('itemAvatar');
      const name = getAllByTestId('itemName');
      const description = getAllByTestId('itemDescription');
      const language = getAllByTestId('itemLanguage');
      const footerValue = getAllByTestId('itemFooterValue');
      const footerName = getAllByTestId('itemFooterName');

      debug();

      // node 1
      expect(avatar[0]).toHaveProp('source', {'uri': 'https://avatars2.githubusercontent.com/u/4060187?v=4'})
      expect(name[0]).toHaveTextContent('jaredpalmer/formik');
      expect(description[0]).toHaveTextContent('Build forms in React, without the tears');
      expect(language[0]).toHaveTextContent('TypeScript');
      expect(footerName[0]).toHaveTextContent('Stars');
      expect(footerValue[0]).toHaveTextContent('21.9k');
      expect(footerName[1]).toHaveTextContent('Forks');
      expect(footerValue[1]).toHaveTextContent('1.6k');
      expect(footerName[2]).toHaveTextContent('Reviews');
      expect(footerValue[2]).toHaveTextContent('3');
      expect(footerName[3]).toHaveTextContent('Rating');
      expect(footerValue[3]).toHaveTextContent('88');
      
      //node 2
      expect(avatar[1]).toHaveProp('source', {'uri': 'https://avatars1.githubusercontent.com/u/54310907?v=4'})
      expect(name[1]).toHaveTextContent('async-library/react-async');
      expect(description[1]).toHaveTextContent('Flexible promise-based React data loader');
      expect(language[1]).toHaveTextContent('JavaScript');
      expect(footerName[4]).toHaveTextContent('Stars');
      expect(footerValue[4]).toHaveTextContent('1.8k');
      expect(footerName[5]).toHaveTextContent('Forks');
      expect(footerValue[5]).toHaveTextContent('69');
      expect(footerName[6]).toHaveTextContent('Reviews');
      expect(footerValue[6]).toHaveTextContent('3');
      expect(footerName[7]).toHaveTextContent('Rating');
      expect(footerValue[7]).toHaveTextContent('72');
    });
  });
});