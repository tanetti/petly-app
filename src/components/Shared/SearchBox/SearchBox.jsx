import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { delayedSetSearchParameter } from 'components/Shared/SearchBox/utilities/delayedSetSearchParameter';
import { STANDART_ANIMATION_VARIANT } from 'constants/animationVariants';
import {
  ClearButton,
  ClearIcon,
  SeachField,
  SearchContainer,
  SearchIcon,
} from './SearchBoxStyled';

export const SearchBox = () => {
  const [searchValue, setSearchValue] = useState('');
  const [isClearButtonSpinning, setIsClearButtonSpinning] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const onSearchInputChange = useCallback(
    ({ currentTarget }) => {
      setIsClearButtonSpinning(true);
      const currentValue = currentTarget.value;

      setSearchValue(currentValue);

      delayedSetSearchParameter(
        currentValue,
        setSearchParams,
        setIsClearButtonSpinning
      );
    },
    [setSearchParams]
  );

  const onEscapeKeyDown = useCallback(
    ({ key }) => {
      if (key !== 'Escape') return;

      onSearchInputChange({ currentTarget: { value: '' } });
    },
    [onSearchInputChange]
  );

  const onClearButtonClick = () =>
    onSearchInputChange({ currentTarget: { value: '' } });

  useEffect(() => {
    const searchParameterValue = searchParams.get('search');

    if (!searchParameterValue) return;

    setSearchValue(searchParameterValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (searchValue) document.addEventListener('keydown', onEscapeKeyDown);

    if (!searchValue) document.removeEventListener('keydown', onEscapeKeyDown);

    return () => document.removeEventListener('keydown', onEscapeKeyDown);
  }, [onEscapeKeyDown, searchValue]);

  return (
    <SearchContainer>
      <SeachField
        type="text"
        placeholder="Search"
        value={searchValue}
        onChange={onSearchInputChange}
      />
      <ClearButton
        type="button"
        title={searchValue ? 'Clear search field' : null}
        aria-label={searchValue ? 'Clear search field' : null}
        aria-hidden={searchValue ? false : true}
        disabled={searchValue ? false : true}
        loading={isClearButtonSpinning}
        onClick={onClearButtonClick}
      >
        <AnimatePresence mode="wait">
          {searchValue && !isClearButtonSpinning ? (
            <motion.div
              key="clearIcon"
              variants={STANDART_ANIMATION_VARIANT}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <ClearIcon />
            </motion.div>
          ) : null}

          {!searchValue && !isClearButtonSpinning && !isClearButtonSpinning ? (
            <motion.div
              key="searchIcon"
              variants={STANDART_ANIMATION_VARIANT}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <SearchIcon />
            </motion.div>
          ) : null}
        </AnimatePresence>
      </ClearButton>
    </SearchContainer>
  );
};
