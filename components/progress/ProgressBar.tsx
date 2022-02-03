import { useNProgress } from "@tanem/react-nprogress";

import { Bar } from "./Bar";
import { Container } from "./Container";

export const ProgressBar = ({ isAnimating }: any) => {
  const { animationDuration, isFinished, progress } = useNProgress({
    isAnimating,
  });

  return (
    <Container animationDuration={animationDuration} isFinished={isFinished}>
      <Bar animationDuration={animationDuration} progress={progress}></Bar>
    </Container>
  );
};
