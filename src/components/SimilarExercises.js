import React from 'react';
import { Box, Stack } from '@mui/material';

import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => (
  <Box sx={{ mt: { lg: '100px', xs: '0px' }, marginLeft:'2rem' ,paddingBottom:'2rem'}}>
    <div className='hero-text'>
      <div>
        <span className='stroke-text'>Similar</span>
        <span>Target Muscle exercises</span>
      </div>
    </div>
    <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
      {targetMuscleExercises.length !== 0 ? <HorizontalScrollbar data={targetMuscleExercises} /> : <Loader />}
    </Stack>
    <div className='hero-text'>
      <div>
        <span className='stroke-text'>Similar</span>
        <span>Equipment exercises</span>
      </div>
    </div>
    <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
      {equipmentExercises.length !== 0 ? <HorizontalScrollbar data={equipmentExercises} /> : <Loader />}
    </Stack>
  </Box>
);

export default SimilarExercises;
