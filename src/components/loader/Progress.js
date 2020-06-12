import { useNProgress } from '@tanem/react-nprogress';
import React from 'react';
import Bar from './Bar';
import Container from './Container';
import './loader.css';
import Spinner from './Spinner';

const Progress = ({ isAnimating }) => {
  const { animationDuration, isFinished, progress } = useNProgress({
    isAnimating,
  });

  return (
    <Container isFinished={isFinished} animationDuration={animationDuration}>
      <Bar progress={progress} animationDuration={animationDuration} />
      <Spinner />
    </Container>
  );
};

export default Progress;
