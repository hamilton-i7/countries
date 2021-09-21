import styled from 'styled-components';
import Skeleton from './Skeleton';

export const StyledSkeleton = styled(Skeleton)`
  background-color: #ddd;
  border-radius: 0.5rem;
  overflow: hidden;
  position: relative;
`;

export const StyledSkeletonText = styled(StyledSkeleton)`
  height: 0.8rem;
  width: 35%;
`;

export const StyledSkeletonTitle = styled(StyledSkeleton)`
  height: 2.4rem;
  margin-bottom: 1.5rem;
  width: 50%;
`;

export const StyledSkeletonFlag = styled(StyledSkeleton)`
  height: 21.2rem;
  width: 100%;
`;

export const StyledSkeletonButton = styled(StyledSkeleton)`
  height: 2.8rem;
  width: 12.5rem;
`;
