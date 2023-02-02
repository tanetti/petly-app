import PropTypes from 'prop-types';
import { useState } from 'react';
import { Popover } from '@mui/material';
import {
  PopoverAnchor,
  PopoverContainer,
  PopoverItem,
} from './WorkTimeLayoutStyled';

export const WorkTimeLayout = ({ workDays }) => {
  const [anchorElement, setAnchorElement] = useState(null);

  const handlePopoverOpen = ({ currentTarget }) => {
    setAnchorElement(currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorElement(null);
  };

  const isPopupOpened = !!anchorElement;

  const currentDateString = new Date().toString().toLowerCase();

  const todayWorkData = workDays.find(workDay =>
    currentDateString.startsWith(workDay?.day?.toLowerCase())
  );

  return (
    <PopoverAnchor
      aria-owns={isPopupOpened ? 'popover' : undefined}
      aria-haspopup="true"
      onMouseEnter={handlePopoverOpen}
      onMouseLeave={handlePopoverClose}
    >
      {todayWorkData.isOpen
        ? `${todayWorkData.from} - ${todayWorkData.to}`
        : 'CLOSED TODAY'}

      <Popover
        id="popover"
        sx={{
          pointerEvents: 'none',
          backgroundColor: 'transparent',
        }}
        open={isPopupOpened}
        anchorEl={anchorElement}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        PaperProps={{
          sx: {
            backgroundColor: 'background.main',
            borderWidth: '1px',
            borderStyle: 'solid',
            borderRadius: '8px',
            borderColor: 'accent.main',
            boxShadow: 53,
          },
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <PopoverContainer>
          {workDays.map(workDay => {
            const isThisDay = !!currentDateString.startsWith(
              workDay?.day?.toLowerCase()
            );

            return (
              <>
                <PopoverItem isThisDay={isThisDay}>{workDay?.day}</PopoverItem>
                <PopoverItem isThisDay={isThisDay}>
                  {workDay?.isOpen
                    ? `${workDay?.from} - ${workDay?.to}`
                    : 'CLOSED'}
                </PopoverItem>
              </>
            );
          })}
        </PopoverContainer>
      </Popover>
    </PopoverAnchor>
  );
};

WorkTimeLayout.propTypes = {
  workDays: PropTypes.array.isRequired,
};
