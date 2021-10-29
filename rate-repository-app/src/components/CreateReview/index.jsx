import React from 'react';
import { useHistory } from 'react-router';

import useCreateReview from '../../hooks/useCreateReview';
import CreateReviewContainer from './CreateReviewContainer';


const CreateReview = () => {
  const [createReview] = useCreateReview();
  const history = useHistory();

  const onSubmit = async (values) => {
    const { ownerName, repositoryName, rating, text } = values;

    try {
      const data = await createReview({ repositoryName, ownerName, rating, text });
      history.push(`/${data}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CreateReviewContainer onSubmit={onSubmit} />
  );
}


export default CreateReview;