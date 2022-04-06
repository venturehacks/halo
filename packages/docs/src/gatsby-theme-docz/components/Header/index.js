/** @jsx jsx */
import { useConfig, useCurrentDoc } from 'docz';
import * as styles from 'gatsby-theme-docz/src/components/Header/styles';
import {
  Edit,
  Github,
  Menu,
  Search,
  Sun,
} from 'gatsby-theme-docz/src/components/Icons';
import { Logo } from 'gatsby-theme-docz/src/components/Logo';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Button } from '~/components/core/Button';
import { FigmaOutlineIcon } from '~/components/icons/vendor-support';
//import Headroom from 'react-headroom';
import { Box, Flex, jsx, useColorMode } from 'theme-ui';
import SearchDrawer from '../Search';
import { Container, FixedHeader, InnerContainer } from './custom-styles';

export const Header = ({ onOpen }) => {
  const {
    repository,
    themeConfig: {
      showDarkModeSwitch,
      showMarkdownEditButton,
      search,
      header: { fixed, icons } = {},
    },
  } = useConfig();
  const { edit = true, figma, ...doc } = useCurrentDoc();
  const [colorMode, setColorMode] = useColorMode();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleColorMode = () => {
    setColorMode(colorMode === 'light' ? 'dark' : 'light');
  };

  const toggleSearch = (val) => {
    setDrawerOpen((prev) => (val !== undefined ? !!val : !prev));
  };

  const ui = (
    <Container sx={styles.wrapper} data-testid="header">
      <Box className="menu-icon" sx={styles.menuIcon}>
        <button sx={styles.menuButton} onClick={onOpen}>
          <Menu size={25} />
        </button>
      </Box>
      <InnerContainer sx={styles.innerContainer}>
        <Logo />
        <Flex sx={{ alignItems: 'center' }}>
          {repository && (
            <Box sx={{ mr: 2 }}>
              <a
                className={`${icons} icon`}
                href={repository}
                sx={styles.headerButton}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={15} />
              </a>
            </Box>
          )}
          {showDarkModeSwitch && (
            <Box sx={{ mr: 2 }}>
              <button
                className={`${icons} icon`}
                sx={styles.headerButton}
                onClick={toggleColorMode}
                aria-label={`Switch to ${colorMode} mode`}
              >
                <Sun size={15} />
              </button>
            </Box>
          )}
          {search && (
            <Box>
              <button
                className={`${icons} icon`}
                sx={styles.headerButton}
                onClick={toggleSearch}
                aria-label={`Search`}
              >
                <Search size={15} />
              </button>
              <SearchDrawer open={drawerOpen} toggleOpen={toggleSearch} />
            </Box>
          )}
          <Button
            className="ml-2"
            variant="gtm-secondary"
            href="https://github.com/venturehacks/halo/issues/new"
            target="_blank"
          >
            Report new issue
          </Button>
        </Flex>
        {showMarkdownEditButton && edit && doc.link && (
          <div className="absolute -bottom-12 right-8 flex flex-row items-center justify-end">
            <a
              className="h-o flex flex-row items-center justify-end"
              href={doc.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Edit width={14} />
              <Box sx={{ pl: 2 }}>Edit page</Box>
            </a>
            {figma && (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={figma}
                className="ml-6 flex flex-row items-center justify-center hover:no-underline"
              >
                <FigmaOutlineIcon className="w-9" />
                <span className="ml-1 inline-block ">Figma</span>
              </a>
            )}
          </div>
        )}
      </InnerContainer>
    </Container>
  );

  return fixed ? <FixedHeader>{ui}</FixedHeader> : ui;
};

Header.propTypes = {
  onOpen: PropTypes.func.isRequired,
};
